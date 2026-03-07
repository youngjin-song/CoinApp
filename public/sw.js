// Service Worker for CoinMiner PWA

const CACHE_NAME = 'coinminer-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/games.html',
  '/style.css',
  '/games.css',
  '/auth.css',
  '/miner.js',
  '/games.js',
  '/auth.js',
  '/daily.js',
  '/referral.js',
  '/leaderboard.js',
  '/ads-config.js',
  '/manifest.json'
];

// 설치 시 캐시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('캐시 열림');
        return cache.addAll(urlsToCache);
      })
  );
});

// 요청 시 캐시에서 먼저 찾기
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 캐시에 있으면 캐시에서 반환
        if (response) {
          return response;
        }
        // 없으면 네트워크에서 가져오기
        return fetch(event.request);
      }
    )
  );
});

// 새 버전 활성화 시 이전 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
