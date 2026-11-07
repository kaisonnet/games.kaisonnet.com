// Aufräum-Worker: Früher lag das Spiel direkt hier im Hauptordner und hat
// einen Offline-Speicher registriert. Jetzt liegt es in /der-achte-schlaefer/.
// Dieser Worker meldet den alten Hauptordner-Worker einfach wieder ab.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(self.registration.unregister());
});
