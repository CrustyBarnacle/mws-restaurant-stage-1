// This file is registerd in js/main.js as '/service_worker.js'
// NOTE: the service_worker file is in the root directory of the project!!
// This is per https://developers.google.com/web/fundamentals/primers/service-workers/

console.log("service Worker: Registered");

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll(cachedFiles);
        })
    );
});

// Array of files to cache
const cachedFiles = [
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'js/dbhelper.js'
];