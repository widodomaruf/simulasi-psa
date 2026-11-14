/* LEGA – service worker: membuat situs bisa dibuka tanpa internet.
   Naikkan VERSI setiap kali index.html diperbarui agar pengguna mendapat versi terbaru. */
const VERSI = 'lega-v2.2';
const INTI = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './favicon.png', './apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSI).then((c) => c.addAll(INTI)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSI).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Halaman: ambil versi terbaru dari internet, pakai simpanan bila offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSI).then((c) => c.put('./index.html', copy)); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Font Google: simpan untuk dipakai offline
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(VERSI).then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => { c.put(req, res.clone()); return res; }))));
    return;
  }
  // File situs sendiri (kecuali analitik Vercel): simpanan dulu, lalu internet
  if (url.origin === self.location.origin && !url.pathname.startsWith('/_vercel')) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
  }
});
