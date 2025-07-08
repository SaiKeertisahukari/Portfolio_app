self.addEventListener('install', function(event) {
  console.log('Service worker installed');
  event.waitUntil(
    caches.open('static').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      return res || fetch(event.request);
    })
  );
});
