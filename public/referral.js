// 친구 초대 시스템

const REFERRAL_REWARD = 50;  // 초대한 사람 보상
const INVITED_REWARD = 30;   // 초대받은 사람 보상

// 초대 코드 생성
function generateReferralCode(uid) {
    return uid.substring(0, 8).toUpperCase();
}

// 초대 링크 가져오기
function getReferralLink() {
    if (!currentUser) {
        alert('로그인이 필요합니다!');
        return null;
    }

    const code = generateReferralCode(currentUser.uid);
    const link = `${window.location.origin}?ref=${code}`;
    return link;
}

// 초대 링크 복사
function copyReferralLink() {
    const link = getReferralLink();
    if (!link) return;

    navigator.clipboard.writeText(link).then(() => {
        alert('초대 링크가 복사되었습니다!\n친구에게 공유하세요.');
    }).catch(() => {
        prompt('아래 링크를 복사하세요:', link);
    });
}

// 초대 링크 공유 (Web Share API)
async function shareReferralLink() {
    const link = getReferralLink();
    if (!link) return;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'CoinMiner - 코인 채굴 게임',
                text: '함께 코인을 채굴하고 게임하자! 가입하면 30코인 보너스!',
                url: link
            });
        } catch (e) {
            copyReferralLink();
        }
    } else {
        copyReferralLink();
    }
}

// 초대 코드 확인 및 처리
async function checkReferralCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');

    if (!refCode) return;

    // 로컬 스토리지에 저장 (로그인 후 처리)
    localStorage.setItem('pendingReferral', refCode);

    // URL에서 ref 파라미터 제거
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
}

// 초대 보상 처리 (로그인 후 호출)
async function processReferralReward() {
    if (!currentUser) return;

    const refCode = localStorage.getItem('pendingReferral');
    if (!refCode) return;

    try {
        const { db, doc, getDoc, updateDoc, increment, collection, query, where, getDocs } = window.firebaseDB;
        const { collection: coll, query: q, where: w, getDocs: gd } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');

        // 이미 초대 보상을 받았는지 확인
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists() && userSnap.data().referredBy) {
            localStorage.removeItem('pendingReferral');
            return;
        }

        // 초대한 사람 찾기
        const usersRef = coll(db, 'users');
        const usersSnap = await gd(usersRef);

        let referrerUid = null;
        usersSnap.forEach((doc) => {
            if (generateReferralCode(doc.id) === refCode && doc.id !== currentUser.uid) {
                referrerUid = doc.id;
            }
        });

        if (!referrerUid) {
            localStorage.removeItem('pendingReferral');
            return;
        }

        // 초대받은 사람에게 보상
        await updateDoc(userRef, {
            coins: increment(INVITED_REWARD),
            referredBy: referrerUid
        });

        // 초대한 사람에게 보상
        const referrerRef = doc(db, 'users', referrerUid);
        await updateDoc(referrerRef, {
            coins: increment(REFERRAL_REWARD),
            referralCount: increment(1)
        });

        localStorage.removeItem('pendingReferral');
        alert(`🎉 초대 보너스 ${INVITED_REWARD} 코인을 받았습니다!`);

    } catch (error) {
        console.error('초대 보상 처리 실패:', error);
    }
}

// 초대 현황 표시
function showReferralStats() {
    if (!currentUser) {
        alert('로그인이 필요합니다!');
        return;
    }

    const code = generateReferralCode(currentUser.uid);
    const link = getReferralLink();

    let modal = document.getElementById('referralModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'referralModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content referral-content">
            <h2>👥 친구 초대</h2>
            <p>친구를 초대하면 <strong>50코인</strong> 획득!</p>
            <p>친구도 <strong>30코인</strong> 보너스!</p>

            <div class="referral-code-box">
                <span class="label">내 초대 코드</span>
                <span class="code">${code}</span>
            </div>

            <div class="referral-link-box">
                <input type="text" value="${link}" readonly id="referralLinkInput">
            </div>

            <div class="referral-buttons">
                <button onclick="copyReferralLink()" class="btn-copy">📋 링크 복사</button>
                <button onclick="shareReferralLink()" class="btn-share">📤 공유하기</button>
            </div>

            <button class="btn-close" onclick="document.getElementById('referralModal').classList.remove('active')">닫기</button>
        </div>
    `;

    modal.classList.add('active');
}

// 페이지 로드 시 초대 코드 확인
document.addEventListener('DOMContentLoaded', checkReferralCode);
