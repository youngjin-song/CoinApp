// 다국어 지원 시스템

const translations = {
    ko: {
        // 공통
        appName: 'CoinMiner',
        login: '로그인',
        logout: '로그아웃',
        coins: '코인',

        // 메인 페이지
        subtitle: '웹 기반 암호화폐 채굴',
        gamesLink: '🎮 미니게임으로 코인 벌기',
        miningStatus: '채굴 상태',
        myCoins: '내 코인',
        hashRate: '해시레이트',
        totalBlocks: '총 블록',
        waiting: '대기 중',
        mining: '채굴 중...',
        startMining: '채굴 시작',
        stopMining: '채굴 중지',
        difficulty: '난이도',
        currentHash: '현재 해시',
        nonce: 'Nonce',
        attempts: '시도',

        // 네트워크
        networkInfo: '네트워크 정보',
        connectedMiners: '접속 채굴자',
        totalMinedCoins: '총 채굴 코인',
        myBlocks: '내 채굴 블록',
        recentBlocks: '최근 블록',
        miningLog: '채굴 로그',

        // 리더보드
        leaderboard: '🏆 코인 랭킹 TOP 10',
        noData: '아직 데이터가 없습니다',
        loading: '로딩 중...',
        anonymous: '익명',

        // 친구 초대
        referralBtn: '👥 친구 초대하고 50코인 받기',
        referralTitle: '👥 친구 초대',
        referralDesc1: '친구를 초대하면',
        referralDesc2: '획득!',
        referralBonus: '친구도',
        referralBonus2: '보너스!',
        myReferralCode: '내 초대 코드',
        copyLink: '📋 링크 복사',
        share: '📤 공유하기',
        close: '닫기',

        // 출석 체크
        dailyCheck: '🎁 출석 체크!',
        consecutiveDays: '일 연속 출석',
        day: 'Day',
        claim: '받기',

        // 면책 조항
        disclaimer1: '본 서비스는 교육/오락 목적의 채굴 시뮬레이션입니다.',
        disclaimer2: '획득한 코인은 실제 암호화폐가 아니며 현금 가치가 없습니다.',

        // 게임 페이지
        gamesTitle: 'CoinMiner Games',
        gamesSubtitle: '게임하고 코인 받자!',
        backToMining: '⛏️ 채굴하러 가기',
        maxReward: '🎁 최대',

        // 게임들
        clickerGame: '스피드 클리커',
        clickerDesc: '10초 안에 최대한 많이 클릭!',
        reactionGame: '반응속도 테스트',
        reactionDesc: '초록색이 되면 빠르게 클릭!',
        memoryGame: '숫자 기억하기',
        memoryDesc: '나타난 숫자를 순서대로 기억!',
        slotGame: '럭키 슬롯',
        slotDesc: '광고 시청 후 슬롯 도전!',

        // 게임 공통
        selectGame: '👆 위에서 게임을 선택하세요',
        start: '시작!',
        nextLevel: '다음 레벨',
        level: '레벨',
        click: '클릭',
        wait: '기다리세요...',
        clickNow: '클릭!',
        tooFast: '너무 빨라요! 😅',
        tryAgain: '다시 시도하세요',
        enterNumbers: '입력하세요!',
        correct: '정답! 🎉',
        wrong: '틀렸어요 😢',
        master: '🏆 마스터!',
        gameOver: '게임 오버',

        // 슬롯
        watchAdSpin: '📺 광고 보고 돌리기',
        watchingAd: '광고 시청 중...',
        spin: '🎰 돌리기!',
        jackpot: '💎 잭팟!!! 💎',
        luckySeven: '7️⃣ 럭키 세븐! 7️⃣',
        threeMatch: '🎉 3개 매치!',
        twoMatch: '👍 2개 매치',
        nextTime: '😅 다음 기회에...',

        // 반응속도 결과
        lightning: '⚡ 번개 반사신경!',
        veryFast: '🚀 아주 빠름!',
        good: '👍 좋아요!',
        slow: '🐢 조금 느려요',

        // 보상 모달
        rewardAdTitle: '🎬 광고 시청하고 보상 2배!',
        rewardAdDesc: '30초 광고를 시청하면 보상이 2배가 됩니다',
        watchAd: '광고 시청 (2배 보상)',
        skip: '건너뛰기',
        doubleReward: '🎬 2배 보상!',

        // 결과 모달
        gameComplete: '🎉 게임 완료!',
        coinsEarned: '코인 획득!',
        confirm: '확인',

        // 광고
        adArea: '📢 광고 영역',
        inGameAd: '게임 중 노출 - 높은 전환율',
        rewardAdAfter: '게임 완료 후 보상형 광고 표시'
    },

    en: {
        // Common
        appName: 'CoinMiner',
        login: 'Login',
        logout: 'Logout',
        coins: 'Coins',

        // Main page
        subtitle: 'Web-based Cryptocurrency Mining',
        gamesLink: '🎮 Earn Coins with Mini Games',
        miningStatus: 'Mining Status',
        myCoins: 'My Coins',
        hashRate: 'Hash Rate',
        totalBlocks: 'Total Blocks',
        waiting: 'Waiting',
        mining: 'Mining...',
        startMining: 'Start Mining',
        stopMining: 'Stop Mining',
        difficulty: 'Difficulty',
        currentHash: 'Current Hash',
        nonce: 'Nonce',
        attempts: 'Attempts',

        // Network
        networkInfo: 'Network Info',
        connectedMiners: 'Connected Miners',
        totalMinedCoins: 'Total Mined Coins',
        myBlocks: 'My Mined Blocks',
        recentBlocks: 'Recent Blocks',
        miningLog: 'Mining Log',

        // Leaderboard
        leaderboard: '🏆 Coin Ranking TOP 10',
        noData: 'No data yet',
        loading: 'Loading...',
        anonymous: 'Anonymous',

        // Referral
        referralBtn: '👥 Invite Friends & Get 50 Coins',
        referralTitle: '👥 Invite Friends',
        referralDesc1: 'Invite a friend and get',
        referralDesc2: '!',
        referralBonus: 'Friend gets',
        referralBonus2: 'bonus!',
        myReferralCode: 'My Referral Code',
        copyLink: '📋 Copy Link',
        share: '📤 Share',
        close: 'Close',

        // Daily check
        dailyCheck: '🎁 Daily Check-in!',
        consecutiveDays: 'consecutive days',
        day: 'Day',
        claim: 'Claim',

        // Disclaimer
        disclaimer1: 'This service is a mining simulation for educational/entertainment purposes.',
        disclaimer2: 'Earned coins are not real cryptocurrency and have no cash value.',

        // Games page
        gamesTitle: 'CoinMiner Games',
        gamesSubtitle: 'Play Games & Earn Coins!',
        backToMining: '⛏️ Go Mining',
        maxReward: '🎁 Max',

        // Games
        clickerGame: 'Speed Clicker',
        clickerDesc: 'Click as many times as possible in 10 seconds!',
        reactionGame: 'Reaction Test',
        reactionDesc: 'Click quickly when it turns green!',
        memoryGame: 'Number Memory',
        memoryDesc: 'Remember the numbers in order!',
        slotGame: 'Lucky Slot',
        slotDesc: 'Watch ad and try the slot!',

        // Game common
        selectGame: '👆 Select a game above',
        start: 'Start!',
        nextLevel: 'Next Level',
        level: 'Level',
        click: 'Clicks',
        wait: 'Wait...',
        clickNow: 'Click!',
        tooFast: 'Too fast! 😅',
        tryAgain: 'Try again',
        enterNumbers: 'Enter!',
        correct: 'Correct! 🎉',
        wrong: 'Wrong 😢',
        master: '🏆 Master!',
        gameOver: 'Game Over',

        // Slot
        watchAdSpin: '📺 Watch Ad & Spin',
        watchingAd: 'Watching ad...',
        spin: '🎰 Spin!',
        jackpot: '💎 JACKPOT!!! 💎',
        luckySeven: '7️⃣ Lucky Seven! 7️⃣',
        threeMatch: '🎉 Three Match!',
        twoMatch: '👍 Two Match',
        nextTime: '😅 Next time...',

        // Reaction results
        lightning: '⚡ Lightning reflexes!',
        veryFast: '🚀 Very fast!',
        good: '👍 Good!',
        slow: '🐢 A bit slow',

        // Reward modal
        rewardAdTitle: '🎬 Watch Ad for 2x Reward!',
        rewardAdDesc: 'Watch a 30-second ad to double your reward',
        watchAd: 'Watch Ad (2x Reward)',
        skip: 'Skip',
        doubleReward: '🎬 2x Reward!',

        // Result modal
        gameComplete: '🎉 Game Complete!',
        coinsEarned: 'Coins Earned!',
        confirm: 'OK',

        // Ads
        adArea: '📢 Ad Area',
        inGameAd: 'In-game display - High conversion',
        rewardAdAfter: 'Reward ad after game completion'
    },

    ja: {
        // 共通
        appName: 'CoinMiner',
        login: 'ログイン',
        logout: 'ログアウト',
        coins: 'コイン',

        // メインページ
        subtitle: 'ウェブベース仮想通貨マイニング',
        gamesLink: '🎮 ミニゲームでコインを稼ぐ',
        miningStatus: 'マイニング状態',
        myCoins: 'マイコイン',
        hashRate: 'ハッシュレート',
        totalBlocks: '総ブロック',
        waiting: '待機中',
        mining: 'マイニング中...',
        startMining: 'マイニング開始',
        stopMining: 'マイニング停止',
        difficulty: '難易度',
        currentHash: '現在のハッシュ',
        nonce: 'Nonce',
        attempts: '試行',

        // ネットワーク
        networkInfo: 'ネットワーク情報',
        connectedMiners: '接続マイナー',
        totalMinedCoins: '総マイニングコイン',
        myBlocks: 'マイマイニングブロック',
        recentBlocks: '最近のブロック',
        miningLog: 'マイニングログ',

        // リーダーボード
        leaderboard: '🏆 コインランキング TOP 10',
        noData: 'データがありません',
        loading: '読み込み中...',
        anonymous: '匿名',

        // 友達招待
        referralBtn: '👥 友達を招待して50コインゲット',
        referralTitle: '👥 友達招待',
        referralDesc1: '友達を招待すると',
        referralDesc2: '獲得！',
        referralBonus: '友達も',
        referralBonus2: 'ボーナス！',
        myReferralCode: '招待コード',
        copyLink: '📋 リンクコピー',
        share: '📤 シェア',
        close: '閉じる',

        // 出席チェック
        dailyCheck: '🎁 出席チェック！',
        consecutiveDays: '日連続出席',
        day: 'Day',
        claim: '受け取る',

        // 免責事項
        disclaimer1: 'このサービスは教育/エンターテイメント目的のマイニングシミュレーションです。',
        disclaimer2: '獲得したコインは実際の仮想通貨ではなく、現金価値はありません。',

        // ゲームページ
        gamesTitle: 'CoinMiner Games',
        gamesSubtitle: 'ゲームでコインをゲット！',
        backToMining: '⛏️ マイニングへ',
        maxReward: '🎁 最大',

        // ゲーム
        clickerGame: 'スピードクリッカー',
        clickerDesc: '10秒間でできるだけ多くクリック！',
        reactionGame: '反応速度テスト',
        reactionDesc: '緑になったら素早くクリック！',
        memoryGame: '数字記憶',
        memoryDesc: '数字を順番に覚えよう！',
        slotGame: 'ラッキースロット',
        slotDesc: '広告を見てスロットに挑戦！',

        // ゲーム共通
        selectGame: '👆 上からゲームを選択',
        start: 'スタート！',
        nextLevel: '次のレベル',
        level: 'レベル',
        click: 'クリック',
        wait: '待って...',
        clickNow: 'クリック！',
        tooFast: '早すぎ！😅',
        tryAgain: 'もう一度',
        enterNumbers: '入力！',
        correct: '正解！🎉',
        wrong: '間違い 😢',
        master: '🏆 マスター！',
        gameOver: 'ゲームオーバー',

        // スロット
        watchAdSpin: '📺 広告を見て回す',
        watchingAd: '広告視聴中...',
        spin: '🎰 回す！',
        jackpot: '💎 ジャックポット!!! 💎',
        luckySeven: '7️⃣ ラッキーセブン！7️⃣',
        threeMatch: '🎉 3つ揃い！',
        twoMatch: '👍 2つ揃い',
        nextTime: '😅 次回...',

        // 反応結果
        lightning: '⚡ 電光石火！',
        veryFast: '🚀 超速い！',
        good: '👍 いいね！',
        slow: '🐢 ちょっと遅い',

        // 報酬モーダル
        rewardAdTitle: '🎬 広告を見て報酬2倍！',
        rewardAdDesc: '30秒の広告を見ると報酬が2倍に',
        watchAd: '広告視聴 (2倍報酬)',
        skip: 'スキップ',
        doubleReward: '🎬 2倍報酬！',

        // 結果モーダル
        gameComplete: '🎉 ゲーム完了！',
        coinsEarned: 'コイン獲得！',
        confirm: '確認',

        // 広告
        adArea: '📢 広告エリア',
        inGameAd: 'ゲーム中表示',
        rewardAdAfter: 'ゲーム完了後の報酬広告'
    },

    zh: {
        // 通用
        appName: 'CoinMiner',
        login: '登录',
        logout: '退出',
        coins: '金币',

        // 主页
        subtitle: '网页版加密货币挖矿',
        gamesLink: '🎮 玩游戏赚金币',
        miningStatus: '挖矿状态',
        myCoins: '我的金币',
        hashRate: '哈希率',
        totalBlocks: '总区块',
        waiting: '等待中',
        mining: '挖矿中...',
        startMining: '开始挖矿',
        stopMining: '停止挖矿',
        difficulty: '难度',
        currentHash: '当前哈希',
        nonce: 'Nonce',
        attempts: '尝试',

        // 网络
        networkInfo: '网络信息',
        connectedMiners: '在线矿工',
        totalMinedCoins: '总挖矿金币',
        myBlocks: '我的挖矿区块',
        recentBlocks: '最近区块',
        miningLog: '挖矿日志',

        // 排行榜
        leaderboard: '🏆 金币排行榜 TOP 10',
        noData: '暂无数据',
        loading: '加载中...',
        anonymous: '匿名',

        // 邀请好友
        referralBtn: '👥 邀请好友得50金币',
        referralTitle: '👥 邀请好友',
        referralDesc1: '邀请好友获得',
        referralDesc2: '！',
        referralBonus: '好友也得',
        referralBonus2: '奖励！',
        myReferralCode: '我的邀请码',
        copyLink: '📋 复制链接',
        share: '📤 分享',
        close: '关闭',

        // 签到
        dailyCheck: '🎁 每日签到！',
        consecutiveDays: '天连续签到',
        day: '第',
        claim: '领取',

        // 免责声明
        disclaimer1: '本服务是用于教育/娱乐目的的挖矿模拟。',
        disclaimer2: '获得的金币不是真正的加密货币，没有现金价值。',

        // 游戏页
        gamesTitle: 'CoinMiner 游戏',
        gamesSubtitle: '玩游戏赚金币！',
        backToMining: '⛏️ 去挖矿',
        maxReward: '🎁 最高',

        // 游戏
        clickerGame: '极速点击',
        clickerDesc: '10秒内点击尽可能多次！',
        reactionGame: '反应测试',
        reactionDesc: '变绿时快速点击！',
        memoryGame: '数字记忆',
        memoryDesc: '按顺序记住数字！',
        slotGame: '幸运老虎机',
        slotDesc: '看广告玩老虎机！',

        // 游戏通用
        selectGame: '👆 请选择上方游戏',
        start: '开始！',
        nextLevel: '下一关',
        level: '关卡',
        click: '点击',
        wait: '等待...',
        clickNow: '点击！',
        tooFast: '太快了！😅',
        tryAgain: '再试一次',
        enterNumbers: '输入！',
        correct: '正确！🎉',
        wrong: '错误 😢',
        master: '🏆 大师！',
        gameOver: '游戏结束',

        // 老虎机
        watchAdSpin: '📺 看广告转一转',
        watchingAd: '正在播放广告...',
        spin: '🎰 转！',
        jackpot: '💎 大奖!!! 💎',
        luckySeven: '7️⃣ 幸运七！7️⃣',
        threeMatch: '🎉 三个相同！',
        twoMatch: '👍 两个相同',
        nextTime: '😅 下次好运...',

        // 反应结果
        lightning: '⚡ 闪电反应！',
        veryFast: '🚀 超级快！',
        good: '👍 不错！',
        slow: '🐢 有点慢',

        // 奖励弹窗
        rewardAdTitle: '🎬 看广告奖励翻倍！',
        rewardAdDesc: '观看30秒广告，奖励翻倍',
        watchAd: '看广告 (双倍奖励)',
        skip: '跳过',
        doubleReward: '🎬 双倍奖励！',

        // 结果弹窗
        gameComplete: '🎉 游戏完成！',
        coinsEarned: '金币获得！',
        confirm: '确定',

        // 广告
        adArea: '📢 广告区域',
        inGameAd: '游戏中展示',
        rewardAdAfter: '游戏完成后的奖励广告'
    }
};

// 현재 언어 (기본: 한국어)
let currentLang = localStorage.getItem('lang') || 'ko';

// 언어 변경
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyTranslations();
        updateLanguageSelector();
    }
}

// 번역 가져오기
function t(key) {
    return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

// 페이지에 번역 적용
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
}

// 언어 선택기 업데이트
function updateLanguageSelector() {
    const selector = document.getElementById('langSelector');
    if (selector) {
        selector.value = currentLang;
    }
}

// 언어 선택기 HTML 생성
function createLanguageSelector() {
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    selector.innerHTML = `
        <select id="langSelector" onchange="setLanguage(this.value)">
            <option value="ko">🇰🇷 한국어</option>
            <option value="en">🇺🇸 English</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="zh">🇨🇳 中文</option>
        </select>
    `;
    return selector;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 언어 선택기 추가
    const container = document.querySelector('.container');
    if (container) {
        const header = container.querySelector('header');
        if (header) {
            const selector = createLanguageSelector();
            header.insertBefore(selector, header.firstChild);
        }
    }

    // 저장된 언어 적용
    updateLanguageSelector();

    // 약간의 지연 후 번역 적용 (다른 스크립트 로드 후)
    setTimeout(applyTranslations, 100);
});
