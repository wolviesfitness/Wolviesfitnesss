const CACHE = 'wolvies-v2';
const URLS = ['index.html','about.html','shop.html','library.html','blog.html','contact.html','dashboard.html','faq.html','freeguide.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));