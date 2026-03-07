// Firebase 인증 시스템
const firebaseConfig = {
    apiKey: "AIzaSyD80dyDucxh5OptV5x1zi7mCquaTTPXJBo",
    authDomain: "coinminer-7ad43.firebaseapp.com",
    projectId: "coinminer-7ad43",
    storageBucket: "coinminer-7ad43.firebasestorage.app",
    messagingSenderId: "979902173190",
    appId: "1:979902173190:web:58b8540a220dcd66b67387",
    measurementId: "G-H66QBSY4Q5"
};

// Firebase 초기화
let app, auth, db;
let currentUser = null;

async function initFirebase() {
    try {
        // Firebase 모듈 동적 로드
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
        const { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        const { getFirestore, doc, getDoc, setDoc, updateDoc, increment } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');

        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);

        // 전역으로 사용할 수 있도록 저장
        window.firebaseAuth = { auth, signInWithPopup, GoogleAuthProvider, signOut };
        window.firebaseDB = { db, doc, getDoc, setDoc, updateDoc, increment };

        // 인증 상태 감시
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                currentUser = user;
                await loadUserData(user);
                updateAuthUI(true);
                console.log('로그인됨:', user.displayName);
            } else {
                currentUser = null;
                updateAuthUI(false);
                console.log('로그아웃 상태');
            }
        });

        console.log('Firebase 초기화 완료');
    } catch (error) {
        console.error('Firebase 초기화 실패:', error);
    }
}

// Google 로그인
async function loginWithGoogle() {
    try {
        const { auth, signInWithPopup, GoogleAuthProvider } = window.firebaseAuth;
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error('로그인 실패:', error);
        alert('로그인에 실패했습니다: ' + error.message);
        return null;
    }
}

// 로그아웃
async function logout() {
    try {
        const { auth, signOut } = window.firebaseAuth;
        await signOut(auth);
        currentUser = null;
    } catch (error) {
        console.error('로그아웃 실패:', error);
    }
}

// 사용자 데이터 로드/생성
async function loadUserData(user) {
    try {
        const { db, doc, getDoc, setDoc } = window.firebaseDB;
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();
            updateUserStats(data);
        } else {
            // 새 사용자 생성
            const newUser = {
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
            await setDoc(userRef, newUser);
            updateUserStats(newUser);
        }
    } catch (error) {
        console.error('사용자 데이터 로드 실패:', error);
    }
}

// 코인 추가
async function addUserCoins(amount) {
    if (!currentUser) return false;

    try {
        const { db, doc, updateDoc, increment } = window.firebaseDB;
        const userRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userRef, {
            coins: increment(amount),
            lastLogin: new Date().toISOString()
        });

        // UI 업데이트
        const currentCoins = parseInt(document.getElementById('userCoins')?.textContent || '0');
        updateUserStats({ coins: currentCoins + amount });

        return true;
    } catch (error) {
        console.error('코인 추가 실패:', error);
        return false;
    }
}

// 채굴 블록 추가
async function addMinedBlock(reward) {
    if (!currentUser) return false;

    try {
        const { db, doc, updateDoc, increment } = window.firebaseDB;
        const userRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userRef, {
            coins: increment(reward),
            minedBlocks: increment(1),
            lastLogin: new Date().toISOString()
        });

        return true;
    } catch (error) {
        console.error('블록 기록 실패:', error);
        return false;
    }
}

// UI 업데이트
function updateAuthUI(isLoggedIn) {
    const authContainer = document.getElementById('authContainer');
    const userInfo = document.getElementById('userInfo');

    if (!authContainer) return;

    if (isLoggedIn && currentUser) {
        authContainer.innerHTML = `
            <div class="user-profile">
                <img src="${currentUser.photoURL || '/default-avatar.png'}" alt="프로필" class="user-avatar">
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

    // 상단 프로필의 코인
    const userCoinsEl = document.getElementById('userCoins');
    if (userCoinsEl) userCoinsEl.textContent = coins.toLocaleString();

    // 메인 페이지의 내 코인
    const myCoinsEl = document.getElementById('myCoins');
    if (myCoinsEl) myCoinsEl.textContent = coins.toLocaleString();

    // 게임 페이지의 총 코인
    const totalCoinsEl = document.getElementById('totalCoins');
    if (totalCoinsEl) totalCoinsEl.textContent = coins.toLocaleString();

    const blocksEl = document.getElementById('userBlocks');
    if (blocksEl) blocksEl.textContent = data.minedBlocks?.toLocaleString() || '0';
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
