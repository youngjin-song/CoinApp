// 리더보드 시스템 (CDN compat 버전)

async function loadLeaderboard() {
    // db가 초기화될 때까지 대기
    if (typeof db === 'undefined' || !db) {
        console.log('리더보드: DB 대기 중...');
        return;
    }

    try {
        // 상위 10명 가져오기
        const snapshot = await db.collection('users')
            .orderBy('coins', 'desc')
            .limit(10)
            .get();

        const leaderboardData = [];
        snapshot.forEach((doc) => {
            leaderboardData.push({
                id: doc.id,
                ...doc.data()
            });
        });

        renderLeaderboard(leaderboardData);
    } catch (error) {
        console.error('리더보드 로드 실패:', error);
    }
}

function renderLeaderboard(data) {
    const container = document.getElementById('leaderboardList');
    if (!container) return;

    if (data.length === 0) {
        container.innerHTML = '<p class="no-data">아직 데이터가 없습니다</p>';
        return;
    }

    container.innerHTML = data.map((user, index) => {
        const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';
        const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}`;

        return `
            <div class="leaderboard-item">
                <span class="leaderboard-rank ${rankClass}">${rankEmoji}</span>
                <img src="${user.photoURL || 'https://via.placeholder.com/40'}"
                     alt="${user.displayName}"
                     class="leaderboard-avatar"
                     onerror="this.src='https://via.placeholder.com/40'">
                <span class="leaderboard-name">${user.displayName || '익명'}</span>
                <span class="leaderboard-coins">💰 ${(user.coins || 0).toLocaleString()}</span>
            </div>
        `;
    }).join('');
}

// 주기적으로 리더보드 업데이트 (30초마다)
function startLeaderboardUpdates() {
    loadLeaderboard();
    setInterval(loadLeaderboard, 30000);
}

// Firebase 초기화 후 리더보드 로드
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(startLeaderboardUpdates, 3000);
});
