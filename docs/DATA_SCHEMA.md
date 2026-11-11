# MedTech Career Hub – Datenschema

Die Plattform ist eine statische Single-Page-App ohne Build-Schritt (funktioniert auch per Doppelklick über `file://`).
Alle Daten liegen als **klassische Skripte** (KEINE ES-Module, kein `import`/`export`) in `js/data/*.js` und hängen sich an das globale Objekt `window.MTH`:

```js
window.MTH = window.MTH || {};
MTH.professions = (MTH.professions || []).concat([ /* ... */ ]);
```

Sprache: Deutsch, sachlich, korrekt, gut lesbar (Du-Ansprache vermeiden, neutral formulieren). Keine erfundenen Fakten: Zahlen nur, wenn belastbar, sonst weglassen oder als „ca.“/Richtwert kennzeichnen. Keine erfundenen Stellenanzeigen.

## Gemeinsame IDs

### Berufs-IDs (`professionId`) – fest
| id | Titel |
|---|---|
| `medizintechniker` | Medizintechniker/in (staatl. gepr. Techniker/in Medizintechnik) |
| `biomedizinischer-ingenieur` | Biomedizinische/r Ingenieur/in |
| `servicetechniker` | Servicetechniker/in Medizintechnik |
| `medizintechnikingenieur` | Medizintechnikingenieur/in |
| `medizinphysiker` | Medizinphysiker/in (Medizinphysik-Experte/in) |
| `technischer-leiter` | Technische/r Leiter/in Medizintechnik |
| `geraetemanagement` | Mitarbeiter/in Krankenhaus-Gerätemanagement |
| `produktspezialist` | Produktspezialist/in |
| `anwendungstechniker` | Anwendungstechniker/in / Applikationsspezialist/in |
| `qualitaetsmanager` | Qualitätsmanager/in Medizinprodukte |
| `regulatory-affairs` | Regulatory Affairs Manager/in |
| `software-entwickler` | Software-Entwickler/in Medizinprodukte |

### Kompetenzdimensionen (für Profil, Vergleich, Matching) – fest, Werte 1–5
`technik` (Gerätetechnik & Mechanik/Elektronik), `medizin` (Medizin & Biologie), `physik` (Physik & Mathematik),
`software` (IT & Software), `kommunikation` (Kunden-/Teamkommunikation), `mobilitaet` (Reisebereitschaft/Außendienst),
`regulatorik` (Normen, Recht & Dokumentation), `fuehrung` (Führung & Organisation), `forschung` (Forschung & Entwicklung)

### Arbeitgebertypen (`employerType`) – fest
`hersteller`, `krankenhaus`, `service`, `pruefdienst`, `labor`, `forschung`

### Regionen – fest
`nord` (SH, HH, HB, NI, MV), `ost` (BE, BB, SN, ST, TH), `west` (NW, HE, RP, SL), `sued` (BW, BY), `international` (AT, CH, sonstige)

## Datei `js/data/professions-a.js` und `professions-b.js` → `MTH.professions`
```js
{
  id: 'medizintechniker',
  title: 'Medizintechniker/in',
  icon: '🔧',                       // ein Emoji
  category: 'Technik & Service',     // eine von: 'Technik & Service' | 'Ingenieurwesen & Entwicklung' | 'Physik & Strahlung' | 'Management & Qualität' | 'Vertrieb & Anwendung'
  summary: '1–2 Sätze',
  description: 'Absatz, 3–5 Sätze',
  tasks: ['5–7 typische Aufgaben'],
  workplaces: ['Typische Einsatzorte'],
  employerTypes: ['krankenhaus', 'hersteller'],   // employerType-IDs
  skills: { hard: ['…'], soft: ['…'] },
  requirements: ['Formale/fachliche Voraussetzungen'],
  entryPaths: [ { type: 'Ausbildung'|'Studium'|'Weiterbildung'|'Quereinstieg', title: '…', duration: '…' } ],
  educationIds: ['…'],              // IDs aus MTH.education.programs
  profile: { technik: 5, medizin: 3, physik: 3, software: 2, kommunikation: 3, mobilitaet: 2, regulatorik: 3, fuehrung: 2, forschung: 1 },
  careerPath: [ { title: 'Einstieg als …', years: '0–2 J.' }, … ],   // 4–5 Stufen
  dayInLife: [ { time: '07:30', activity: '…' } ],                    // 5–7 Einträge
  outlook: 'sehr gut' | 'gut' | 'stabil',
  outlookText: '1–2 Sätze zur Arbeitsmarktlage',
  related: ['andere professionIds'],
  facts: { workload: 'z. B. Vollzeit, Bereitschaftsdienst möglich', travel: 'gering|mittel|hoch', remote: 'kaum|teilweise|gut möglich' }
}
```

## Datei `js/data/education.js` → `MTH.education`
```js
MTH.education = {
  programs: [ {
    id: 'ausb-elektroniker-geraete',
    type: 'Ausbildung' | 'Studium' | 'Duales Studium' | 'Fachschule' | 'Weiterbildung' | 'Zertifikat',
    level: 'z. B. Bachelor (B.Eng.) / Master (M.Sc.) / IHK / DQR 6',
    title: '…', duration: '…', degree: '…',
    description: '2–4 Sätze',
    requirements: ['…'], contents: ['typische Lerninhalte'],
    providers: ['reale Beispiele: Hochschulen/Träger'],   // nur reale Einrichtungen
    costs: 'optional, z. B. Ausbildungsvergütung oder Kursgebühr (Richtwert)',
    professionIds: ['…'],
    link: 'optional, offizielle URL'
  } ],
  generalRequirements: [ { title: '…', text: '…' } ],  // Schulfächer, Interessen, Gesundheit, etc.
  development: [ { from: '…', to: '…', how: '…' } ]     // typische Aufstiegswege (Ausbildung → Techniker → Ingenieur …)
};
```

## Datei `js/data/employers-a.js` (Hersteller) und `employers-b.js` (übrige Typen) → `MTH.employers`
```js
{
  id: 'siemens-healthineers', name: 'Siemens Healthineers',
  type: 'hersteller',               // employerType
  hq: 'Erlangen', state: 'Bayern', region: 'sued',
  locations: ['wichtige deutsche Standorte'],
  focus: ['Bildgebung', 'Labordiagnostik'],
  size: 'Konzern' | 'Großunternehmen' | 'Mittelstand' | 'Öffentliche Einrichtung' | 'Forschungseinrichtung',
  employees: 'optional, nur belastbar, z. B. „ca. 70.000 weltweit“',
  founded: 'optional Jahr',
  description: '2–3 Sätze',
  professionIds: ['typisch dort gefragte Berufe'],
  careerUrl: 'offizielle Karriereseite (nur wenn sicher)',
  website: 'offizielle Website'
}
```

## Datei `js/data/salaries.js` → `MTH.salaries`
Jahresbrutto in EUR (Vollzeit, Deutschland), immer als **Richtwerte**.
```js
MTH.salaries = {
  asOf: '2026',
  disclaimer: '…',
  methodology: '…',
  sources: [ { name, url, note } ],
  byProfession: { medizintechniker: { entry: [min, max], mid: [min, max], senior: [min, max], median: 52000, note: '…' }, … },  // alle 12 IDs
  experience: [ { label: '0–2 Jahre', factor: 0.85 }, … ],
  regions: [ { id: 'sued', label: 'Süddeutschland (BW, BY)', index: 108, note: '…' }, … ],     // Bundesschnitt = 100
  states: [ { name: 'Baden-Württemberg', index: 110 }, … ],     // 16 Länder
  employerTypes: [ { type: 'hersteller', label: '…', index: 108, note: '…' }, … ],
  tariffs: [ { name: 'TVöD-K', text: '…' }, { name: 'IG Metall …', text: '…' }, … ],
  factors: [ { title, text } ],
  market: {
    summary: '…',
    indicators: [ { label, value, source } ],
    trends: [ { title, text, icon } ],
    demand: [ { professionId, level: 'sehr hoch'|'hoch'|'mittel', text } ]
  }
};
```

## Datei `js/data/tools.js` → `MTH.tools`
```js
MTH.tools = {
  dimensions: [ { id: 'technik', label: 'Gerätetechnik', question: 'Frage für die Selbsteinschätzung', hint: '…' }, … ],  // alle 9 Dimensionen
  learningPaths: { medizintechniker: [ { phase: 'Fundament', title, text, duration, educationIds: [] }, … ], … },  // alle 12 IDs, je 4–6 Schritte
  application: [ { title: 'Lebenslauf', tips: ['…'] }, … ],       // 5–7 Abschnitte
  documentsChecklist: ['…'],
  interview: {
    method: { title: 'STAR-Methode', steps: [ { key: 'S', label: 'Situation', text } ] },
    general: [ { q, hint } ],
    technical: [ { area: 'Medizinprodukterecht', questions: [ { q, hint } ] }, … ],
    ownQuestions: ['Fragen an den Arbeitgeber'],
    dos: ['…'], donts: ['…']
  },
  jobPortals: [ { name, url, description, focus: 'Ausbildung'|'Stellen'|'Beides' } ],
  associations: [ { name, abbr, url, description } ]
};
```
