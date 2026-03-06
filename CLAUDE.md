# CoinApp - 코인 채굴 앱

## 프로젝트 개요
웹 기반 암호화폐 채굴 시뮬레이션 + 미니게임 보상 애플리케이션.
광고 수익 모델을 위한 게임 & 채굴 플랫폼.

## 기술 스택
- **백엔드**: Node.js, Express, WebSocket (ws)
- **프론트엔드**: Vanilla JS, CryptoJS
- **프로토콜**: WebSocket 실시간 통신

## 실행 방법
```bash
npm install
npm start
# http://localhost:3000 접속
```

## 주요 파일
- `server.js` - 블록체인 관리 및 WebSocket 서버
- `public/miner.js` - 브라우저 채굴 엔진
- `public/index.html` - 채굴 UI
- `public/games.html` - 미니게임 페이지
- `public/games.js` - 4가지 미니게임 엔진
- `public/games.css` - 게임 스타일

## 채굴 메커니즘
- 난이도: 해시 앞자리 0의 개수 (기본값: 4)
- 보상: 블록당 10코인
- 난이도 조정: 10블록마다 자동 증가

## 미니게임
| 게임 | 보상 |
|------|------|
| 스피드 클리커 | 최대 50코인 |
| 반응속도 테스트 | 최대 30코인 |
| 숫자 기억하기 | 최대 100코인 |
| 럭키 슬롯 | 최대 200코인 |

## 광고 슬롯
- 상단/하단 배너 (728x90)
- 좌우 사이드바 (160x600)
- 보상형 광고 모달 (2배 보상)
- 슬롯 게임 전 필수 광고
