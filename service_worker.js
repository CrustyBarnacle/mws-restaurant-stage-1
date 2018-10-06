// This file is registerd in js/main.js as '/service_worker.js'
// NOTE: the service_worker file is in the root directory of the project!!
// This is per https://developers.google.com/web/fundamentals/primers/service-workers/

console.log("service Worker: Registered");

// Array of files to cache
const cachedFiles = [
    // '/',
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            console.log('Cache opened');
            return cache.addAll(cachedFiles);
        })
    );
});


// Listen for fetch e - is request cached?
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});