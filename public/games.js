// 게임 시스템

// i18n 헬퍼 함수
function gt(key, fallback) {
    return (typeof window.t === 'function') ? window.t(key) : fallback;
}

class GameManager {
    constructor() {
        this.totalCoins = 0;
        this.currentGame = null;
        this.pendingReward = 0;
        this.adMultiplier = 1;
    }

    addCoins(amount) {
        console.log('GameManager.addCoins 호출:', amount);

        // Firebase에 코인 저장 (auth.js의 함수 사용)
        if (typeof addUserCoins === 'function') {
            addUserCoins(amount).then((success) => {
                console.log('코인 저장 결과:', success);
            });
        } else {
            console.error('addUserCoins 함수 없음!');
        }
    }

    updateCoinDisplay() {
        // window.userCoins는 auth.js의 실시간 리스너가 관리
        const coins = window.userCoins || this.totalCoins || 0;
        const el = document.getElementById('totalCoins');
        if (el) el.textContent = coins.toLocaleString();
    }

    showRewardAd(reward) {
        this.pendingReward = reward;
        document.getElementById('rewardAdModal').classList.add('active');
    }

    showResult(title, score, label, coins) {
        document.getElementById('resultTitle').textContent = title;
        document.getElementById('resultScore').textContent = score;
        document.getElementById('resultLabel').textContent = label;
        document.getElementById('resultCoins').textContent = coins;
        document.getElementById('resultModal').classList.add('active');

        this.addCoins(coins);
    }
}

const gameManager = new GameManager();

// 게임 시작
function startGame(gameType) {
    const container = document.getElementById('gameContainer');

    switch (gameType) {
        case 'clicker':
            startClickerGame(container);
            break;
        case 'reaction':
            startReactionGame(container);
            break;
        case 'memory':
            startMemoryGame(container);
            break;
        case 'slot':
            startSlotGame(container);
            break;
    }
}

// 인게임 하단 광고 HTML
function getInGameAdHTML() {
    return `
    <div class="ingame-ad">
        <div class="ad-placeholder ingame" data-slot="inGame">
            <span>${gt('adArea', '📢 광고 영역')} (320x100)</span>
            <small>${gt('inGameAd', '게임 중 노출')}</small>
        </div>
    </div>
    `;
}

// 1. 스피드 클리커 게임
function startClickerGame(container) {
    container.innerHTML = `
        <div class="clicker-game">
            <h2>👆 ${gt('clickerGame', '스피드 클리커')}</h2>
            <p>${gt('clickerDesc', '10초 안에 최대한 많이 클릭하세요!')}</p>
            <div class="timer" id="clickerTimer">10</div>
            <div class="score">${gt('click', '클릭')}: <span id="clickCount">0</span></div>
            <button class="click-btn" id="clickBtn" disabled>👆</button>
            <button class="start-btn" id="startClicker" onclick="beginClickerGame()">${gt('start', '시작!')}</button>
            ${getInGameAdHTML()}
        </div>
    `;
}

function beginClickerGame() {
    const btn = document.getElementById('clickBtn');
    const timer = document.getElementById('clickerTimer');
    const countDisplay = document.getElementById('clickCount');
    document.getElementById('startClicker').style.display = 'none';

    let timeLeft = 10;
    let clicks = 0;

    btn.disabled = false;
    btn.onclick = () => {
        clicks++;
        countDisplay.textContent = clicks;
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => btn.style.transform = 'scale(1)', 50);
    };

    const interval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(interval);
            btn.disabled = true;
            endClickerGame(clicks);
        }
    }, 1000);
}

function endClickerGame(clicks) {
    let coins = Math.floor(clicks / 2);
    coins = Math.min(coins, 50); // 최대 50코인

    if (coins >= 20) {
        gameManager.showRewardAd(coins);
    } else {
        gameManager.showResult(gt('gameComplete', '🎉 게임 완료!'), clicks, gt('click', '클릭'), coins);
    }
}

// 2. 반응속도 테스트
function startReactionGame(container) {
    container.innerHTML = `
        <div class="reaction-game">
            <h2>⚡ ${gt('reactionGame', '반응속도 테스트')}</h2>
            <p>${gt('reactionDesc', '초록색이 되면 빠르게 클릭!')}</p>
            <div class="reaction-box waiting" id="reactionBox">${gt('wait', '기다리세요...')}</div>
            <div class="reaction-result" id="reactionResult"></div>
            <button class="start-btn" id="startReaction" onclick="beginReactionGame()">${gt('start', '시작!')}</button>
            ${getInGameAdHTML()}
        </div>
    `;
}

let reactionTimeout = null;
let reactionStartTime = 0;

function beginReactionGame() {
    const box = document.getElementById('reactionBox');
    const result = document.getElementById('reactionResult');
    document.getElementById('startReaction').style.display = 'none';

    box.className = 'reaction-box waiting';
    box.textContent = gt('wait', '기다리세요...');
    result.textContent = '';

    // 너무 빨리 클릭하면 실패
    box.onclick = () => {
        if (box.classList.contains('waiting')) {
            clearTimeout(reactionTimeout);
            box.textContent = gt('tooFast', '너무 빨라요! 😅');
            result.textContent = gt('tryAgain', '다시 시도하세요');
            setTimeout(() => {
                document.getElementById('startReaction').style.display = 'block';
            }, 1500);
        } else if (box.classList.contains('ready')) {
            const reactionTime = Date.now() - reactionStartTime;
            box.className = 'reaction-box clicked';
            box.textContent = `${reactionTime}ms`;
            endReactionGame(reactionTime);
        }
    };

    // 1~4초 후 초록색으로 변경
    const delay = 1000 + Math.random() * 3000;
    reactionTimeout = setTimeout(() => {
        box.className = 'reaction-box ready';
        box.textContent = gt('clickNow', '클릭!');
        reactionStartTime = Date.now();
    }, delay);
}

function endReactionGame(time) {
    let coins = 0;
    let message = '';

    if (time < 200) {
        coins = 30;
        message = gt('lightning', '⚡ 번개 반사신경!');
    } else if (time < 300) {
        coins = 20;
        message = gt('veryFast', '🚀 아주 빠름!');
    } else if (time < 400) {
        coins = 10;
        message = gt('good', '👍 좋아요!');
    } else {
        coins = 5;
        message = gt('slow', '🐢 조금 느려요');
    }

    setTimeout(() => {
        gameManager.showResult(message, time, 'ms', coins);
    }, 500);
}

// 3. 숫자 기억하기
let memorySequence = [];
let memoryInput = [];
let memoryLevel = 1;

function startMemoryGame(container) {
    memoryLevel = 1;
    container.innerHTML = `
        <div class="memory-game">
            <h2>🧠 ${gt('memoryGame', '숫자 기억하기')}</h2>
            <p>${gt('memoryDesc', '나타나는 숫자를 순서대로 기억하세요!')}</p>
            <div class="memory-level" id="memoryLevel">${gt('level', '레벨')}: 1</div>
            <div class="memory-display" id="memoryDisplay">-</div>
            <div class="memory-input" id="memoryInput" style="display:none;">
                ${[1,2,3,4,5,6,7,8,9,0].map(n =>
                    `<button onclick="inputMemoryNumber(${n})">${n}</button>`
                ).join('')}
            </div>
            <button class="start-btn" id="startMemory" onclick="beginMemoryRound()">${gt('start', '시작!')}</button>
            ${getInGameAdHTML()}
        </div>
    `;
}

function beginMemoryRound() {
    const display = document.getElementById('memoryDisplay');
    const input = document.getElementById('memoryInput');
    const startBtn = document.getElementById('startMemory');

    startBtn.style.display = 'none';
    input.style.display = 'none';
    memoryInput = [];

    // 시퀀스 생성 (레벨 + 2개의 숫자)
    memorySequence = [];
    for (let i = 0; i < memoryLevel + 2; i++) {
        memorySequence.push(Math.floor(Math.random() * 10));
    }

    // 숫자 표시
    let index = 0;
    display.textContent = '';

    const showNext = () => {
        if (index < memorySequence.length) {
            display.textContent = memorySequence[index];
            index++;
            setTimeout(() => {
                display.textContent = '-';
                setTimeout(showNext, 300);
            }, 800);
        } else {
            display.textContent = gt('enterNumbers', '입력하세요!');
            input.style.display = 'flex';
        }
    };

    setTimeout(showNext, 500);
}

function inputMemoryNumber(num) {
    memoryInput.push(num);

    const display = document.getElementById('memoryDisplay');
    display.textContent = memoryInput.join(' ');

    if (memoryInput.length === memorySequence.length) {
        // 검증
        const correct = memoryInput.every((n, i) => n === memorySequence[i]);

        if (correct) {
            memoryLevel++;
            document.getElementById('memoryLevel').textContent = `${gt('level', '레벨')}: ${memoryLevel}`;

            if (memoryLevel > 5) {
                endMemoryGame(true);
            } else {
                display.textContent = gt('correct', '정답! 🎉');
                setTimeout(() => {
                    document.getElementById('startMemory').style.display = 'block';
                    document.getElementById('startMemory').textContent = gt('nextLevel', '다음 레벨');
                }, 1000);
            }
        } else {
            display.textContent = gt('wrong', '틀렸어요 😢');
            endMemoryGame(false);
        }

        document.getElementById('memoryInput').style.display = 'none';
    }
}

function endMemoryGame(completed) {
    const level = memoryLevel - (completed ? 0 : 1);
    let coins = level * 20;
    coins = Math.min(coins, 100);

    setTimeout(() => {
        if (coins >= 40) {
            gameManager.showRewardAd(coins);
        } else {
            gameManager.showResult(
                completed ? gt('master', '🏆 마스터!') : gt('gameOver', '게임 오버'),
                level,
                gt('level', '레벨'),
                coins
            );
        }
    }, 1000);
}

// 4. 럭키 슬롯
const slotSymbols = ['🍎', '🍋', '🍇', '💎', '7️⃣', '🍀'];

function startSlotGame(container) {
    container.innerHTML = `
        <div class="slot-game">
            <h2>🎰 ${gt('slotGame', '럭키 슬롯')}</h2>
            <p>${gt('slotDesc', '광고 시청 후 슬롯에 도전하세요!')}</p>
            <div class="slot-machine">
                <div class="slot-reel" id="reel1">❓</div>
                <div class="slot-reel" id="reel2">❓</div>
                <div class="slot-reel" id="reel3">❓</div>
            </div>
            <button class="spin-btn" id="spinBtn" onclick="watchAdForSlot()">
                ${gt('watchAdSpin', '📺 광고 보고 돌리기')}
            </button>
            <div class="slot-info">
                <p>💎💎💎 = 200${gt('coins', '코인')} | 7️⃣7️⃣7️⃣ = 100${gt('coins', '코인')}</p>
                <p>${gt('threeMatch', '3개 매치')} = 50${gt('coins', '코인')} | ${gt('twoMatch', '2개 매치')} = 10${gt('coins', '코인')}</p>
            </div>
            ${getInGameAdHTML()}
        </div>
    `;
}

function watchAdForSlot() {
    // 슬롯 전 광고 시청 (간소화)
    const btn = document.getElementById('spinBtn');
    btn.disabled = true;
    btn.textContent = `${gt('watchingAd', '광고 시청 중...')} (3s)`;

    let count = 3;
    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            btn.textContent = `${gt('watchingAd', '광고 시청 중...')} (${count}s)`;
        } else {
            clearInterval(interval);
            btn.textContent = gt('spin', '🎰 돌리기!');
            btn.onclick = spinSlot;
            btn.disabled = false;
        }
    }, 1000);
}

function spinSlot() {
    const btn = document.getElementById('spinBtn');
    btn.disabled = true;

    const reels = [
        document.getElementById('reel1'),
        document.getElementById('reel2'),
        document.getElementById('reel3')
    ];

    // 스피닝 애니메이션
    reels.forEach(reel => reel.classList.add('spinning'));

    // 각 릴 멈추기
    const results = [];
    const stopTimes = [1000, 1500, 2000];

    reels.forEach((reel, index) => {
        // 스피닝 중 랜덤 심볼 표시
        const spinInterval = setInterval(() => {
            reel.textContent = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
        }, 100);

        setTimeout(() => {
            clearInterval(spinInterval);
            reel.classList.remove('spinning');
            const symbol = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
            reel.textContent = symbol;
            results.push(symbol);

            if (results.length === 3) {
                calculateSlotWin(results);
            }
        }, stopTimes[index]);
    });
}

function calculateSlotWin(results) {
    let coins = 0;
    let message = '';

    // 3개 같음
    if (results[0] === results[1] && results[1] === results[2]) {
        if (results[0] === '💎') {
            coins = 200;
            message = gt('jackpot', '💎 잭팟!!! 💎');
        } else if (results[0] === '7️⃣') {
            coins = 100;
            message = gt('luckySeven', '7️⃣ 럭키 세븐! 7️⃣');
        } else {
            coins = 50;
            message = gt('threeMatch', '🎉 3개 매치!');
        }
    }
    // 2개 같음
    else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
        coins = 10;
        message = gt('twoMatch', '👍 2개 매치');
    }
    // 꽝
    else {
        coins = 2; // 참가 보상
        message = gt('nextTime', '😅 다음 기회에...');
    }

    setTimeout(() => {
        gameManager.showResult(message, results.join(' '), '', coins);
        // 버튼 리셋
        const btn = document.getElementById('spinBtn');
        btn.textContent = gt('watchAdSpin', '📺 광고 보고 돌리기');
        btn.onclick = watchAdForSlot;
        btn.disabled = false;
    }, 500);
}

// 보상형 광고 시청
function watchRewardAd() {
    const btn = document.getElementById('btnWatchAd');
    const progress = document.getElementById('videoProgress');
    const timer = document.getElementById('videoTimer');

    btn.disabled = true;

    let seconds = 5; // 실제로는 30초지만 데모용으로 5초
    timer.textContent = `${seconds}s`;

    const interval = setInterval(() => {
        seconds--;
        timer.textContent = `${seconds}s`;
        progress.style.width = `${((5 - seconds) / 5) * 100}%`;

        if (seconds <= 0) {
            clearInterval(interval);
            document.getElementById('rewardAdModal').classList.remove('active');

            // 2배 보상
            const doubledReward = gameManager.pendingReward * 2;
            gameManager.showResult(gt('doubleReward', '🎬 2배 보상!'), doubledReward, gt('coins', '코인'), doubledReward);
        }
    }, 1000);
}

function skipAd() {
    document.getElementById('rewardAdModal').classList.remove('active');
    gameManager.showResult(gt('gameComplete', '🎉 게임 완료!'), gameManager.pendingReward, gt('coins', '코인'), gameManager.pendingReward);
}

function closeResult() {
    document.getElementById('resultModal').classList.remove('active');
}
