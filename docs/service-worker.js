const CACHE = 'pet-v1';
const ASSETS = [
  './', './index.html', './animais.html', './animal-form.html',
  './agendamentos.html', './agendamento-form.html', './login.html',
  './styles.css', './app.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => {
      if (e.request.mode === 'navigate') return caches.match('./index.html');
    }))
  );
});
