// 광고 설정 파일
// AdSense 승인 후 아래 값들을 수정하세요

const ADS_CONFIG = {
    // Google AdSense 설정
    enabled: false,  // 승인 후 true로 변경
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',  // 본인의 Publisher ID

    // 광고 슬롯 ID (AdSense에서 생성)
    slots: {
        topBanner: '1234567890',      // 상단 배너
        bottomBanner: '1234567891',   // 하단 배너
        sidebarLeft: '1234567892',    // 왼쪽 사이드바
        sidebarRight: '1234567893',   // 오른쪽 사이드바
        inGame: '1234567894'          // 인게임 광고
    }
};

// AdSense 스크립트 로드
function loadAdSense() {
    if (!ADS_CONFIG.enabled) {
        console.log('광고가 비활성화 상태입니다. ads-config.js에서 enabled를 true로 변경하세요.');
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CONFIG.publisherId}`;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    script.onload = () => {
        console.log('AdSense 로드 완료');
        initializeAds();
    };
}

// 광고 슬롯 초기화
function initializeAds() {
    const adContainers = document.querySelectorAll('.ad-placeholder');

    adContainers.forEach((container, index) => {
        const slotType = container.dataset.slot || 'topBanner';
        const slotId = ADS_CONFIG.slots[slotType];

        if (slotId) {
            container.innerHTML = `
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="${ADS_CONFIG.publisherId}"
                     data-ad-slot="${slotId}"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
            `;

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('광고 로드 실패:', e);
            }
        }
    });
}

// 페이지 로드 시 광고 초기화
document.addEventListener('DOMContentLoaded', loadAdSense);
