# CoinApp - 코인 채굴 앱

## 프로젝트 개요
웹 기반 암호화폐 채굴 시뮬레이션 애플리케이션. 실제 SHA-256 Proof of Work 알고리즘을 사용하여 블록을 채굴합니다.

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
- `public/index.html` - UI

## 채굴 메커니즘
- 난이도: 해시 앞자리 0의 개수 (기본값: 4)
- 보상: 블록당 10코인
- 난이도 조정: 10블록마다 자동 증가
