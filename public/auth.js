// Firebase 인증 시스템 (CDN compat 버전)

const firebaseConfig = {
    apiKey: "AIzaSyD80dyDucxh5OptV5x1zi7mCquaTTPXJBo",
    authDomain: "coinminer-7ad43.firebaseapp.com",
    projectId: "coinminer-7ad43",
    storageBucket: "coinminer-7ad43.firebasestorage.app",
    messagingSenderId: "979902173190",
    appId: "1:979902173190:web:58b8540a220dcd66b67387",
    measurementId: "G-H66QBSY4Q5"
};

// 전역 변수
let currentUser = null;
let db = null;

// Firebase 초기화
function initFirebase() {
    try {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();

        console.log('Firebase 초기화 완료');

        // 인증 상태 감시
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                currentUser = user;
                updateAuthUI(true);
                await loadUserData(user);
                console.log('로그인됨:', user.displayName);
            } else {
                currentUser = null;
                updateAuthUI(false);
                console.log('로그아웃 상태');
            }
        });

    } catch (error) {
        console.error('Firebase 초기화 실패:', error);
    }
}

// Google 로그인
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log('로그인 성공:', result.user.displayName);
        })
        .catch((error) => {
            console.error('로그인 실패:', error);
            alert('로그인에 실패했습니다: ' + error.message);
        });
}

// 로그아웃
function logout() {
    // 실시간 리스너 해제
    if (unsubscribeUserData) {
        unsubscribeUserData();
        unsubscribeUserData = null;
    }

    firebase.auth().signOut()
        .then(() => {
            currentUser = null;
            window.userCoins = 0;
            console.log('로그아웃 완료');
        })
        .catch((error) => {
            console.error('로그아웃 실패:', error);
        });
}

// 실시간 리스너 해제 함수
let unsubscribeUserData = null;

// 사용자 데이터 로드/생성 + 실시간 동기화
async function loadUserData(user) {
    try {
        const userRef = db.collection('users').doc(user.uid);
        const userSnap = await userRef.get();

        if (!userSnap.exists) {
            // 새 사용자 생성
            const newUserData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                coins: 0,
                minedBlocks: 0,
                gamesPlayed: 0,
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            };
            await userRef.set(newUserData);
        }

        // 실시간 리스너 설정 (다른 창에서 변경되면 자동 업데이트)
        if (unsubscribeUserData) {
            unsubscribeUserData(); // 기존 리스너 해제
        }

        unsubscribeUserData = userRef.onSnapshot((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                window.userCoins = userData.coins || 0;
                updateUserStats(userData);
                console.log('실시간 코인 업데이트:', userData.coins);
            }
        });

        console.log('실시간 동기화 시작');

    } catch (error) {
        console.error('사용자 데이터 로드 실패:', error);
    }
}

// 코인 추가
async function addUserCoins(amount) {
    if (!currentUser || !db) return false;

    try {
        const userRef = db.collection('users').doc(currentUser.uid);
        await userRef.update({
            coins: firebase.firestore.FieldValue.increment(amount),
            lastLogin: new Date().toISOString()
        });

        // UI 업데이트
        window.userCoins = (window.userCoins || 0) + amount;
        updateUserStats({ coins: window.userCoins });

        return true;
    } catch (error) {
        console.error('코인 추가 실패:', error);
        return false;
    }
}

// 채굴 블록 추가
async function addMinedBlock(reward) {
    if (!currentUser || !db) return false;

    try {
        const userRef = db.collection('users').doc(currentUser.uid);
        await userRef.update({
            coins: firebase.firestore.FieldValue.increment(reward),
            minedBlocks: firebase.firestore.FieldValue.increment(1),
            lastLogin: new Date().toISOString()
        });

        window.userCoins = (window.userCoins || 0) + reward;
        updateUserStats({ coins: window.userCoins });

        return true;
    } catch (error) {
        console.error('블록 기록 실패:', error);
        return false;
    }
}

// UI 업데이트
function updateAuthUI(isLoggedIn) {
    const authContainer = document.getElementById('authContainer');
    if (!authContainer) return;

    if (isLoggedIn && currentUser) {
        authContainer.innerHTML = `
            <div class="user-profile">
                <img src="${currentUser.photoURL || 'https://via.placeholder.com/36'}" alt="프로필" class="user-avatar" onerror="this.src='https://via.placeholder.com/36'">
                <span class="user-name">${currentUser.displayName}</span>
                <span class="user-coins" id="userCoins">0</span> 코인
                <button onclick="logout()" class="logout-btn">로그아웃</button>
            </div>
        `;
    } else {
        authContainer.innerHTML = `
            <button onclick="loginWithGoogle()" class="login-btn">
                <img src="https://www.google.com/favicon.ico" alt="Google" width="20">
                Google로 로그인
            </button>
        `;
    }
}

function updateUserStats(data) {
    const coins = data.coins || 0;
    console.log('updateUserStats 호출, 코인:', coins);

    // 상단 프로필의 코인
    const userCoinsEl = document.getElementById('userCoins');
    if (userCoinsEl) {
        userCoinsEl.textContent = coins.toLocaleString();
    }

    // 메인 페이지의 내 코인
    const myCoinsEl = document.getElementById('myCoins');
    if (myCoinsEl) {
        myCoinsEl.textContent = coins.toLocaleString();
    }

    // 게임 페이지의 총 코인
    const totalCoinsEl = document.getElementById('totalCoins');
    if (totalCoinsEl) {
        totalCoinsEl.textContent = coins.toLocaleString();
    }
}

// 현재 사용자 정보 가져오기
function getCurrentUser() {
    return currentUser;
}

// 로그인 필요 확인
function requireLogin(callback) {
    if (currentUser) {
        callback();
    } else {
        alert('로그인이 필요합니다!');
        loginWithGoogle();
    }
}

// 페이지 로드 시 Firebase 초기화
document.addEventListener('DOMContentLoaded', initFirebase);
