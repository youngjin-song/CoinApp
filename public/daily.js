// 출석 체크 보상 시스템

const DAILY_REWARDS = [10, 15, 20, 25, 30, 40, 50]; // 7일 보상

async function checkDailyReward() {
    if (!currentUser) return;

    try {
        const { db, doc, getDoc, setDoc, updateDoc, increment } = window.firebaseDB;
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) return;

        const userData = userSnap.data();
        const today = new Date().toDateString();
        const lastCheck = userData.lastDailyCheck;
        const streak = userData.dailyStreak || 0;

        // 이미 오늘 체크했는지 확인
        if (lastCheck === today) {
            console.log('오늘 이미 출석 체크함');
            return;
        }

        // 어제 체크했는지 확인 (연속 출석)
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const isConsecutive = lastCheck === yesterday.toDateString();

        const newStreak = isConsecutive ? Math.min(streak + 1, 7) : 1;
        const reward = DAILY_REWARDS[newStreak - 1];

        // 출석 체크 모달 표시
        showDailyRewardModal(newStreak, reward);

    } catch (error) {
        console.error('출석 체크 오류:', error);
    }
}

function showDailyRewardModal(streak, reward) {
    // 모달이 없으면 생성
    let modal = document.getElementById('dailyModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'dailyModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content daily-reward">
            <h2>🎁 출석 체크!</h2>
            <div class="streak-display">
                <span class="streak-number">${streak}</span>
                <span class="streak-label">일 연속 출석</span>
            </div>
            <div class="daily-calendar">
                ${DAILY_REWARDS.map((r, i) => `
                    <div class="day-box ${i < streak ? 'checked' : ''} ${i === streak - 1 ? 'today' : ''}">
                        <span class="day-num">Day ${i + 1}</span>
                        <span class="day-reward">+${r}</span>
                    </div>
                `).join('')}
            </div>
            <div class="reward-display">
                +<span>${reward}</span> 코인 획득!
            </div>
            <button class="btn-primary" onclick="claimDailyReward(${streak}, ${reward})">받기</button>
        </div>
    `;

    modal.classList.add('active');
}

async function claimDailyReward(streak, reward) {
    if (!currentUser) return;

    try {
        const { db, doc, updateDoc, increment } = window.firebaseDB;
        const userRef = doc(db, 'users', currentUser.uid);

        await updateDoc(userRef, {
            coins: increment(reward),
            dailyStreak: streak,
            lastDailyCheck: new Date().toDateString(),
            totalDailyRewards: increment(reward)
        });

        // 모달 닫기
        document.getElementById('dailyModal').classList.remove('active');

        // UI 업데이트
        if (typeof updateUserStats === 'function') {
            const currentCoins = parseInt(document.getElementById('userCoins')?.textContent || '0');
            updateUserStats({ coins: currentCoins + reward });
        }

        alert(`🎉 ${reward} 코인을 받았습니다!`);

    } catch (error) {
        console.error('보상 수령 실패:', error);
        alert('보상 수령에 실패했습니다.');
    }
}

// 로그인 후 출석 체크
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (currentUser) {
            checkDailyReward();
        }
    }, 3000);
});
