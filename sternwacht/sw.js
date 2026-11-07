// Umzug: Sternwacht liegt jetzt unter https://kaisonnet.com/apps/sternwacht/
// Dieser Worker ersetzt den alten Offline-Speicher: Er öffnet offene Fenster an der
// neuen Adresse, löscht den alten Cache und meldet sich dann selbst ab.
const NEW = 'https://kaisonnet.com/apps/sternwacht/';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    await self.clients.claim();
    for (const c of await self.clients.matchAll({ type: 'window' })) { try { await c.navigate(NEW); } catch (_) {} }
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
  })());
});
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') e.respondWith(Response.redirect(NEW, 301));
});
