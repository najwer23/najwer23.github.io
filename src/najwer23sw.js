// ---------- Config ----------
const DAY = 24 * 60 * 60 * 1000;
const STAMP = 'x-sw-cached-at'; // header we add to know when an entry was stored

// Matches "/prefix" and "/prefix/...", but not "/prefix-other"
const section = (prefix) => (url) => url.pathname === prefix || url.pathname.startsWith(`${prefix}/`);

// First match wins, so specific routes go first and the catch-all goes last.
// To add another cache: add one entry here, nothing else.
const ROUTES = [
  {
    cacheName: 'resume-cache-v1',
    match: section('/resume'),
    strategy: 'staleWhileRevalidate',
    maxEntries: 50,
    maxAge: 14 * DAY,
  },
  {
    cacheName: 'blog-post-creator-cache-v1',
    match: section('/blog-post-creator'),
    strategy: 'staleWhileRevalidate',
    maxEntries: 50,
    maxAge: 14 * DAY,
  },
  {
    cacheName: 'nook-cache-v1',
    match: section('/nook'),
    strategy: 'staleWhileRevalidate',
    maxEntries: 60,
    maxAge: 14 * DAY,
  },
  {
    cacheName: 'default-cache-v1',
    match: () => true,
    strategy: 'networkFirst',
    maxEntries: 100,
    maxAge: 7 * DAY,
    timeout: 3000,
  },
];

// ---------- Precache (manifest injected by vite-plugin-pwa) ----------
const SCOPE_URL = self.registration.scope;
const manifest = self.__WB_MANIFEST || [];

const hash = (s) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};

const entryUrl = (e) => new URL(typeof e === 'string' ? e : e.url, SCOPE_URL).href;
const PRECACHE_URLS = manifest.map(entryUrl);
const PRECACHED = new Set(PRECACHE_URLS);

// The name changes whenever any file or revision changes, so old precaches get replaced
const PRECACHE = `precache-${hash(manifest.map((e) => (e.url || e) + (e.revision || '')).join('|'))}`;
const INDEX_URL = new URL('index.html', SCOPE_URL).href;

const CURRENT = new Set([PRECACHE, ...ROUTES.map((r) => r.cacheName)]);
const OURS = /^(precache-.+|.+-cache-v\d+)$/;

// ---------- Cache helpers ----------
async function lookup(route, request) {
  const cache = await caches.open(route.cacheName);
  const hit = await cache.match(request);
  if (!hit) return { hit: null, fresh: false };
  const age = Date.now() - Number(hit.headers.get(STAMP) || 0);
  return { hit, fresh: age <= route.maxAge };
}

async function store(route, request, response) {
  if (response.status !== 200 || response.type !== 'basic') return;
  const cache = await caches.open(route.cacheName);
  const headers = new Headers(response.headers);
  headers.set(STAMP, String(Date.now()));
  await cache.put(
    request,
    new Response(await response.clone().blob(), { status: 200, statusText: response.statusText, headers }),
  );
  await trim(cache, route.maxEntries);
}

async function trim(cache, max) {
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - max)).map((k) => cache.delete(k)));
}

const withTimeout = (promise, ms) =>
  ms ? Promise.race([promise, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]) : promise;

// ---------- Strategies ----------
async function cacheFirst(event, request, route) {
  const { hit, fresh } = await lookup(route, request);
  if (hit && fresh) return hit;
  try {
    const res = await fetch(request);
    event.waitUntil(store(route, request, res.clone()));
    return res;
  } catch (err) {
    if (hit) return hit; // expired, but better than nothing when offline
    throw err;
  }
}

async function staleWhileRevalidate(event, request, route) {
  const { hit } = await lookup(route, request);
  const update = fetch(request).then((res) => {
    event.waitUntil(store(route, request, res.clone()));
    return res;
  });
  event.waitUntil(update.catch(() => {})); // keep the worker alive, ignore offline errors
  return hit || update;
}

async function networkFirst(event, request, route) {
  try {
    const res = await withTimeout(fetch(request), route.timeout);
    event.waitUntil(store(route, request, res.clone()));
    return res;
  } catch (err) {
    const { hit } = await lookup(route, request);
    if (hit) return hit;
    throw err;
  }
}

const STRATEGIES = { cacheFirst, staleWhileRevalidate, networkFirst };

async function offlineFallback(request) {
  if (request.mode === 'navigate') {
    const shell = await caches.match(INDEX_URL, { cacheName: PRECACHE });
    if (shell) return shell; // single-page app shell
  }
  return Response.error();
}

// ---------- Lifecycle ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((cache) =>
      Promise.all(
        PRECACHE_URLS.map(async (url) => {
          const res = await fetch(new Request(url, { cache: 'reload' })); // bypass the HTTP cache
          if (!res.ok) throw new Error(`Precache failed: ${url}`);
          await cache.put(url, res);
        }),
      ),
    ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((n) => OURS.test(n) && !CURRENT.has(n)).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || request.headers.has('range')) return; // let the browser handle it

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // never cache third-party requests

  if (PRECACHED.has(url.href)) {
    event.respondWith(caches.match(request, { cacheName: PRECACHE }).then((res) => res || fetch(request)));
    return;
  }

  const route = ROUTES.find((r) => r.match(url));
  event.respondWith(STRATEGIES[route.strategy](event, request, route).catch(() => offlineFallback(request)));
});

// The page can ask a waiting worker to take over (for an "Update available" button)
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
