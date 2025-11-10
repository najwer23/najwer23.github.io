import { precacheAndRoute } from 'workbox-precaching';

// Precache assets injected by vite-plugin-pwa
precacheAndRoute(self.__WB_MANIFEST);

const RESUME_CACHE = 'resume-cache-v1';
const DEFAULT_CACHE = 'default-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const currentCaches = [DEFAULT_CACHE, RESUME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (!currentCaches.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith('/resume')) {
    // Keep your existing cache-first strategy for /resume
    event.respondWith(
      caches.open(RESUME_CACHE).then((cache) =>
        cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }),
      ),
    );
    return;
  }

  // Network-first strategy for DEFAULT_CACHE
  event.respondWith(
    caches.open(DEFAULT_CACHE).then((cache) =>
      fetch(event.request)
        .then((networkResponse) => {
          // Update cache with fresh response
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        .catch(() =>
          // If network fails, fallback to cache
          cache.match(event.request),
        ),
    ),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
