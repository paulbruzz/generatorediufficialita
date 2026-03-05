// Service Worker for caching static assets and data files
const CACHE_NAME = 'generatore-ufficialita-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/generacasualita.js',
  '/fogliostile.css',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/nomiPersoneSingolari.txt',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/nomiPersonePlurali.txt',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/alleSquadre.txt',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/perSquadre.txt',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/conSquadre.txt',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/cities.txt',
  'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/intro.txt'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});