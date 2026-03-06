class CoinMiner {
    constructor() {
        this.ws = null;
        this.minerId = null;
        this.isMining = false;
        this.lastBlock = null;
        this.difficulty = 4;
        this.myCoins = 0;
        this.myBlocks = 0;
        this.nonce = 0;
        this.hashCount = 0;
        this.lastHashTime = Date.now();
        this.miningWorker = null;

        this.init();
    }

    init() {
        this.connectWebSocket();
        this.setupUI();
        this.addLog('시스템 초기화 완료', 'info');
    }

    connectWebSocket() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        this.ws = new WebSocket(`${protocol}//${window.location.host}`);

        this.ws.onopen = () => {
            this.addLog('서버에 연결됨', 'success');
        };

        this.ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.handleMessage(data);
        };

        this.ws.onclose = () => {
            this.addLog('서버 연결 끊김. 재연결 시도...', 'warning');
            setTimeout(() => this.connectWebSocket(), 3000);
        };

        this.ws.onerror = (error) => {
            this.addLog('연결 오류 발생', 'warning');
        };
    }

    handleMessage(data) {
        switch (data.type) {
            case 'init':
                this.minerId = data.minerId;
                this.lastBlock = data.lastBlock;
                this.difficulty = data.difficulty;
                this.updateUI();
                this.addLog(`채굴자 ID: ${this.minerId.substring(0, 8)}...`, 'info');
                break;

            case 'newBlock':
                if (data.minedBy === this.minerId) {
                    this.myCoins += 10;
                    this.myBlocks++;
                    this.addLog(`블록 #${data.block.index} 채굴 성공! +10 코인`, 'success');
                } else {
                    this.addLog(`다른 채굴자가 블록 #${data.block.index} 발견`, 'info');
                }
                this.addBlock(data.block, data.minedBy === this.minerId);
                this.updateUI();
                break;

            case 'newJob':
                this.lastBlock = data.lastBlock;
                this.difficulty = data.difficulty;
                this.nonce = 0;
                if (this.isMining) {
                    this.addLog('새 블록 작업 시작', 'info');
                }
                break;

            case 'stats':
                document.getElementById('totalMiners').textContent = data.totalMiners;
                document.getElementById('totalBlocks').textContent = data.totalBlocks;
                document.getElementById('totalMinedCoins').textContent = data.totalMinedCoins;
                break;

            case 'difficultyChange':
                this.difficulty = data.difficulty;
                document.getElementById('difficulty').textContent = this.difficulty;
                this.addLog(`난이도 변경: ${this.difficulty}`, 'warning');
                break;
        }
    }

    setupUI() {
        const mineBtn = document.getElementById('mineBtn');
        mineBtn.addEventListener('click', () => this.toggleMining());
    }

    toggleMining() {
        if (this.isMining) {
            this.stopMining();
        } else {
            this.startMining();
        }
    }

    startMining() {
        this.isMining = true;
        this.nonce = 0;
        this.hashCount = 0;
        this.lastHashTime = Date.now();

        const btn = document.getElementById('mineBtn');
        btn.classList.add('mining');
        btn.querySelector('.btn-text').textContent = '채굴 중지';

        document.getElementById('miningStatus').textContent = '채굴 중...';
        this.addLog('채굴 시작!', 'success');

        this.mine();
    }

    stopMining() {
        this.isMining = false;

        const btn = document.getElementById('mineBtn');
        btn.classList.remove('mining');
        btn.querySelector('.btn-text').textContent = '채굴 시작';

        document.getElementById('miningStatus').textContent = '대기 중';
        this.addLog('채굴 중지', 'info');
    }

    mine() {
        if (!this.isMining || !this.lastBlock) return;

        const batchSize = 1000; // 한 번에 처리할 해시 수
        const targetPrefix = '0'.repeat(this.difficulty);

        const timestamp = Date.now();
        const data = `Block mined by ${this.minerId}`;
        const previousHash = this.lastBlock.hash;
        const index = this.lastBlock.index + 1;

        for (let i = 0; i < batchSize; i++) {
            const hash = this.calculateHash(index, timestamp, data, previousHash, this.nonce);

            if (hash.startsWith(targetPrefix)) {
                // 유효한 해시 발견!
                this.submitSolution(timestamp, data, this.nonce, hash);
                return;
            }

            this.nonce++;
            this.hashCount++;
        }

        // UI 업데이트
        this.updateMiningUI();

        // 다음 배치 실행
        if (this.isMining) {
            setTimeout(() => this.mine(), 0);
        }
    }

    calculateHash(index, timestamp, data, previousHash, nonce) {
        const message = index + timestamp + data + previousHash + nonce;
        return CryptoJS.SHA256(message).toString();
    }

    submitSolution(timestamp, data, nonce, hash) {
        this.ws.send(JSON.stringify({
            type: 'solution',
            timestamp,
            data,
            nonce,
            hash,
            previousHash: this.lastBlock.hash
        }));

        document.getElementById('currentHash').textContent = hash;
        this.addLog(`해시 발견: ${hash.substring(0, 20)}...`, 'success');
    }

    updateMiningUI() {
        const now = Date.now();
        const elapsed = (now - this.lastHashTime) / 1000;

        if (elapsed >= 1) {
            const hashRate = Math.round(this.hashCount / elapsed);
            document.getElementById('hashRate').textContent = this.formatHashRate(hashRate);

            // 서버에 해시레이트 전송
            if (this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify({
                    type: 'hashrate',
                    hashRate
                }));
            }

            this.hashCount = 0;
            this.lastHashTime = now;
        }

        document.getElementById('currentNonce').textContent = this.nonce.toLocaleString();
        document.getElementById('attempts').textContent = this.nonce.toLocaleString();

        // 프로그레스 바 (시각적 효과용)
        const progress = (this.nonce % 10000) / 100;
        document.getElementById('progressFill').style.width = `${progress}%`;

        // 현재 해시 표시
        if (this.nonce % 100 === 0) {
            const currentHash = this.calculateHash(
                this.lastBlock.index + 1,
                Date.now(),
                `Block mined by ${this.minerId}`,
                this.lastBlock.hash,
                this.nonce
            );
            document.getElementById('currentHash').textContent = currentHash;
        }
    }

    formatHashRate(rate) {
        if (rate >= 1000000) {
            return `${(rate / 1000000).toFixed(2)} MH/s`;
        } else if (rate >= 1000) {
            return `${(rate / 1000).toFixed(2)} KH/s`;
        }
        return `${rate} H/s`;
    }

    updateUI() {
        document.getElementById('myCoins').textContent = this.myCoins;
        document.getElementById('myBlocks').textContent = this.myBlocks;
        document.getElementById('difficulty').textContent = this.difficulty;
    }

    addBlock(block, isMine) {
        const blocksList = document.getElementById('blocksList');
        const blockItem = document.createElement('div');
        blockItem.className = `block-item${isMine ? ' mine' : ''}`;

        const time = new Date(block.timestamp).toLocaleTimeString();

        blockItem.innerHTML = `
            <div class="block-number">#${block.index}</div>
            <div class="block-hash">${block.hash}</div>
            <div class="block-info">
                ${isMine ? '내가 채굴!' : block.minedBy.substring(0, 8) + '...'}<br>
                ${time}
            </div>
        `;

        blocksList.insertBefore(blockItem, blocksList.firstChild);

        // 최대 20개 블록만 표시
        while (blocksList.children.length > 20) {
            blocksList.removeChild(blocksList.lastChild);
        }
    }

    addLog(message, type = 'info') {
        const logContainer = document.getElementById('logContainer');
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry ${type}`;

        const time = new Date().toLocaleTimeString();
        logEntry.innerHTML = `<span class="log-time">[${time}]</span> ${message}`;

        logContainer.insertBefore(logEntry, logContainer.firstChild);

        // 최대 50개 로그만 유지
        while (logContainer.children.length > 50) {
            logContainer.removeChild(logContainer.lastChild);
        }
    }
}

// 앱 시작
const miner = new CoinMiner();
