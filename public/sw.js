const cacheName = 'v1.0'
const cacheAssets = [
  '/',
  'theme/dark.png',
  'theme/light.png',
  'theme/backgroundDark.png',
  'theme/backgroundLight.png',
  'ahamed-rasheed.png',
  'background.png'
]

/**
 * Install Service Worker
 */
self.addEventListener('install', (event) => {
  const preLoaded = caches.open(cacheName)
    .then((cache) => {
      cache.addAll(cacheAssets)
    })
    .then(() => self.skipWaiting())

  event.waitUntil(preLoaded)
})

/**
 * Activate Service Worker
 */
self.addEventListener('activate', () => {})

/**
 * Fetch Cached data
 */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  )
})
