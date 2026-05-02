// Desregistra qualquer service worker anterior
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.clients.matchAll({type:'window'}).then(clients => {
    clients.forEach(c => c.navigate(c.url));
  });
  return self.clients.claim();
});
