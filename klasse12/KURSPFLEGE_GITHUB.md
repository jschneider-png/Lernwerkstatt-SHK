# HEIZUNGSTECHNIK – KLASSE 12 | Kurspflege über GitHub

Die Optik des bestehenden Heizungstechnik-Kurses bleibt erhalten. Übernommen aus Sanitärtechnik: **eine zentrale Datei für die Lehrkraft**.

## Normalfall: nur EINE Datei bearbeiten
1. GitHub-Repository öffnen.
2. `lehrkraft-inhalte.js` anklicken -> Stift/Edit.
3. Link oder Zusatztext in der passenden Blockwoche/Stunde ändern.
4. **Commit changes** speichern. GitHub Pages aktualisiert den Kurs nach der Veröffentlichung.

Die Felder `KURS_LINKS` enthalten Links pro Blockwoche, `STUNDEN_LINKS` Links pro Stunde und `ZUSATZINHALTE` ergänzende Texte, Bilder, Merksätze und Tipps. Optional lassen sich in `BLOCKWOCHEN` Titel und Leitfragen und in `LERNEINHEITEN` Praxisaufträge bearbeiten. Vorhandene Inhalte bleiben ohne Eintrag unverändert.

**Beispiel (vorhandene leere Felder ersetzen):**

```javascript
1: { mebis: "https://lernplattform.bycs.de/...", arbeitsblaetter: "materialien/bw01.pdf", videos: "", zusatzmaterial: "", drive: "" },
```

Für die sichtbaren Zusatzbuttons müssen externe Links mit `https://` beginnen. Eigene PDFs bitte mit vollständigem Link zur GitHub-Pages-Datei eintragen; bei `ZUSATZINHALTE.bild` genügt ein relativer Dateipfad.

## Welche Datei ist wofür?
- `index.html`: Startseite; wird für die normale Kurspflege NICHT bearbeitet.
- `lernpfad.html` / `lernpfad-bycs.html`: Darstellung, Unterrichtseinheiten, Prüfaufgaben und Fortschritt; für normale Ergänzungen NICHT bearbeiten.
- `lehrkraft-inhalte.js`: Links, Zusätze, optionale Änderungen an Leitfragen / Praxisaufträgen.
- `lernorte.html` / `lernorte-bycs.html`: vorhandene Material- und Linkübersichten; deren bestehende statische Links sind nicht automatisch mit der Lehrkraft-Datei synchronisiert.
- `.github/workflows/static.yml`: Veröffentlichungsworkflow erhalten.

## Altdateien ersetzen, nicht alles löschen
1. Bestehendes Repository als ZIP sichern (Code -> Download ZIP).
2. Neue Dateien aus diesem ZIP hochladen und gleichnamige Dateien ersetzen.
3. Alte, nicht mehr verwendete Dateien **erst dann** löschen, wenn die GitHub-Pages-Seite geprüft wurde.
4. `index.html`, Bilddateien und `.github/workflows/static.yml` keinesfalls pauschal löschen.
5. Externe BYCS-Links und Unterrichtsaufträge nach dem Hochladen testen.

## Hinweise
- Keine Namen, Schülerleistungen oder geheimen Zugangsdaten in öffentliche Dateien schreiben.
- Fortschrittsmarkierungen werden nur lokal im jeweiligen Browser gespeichert und nicht in GitHub.
- `lehrkraft-inhalte.js` überschreibt nur Einträge, die du tatsächlich einträgst; die eingebauten Fachtexte bleiben erhalten.
- Es wurde kein direkter Upload zu GitHub durchgeführt; dieses ZIP ist zum Hochladen vorbereitet.
