# MedTech Career Hub

Moderne Karriere- und Informationsplattform für Berufe in der **Medizintechnik** (Deutschland/DACH).

## Inhalte

| Bereich | Was es gibt |
|---|---|
| **Berufswelt** | 12 Berufsbilder mit Aufgaben, Tagesablauf, Kompetenzprofil (Netzdiagramm), Einstiegswegen, Karrierepfad, Gehaltsrichtwerten und passenden Arbeitgebern |
| **Ausbildung & Studium** | Ausbildungsberufe, Fachschule, Studiengänge, duales Studium, Weiterbildungen & Zertifikate – mit Voraussetzungen, Lerninhalten, Anbietern und Aufstiegswegen |
| **Arbeitgeber** | Unternehmensverzeichnis: Hersteller, Krankenhäuser, Serviceunternehmen, Prüfdienstleister, Labore, Forschungsinstitute – filterbar nach Typ, Region und Beruf |
| **Gehalt & Markt** | Gehaltsspannen je Beruf, Gehaltsrechner, regionale Unterschiede, Arbeitgebertypen, Tarifverträge, Arbeitsmarkttrends – alle Werte als **Richtwerte** mit Quellen |
| **Karriere-Tools** | Kompetenzprofil mit Berufs-Matching, persönlicher Lernpfad mit Fortschritt, Berufsvergleich (bis zu 3), Bewerbungswissen mit Checkliste, Interviewtraining (Lernkarten, STAR), Stellen- und Ausbildungssuche |
| **Merkliste & Suche** | Berufe, Bildungsangebote und Arbeitgeber merken; plattformweite Suche |

## Technik

- Statische Single-Page-App ohne Build-Schritt und ohne Abhängigkeiten (HTML, CSS, Vanilla JS)
- Hash-Routing (`#/berufe/medizinphysiker`) – funktioniert auch direkt per `file://` und auf GitHub Pages
- Hell-/Dunkelmodus, responsiv, barrierearm (Tastaturbedienung, ARIA, Tabellenansichten zu Diagrammen)
- Persönliche Daten (Profil, Merkliste, Fortschritt) bleiben ausschließlich im `localStorage` des Browsers

## Starten

`index.html` im Browser öffnen – oder lokal servieren:

```bash
python3 -m http.server 8000
```

## Struktur

```
index.html            Grundgerüst, Navigation
css/styles.css        Design-System (Karten, Diagramme, Dark Mode)
js/charts.js          SVG-Netzdiagramm, Tooltips, Formatierung
js/app.js             Router, Seiten, Karriere-Tools
js/data/*.js          Inhalte (Berufe, Bildung, Arbeitgeber, Gehälter, Tools)
docs/DATA_SCHEMA.md   Datenschema zum Erweitern der Inhalte
scripts/validate-data.js  Konsistenzprüfung der Daten (node)
```

Neue Inhalte lassen sich ergänzen, indem man die Dateien in `js/data/` gemäß `docs/DATA_SCHEMA.md` erweitert und anschließend `node scripts/validate-data.js` ausführt.

## Hinweis

Gehaltsangaben sind Richtwerte und ersetzen keine individuelle Beratung. Unternehmensangaben ohne Gewähr. Die Plattform veröffentlicht keine eigenen Stellenanzeigen, sondern verlinkt auf aktuelle Angebote etablierter Jobbörsen und die Karriereseiten der Arbeitgeber.
