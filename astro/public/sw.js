/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  // Default: do nothing and let network handle requests
});

