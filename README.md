# games.kaisonnet.com

**Umgezogen.** Die Spiele und Web-Apps liegen jetzt im Repo `kaisonnet.com` unter `public/apps/` und sind unter `https://kaisonnet.com/apps/<name>/` erreichbar.

Dieses Repo leitet nur noch alte Adressen weiter:

- `_redirects`: 301-Weiterleitungen der alten Seiten auf die neuen Adressen.
- `sternwacht/sw.js`, `der-achte-schlaefer/sw.js`: Aufräum-Worker für installierte Spiele. Sie öffnen die neue Adresse, löschen die alte Offline-Kopie und melden sich ab.
- `sw.js` im Hauptordner: älterer Aufräum-Worker, ebenfalls behalten.
- `index.html` (auch in den Spiele-Ordnern): Rückfallebene, falls `_redirects` nicht greift.

Wenn nach einigen Wochen keine Zugriffe mehr kommen, kann das Cloudflare-Projekt samt Repo gelöscht werden.
