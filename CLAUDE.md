# CoinMiner - 코인 채굴 & 미니게임 플랫폼

## 프로젝트 개요
웹 기반 암호화폐 채굴 시뮬레이션 + 미니게임 보상 플랫폼.
Google 로그인으로 사용자 관리, Firebase로 코인 저장, AdSense로 광고 수익화.

## 라이브 URL
https://web-production-8cd2.up.railway.app

## 기술 스택
- **백엔드**: Node.js, Express, WebSocket
- **프론트엔드**: Vanilla JS, CryptoJS
- **인증**: Firebase Authentication (Google 로그인)
- **데이터베이스**: Firebase Firestore
- **배포**: Railway
- **광고**: Google AdSense

## 실행 방법
```bash
npm install
npm start
# http://localhost:3000 접속
```

## 주요 파일
```
CoinApp/
├── server.js           # 블록체인 + WebSocket 서버
├── public/
│   ├── index.html      # 채굴 페이지
│   ├── games.html      # 미니게임 페이지
│   ├── miner.js        # 채굴 엔진
│   ├── games.js        # 게임 엔진
│   ├── auth.js         # Firebase 인증
│   ├── auth.css        # 인증 UI 스타일
│   ├── ads-config.js   # AdSense 설정
│   ├── style.css       # 메인 스타일
│   └── games.css       # 게임 스타일
├── Procfile            # Railway 배포 설정
└── railway.json        # Railway 설정
```

## 채굴 메커니즘
- 알고리즘: SHA-256 Proof of Work
- 난이도: 해시 앞자리 0의 개수 (기본값: 4)
- 보상: 블록당 10코인
- 난이도 조정: 10블록마다 자동 증가

## 미니게임
| 게임 | 설명 | 최대 보상 |
|------|------|----------|
| 스피드 클리커 | 10초간 빠르게 클릭 | 50코인 |
| 반응속도 테스트 | 색 변화에 빠르게 반응 | 30코인 |
| 숫자 기억하기 | 숫자 시퀀스 암기 | 100코인 |
| 럭키 슬롯 | 슬롯머신 | 200코인 |

## 광고 슬롯
- 상단/하단 배너 (728x90)
- 좌우 사이드바 (160x600)
- 인게임 하단 광고 (320x100)
- 보상형 광고 모달 (2배 보상)

## Firebase 설정
- 프로젝트: coinminer-7ad43
- 인증: Google 로그인
- DB: Firestore (users 컬렉션)

## 환경 변수
- `PORT`: 서버 포트 (기본값: 3000)
