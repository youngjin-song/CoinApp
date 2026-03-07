// 다국어 지원 시스템

const translations = {
    ko: {
        appName: 'CoinMiner', login: '로그인', logout: '로그아웃', coins: '코인',
        subtitle: '웹 기반 암호화폐 채굴', gamesLink: '🎮 미니게임으로 코인 벌기',
        miningStatus: '채굴 상태', myCoins: '내 코인', hashRate: '해시레이트', totalBlocks: '총 블록',
        waiting: '대기 중', mining: '채굴 중...', startMining: '채굴 시작', stopMining: '채굴 중지',
        difficulty: '난이도', currentHash: '현재 해시', nonce: 'Nonce', attempts: '시도',
        networkInfo: '네트워크 정보', connectedMiners: '접속 채굴자', totalMinedCoins: '총 채굴 코인',
        myBlocks: '내 채굴 블록', recentBlocks: '최근 블록', miningLog: '채굴 로그',
        leaderboard: '🏆 코인 랭킹 TOP 10', noData: '아직 데이터가 없습니다', loading: '로딩 중...', anonymous: '익명',
        referralBtn: '👥 친구 초대하고 50코인 받기', referralTitle: '👥 친구 초대',
        referralDesc1: '친구를 초대하면', referralDesc2: '획득!', referralBonus: '친구도', referralBonus2: '보너스!',
        myReferralCode: '내 초대 코드', copyLink: '📋 링크 복사', share: '📤 공유하기', close: '닫기',
        dailyCheck: '🎁 출석 체크!', consecutiveDays: '일 연속 출석', day: 'Day', claim: '받기',
        disclaimer1: '본 서비스는 교육/오락 목적의 채굴 시뮬레이션입니다.',
        disclaimer2: '획득한 코인은 실제 암호화폐가 아니며 현금 가치가 없습니다.',
        gamesTitle: 'CoinMiner Games', gamesSubtitle: '게임하고 코인 받자!', backToMining: '⛏️ 채굴하러 가기', maxReward: '🎁 최대',
        clickerGame: '스피드 클리커', clickerDesc: '10초 안에 최대한 많이 클릭!',
        reactionGame: '반응속도 테스트', reactionDesc: '초록색이 되면 빠르게 클릭!',
        memoryGame: '숫자 기억하기', memoryDesc: '나타난 숫자를 순서대로 기억!',
        slotGame: '럭키 슬롯', slotDesc: '광고 시청 후 슬롯 도전!',
        selectGame: '👆 위에서 게임을 선택하세요', start: '시작!', nextLevel: '다음 레벨', level: '레벨', click: '클릭',
        wait: '기다리세요...', clickNow: '클릭!', tooFast: '너무 빨라요! 😅', tryAgain: '다시 시도하세요',
        enterNumbers: '입력하세요!', correct: '정답! 🎉', wrong: '틀렸어요 😢', master: '🏆 마스터!', gameOver: '게임 오버',
        watchAdSpin: '📺 광고 보고 돌리기', watchingAd: '광고 시청 중...', spin: '🎰 돌리기!',
        jackpot: '💎 잭팟!!! 💎', luckySeven: '7️⃣ 럭키 세븐! 7️⃣', threeMatch: '🎉 3개 매치!', twoMatch: '👍 2개 매치', nextTime: '😅 다음 기회에...',
        lightning: '⚡ 번개 반사신경!', veryFast: '🚀 아주 빠름!', good: '👍 좋아요!', slow: '🐢 조금 느려요',
        rewardAdTitle: '🎬 광고 시청하고 보상 2배!', rewardAdDesc: '30초 광고를 시청하면 보상이 2배가 됩니다',
        watchAd: '광고 시청 (2배 보상)', skip: '건너뛰기', doubleReward: '🎬 2배 보상!',
        gameComplete: '🎉 게임 완료!', coinsEarned: '코인 획득!', confirm: '확인',
        adArea: '📢 광고 영역', inGameAd: '게임 중 노출', rewardAdAfter: '게임 완료 후 보상형 광고'
    },

    en: {
        appName: 'CoinMiner', login: 'Login', logout: 'Logout', coins: 'Coins',
        subtitle: 'Web-based Cryptocurrency Mining', gamesLink: '🎮 Earn Coins with Mini Games',
        miningStatus: 'Mining Status', myCoins: 'My Coins', hashRate: 'Hash Rate', totalBlocks: 'Total Blocks',
        waiting: 'Waiting', mining: 'Mining...', startMining: 'Start Mining', stopMining: 'Stop Mining',
        difficulty: 'Difficulty', currentHash: 'Current Hash', nonce: 'Nonce', attempts: 'Attempts',
        networkInfo: 'Network Info', connectedMiners: 'Connected Miners', totalMinedCoins: 'Total Mined Coins',
        myBlocks: 'My Mined Blocks', recentBlocks: 'Recent Blocks', miningLog: 'Mining Log',
        leaderboard: '🏆 Coin Ranking TOP 10', noData: 'No data yet', loading: 'Loading...', anonymous: 'Anonymous',
        referralBtn: '👥 Invite Friends & Get 50 Coins', referralTitle: '👥 Invite Friends',
        referralDesc1: 'Invite a friend and get', referralDesc2: '!', referralBonus: 'Friend gets', referralBonus2: 'bonus!',
        myReferralCode: 'My Referral Code', copyLink: '📋 Copy Link', share: '📤 Share', close: 'Close',
        dailyCheck: '🎁 Daily Check-in!', consecutiveDays: 'consecutive days', day: 'Day', claim: 'Claim',
        disclaimer1: 'This service is a mining simulation for educational/entertainment purposes.',
        disclaimer2: 'Earned coins are not real cryptocurrency and have no cash value.',
        gamesTitle: 'CoinMiner Games', gamesSubtitle: 'Play Games & Earn Coins!', backToMining: '⛏️ Go Mining', maxReward: '🎁 Max',
        clickerGame: 'Speed Clicker', clickerDesc: 'Click as fast as you can in 10 seconds!',
        reactionGame: 'Reaction Test', reactionDesc: 'Click quickly when it turns green!',
        memoryGame: 'Number Memory', memoryDesc: 'Remember the numbers in order!',
        slotGame: 'Lucky Slot', slotDesc: 'Watch ad and try the slot!',
        selectGame: '👆 Select a game above', start: 'Start!', nextLevel: 'Next Level', level: 'Level', click: 'Clicks',
        wait: 'Wait...', clickNow: 'Click!', tooFast: 'Too fast! 😅', tryAgain: 'Try again',
        enterNumbers: 'Enter!', correct: 'Correct! 🎉', wrong: 'Wrong 😢', master: '🏆 Master!', gameOver: 'Game Over',
        watchAdSpin: '📺 Watch Ad & Spin', watchingAd: 'Watching ad...', spin: '🎰 Spin!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Lucky Seven! 7️⃣', threeMatch: '🎉 Three Match!', twoMatch: '👍 Two Match', nextTime: '😅 Next time...',
        lightning: '⚡ Lightning reflexes!', veryFast: '🚀 Very fast!', good: '👍 Good!', slow: '🐢 A bit slow',
        rewardAdTitle: '🎬 Watch Ad for 2x Reward!', rewardAdDesc: 'Watch a 30-second ad to double your reward',
        watchAd: 'Watch Ad (2x Reward)', skip: 'Skip', doubleReward: '🎬 2x Reward!',
        gameComplete: '🎉 Game Complete!', coinsEarned: 'Coins Earned!', confirm: 'OK',
        adArea: '📢 Ad Area', inGameAd: 'In-game display', rewardAdAfter: 'Reward ad after game'
    },

    ja: {
        appName: 'CoinMiner', login: 'ログイン', logout: 'ログアウト', coins: 'コイン',
        subtitle: 'ウェブベース仮想通貨マイニング', gamesLink: '🎮 ミニゲームでコインを稼ぐ',
        miningStatus: 'マイニング状態', myCoins: 'マイコイン', hashRate: 'ハッシュレート', totalBlocks: '総ブロック',
        waiting: '待機中', mining: 'マイニング中...', startMining: 'マイニング開始', stopMining: 'マイニング停止',
        difficulty: '難易度', currentHash: '現在のハッシュ', nonce: 'Nonce', attempts: '試行',
        networkInfo: 'ネットワーク情報', connectedMiners: '接続マイナー', totalMinedCoins: '総マイニングコイン',
        myBlocks: 'マイマイニングブロック', recentBlocks: '最近のブロック', miningLog: 'マイニングログ',
        leaderboard: '🏆 コインランキング TOP 10', noData: 'データがありません', loading: '読み込み中...', anonymous: '匿名',
        referralBtn: '👥 友達を招待して50コインゲット', referralTitle: '👥 友達招待',
        referralDesc1: '友達を招待すると', referralDesc2: '獲得！', referralBonus: '友達も', referralBonus2: 'ボーナス！',
        myReferralCode: '招待コード', copyLink: '📋 リンクコピー', share: '📤 シェア', close: '閉じる',
        dailyCheck: '🎁 出席チェック！', consecutiveDays: '日連続出席', day: 'Day', claim: '受け取る',
        disclaimer1: 'このサービスは教育/エンターテイメント目的のマイニングシミュレーションです。',
        disclaimer2: '獲得したコインは実際の仮想通貨ではなく、現金価値はありません。',
        gamesTitle: 'CoinMiner Games', gamesSubtitle: 'ゲームでコインをゲット！', backToMining: '⛏️ マイニングへ', maxReward: '🎁 最大',
        clickerGame: 'スピードクリッカー', clickerDesc: '10秒間でできるだけ多くクリック！',
        reactionGame: '反応速度テスト', reactionDesc: '緑になったら素早くクリック！',
        memoryGame: '数字記憶', memoryDesc: '数字を順番に覚えよう！',
        slotGame: 'ラッキースロット', slotDesc: '広告を見てスロットに挑戦！',
        selectGame: '👆 上からゲームを選択', start: 'スタート！', nextLevel: '次のレベル', level: 'レベル', click: 'クリック',
        wait: '待って...', clickNow: 'クリック！', tooFast: '早すぎ！😅', tryAgain: 'もう一度',
        enterNumbers: '入力！', correct: '正解！🎉', wrong: '間違い 😢', master: '🏆 マスター！', gameOver: 'ゲームオーバー',
        watchAdSpin: '📺 広告を見て回す', watchingAd: '広告視聴中...', spin: '🎰 回す！',
        jackpot: '💎 ジャックポット!!! 💎', luckySeven: '7️⃣ ラッキーセブン！7️⃣', threeMatch: '🎉 3つ揃い！', twoMatch: '👍 2つ揃い', nextTime: '😅 次回...',
        lightning: '⚡ 電光石火！', veryFast: '🚀 超速い！', good: '👍 いいね！', slow: '🐢 ちょっと遅い',
        rewardAdTitle: '🎬 広告を見て報酬2倍！', rewardAdDesc: '30秒の広告を見ると報酬が2倍に',
        watchAd: '広告視聴 (2倍報酬)', skip: 'スキップ', doubleReward: '🎬 2倍報酬！',
        gameComplete: '🎉 ゲーム完了！', coinsEarned: 'コイン獲得！', confirm: '確認',
        adArea: '📢 広告エリア', inGameAd: 'ゲーム中表示', rewardAdAfter: 'ゲーム完了後の報酬広告'
    },

    zh: {
        appName: 'CoinMiner', login: '登录', logout: '退出', coins: '金币',
        subtitle: '网页版加密货币挖矿', gamesLink: '🎮 玩游戏赚金币',
        miningStatus: '挖矿状态', myCoins: '我的金币', hashRate: '哈希率', totalBlocks: '总区块',
        waiting: '等待中', mining: '挖矿中...', startMining: '开始挖矿', stopMining: '停止挖矿',
        difficulty: '难度', currentHash: '当前哈希', nonce: 'Nonce', attempts: '尝试',
        networkInfo: '网络信息', connectedMiners: '在线矿工', totalMinedCoins: '总挖矿金币',
        myBlocks: '我的挖矿区块', recentBlocks: '最近区块', miningLog: '挖矿日志',
        leaderboard: '🏆 金币排行榜 TOP 10', noData: '暂无数据', loading: '加载中...', anonymous: '匿名',
        referralBtn: '👥 邀请好友得50金币', referralTitle: '👥 邀请好友',
        referralDesc1: '邀请好友获得', referralDesc2: '！', referralBonus: '好友也得', referralBonus2: '奖励！',
        myReferralCode: '我的邀请码', copyLink: '📋 复制链接', share: '📤 分享', close: '关闭',
        dailyCheck: '🎁 每日签到！', consecutiveDays: '天连续签到', day: '第', claim: '领取',
        disclaimer1: '本服务是用于教育/娱乐目的的挖矿模拟。',
        disclaimer2: '获得的金币不是真正的加密货币，没有现金价值。',
        gamesTitle: 'CoinMiner 游戏', gamesSubtitle: '玩游戏赚金币！', backToMining: '⛏️ 去挖矿', maxReward: '🎁 最高',
        clickerGame: '极速点击', clickerDesc: '10秒内点击尽可能多次！',
        reactionGame: '反应测试', reactionDesc: '变绿时快速点击！',
        memoryGame: '数字记忆', memoryDesc: '按顺序记住数字！',
        slotGame: '幸运老虎机', slotDesc: '看广告玩老虎机！',
        selectGame: '👆 请选择上方游戏', start: '开始！', nextLevel: '下一关', level: '关卡', click: '点击',
        wait: '等待...', clickNow: '点击！', tooFast: '太快了！😅', tryAgain: '再试一次',
        enterNumbers: '输入！', correct: '正确！🎉', wrong: '错误 😢', master: '🏆 大师！', gameOver: '游戏结束',
        watchAdSpin: '📺 看广告转一转', watchingAd: '正在播放广告...', spin: '🎰 转！',
        jackpot: '💎 大奖!!! 💎', luckySeven: '7️⃣ 幸运七！7️⃣', threeMatch: '🎉 三个相同！', twoMatch: '👍 两个相同', nextTime: '😅 下次好运...',
        lightning: '⚡ 闪电反应！', veryFast: '🚀 超级快！', good: '👍 不错！', slow: '🐢 有点慢',
        rewardAdTitle: '🎬 看广告奖励翻倍！', rewardAdDesc: '观看30秒广告，奖励翻倍',
        watchAd: '看广告 (双倍奖励)', skip: '跳过', doubleReward: '🎬 双倍奖励！',
        gameComplete: '🎉 游戏完成！', coinsEarned: '金币获得！', confirm: '确定',
        adArea: '📢 广告区域', inGameAd: '游戏中展示', rewardAdAfter: '游戏完成后的奖励广告'
    },

    // 스페인어
    es: {
        appName: 'CoinMiner', login: 'Iniciar sesión', logout: 'Cerrar sesión', coins: 'Monedas',
        subtitle: 'Minería de Criptomonedas Web', gamesLink: '🎮 Gana Monedas con Minijuegos',
        miningStatus: 'Estado de Minería', myCoins: 'Mis Monedas', hashRate: 'Tasa de Hash', totalBlocks: 'Bloques Totales',
        waiting: 'Esperando', mining: 'Minando...', startMining: 'Iniciar Minería', stopMining: 'Detener Minería',
        difficulty: 'Dificultad', currentHash: 'Hash Actual', nonce: 'Nonce', attempts: 'Intentos',
        networkInfo: 'Info de Red', connectedMiners: 'Mineros Conectados', totalMinedCoins: 'Monedas Minadas',
        myBlocks: 'Mis Bloques Minados', recentBlocks: 'Bloques Recientes', miningLog: 'Registro de Minería',
        leaderboard: '🏆 Ranking TOP 10', noData: 'Sin datos aún', loading: 'Cargando...', anonymous: 'Anónimo',
        referralBtn: '👥 Invita Amigos y Gana 50 Monedas', referralTitle: '👥 Invitar Amigos',
        referralDesc1: 'Invita a un amigo y obtén', referralDesc2: '!', referralBonus: 'Tu amigo recibe', referralBonus2: 'bono!',
        myReferralCode: 'Mi Código de Referido', copyLink: '📋 Copiar Enlace', share: '📤 Compartir', close: 'Cerrar',
        dailyCheck: '🎁 ¡Check-in Diario!', consecutiveDays: 'días consecutivos', day: 'Día', claim: 'Reclamar',
        disclaimer1: 'Este servicio es una simulación de minería con fines educativos/entretenimiento.',
        disclaimer2: 'Las monedas ganadas no son criptomonedas reales y no tienen valor en efectivo.',
        gamesTitle: 'CoinMiner Juegos', gamesSubtitle: '¡Juega y Gana Monedas!', backToMining: '⛏️ Ir a Minar', maxReward: '🎁 Máx',
        clickerGame: 'Clicker Rápido', clickerDesc: '¡Haz clic lo más rápido posible en 10 segundos!',
        reactionGame: 'Test de Reacción', reactionDesc: '¡Haz clic rápido cuando se ponga verde!',
        memoryGame: 'Memoria de Números', memoryDesc: '¡Recuerda los números en orden!',
        slotGame: 'Tragamonedas', slotDesc: '¡Ve el anuncio y prueba la máquina!',
        selectGame: '👆 Selecciona un juego arriba', start: '¡Empezar!', nextLevel: 'Siguiente Nivel', level: 'Nivel', click: 'Clics',
        wait: 'Espera...', clickNow: '¡Clic!', tooFast: '¡Muy rápido! 😅', tryAgain: 'Intenta de nuevo',
        enterNumbers: '¡Ingresa!', correct: '¡Correcto! 🎉', wrong: 'Incorrecto 😢', master: '🏆 ¡Maestro!', gameOver: 'Fin del Juego',
        watchAdSpin: '📺 Ver Anuncio y Girar', watchingAd: 'Viendo anuncio...', spin: '🎰 ¡Girar!',
        jackpot: '💎 ¡¡¡JACKPOT!!! 💎', luckySeven: '7️⃣ ¡Siete de la Suerte! 7️⃣', threeMatch: '🎉 ¡Tres Iguales!', twoMatch: '👍 Dos Iguales', nextTime: '😅 La próxima...',
        lightning: '⚡ ¡Reflejos relámpago!', veryFast: '🚀 ¡Muy rápido!', good: '👍 ¡Bien!', slow: '🐢 Un poco lento',
        rewardAdTitle: '🎬 ¡Ve el Anuncio para 2x Recompensa!', rewardAdDesc: 'Ve un anuncio de 30 segundos para duplicar tu recompensa',
        watchAd: 'Ver Anuncio (2x Recompensa)', skip: 'Saltar', doubleReward: '🎬 ¡2x Recompensa!',
        gameComplete: '🎉 ¡Juego Completado!', coinsEarned: '¡Monedas Ganadas!', confirm: 'OK',
        adArea: '📢 Área de Anuncios', inGameAd: 'Mostrar en juego', rewardAdAfter: 'Anuncio de recompensa después del juego'
    },

    // 프랑스어
    fr: {
        appName: 'CoinMiner', login: 'Connexion', logout: 'Déconnexion', coins: 'Pièces',
        subtitle: 'Minage de Crypto Web', gamesLink: '🎮 Gagnez des Pièces avec des Mini-Jeux',
        miningStatus: 'État du Minage', myCoins: 'Mes Pièces', hashRate: 'Taux de Hash', totalBlocks: 'Blocs Totaux',
        waiting: 'En attente', mining: 'Minage...', startMining: 'Démarrer le Minage', stopMining: 'Arrêter le Minage',
        difficulty: 'Difficulté', currentHash: 'Hash Actuel', nonce: 'Nonce', attempts: 'Tentatives',
        networkInfo: 'Info Réseau', connectedMiners: 'Mineurs Connectés', totalMinedCoins: 'Pièces Minées',
        myBlocks: 'Mes Blocs Minés', recentBlocks: 'Blocs Récents', miningLog: 'Journal de Minage',
        leaderboard: '🏆 Classement TOP 10', noData: 'Pas encore de données', loading: 'Chargement...', anonymous: 'Anonyme',
        referralBtn: '👥 Invitez des Amis et Gagnez 50 Pièces', referralTitle: '👥 Inviter des Amis',
        referralDesc1: 'Invitez un ami et obtenez', referralDesc2: '!', referralBonus: 'Votre ami reçoit', referralBonus2: 'bonus!',
        myReferralCode: 'Mon Code de Parrainage', copyLink: '📋 Copier le Lien', share: '📤 Partager', close: 'Fermer',
        dailyCheck: '🎁 Connexion Quotidienne!', consecutiveDays: 'jours consécutifs', day: 'Jour', claim: 'Réclamer',
        disclaimer1: 'Ce service est une simulation de minage à des fins éducatives/divertissement.',
        disclaimer2: 'Les pièces gagnées ne sont pas de vraies cryptomonnaies et n\'ont aucune valeur monétaire.',
        gamesTitle: 'CoinMiner Jeux', gamesSubtitle: 'Jouez et Gagnez des Pièces!', backToMining: '⛏️ Aller Miner', maxReward: '🎁 Max',
        clickerGame: 'Clicker Rapide', clickerDesc: 'Cliquez le plus vite possible en 10 secondes!',
        reactionGame: 'Test de Réaction', reactionDesc: 'Cliquez rapidement quand ça devient vert!',
        memoryGame: 'Mémoire des Nombres', memoryDesc: 'Retenez les nombres dans l\'ordre!',
        slotGame: 'Machine à Sous', slotDesc: 'Regardez une pub et essayez la machine!',
        selectGame: '👆 Sélectionnez un jeu ci-dessus', start: 'Commencer!', nextLevel: 'Niveau Suivant', level: 'Niveau', click: 'Clics',
        wait: 'Attendez...', clickNow: 'Cliquez!', tooFast: 'Trop rapide! 😅', tryAgain: 'Réessayez',
        enterNumbers: 'Entrez!', correct: 'Correct! 🎉', wrong: 'Faux 😢', master: '🏆 Maître!', gameOver: 'Fin de Partie',
        watchAdSpin: '📺 Voir Pub et Tourner', watchingAd: 'Visionnage de pub...', spin: '🎰 Tourner!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Sept Chanceux! 7️⃣', threeMatch: '🎉 Trois Identiques!', twoMatch: '👍 Deux Identiques', nextTime: '😅 La prochaine fois...',
        lightning: '⚡ Réflexes éclairs!', veryFast: '🚀 Très rapide!', good: '👍 Bien!', slow: '🐢 Un peu lent',
        rewardAdTitle: '🎬 Regardez la Pub pour 2x Récompense!', rewardAdDesc: 'Regardez une pub de 30 secondes pour doubler votre récompense',
        watchAd: 'Voir Pub (2x Récompense)', skip: 'Passer', doubleReward: '🎬 2x Récompense!',
        gameComplete: '🎉 Jeu Terminé!', coinsEarned: 'Pièces Gagnées!', confirm: 'OK',
        adArea: '📢 Zone Pub', inGameAd: 'Affichage en jeu', rewardAdAfter: 'Pub récompense après le jeu'
    },

    // 독일어
    de: {
        appName: 'CoinMiner', login: 'Anmelden', logout: 'Abmelden', coins: 'Münzen',
        subtitle: 'Webbasiertes Krypto-Mining', gamesLink: '🎮 Verdiene Münzen mit Minispielen',
        miningStatus: 'Mining-Status', myCoins: 'Meine Münzen', hashRate: 'Hash-Rate', totalBlocks: 'Gesamtblöcke',
        waiting: 'Warten', mining: 'Mining...', startMining: 'Mining Starten', stopMining: 'Mining Stoppen',
        difficulty: 'Schwierigkeit', currentHash: 'Aktueller Hash', nonce: 'Nonce', attempts: 'Versuche',
        networkInfo: 'Netzwerk-Info', connectedMiners: 'Verbundene Miner', totalMinedCoins: 'Geschürfte Münzen',
        myBlocks: 'Meine Geschürften Blöcke', recentBlocks: 'Neueste Blöcke', miningLog: 'Mining-Protokoll',
        leaderboard: '🏆 Münzen-Ranking TOP 10', noData: 'Noch keine Daten', loading: 'Laden...', anonymous: 'Anonym',
        referralBtn: '👥 Freunde Einladen & 50 Münzen Erhalten', referralTitle: '👥 Freunde Einladen',
        referralDesc1: 'Lade einen Freund ein und erhalte', referralDesc2: '!', referralBonus: 'Dein Freund erhält', referralBonus2: 'Bonus!',
        myReferralCode: 'Mein Empfehlungscode', copyLink: '📋 Link Kopieren', share: '📤 Teilen', close: 'Schließen',
        dailyCheck: '🎁 Täglicher Check-in!', consecutiveDays: 'aufeinanderfolgende Tage', day: 'Tag', claim: 'Abholen',
        disclaimer1: 'Dieser Dienst ist eine Mining-Simulation zu Bildungs-/Unterhaltungszwecken.',
        disclaimer2: 'Verdiente Münzen sind keine echten Kryptowährungen und haben keinen Geldwert.',
        gamesTitle: 'CoinMiner Spiele', gamesSubtitle: 'Spiele und Verdiene Münzen!', backToMining: '⛏️ Zum Mining', maxReward: '🎁 Max',
        clickerGame: 'Schnell-Klicker', clickerDesc: 'Klicke so schnell wie möglich in 10 Sekunden!',
        reactionGame: 'Reaktionstest', reactionDesc: 'Klicke schnell wenn es grün wird!',
        memoryGame: 'Zahlen-Gedächtnis', memoryDesc: 'Merke dir die Zahlen der Reihe nach!',
        slotGame: 'Glücks-Slot', slotDesc: 'Schau dir eine Werbung an und versuche die Maschine!',
        selectGame: '👆 Wähle ein Spiel oben', start: 'Start!', nextLevel: 'Nächstes Level', level: 'Level', click: 'Klicks',
        wait: 'Warte...', clickNow: 'Klick!', tooFast: 'Zu schnell! 😅', tryAgain: 'Nochmal versuchen',
        enterNumbers: 'Eingeben!', correct: 'Richtig! 🎉', wrong: 'Falsch 😢', master: '🏆 Meister!', gameOver: 'Spiel Vorbei',
        watchAdSpin: '📺 Werbung Ansehen & Drehen', watchingAd: 'Werbung läuft...', spin: '🎰 Drehen!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Glückliche Sieben! 7️⃣', threeMatch: '🎉 Drei Gleiche!', twoMatch: '👍 Zwei Gleiche', nextTime: '😅 Nächstes Mal...',
        lightning: '⚡ Blitzschnelle Reflexe!', veryFast: '🚀 Sehr schnell!', good: '👍 Gut!', slow: '🐢 Etwas langsam',
        rewardAdTitle: '🎬 Werbung für 2x Belohnung!', rewardAdDesc: 'Schau dir eine 30-Sekunden-Werbung an um deine Belohnung zu verdoppeln',
        watchAd: 'Werbung Ansehen (2x Belohnung)', skip: 'Überspringen', doubleReward: '🎬 2x Belohnung!',
        gameComplete: '🎉 Spiel Abgeschlossen!', coinsEarned: 'Münzen Verdient!', confirm: 'OK',
        adArea: '📢 Werbefläche', inGameAd: 'Im-Spiel Anzeige', rewardAdAfter: 'Belohnungswerbung nach dem Spiel'
    },

    // 포르투갈어
    pt: {
        appName: 'CoinMiner', login: 'Entrar', logout: 'Sair', coins: 'Moedas',
        subtitle: 'Mineração de Cripto na Web', gamesLink: '🎮 Ganhe Moedas com Mini-Jogos',
        miningStatus: 'Status da Mineração', myCoins: 'Minhas Moedas', hashRate: 'Taxa de Hash', totalBlocks: 'Blocos Totais',
        waiting: 'Aguardando', mining: 'Minerando...', startMining: 'Iniciar Mineração', stopMining: 'Parar Mineração',
        difficulty: 'Dificuldade', currentHash: 'Hash Atual', nonce: 'Nonce', attempts: 'Tentativas',
        networkInfo: 'Info da Rede', connectedMiners: 'Mineradores Conectados', totalMinedCoins: 'Moedas Mineradas',
        myBlocks: 'Meus Blocos Minerados', recentBlocks: 'Blocos Recentes', miningLog: 'Log de Mineração',
        leaderboard: '🏆 Ranking TOP 10', noData: 'Sem dados ainda', loading: 'Carregando...', anonymous: 'Anônimo',
        referralBtn: '👥 Convide Amigos e Ganhe 50 Moedas', referralTitle: '👥 Convidar Amigos',
        referralDesc1: 'Convide um amigo e ganhe', referralDesc2: '!', referralBonus: 'Seu amigo recebe', referralBonus2: 'bônus!',
        myReferralCode: 'Meu Código de Indicação', copyLink: '📋 Copiar Link', share: '📤 Compartilhar', close: 'Fechar',
        dailyCheck: '🎁 Check-in Diário!', consecutiveDays: 'dias consecutivos', day: 'Dia', claim: 'Resgatar',
        disclaimer1: 'Este serviço é uma simulação de mineração para fins educacionais/entretenimento.',
        disclaimer2: 'Moedas ganhas não são criptomoedas reais e não têm valor em dinheiro.',
        gamesTitle: 'CoinMiner Jogos', gamesSubtitle: 'Jogue e Ganhe Moedas!', backToMining: '⛏️ Ir Minerar', maxReward: '🎁 Máx',
        clickerGame: 'Clicker Rápido', clickerDesc: 'Clique o mais rápido possível em 10 segundos!',
        reactionGame: 'Teste de Reação', reactionDesc: 'Clique rápido quando ficar verde!',
        memoryGame: 'Memória de Números', memoryDesc: 'Lembre os números em ordem!',
        slotGame: 'Caça-Níqueis', slotDesc: 'Assista um anúncio e tente a máquina!',
        selectGame: '👆 Selecione um jogo acima', start: 'Começar!', nextLevel: 'Próximo Nível', level: 'Nível', click: 'Cliques',
        wait: 'Aguarde...', clickNow: 'Clique!', tooFast: 'Muito rápido! 😅', tryAgain: 'Tente novamente',
        enterNumbers: 'Digite!', correct: 'Correto! 🎉', wrong: 'Errado 😢', master: '🏆 Mestre!', gameOver: 'Fim de Jogo',
        watchAdSpin: '📺 Ver Anúncio e Girar', watchingAd: 'Assistindo anúncio...', spin: '🎰 Girar!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Sete da Sorte! 7️⃣', threeMatch: '🎉 Três Iguais!', twoMatch: '👍 Dois Iguais', nextTime: '😅 Na próxima...',
        lightning: '⚡ Reflexos relâmpago!', veryFast: '🚀 Muito rápido!', good: '👍 Bom!', slow: '🐢 Um pouco lento',
        rewardAdTitle: '🎬 Assista Anúncio para 2x Recompensa!', rewardAdDesc: 'Assista um anúncio de 30 segundos para dobrar sua recompensa',
        watchAd: 'Ver Anúncio (2x Recompensa)', skip: 'Pular', doubleReward: '🎬 2x Recompensa!',
        gameComplete: '🎉 Jogo Completo!', coinsEarned: 'Moedas Ganhas!', confirm: 'OK',
        adArea: '📢 Área de Anúncios', inGameAd: 'Exibição no jogo', rewardAdAfter: 'Anúncio de recompensa após o jogo'
    },

    // 러시아어
    ru: {
        appName: 'CoinMiner', login: 'Войти', logout: 'Выйти', coins: 'Монеты',
        subtitle: 'Веб-майнинг Криптовалюты', gamesLink: '🎮 Заработай Монеты в Мини-Играх',
        miningStatus: 'Статус Майнинга', myCoins: 'Мои Монеты', hashRate: 'Хешрейт', totalBlocks: 'Всего Блоков',
        waiting: 'Ожидание', mining: 'Майнинг...', startMining: 'Начать Майнинг', stopMining: 'Остановить Майнинг',
        difficulty: 'Сложность', currentHash: 'Текущий Хеш', nonce: 'Nonce', attempts: 'Попытки',
        networkInfo: 'Инфо о Сети', connectedMiners: 'Подключенные Майнеры', totalMinedCoins: 'Добыто Монет',
        myBlocks: 'Мои Добытые Блоки', recentBlocks: 'Последние Блоки', miningLog: 'Журнал Майнинга',
        leaderboard: '🏆 Рейтинг Монет TOP 10', noData: 'Пока нет данных', loading: 'Загрузка...', anonymous: 'Аноним',
        referralBtn: '👥 Пригласи Друзей и Получи 50 Монет', referralTitle: '👥 Пригласить Друзей',
        referralDesc1: 'Пригласи друга и получи', referralDesc2: '!', referralBonus: 'Друг получает', referralBonus2: 'бонус!',
        myReferralCode: 'Мой Реферальный Код', copyLink: '📋 Копировать Ссылку', share: '📤 Поделиться', close: 'Закрыть',
        dailyCheck: '🎁 Ежедневный Вход!', consecutiveDays: 'дней подряд', day: 'День', claim: 'Получить',
        disclaimer1: 'Этот сервис является симуляцией майнинга в образовательных/развлекательных целях.',
        disclaimer2: 'Заработанные монеты не являются реальной криптовалютой и не имеют денежной ценности.',
        gamesTitle: 'CoinMiner Игры', gamesSubtitle: 'Играй и Зарабатывай Монеты!', backToMining: '⛏️ К Майнингу', maxReward: '🎁 Макс',
        clickerGame: 'Быстрый Кликер', clickerDesc: 'Кликай как можно быстрее за 10 секунд!',
        reactionGame: 'Тест Реакции', reactionDesc: 'Кликни быстро когда станет зеленым!',
        memoryGame: 'Память Чисел', memoryDesc: 'Запомни числа по порядку!',
        slotGame: 'Счастливый Слот', slotDesc: 'Посмотри рекламу и попробуй автомат!',
        selectGame: '👆 Выбери игру выше', start: 'Старт!', nextLevel: 'Следующий Уровень', level: 'Уровень', click: 'Клики',
        wait: 'Жди...', clickNow: 'Клик!', tooFast: 'Слишком быстро! 😅', tryAgain: 'Попробуй снова',
        enterNumbers: 'Введи!', correct: 'Правильно! 🎉', wrong: 'Неправильно 😢', master: '🏆 Мастер!', gameOver: 'Игра Окончена',
        watchAdSpin: '📺 Смотреть Рекламу и Крутить', watchingAd: 'Просмотр рекламы...', spin: '🎰 Крутить!',
        jackpot: '💎 ДЖЕКПОТ!!! 💎', luckySeven: '7️⃣ Счастливая Семерка! 7️⃣', threeMatch: '🎉 Три Одинаковых!', twoMatch: '👍 Два Одинаковых', nextTime: '😅 В следующий раз...',
        lightning: '⚡ Молниеносные рефлексы!', veryFast: '🚀 Очень быстро!', good: '👍 Хорошо!', slow: '🐢 Немного медленно',
        rewardAdTitle: '🎬 Смотри Рекламу для 2x Награды!', rewardAdDesc: 'Посмотри 30-секундную рекламу чтобы удвоить награду',
        watchAd: 'Смотреть Рекламу (2x Награда)', skip: 'Пропустить', doubleReward: '🎬 2x Награда!',
        gameComplete: '🎉 Игра Завершена!', coinsEarned: 'Монет Заработано!', confirm: 'OK',
        adArea: '📢 Рекламная Зона', inGameAd: 'Показ в игре', rewardAdAfter: 'Реклама с наградой после игры'
    },

    // 베트남어
    vi: {
        appName: 'CoinMiner', login: 'Đăng nhập', logout: 'Đăng xuất', coins: 'Xu',
        subtitle: 'Đào Tiền Điện Tử Trên Web', gamesLink: '🎮 Kiếm Xu Với Mini Game',
        miningStatus: 'Trạng Thái Đào', myCoins: 'Xu Của Tôi', hashRate: 'Tốc Độ Hash', totalBlocks: 'Tổng Block',
        waiting: 'Đang chờ', mining: 'Đang đào...', startMining: 'Bắt Đầu Đào', stopMining: 'Dừng Đào',
        difficulty: 'Độ Khó', currentHash: 'Hash Hiện Tại', nonce: 'Nonce', attempts: 'Lần thử',
        networkInfo: 'Thông Tin Mạng', connectedMiners: 'Thợ Đào Kết Nối', totalMinedCoins: 'Tổng Xu Đào Được',
        myBlocks: 'Block Tôi Đào', recentBlocks: 'Block Gần Đây', miningLog: 'Nhật Ký Đào',
        leaderboard: '🏆 Bảng Xếp Hạng TOP 10', noData: 'Chưa có dữ liệu', loading: 'Đang tải...', anonymous: 'Ẩn danh',
        referralBtn: '👥 Mời Bạn Bè Nhận 50 Xu', referralTitle: '👥 Mời Bạn Bè',
        referralDesc1: 'Mời bạn bè và nhận', referralDesc2: '!', referralBonus: 'Bạn bè nhận', referralBonus2: 'thưởng!',
        myReferralCode: 'Mã Giới Thiệu', copyLink: '📋 Sao Chép Link', share: '📤 Chia Sẻ', close: 'Đóng',
        dailyCheck: '🎁 Điểm Danh Hàng Ngày!', consecutiveDays: 'ngày liên tiếp', day: 'Ngày', claim: 'Nhận',
        disclaimer1: 'Dịch vụ này là mô phỏng đào coin với mục đích giáo dục/giải trí.',
        disclaimer2: 'Xu kiếm được không phải tiền điện tử thật và không có giá trị tiền mặt.',
        gamesTitle: 'CoinMiner Games', gamesSubtitle: 'Chơi Game Kiếm Xu!', backToMining: '⛏️ Đi Đào', maxReward: '🎁 Tối đa',
        clickerGame: 'Click Nhanh', clickerDesc: 'Click nhanh nhất có thể trong 10 giây!',
        reactionGame: 'Test Phản Xạ', reactionDesc: 'Click nhanh khi chuyển xanh!',
        memoryGame: 'Nhớ Số', memoryDesc: 'Nhớ các số theo thứ tự!',
        slotGame: 'Slot May Mắn', slotDesc: 'Xem quảng cáo và thử máy!',
        selectGame: '👆 Chọn game ở trên', start: 'Bắt đầu!', nextLevel: 'Level Tiếp', level: 'Level', click: 'Lần click',
        wait: 'Chờ...', clickNow: 'Click!', tooFast: 'Nhanh quá! 😅', tryAgain: 'Thử lại',
        enterNumbers: 'Nhập!', correct: 'Đúng! 🎉', wrong: 'Sai 😢', master: '🏆 Cao Thủ!', gameOver: 'Kết Thúc',
        watchAdSpin: '📺 Xem QC và Quay', watchingAd: 'Đang xem quảng cáo...', spin: '🎰 Quay!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Bảy May Mắn! 7️⃣', threeMatch: '🎉 Ba Giống Nhau!', twoMatch: '👍 Hai Giống Nhau', nextTime: '😅 Lần sau...',
        lightning: '⚡ Phản xạ tia chớp!', veryFast: '🚀 Rất nhanh!', good: '👍 Tốt!', slow: '🐢 Hơi chậm',
        rewardAdTitle: '🎬 Xem QC Nhận 2x Thưởng!', rewardAdDesc: 'Xem quảng cáo 30 giây để nhân đôi thưởng',
        watchAd: 'Xem QC (2x Thưởng)', skip: 'Bỏ qua', doubleReward: '🎬 2x Thưởng!',
        gameComplete: '🎉 Hoàn Thành!', coinsEarned: 'Xu Kiếm Được!', confirm: 'OK',
        adArea: '📢 Khu Quảng Cáo', inGameAd: 'Hiển thị trong game', rewardAdAfter: 'QC thưởng sau game'
    },

    // 태국어
    th: {
        appName: 'CoinMiner', login: 'เข้าสู่ระบบ', logout: 'ออกจากระบบ', coins: 'เหรียญ',
        subtitle: 'ขุดคริปโตบนเว็บ', gamesLink: '🎮 รับเหรียญจากมินิเกม',
        miningStatus: 'สถานะการขุด', myCoins: 'เหรียญของฉัน', hashRate: 'อัตราแฮช', totalBlocks: 'บล็อกทั้งหมด',
        waiting: 'รอ', mining: 'กำลังขุด...', startMining: 'เริ่มขุด', stopMining: 'หยุดขุด',
        difficulty: 'ความยาก', currentHash: 'แฮชปัจจุบัน', nonce: 'Nonce', attempts: 'ครั้งที่ลอง',
        networkInfo: 'ข้อมูลเครือข่าย', connectedMiners: 'นักขุดที่เชื่อมต่อ', totalMinedCoins: 'เหรียญที่ขุดได้',
        myBlocks: 'บล็อกที่ฉันขุด', recentBlocks: 'บล็อกล่าสุด', miningLog: 'บันทึกการขุด',
        leaderboard: '🏆 อันดับเหรียญ TOP 10', noData: 'ยังไม่มีข้อมูล', loading: 'กำลังโหลด...', anonymous: 'ไม่ระบุชื่อ',
        referralBtn: '👥 ชวนเพื่อนรับ 50 เหรียญ', referralTitle: '👥 ชวนเพื่อน',
        referralDesc1: 'ชวนเพื่อนและรับ', referralDesc2: '!', referralBonus: 'เพื่อนได้รับ', referralBonus2: 'โบนัส!',
        myReferralCode: 'รหัสเชิญของฉัน', copyLink: '📋 คัดลอกลิงก์', share: '📤 แชร์', close: 'ปิด',
        dailyCheck: '🎁 เช็คอินรายวัน!', consecutiveDays: 'วันติดต่อกัน', day: 'วัน', claim: 'รับ',
        disclaimer1: 'บริการนี้เป็นการจำลองการขุดเพื่อการศึกษา/ความบันเทิง',
        disclaimer2: 'เหรียญที่ได้ไม่ใช่คริปโตจริงและไม่มีมูลค่าเงินสด',
        gamesTitle: 'CoinMiner Games', gamesSubtitle: 'เล่นเกมรับเหรียญ!', backToMining: '⛏️ ไปขุด', maxReward: '🎁 สูงสุด',
        clickerGame: 'คลิกเร็ว', clickerDesc: 'คลิกให้เร็วที่สุดใน 10 วินาที!',
        reactionGame: 'ทดสอบปฏิกิริยา', reactionDesc: 'คลิกเร็วเมื่อเปลี่ยนเป็นสีเขียว!',
        memoryGame: 'จำตัวเลข', memoryDesc: 'จำตัวเลขตามลำดับ!',
        slotGame: 'สล็อตโชคดี', slotDesc: 'ดูโฆษณาแล้วลองเครื่อง!',
        selectGame: '👆 เลือกเกมด้านบน', start: 'เริ่ม!', nextLevel: 'ด่านถัดไป', level: 'ด่าน', click: 'คลิก',
        wait: 'รอ...', clickNow: 'คลิก!', tooFast: 'เร็วไป! 😅', tryAgain: 'ลองอีกครั้ง',
        enterNumbers: 'ใส่!', correct: 'ถูกต้อง! 🎉', wrong: 'ผิด 😢', master: '🏆 เทพ!', gameOver: 'จบเกม',
        watchAdSpin: '📺 ดูโฆษณาแล้วหมุน', watchingAd: 'กำลังดูโฆษณา...', spin: '🎰 หมุน!',
        jackpot: '💎 แจ็คพอต!!! 💎', luckySeven: '7️⃣ เซเว่นนำโชค! 7️⃣', threeMatch: '🎉 สามเหมือนกัน!', twoMatch: '👍 สองเหมือนกัน', nextTime: '😅 ครั้งหน้า...',
        lightning: '⚡ ปฏิกิริยาสายฟ้า!', veryFast: '🚀 เร็วมาก!', good: '👍 ดี!', slow: '🐢 ช้าหน่อย',
        rewardAdTitle: '🎬 ดูโฆษณารับ 2x รางวัล!', rewardAdDesc: 'ดูโฆษณา 30 วินาทีเพื่อรับรางวัลสองเท่า',
        watchAd: 'ดูโฆษณา (2x รางวัล)', skip: 'ข้าม', doubleReward: '🎬 2x รางวัล!',
        gameComplete: '🎉 เกมเสร็จสิ้น!', coinsEarned: 'ได้รับเหรียญ!', confirm: 'ตกลง',
        adArea: '📢 พื้นที่โฆษณา', inGameAd: 'แสดงในเกม', rewardAdAfter: 'โฆษณารางวัลหลังเกม'
    },

    // 인도네시아어
    id: {
        appName: 'CoinMiner', login: 'Masuk', logout: 'Keluar', coins: 'Koin',
        subtitle: 'Mining Kripto Berbasis Web', gamesLink: '🎮 Dapatkan Koin dari Mini Game',
        miningStatus: 'Status Mining', myCoins: 'Koin Saya', hashRate: 'Hash Rate', totalBlocks: 'Total Blok',
        waiting: 'Menunggu', mining: 'Mining...', startMining: 'Mulai Mining', stopMining: 'Stop Mining',
        difficulty: 'Kesulitan', currentHash: 'Hash Saat Ini', nonce: 'Nonce', attempts: 'Percobaan',
        networkInfo: 'Info Jaringan', connectedMiners: 'Penambang Terhubung', totalMinedCoins: 'Total Koin Ditambang',
        myBlocks: 'Blok Saya', recentBlocks: 'Blok Terbaru', miningLog: 'Log Mining',
        leaderboard: '🏆 Peringkat Koin TOP 10', noData: 'Belum ada data', loading: 'Memuat...', anonymous: 'Anonim',
        referralBtn: '👥 Undang Teman Dapat 50 Koin', referralTitle: '👥 Undang Teman',
        referralDesc1: 'Undang teman dan dapatkan', referralDesc2: '!', referralBonus: 'Teman dapat', referralBonus2: 'bonus!',
        myReferralCode: 'Kode Referral Saya', copyLink: '📋 Salin Link', share: '📤 Bagikan', close: 'Tutup',
        dailyCheck: '🎁 Check-in Harian!', consecutiveDays: 'hari berturut-turut', day: 'Hari', claim: 'Klaim',
        disclaimer1: 'Layanan ini adalah simulasi mining untuk tujuan edukasi/hiburan.',
        disclaimer2: 'Koin yang didapat bukan kripto asli dan tidak memiliki nilai uang.',
        gamesTitle: 'CoinMiner Games', gamesSubtitle: 'Main Game Dapat Koin!', backToMining: '⛏️ Ke Mining', maxReward: '🎁 Maks',
        clickerGame: 'Klik Cepat', clickerDesc: 'Klik secepat mungkin dalam 10 detik!',
        reactionGame: 'Tes Reaksi', reactionDesc: 'Klik cepat saat berubah hijau!',
        memoryGame: 'Ingat Angka', memoryDesc: 'Ingat angka-angka secara berurutan!',
        slotGame: 'Slot Beruntung', slotDesc: 'Tonton iklan dan coba mesinnya!',
        selectGame: '👆 Pilih game di atas', start: 'Mulai!', nextLevel: 'Level Berikutnya', level: 'Level', click: 'Klik',
        wait: 'Tunggu...', clickNow: 'Klik!', tooFast: 'Terlalu cepat! 😅', tryAgain: 'Coba lagi',
        enterNumbers: 'Masukkan!', correct: 'Benar! 🎉', wrong: 'Salah 😢', master: '🏆 Master!', gameOver: 'Game Over',
        watchAdSpin: '📺 Tonton Iklan & Putar', watchingAd: 'Menonton iklan...', spin: '🎰 Putar!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Tujuh Beruntung! 7️⃣', threeMatch: '🎉 Tiga Sama!', twoMatch: '👍 Dua Sama', nextTime: '😅 Lain kali...',
        lightning: '⚡ Refleks kilat!', veryFast: '🚀 Sangat cepat!', good: '👍 Bagus!', slow: '🐢 Agak lambat',
        rewardAdTitle: '🎬 Tonton Iklan untuk 2x Hadiah!', rewardAdDesc: 'Tonton iklan 30 detik untuk gandakan hadiah',
        watchAd: 'Tonton Iklan (2x Hadiah)', skip: 'Lewati', doubleReward: '🎬 2x Hadiah!',
        gameComplete: '🎉 Game Selesai!', coinsEarned: 'Koin Didapat!', confirm: 'OK',
        adArea: '📢 Area Iklan', inGameAd: 'Tampilan dalam game', rewardAdAfter: 'Iklan hadiah setelah game'
    },

    // 아랍어
    ar: {
        appName: 'CoinMiner', login: 'تسجيل الدخول', logout: 'تسجيل الخروج', coins: 'عملات',
        subtitle: 'تعدين العملات المشفرة عبر الويب', gamesLink: '🎮 اكسب عملات من الألعاب المصغرة',
        miningStatus: 'حالة التعدين', myCoins: 'عملاتي', hashRate: 'معدل الهاش', totalBlocks: 'إجمالي الكتل',
        waiting: 'انتظار', mining: 'جاري التعدين...', startMining: 'بدء التعدين', stopMining: 'إيقاف التعدين',
        difficulty: 'الصعوبة', currentHash: 'الهاش الحالي', nonce: 'Nonce', attempts: 'المحاولات',
        networkInfo: 'معلومات الشبكة', connectedMiners: 'المعدنون المتصلون', totalMinedCoins: 'إجمالي العملات المعدنة',
        myBlocks: 'كتلي المعدنة', recentBlocks: 'الكتل الأخيرة', miningLog: 'سجل التعدين',
        leaderboard: '🏆 ترتيب العملات TOP 10', noData: 'لا توجد بيانات بعد', loading: 'جاري التحميل...', anonymous: 'مجهول',
        referralBtn: '👥 ادعُ أصدقاء واحصل على 50 عملة', referralTitle: '👥 دعوة الأصدقاء',
        referralDesc1: 'ادعُ صديقاً واحصل على', referralDesc2: '!', referralBonus: 'صديقك يحصل على', referralBonus2: 'مكافأة!',
        myReferralCode: 'رمز الإحالة الخاص بي', copyLink: '📋 نسخ الرابط', share: '📤 مشاركة', close: 'إغلاق',
        dailyCheck: '🎁 تسجيل الدخول اليومي!', consecutiveDays: 'أيام متتالية', day: 'يوم', claim: 'استلام',
        disclaimer1: 'هذه الخدمة محاكاة تعدين لأغراض تعليمية/ترفيهية.',
        disclaimer2: 'العملات المكتسبة ليست عملات مشفرة حقيقية وليس لها قيمة نقدية.',
        gamesTitle: 'ألعاب CoinMiner', gamesSubtitle: 'العب واكسب عملات!', backToMining: '⛏️ الذهاب للتعدين', maxReward: '🎁 الحد الأقصى',
        clickerGame: 'النقر السريع', clickerDesc: 'انقر بأسرع ما يمكن في 10 ثوانٍ!',
        reactionGame: 'اختبار رد الفعل', reactionDesc: 'انقر بسرعة عندما يتحول للأخضر!',
        memoryGame: 'تذكر الأرقام', memoryDesc: 'تذكر الأرقام بالترتيب!',
        slotGame: 'السلوت المحظوظ', slotDesc: 'شاهد إعلان وجرب الآلة!',
        selectGame: '👆 اختر لعبة أعلاه', start: 'ابدأ!', nextLevel: 'المستوى التالي', level: 'المستوى', click: 'نقرات',
        wait: 'انتظر...', clickNow: 'انقر!', tooFast: 'سريع جداً! 😅', tryAgain: 'حاول مرة أخرى',
        enterNumbers: 'أدخل!', correct: 'صحيح! 🎉', wrong: 'خطأ 😢', master: '🏆 ماستر!', gameOver: 'انتهت اللعبة',
        watchAdSpin: '📺 شاهد إعلان وأدر', watchingAd: 'مشاهدة الإعلان...', spin: '🎰 أدر!',
        jackpot: '💎 جاكبوت!!! 💎', luckySeven: '7️⃣ سبعة محظوظة! 7️⃣', threeMatch: '🎉 ثلاثة متطابقة!', twoMatch: '👍 اثنان متطابقان', nextTime: '😅 المرة القادمة...',
        lightning: '⚡ ردود فعل خاطفة!', veryFast: '🚀 سريع جداً!', good: '👍 جيد!', slow: '🐢 بطيء قليلاً',
        rewardAdTitle: '🎬 شاهد إعلان لمكافأة 2x!', rewardAdDesc: 'شاهد إعلان 30 ثانية لمضاعفة مكافأتك',
        watchAd: 'شاهد إعلان (2x مكافأة)', skip: 'تخطي', doubleReward: '🎬 2x مكافأة!',
        gameComplete: '🎉 اللعبة مكتملة!', coinsEarned: 'عملات مكتسبة!', confirm: 'موافق',
        adArea: '📢 منطقة الإعلان', inGameAd: 'عرض داخل اللعبة', rewardAdAfter: 'إعلان مكافأة بعد اللعبة'
    },

    // 힌디어
    hi: {
        appName: 'CoinMiner', login: 'लॉगिन', logout: 'लॉगआउट', coins: 'सिक्के',
        subtitle: 'वेब-आधारित क्रिप्टो माइनिंग', gamesLink: '🎮 मिनी गेम्स से सिक्के कमाएं',
        miningStatus: 'माइनिंग स्थिति', myCoins: 'मेरे सिक्के', hashRate: 'हैश रेट', totalBlocks: 'कुल ब्लॉक',
        waiting: 'प्रतीक्षा', mining: 'माइनिंग...', startMining: 'माइनिंग शुरू', stopMining: 'माइनिंग रोकें',
        difficulty: 'कठिनाई', currentHash: 'वर्तमान हैश', nonce: 'Nonce', attempts: 'प्रयास',
        networkInfo: 'नेटवर्क जानकारी', connectedMiners: 'जुड़े माइनर्स', totalMinedCoins: 'कुल खनित सिक्के',
        myBlocks: 'मेरे खनित ब्लॉक', recentBlocks: 'हाल के ब्लॉक', miningLog: 'माइनिंग लॉग',
        leaderboard: '🏆 सिक्का रैंकिंग TOP 10', noData: 'अभी तक कोई डेटा नहीं', loading: 'लोड हो रहा...', anonymous: 'गुमनाम',
        referralBtn: '👥 दोस्तों को आमंत्रित करें और 50 सिक्के पाएं', referralTitle: '👥 दोस्तों को आमंत्रित करें',
        referralDesc1: 'दोस्त को आमंत्रित करें और पाएं', referralDesc2: '!', referralBonus: 'दोस्त को मिलता है', referralBonus2: 'बोनस!',
        myReferralCode: 'मेरा रेफरल कोड', copyLink: '📋 लिंक कॉपी करें', share: '📤 शेयर करें', close: 'बंद करें',
        dailyCheck: '🎁 दैनिक चेक-इन!', consecutiveDays: 'लगातार दिन', day: 'दिन', claim: 'दावा करें',
        disclaimer1: 'यह सेवा शैक्षिक/मनोरंजन उद्देश्यों के लिए माइनिंग सिमुलेशन है।',
        disclaimer2: 'अर्जित सिक्के असली क्रिप्टोकरेंसी नहीं हैं और इनकी कोई नकद कीमत नहीं है।',
        gamesTitle: 'CoinMiner गेम्स', gamesSubtitle: 'खेलें और सिक्के कमाएं!', backToMining: '⛏️ माइनिंग पर जाएं', maxReward: '🎁 अधिकतम',
        clickerGame: 'स्पीड क्लिकर', clickerDesc: '10 सेकंड में जितना हो सके क्लिक करें!',
        reactionGame: 'रिएक्शन टेस्ट', reactionDesc: 'हरा होने पर जल्दी क्लिक करें!',
        memoryGame: 'नंबर मेमोरी', memoryDesc: 'क्रम में नंबर याद रखें!',
        slotGame: 'लकी स्लॉट', slotDesc: 'विज्ञापन देखें और मशीन आज़माएं!',
        selectGame: '👆 ऊपर से गेम चुनें', start: 'शुरू!', nextLevel: 'अगला लेवल', level: 'लेवल', click: 'क्लिक',
        wait: 'रुकें...', clickNow: 'क्लिक करें!', tooFast: 'बहुत तेज़! 😅', tryAgain: 'फिर से कोशिश करें',
        enterNumbers: 'दर्ज करें!', correct: 'सही! 🎉', wrong: 'गलत 😢', master: '🏆 मास्टर!', gameOver: 'गेम ओवर',
        watchAdSpin: '📺 विज्ञापन देखें और घुमाएं', watchingAd: 'विज्ञापन देख रहे हैं...', spin: '🎰 घुमाएं!',
        jackpot: '💎 जैकपॉट!!! 💎', luckySeven: '7️⃣ लकी सेवन! 7️⃣', threeMatch: '🎉 तीन मैच!', twoMatch: '👍 दो मैच', nextTime: '😅 अगली बार...',
        lightning: '⚡ बिजली जैसी प्रतिक्रिया!', veryFast: '🚀 बहुत तेज़!', good: '👍 अच्छा!', slow: '🐢 थोड़ा धीमा',
        rewardAdTitle: '🎬 2x इनाम के लिए विज्ञापन देखें!', rewardAdDesc: 'अपना इनाम दोगुना करने के लिए 30 सेकंड का विज्ञापन देखें',
        watchAd: 'विज्ञापन देखें (2x इनाम)', skip: 'छोड़ें', doubleReward: '🎬 2x इनाम!',
        gameComplete: '🎉 गेम पूरा!', coinsEarned: 'सिक्के कमाए!', confirm: 'ठीक है',
        adArea: '📢 विज्ञापन क्षेत्र', inGameAd: 'गेम में प्रदर्शन', rewardAdAfter: 'गेम के बाद इनाम विज्ञापन'
    },

    // 터키어
    tr: {
        appName: 'CoinMiner', login: 'Giriş', logout: 'Çıkış', coins: 'Jeton',
        subtitle: 'Web Tabanlı Kripto Madenciliği', gamesLink: '🎮 Mini Oyunlarla Jeton Kazan',
        miningStatus: 'Madencilik Durumu', myCoins: 'Jetonlarım', hashRate: 'Hash Oranı', totalBlocks: 'Toplam Blok',
        waiting: 'Bekliyor', mining: 'Madencilik...', startMining: 'Madenciliği Başlat', stopMining: 'Madenciliği Durdur',
        difficulty: 'Zorluk', currentHash: 'Mevcut Hash', nonce: 'Nonce', attempts: 'Denemeler',
        networkInfo: 'Ağ Bilgisi', connectedMiners: 'Bağlı Madenciler', totalMinedCoins: 'Toplam Kazılan Jeton',
        myBlocks: 'Kazıdığım Bloklar', recentBlocks: 'Son Bloklar', miningLog: 'Madencilik Günlüğü',
        leaderboard: '🏆 Jeton Sıralaması TOP 10', noData: 'Henüz veri yok', loading: 'Yükleniyor...', anonymous: 'Anonim',
        referralBtn: '👥 Arkadaş Davet Et 50 Jeton Kazan', referralTitle: '👥 Arkadaş Davet Et',
        referralDesc1: 'Arkadaş davet et ve kazan', referralDesc2: '!', referralBonus: 'Arkadaşın alır', referralBonus2: 'bonus!',
        myReferralCode: 'Davet Kodum', copyLink: '📋 Linki Kopyala', share: '📤 Paylaş', close: 'Kapat',
        dailyCheck: '🎁 Günlük Giriş!', consecutiveDays: 'ardışık gün', day: 'Gün', claim: 'Al',
        disclaimer1: 'Bu hizmet eğitim/eğlence amaçlı bir madencilik simülasyonudur.',
        disclaimer2: 'Kazanılan jetonlar gerçek kripto para değildir ve nakit değeri yoktur.',
        gamesTitle: 'CoinMiner Oyunlar', gamesSubtitle: 'Oyna ve Jeton Kazan!', backToMining: '⛏️ Madenciliğe Git', maxReward: '🎁 Maks',
        clickerGame: 'Hızlı Tıklayıcı', clickerDesc: '10 saniyede olabildiğince hızlı tıkla!',
        reactionGame: 'Reaksiyon Testi', reactionDesc: 'Yeşile dönünce hızlı tıkla!',
        memoryGame: 'Sayı Hafızası', memoryDesc: 'Sayıları sırayla hatırla!',
        slotGame: 'Şanslı Slot', slotDesc: 'Reklam izle ve makineyi dene!',
        selectGame: '👆 Yukarıdan oyun seç', start: 'Başla!', nextLevel: 'Sonraki Seviye', level: 'Seviye', click: 'Tıklama',
        wait: 'Bekle...', clickNow: 'Tıkla!', tooFast: 'Çok hızlı! 😅', tryAgain: 'Tekrar dene',
        enterNumbers: 'Gir!', correct: 'Doğru! 🎉', wrong: 'Yanlış 😢', master: '🏆 Usta!', gameOver: 'Oyun Bitti',
        watchAdSpin: '📺 Reklam İzle ve Çevir', watchingAd: 'Reklam izleniyor...', spin: '🎰 Çevir!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Şanslı Yedi! 7️⃣', threeMatch: '🎉 Üç Eşleşme!', twoMatch: '👍 İki Eşleşme', nextTime: '😅 Bir dahaki sefere...',
        lightning: '⚡ Yıldırım refleksler!', veryFast: '🚀 Çok hızlı!', good: '👍 İyi!', slow: '🐢 Biraz yavaş',
        rewardAdTitle: '🎬 2x Ödül için Reklam İzle!', rewardAdDesc: 'Ödülünü ikiye katlamak için 30 saniyelik reklam izle',
        watchAd: 'Reklam İzle (2x Ödül)', skip: 'Atla', doubleReward: '🎬 2x Ödül!',
        gameComplete: '🎉 Oyun Tamamlandı!', coinsEarned: 'Jeton Kazanıldı!', confirm: 'Tamam',
        adArea: '📢 Reklam Alanı', inGameAd: 'Oyun içi görüntüleme', rewardAdAfter: 'Oyun sonrası ödül reklamı'
    },

    // 이탈리아어
    it: {
        appName: 'CoinMiner', login: 'Accedi', logout: 'Esci', coins: 'Monete',
        subtitle: 'Mining di Criptovalute Web', gamesLink: '🎮 Guadagna Monete con Mini Giochi',
        miningStatus: 'Stato Mining', myCoins: 'Le Mie Monete', hashRate: 'Hash Rate', totalBlocks: 'Blocchi Totali',
        waiting: 'In attesa', mining: 'Mining...', startMining: 'Inizia Mining', stopMining: 'Ferma Mining',
        difficulty: 'Difficoltà', currentHash: 'Hash Attuale', nonce: 'Nonce', attempts: 'Tentativi',
        networkInfo: 'Info Rete', connectedMiners: 'Miner Connessi', totalMinedCoins: 'Monete Minate Totali',
        myBlocks: 'I Miei Blocchi Minati', recentBlocks: 'Blocchi Recenti', miningLog: 'Log Mining',
        leaderboard: '🏆 Classifica Monete TOP 10', noData: 'Nessun dato ancora', loading: 'Caricamento...', anonymous: 'Anonimo',
        referralBtn: '👥 Invita Amici e Ottieni 50 Monete', referralTitle: '👥 Invita Amici',
        referralDesc1: 'Invita un amico e ottieni', referralDesc2: '!', referralBonus: 'Il tuo amico riceve', referralBonus2: 'bonus!',
        myReferralCode: 'Il Mio Codice Referral', copyLink: '📋 Copia Link', share: '📤 Condividi', close: 'Chiudi',
        dailyCheck: '🎁 Check-in Giornaliero!', consecutiveDays: 'giorni consecutivi', day: 'Giorno', claim: 'Riscuoti',
        disclaimer1: 'Questo servizio è una simulazione di mining per scopi educativi/intrattenimento.',
        disclaimer2: 'Le monete guadagnate non sono criptovalute reali e non hanno valore in denaro.',
        gamesTitle: 'CoinMiner Giochi', gamesSubtitle: 'Gioca e Guadagna Monete!', backToMining: '⛏️ Vai al Mining', maxReward: '🎁 Max',
        clickerGame: 'Clicker Veloce', clickerDesc: 'Clicca il più velocemente possibile in 10 secondi!',
        reactionGame: 'Test di Reazione', reactionDesc: 'Clicca velocemente quando diventa verde!',
        memoryGame: 'Memoria Numeri', memoryDesc: 'Ricorda i numeri in ordine!',
        slotGame: 'Slot Fortunata', slotDesc: 'Guarda pubblicità e prova la macchina!',
        selectGame: '👆 Seleziona un gioco sopra', start: 'Inizia!', nextLevel: 'Prossimo Livello', level: 'Livello', click: 'Click',
        wait: 'Aspetta...', clickNow: 'Clicca!', tooFast: 'Troppo veloce! 😅', tryAgain: 'Riprova',
        enterNumbers: 'Inserisci!', correct: 'Corretto! 🎉', wrong: 'Sbagliato 😢', master: '🏆 Maestro!', gameOver: 'Game Over',
        watchAdSpin: '📺 Guarda Pubblicità e Gira', watchingAd: 'Guardando pubblicità...', spin: '🎰 Gira!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Sette Fortunato! 7️⃣', threeMatch: '🎉 Tre Uguali!', twoMatch: '👍 Due Uguali', nextTime: '😅 La prossima volta...',
        lightning: '⚡ Riflessi fulminei!', veryFast: '🚀 Molto veloce!', good: '👍 Bene!', slow: '🐢 Un po\' lento',
        rewardAdTitle: '🎬 Guarda Pubblicità per 2x Premio!', rewardAdDesc: 'Guarda una pubblicità di 30 secondi per raddoppiare il premio',
        watchAd: 'Guarda Pubblicità (2x Premio)', skip: 'Salta', doubleReward: '🎬 2x Premio!',
        gameComplete: '🎉 Gioco Completato!', coinsEarned: 'Monete Guadagnate!', confirm: 'OK',
        adArea: '📢 Area Pubblicità', inGameAd: 'Visualizzazione in-game', rewardAdAfter: 'Pubblicità premio dopo il gioco'
    },

    // 폴란드어
    pl: {
        appName: 'CoinMiner', login: 'Zaloguj', logout: 'Wyloguj', coins: 'Monety',
        subtitle: 'Webowe Kopanie Krypto', gamesLink: '🎮 Zdobywaj Monety w Mini Grach',
        miningStatus: 'Status Kopania', myCoins: 'Moje Monety', hashRate: 'Hash Rate', totalBlocks: 'Łączne Bloki',
        waiting: 'Oczekiwanie', mining: 'Kopanie...', startMining: 'Rozpocznij Kopanie', stopMining: 'Zatrzymaj Kopanie',
        difficulty: 'Trudność', currentHash: 'Aktualny Hash', nonce: 'Nonce', attempts: 'Próby',
        networkInfo: 'Info o Sieci', connectedMiners: 'Połączeni Górnicy', totalMinedCoins: 'Wykopane Monety',
        myBlocks: 'Moje Wykopane Bloki', recentBlocks: 'Ostatnie Bloki', miningLog: 'Dziennik Kopania',
        leaderboard: '🏆 Ranking Monet TOP 10', noData: 'Brak danych', loading: 'Ładowanie...', anonymous: 'Anonim',
        referralBtn: '👥 Zaproś Znajomych i Zdobądź 50 Monet', referralTitle: '👥 Zaproś Znajomych',
        referralDesc1: 'Zaproś znajomego i zdobądź', referralDesc2: '!', referralBonus: 'Znajomy dostaje', referralBonus2: 'bonus!',
        myReferralCode: 'Mój Kod Polecenia', copyLink: '📋 Kopiuj Link', share: '📤 Udostępnij', close: 'Zamknij',
        dailyCheck: '🎁 Codzienna Rejestracja!', consecutiveDays: 'dni z rzędu', day: 'Dzień', claim: 'Odbierz',
        disclaimer1: 'Ta usługa to symulacja kopania do celów edukacyjnych/rozrywkowych.',
        disclaimer2: 'Zdobyte monety nie są prawdziwą kryptowalutą i nie mają wartości pieniężnej.',
        gamesTitle: 'CoinMiner Gry', gamesSubtitle: 'Graj i Zdobywaj Monety!', backToMining: '⛏️ Idź Kopać', maxReward: '🎁 Max',
        clickerGame: 'Szybki Klikacz', clickerDesc: 'Klikaj najszybciej jak możesz przez 10 sekund!',
        reactionGame: 'Test Reakcji', reactionDesc: 'Kliknij szybko gdy zmieni się na zielono!',
        memoryGame: 'Pamięć Liczb', memoryDesc: 'Zapamiętaj liczby w kolejności!',
        slotGame: 'Szczęśliwy Slot', slotDesc: 'Obejrzyj reklamę i wypróbuj maszynę!',
        selectGame: '👆 Wybierz grę powyżej', start: 'Start!', nextLevel: 'Następny Poziom', level: 'Poziom', click: 'Kliknięcia',
        wait: 'Czekaj...', clickNow: 'Kliknij!', tooFast: 'Za szybko! 😅', tryAgain: 'Spróbuj ponownie',
        enterNumbers: 'Wprowadź!', correct: 'Poprawnie! 🎉', wrong: 'Źle 😢', master: '🏆 Mistrz!', gameOver: 'Koniec Gry',
        watchAdSpin: '📺 Obejrzyj Reklamę i Zakręć', watchingAd: 'Oglądanie reklamy...', spin: '🎰 Zakręć!',
        jackpot: '💎 JACKPOT!!! 💎', luckySeven: '7️⃣ Szczęśliwa Siódemka! 7️⃣', threeMatch: '🎉 Trzy Takie Same!', twoMatch: '👍 Dwa Takie Same', nextTime: '😅 Następnym razem...',
        lightning: '⚡ Błyskawiczne refleksy!', veryFast: '🚀 Bardzo szybko!', good: '👍 Dobrze!', slow: '🐢 Trochę wolno',
        rewardAdTitle: '🎬 Obejrzyj Reklamę za 2x Nagrodę!', rewardAdDesc: 'Obejrzyj 30-sekundową reklamę aby podwoić nagrodę',
        watchAd: 'Obejrzyj Reklamę (2x Nagroda)', skip: 'Pomiń', doubleReward: '🎬 2x Nagroda!',
        gameComplete: '🎉 Gra Ukończona!', coinsEarned: 'Monety Zdobyte!', confirm: 'OK',
        adArea: '📢 Obszar Reklam', inGameAd: 'Wyświetlanie w grze', rewardAdAfter: 'Reklama z nagrodą po grze'
    }
};

// 현재 언어
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
}

// 언어 선택기 업데이트
function updateLanguageSelector() {
    const selector = document.getElementById('langSelector');
    if (selector) selector.value = currentLang;
}

// 언어 선택기 HTML
function createLanguageSelector() {
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    selector.innerHTML = `
        <select id="langSelector" onchange="setLanguage(this.value)">
            <option value="ko">🇰🇷 한국어</option>
            <option value="en">🇺🇸 English</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="es">🇪🇸 Español</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="pt">🇧🇷 Português</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="vi">🇻🇳 Tiếng Việt</option>
            <option value="th">🇹🇭 ไทย</option>
            <option value="id">🇮🇩 Indonesia</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="hi">🇮🇳 हिन्दी</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="pl">🇵🇱 Polski</option>
        </select>
    `;
    return selector;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        const header = container.querySelector('header');
        if (header) {
            const selector = createLanguageSelector();
            header.insertBefore(selector, header.firstChild);
        }
    }
    updateLanguageSelector();
    setTimeout(applyTranslations, 100);
});
