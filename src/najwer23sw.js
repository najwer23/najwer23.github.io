import { precacheAndRoute } from 'workbox-precaching';

// Precache assets injected by vite-plugin-pwa
precacheAndRoute(self.__WB_MANIFEST);

const RESUME_CACHE = 'resume-cache-v1';
const BLOG_POST_CREATOR_CACHE = 'blog-post-creator-cache-v1';
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
            return undefined;
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  if (url.pathname.startsWith('/resume')) {
    event.respondWith(
      caches.open(RESUME_CACHE).then((cache) =>
        cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        }),
      ),
    );
    return;
  }

  if (url.pathname.startsWith('/blog-post-creator')) {
    event.respondWith(
      caches.open(BLOG_POST_CREATOR_CACHE).then((cache) =>
        cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        }),
      ),
    );
    return;
  }

  event.respondWith(
    caches.open(DEFAULT_CACHE).then((cache) =>
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => cache.match(request)),
    ),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
