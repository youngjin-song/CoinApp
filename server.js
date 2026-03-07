const express = require('express');
const WebSocket = require('ws');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CSP 헤더 설정 (Firebase 허용)
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://apis.google.com https://pagead2.googlesyndication.com https://cdnjs.cloudflare.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: https: blob:; " +
        "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://*.firebase.google.com wss://*.firebaseio.com https://firestore.googleapis.com https://identitytoolkit.googleapis.com; " +
        "frame-src 'self' https://accounts.google.com https://*.firebaseapp.com;"
    );
    next();
});

// 블록체인 데이터
let blockchain = [];
let difficulty = 4; // 해시 앞에 필요한 0의 개수
let totalMinedCoins = 0;
let connectedMiners = new Map();

// 제네시스 블록 생성
function createGenesisBlock() {
    return {
        index: 0,
        timestamp: Date.now(),
        data: 'Genesis Block',
        previousHash: '0',
        hash: '0000000000000000000000000000000000000000000000000000000000000000',
        nonce: 0,
        minedBy: 'System'
    };
}

blockchain.push(createGenesisBlock());

// 해시 계산
function calculateHash(index, timestamp, data, previousHash, nonce) {
    return crypto
        .createHash('sha256')
        .update(index + timestamp + data + previousHash + nonce)
        .digest('hex');
}

// 난이도 확인
function isValidHash(hash) {
    return hash.startsWith('0'.repeat(difficulty));
}

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// API 엔드포인트
app.get('/api/blockchain', (req, res) => {
    res.json({
        blockchain: blockchain.slice(-10), // 최근 10개 블록
        difficulty,
        totalBlocks: blockchain.length,
        totalMinedCoins
    });
});

app.get('/api/stats', (req, res) => {
    res.json({
        totalMiners: connectedMiners.size,
        difficulty,
        totalBlocks: blockchain.length,
        totalMinedCoins,
        lastBlock: blockchain[blockchain.length - 1]
    });
});

const server = app.listen(PORT, () => {
    console.log(`🪙 코인 채굴 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});

// WebSocket 서버
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    const minerId = crypto.randomBytes(8).toString('hex');
    connectedMiners.set(minerId, {
        ws,
        hashRate: 0,
        minedBlocks: 0,
        coins: 0,
        startTime: Date.now()
    });

    console.log(`⛏️  새 채굴자 연결: ${minerId}`);

    // 초기 데이터 전송
    ws.send(JSON.stringify({
        type: 'init',
        minerId,
        lastBlock: blockchain[blockchain.length - 1],
        difficulty,
        totalMiners: connectedMiners.size
    }));

    // 모든 채굴자에게 업데이트 전송
    broadcastStats();

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);

            if (data.type === 'solution') {
                // 채굴 솔루션 검증
                const lastBlock = blockchain[blockchain.length - 1];
                const hash = calculateHash(
                    lastBlock.index + 1,
                    data.timestamp,
                    data.data,
                    lastBlock.hash,
                    data.nonce
                );

                if (isValidHash(hash) && data.previousHash === lastBlock.hash) {
                    // 유효한 블록!
                    const newBlock = {
                        index: lastBlock.index + 1,
                        timestamp: data.timestamp,
                        data: data.data,
                        previousHash: lastBlock.hash,
                        hash,
                        nonce: data.nonce,
                        minedBy: minerId
                    };

                    blockchain.push(newBlock);
                    totalMinedCoins += 10; // 블록당 10코인 보상

                    const miner = connectedMiners.get(minerId);
                    if (miner) {
                        miner.minedBlocks++;
                        miner.coins += 10;
                    }

                    console.log(`✅ 새 블록 채굴! #${newBlock.index} by ${minerId}`);

                    // 모든 채굴자에게 새 블록 알림
                    broadcastNewBlock(newBlock, minerId);

                    // 10블록마다 난이도 조정
                    if (blockchain.length % 10 === 0) {
                        difficulty = Math.min(difficulty + 1, 6);
                        broadcastDifficultyChange();
                    }
                }
            } else if (data.type === 'hashrate') {
                const miner = connectedMiners.get(minerId);
                if (miner) {
                    miner.hashRate = data.hashRate;
                }
            }
        } catch (e) {
            console.error('메시지 처리 오류:', e);
        }
    });

    ws.on('close', () => {
        connectedMiners.delete(minerId);
        console.log(`👋 채굴자 연결 해제: ${minerId}`);
        broadcastStats();
    });
});

function broadcastNewBlock(block, minerId) {
    const message = JSON.stringify({
        type: 'newBlock',
        block,
        minedBy: minerId,
        totalBlocks: blockchain.length,
        totalMinedCoins
    });

    connectedMiners.forEach((miner, id) => {
        if (miner.ws.readyState === WebSocket.OPEN) {
            miner.ws.send(message);
            // 다음 블록을 위한 정보도 전송
            miner.ws.send(JSON.stringify({
                type: 'newJob',
                lastBlock: block,
                difficulty
            }));
        }
    });
}

function broadcastStats() {
    const stats = {
        type: 'stats',
        totalMiners: connectedMiners.size,
        totalBlocks: blockchain.length,
        totalMinedCoins,
        difficulty
    };

    connectedMiners.forEach((miner) => {
        if (miner.ws.readyState === WebSocket.OPEN) {
            miner.ws.send(JSON.stringify(stats));
        }
    });
}

function broadcastDifficultyChange() {
    const message = JSON.stringify({
        type: 'difficultyChange',
        difficulty
    });

    connectedMiners.forEach((miner) => {
        if (miner.ws.readyState === WebSocket.OPEN) {
            miner.ws.send(message);
        }
    });
}
