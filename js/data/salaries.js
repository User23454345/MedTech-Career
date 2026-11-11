/* MedTech Career Hub – Gehaltsdaten (Richtwerte)
 * Klassisches Skript, hängt sich an window.MTH (keine ES-Module).
 * Alle Beträge: Jahresbrutto in EUR, Vollzeit, Deutschland – ausschließlich Richtwerte.
 */
window.MTH = window.MTH || {};

MTH.salaries = {
  asOf: '2026',

  disclaimer:
    'Alle Gehaltsangaben sind unverbindliche Richtwerte (Jahresbrutto, Vollzeit, Deutschland, Stand 2026). ' +
    'Sie wurden aus öffentlich zugänglichen Statistiken, Tariftabellen und Gehaltsportalen abgeleitet und gerundet. ' +
    'Das tatsächliche Gehalt hängt u. a. von Arbeitgeber, Tarifbindung, Region, Qualifikation, Berufserfahrung, ' +
    'Verantwortungsumfang und variablen Bestandteilen ab und kann deutlich abweichen. Keine Rechts- oder Gehaltsberatung.',

  methodology:
    'Ausgangspunkt sind amtliche Medianwerte (Entgeltatlas der Bundesagentur für Arbeit, Verdiensterhebung des Statistischen Bundesamts) ' +
    'sowie die Entgelttabellen von TVöD, TV-L und dem Flächentarif der Metall- und Elektroindustrie. Ergänzend wurden Angaben von Gehaltsportalen ' +
    '(z. B. gehalt.de, StepStone) zur Plausibilisierung herangezogen; diese beruhen auf freiwilligen Nutzerangaben und sind nicht repräsentativ. ' +
    'Für Berufe ohne eigene amtliche Kennzahl wurden die Spannen aus verwandten Berufsaggregaten und typischen Tarifeingruppierungen geschätzt. ' +
    'Die Spannen „Einstieg“, „mit Erfahrung“ und „Senior“ entsprechen grob 0–3, 3–8 und mehr als 8 Berufsjahren. ' +
    'Regional- und Arbeitgeberindizes (Bundesschnitt = 100) sind gerundete Näherungswerte und dienen nur der Orientierung. ' +
    'Alle Werte wurden auf volle 1.000 EUR gerundet.',

  sources: [
    {
      name: 'Bundesagentur für Arbeit – Entgeltatlas (Hilfe & Methodik)',
      url: 'https://www.arbeitsagentur.de/hilfe-entgeltatlas',
      note: 'Medianentgelte sozialversicherungspflichtig Vollzeitbeschäftigter nach Berufsaggregaten (keine Einzelberufe); Basis für Techniker- und Ingenieurwerte.'
    },
    {
      name: 'Statistisches Bundesamt – Mittlerer Bruttojahresverdienst 2025 (Pressemitteilung)',
      url: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html',
      note: 'Median 2025 inkl. Sonderzahlungen: 54.066 EUR; Ost (ohne Berlin) 46.013 EUR, West 55.435 EUR.'
    },
    {
      name: 'Statistisches Bundesamt – Verdienste nach Branchen und Berufen',
      url: 'https://www.destatis.de/DE/Themen/Arbeit/Verdienste/Verdienste-Branche-Berufe/_inhalt.html',
      note: 'Tabellen zu Bruttomonatsverdiensten nach Branchen, Berufen und Ländern.'
    },
    {
      name: 'SPECTARIS – Eckdaten 2025 (Übersicht)',
      url: 'https://www.spectaris.de/fileadmin/Content/Verband/Betriebswirtschaft-Marktforschung/Eckdaten_2025_Uebersicht_v4.pdf',
      note: 'Medizintechnik 2024 (Betriebe ab 20 Beschäftigten): Umsatz, Exportquote, Beschäftigte, Zahl der Unternehmen.'
    },
    {
      name: 'SPECTARIS – Pressemitteilung zum Jahrbuch Medizintechnik',
      url: 'https://www.spectaris.de/fileadmin/Content/Pressemitteilungen/2025/Medizintechnik/SPECTARIS-PM_Jahrbuch_Medizintechnik.pdf',
      note: 'Branchenkennzahlen und Einordnung der deutschen Medizintechnikindustrie.'
    },
    {
      name: 'BVMed – Charts MedTech-Markt',
      url: 'https://www.bvmed.de/download/charts-medtech-markt.pdf',
      note: 'Branchenstruktur (u. a. Anteil kleiner und mittlerer Unternehmen), Beschäftigung, Exportquote.'
    },
    {
      name: 'Statistik der Bundesagentur für Arbeit – Fachkräfteengpassanalyse',
      url: 'https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Fachkraeftebedarf/Fachkraefteengpassanalyse/Fachkraefteengpassanalyse.html',
      note: 'Jährliche Engpassbewertung auf Ebene von Berufsgattungen anhand mehrerer Indikatoren; Berufslisten zum Download.'
    },
    {
      name: 'IG Metall – Tarifrunde Metall und Elektro 2024',
      url: 'https://www.igmetall.de/tarif/tarifrunden/metall-und-elektro/tarifrunde-metall-und-elektro-2024',
      note: 'Tarifergebnis Metall- und Elektroindustrie vom November 2024 (Laufzeit bis 31.10.2026).'
    },
    {
      name: 'Einigungspapier TVöD (Bund/VKA) vom 6. April 2025',
      url: 'https://nrw.dbsh.de/media/public/dbsh-nw/Landesverband_NRW/Fachgruppen/LAT/TV%C3%B6D/2025/250406_Einigungspapier_TVOeD_2025.pdf',
      note: 'Grundlage der Entgelterhöhungen im TVöD inkl. Krankenhausbereich (TVöD-K).'
    },
    {
      name: 'GEW – Fragen und Antworten zum Abschluss TV-L 2025/26',
      url: 'https://www.gew.de/mehr/fragen-und-antworten',
      note: 'Tarifeinigung der Länder vom 14.02.2026 (relevant u. a. für viele Universitätskliniken).'
    },
    {
      name: 'StepStone Gehaltsreport 2026',
      url: 'https://www.stepstone.de/gehaltsreport/',
      note: 'Portalbasierte Gehaltsdaten nach Bundesländern, Branchen und Berufen; zur Plausibilisierung.'
    },
    {
      name: 'gehalt.de – Ingenieur/-in Medizintechnik',
      url: 'https://www.gehalt.de/beruf/ingenieur-in-medizintechnik',
      note: 'Portalbasierter Median und Gehaltsspanne (Nutzerangaben).'
    },
    {
      name: 'gehalt.de – Regulatory-Affairs-Manager/-in',
      url: 'https://www.gehalt.de/beruf/regulatory-affairs-manager-managerin',
      note: 'Portalbasierte Gehaltsangaben, u. a. nach Bundesländern (Nutzerangaben, branchenübergreifend inkl. Pharma).'
    }
  ],

  byProfession: {
    medizintechniker: {
      entry: [40000, 48000],
      mid: [48000, 58000],
      senior: [56000, 68000],
      median: 53000,
      note: 'Orientierung an Entgeltatlas-Medianen für technische Fachkräfte und Techniker/innen verwandter Berufsaggregate. In Kliniken häufig TVöD/TV-L etwa E8–E10, bei Herstellern oft höher.'
    },
    'biomedizinischer-ingenieur': {
      entry: [46000, 54000],
      mid: [54000, 68000],
      senior: [66000, 85000],
      median: 58000,
      note: 'Abgeleitet aus Ingenieurwerten Medizintechnik; in Forschungseinrichtungen und Universitätskliniken meist TV-L/TVöD E11–E13, in der Industrie mit größerer Spreizung.'
    },
    servicetechniker: {
      entry: [40000, 47000],
      mid: [46000, 56000],
      senior: [54000, 64000],
      median: 50000,
      note: 'Grundgehalt; im Außendienst kommen häufig Dienstwagen (auch privat nutzbar), Spesen sowie Zulagen für Bereitschaft und Reisezeit hinzu.'
    },
    medizintechnikingenieur: {
      entry: [48000, 56000],
      mid: [56000, 70000],
      senior: [68000, 90000],
      median: 60000,
      note: 'Portaldaten (gehalt.de) nennen einen Monatsmedian von rund 4.600 EUR; tarifgebundene Hersteller (z. B. Metall- und Elektroindustrie) und Führungsfunktionen liegen deutlich darüber.'
    },
    medizinphysiker: {
      entry: [56000, 65000],
      mid: [65000, 80000],
      senior: [78000, 100000],
      median: 72000,
      note: 'Im Krankenhaus überwiegend TV-L/TVöD E13, mit Fachkunde (z. B. Strahlentherapie) oder Leitungsfunktion teils E14/E15. Während der Weiterbildung zur Medizinphysik-Expertin bzw. zum Medizinphysik-Experten eher am unteren Rand.'
    },
    'technischer-leiter': {
      entry: [65000, 75000],
      mid: [75000, 90000],
      senior: [88000, 115000],
      median: 80000,
      note: 'Stark abhängig von Klinikgröße, Personal- und Budgetverantwortung; häufig außertarifliche Vergütung oder hohe Entgeltgruppen.'
    },
    geraetemanagement: {
      entry: [36000, 44000],
      mid: [43000, 52000],
      senior: [50000, 60000],
      median: 47000,
      note: 'Im öffentlichen Krankenhaus abhängig von Tätigkeitsmerkmalen meist mittlere Entgeltgruppen des TVöD-K/TV-L; bei Medizinprodukteverantwortung bzw. Beauftragtenfunktion höher.'
    },
    produktspezialist: {
      entry: [48000, 56000],
      mid: [56000, 72000],
      senior: [70000, 90000],
      median: 62000,
      note: 'Inklusive typischer variabler Anteile (Bonus/Provision); Dienstwagen ist üblich. Fixgehalt liegt entsprechend darunter.'
    },
    anwendungstechniker: {
      entry: [44000, 52000],
      mid: [52000, 64000],
      senior: [62000, 76000],
      median: 56000,
      note: 'Applikationsspezialist/innen mit klinischem Hintergrund (z. B. MTR, Pflege) oder technischem Abschluss; Reisetätigkeit und Zulagen beeinflussen das Gesamtpaket.'
    },
    qualitaetsmanager: {
      entry: [48000, 56000],
      mid: [56000, 70000],
      senior: [68000, 88000],
      median: 63000,
      note: 'QM nach ISO 13485 bei Herstellern; Funktionen wie Leitung QM oder Managementbeauftragte/r liegen am oberen Rand.'
    },
    'regulatory-affairs': {
      entry: [52000, 62000],
      mid: [62000, 78000],
      senior: [76000, 100000],
      median: 70000,
      note: 'Gehaltsportale (branchenübergreifend inkl. Pharma) weisen für Regulatory Affairs überdurchschnittliche Werte aus, mit großer Streuung nach Branche und Region. Erfahrung mit MDR/IVDR und Funktion als PRRC (Art. 15 MDR) wirken gehaltssteigernd.'
    },
    'software-entwickler': {
      entry: [50000, 60000],
      mid: [60000, 75000],
      senior: [74000, 95000],
      median: 66000,
      note: 'Medical-Device-Software nach IEC 62304; Kenntnisse in Cybersecurity, Embedded-Systemen oder Software als Medizinprodukt (SaMD) werden zusätzlich honoriert.'
    }
  },

  experience: [
    { label: '0–2 Jahre', factor: 0.85 },
    { label: '3–5 Jahre', factor: 0.95 },
    { label: '6–9 Jahre', factor: 1.05 },
    { label: '10–14 Jahre', factor: 1.15 },
    { label: '15+ Jahre', factor: 1.22 }
  ],

  regions: [
    {
      id: 'sued',
      label: 'Süddeutschland (BW, BY)',
      index: 108,
      note: 'Hohe Dichte großer Hersteller (z. B. Raum Tuttlingen, Erlangen, München) und tarifgebundener Industrie; zugleich hohe Lebenshaltungskosten in Ballungsräumen.'
    },
    {
      id: 'west',
      label: 'Westdeutschland (NW, HE, RP, SL)',
      index: 101,
      note: 'Hessen deutlich über, Rheinland-Pfalz und Saarland eher unter dem Bundesschnitt.'
    },
    {
      id: 'nord',
      label: 'Norddeutschland (SH, HH, HB, NI, MV)',
      index: 97,
      note: 'Hamburg und Bremen über dem Schnitt, Flächenländer – insbesondere Mecklenburg-Vorpommern – darunter.'
    },
    {
      id: 'ost',
      label: 'Ostdeutschland (BE, BB, SN, ST, TH)',
      index: 88,
      note: 'Laut Destatis lag der Median 2025 in den östlichen Ländern ohne Berlin bei 46.013 EUR gegenüber 55.435 EUR im Westen; Berlin liegt nahe am Bundesschnitt. Im öffentlichen Dienst gelten bundesweit einheitliche Tariftabellen.'
    },
    {
      id: 'international',
      label: 'International (AT, CH, sonstige)',
      index: 115,
      note: 'Nur grobe Orientierung: Österreich bewegt sich etwa auf deutschem Niveau, die Schweiz nominal deutlich darüber bei wesentlich höheren Lebenshaltungskosten. Steuern, Sozialabgaben und Kaufkraft unterscheiden sich stark.'
    }
  ],

  states: [
    { name: 'Baden-Württemberg', index: 109 },
    { name: 'Bayern', index: 107 },
    { name: 'Berlin', index: 101 },
    { name: 'Brandenburg', index: 88 },
    { name: 'Bremen', index: 102 },
    { name: 'Hamburg', index: 112 },
    { name: 'Hessen', index: 109 },
    { name: 'Mecklenburg-Vorpommern', index: 84 },
    { name: 'Niedersachsen', index: 96 },
    { name: 'Nordrhein-Westfalen', index: 101 },
    { name: 'Rheinland-Pfalz', index: 97 },
    { name: 'Saarland', index: 97 },
    { name: 'Sachsen', index: 87 },
    { name: 'Sachsen-Anhalt', index: 85 },
    { name: 'Schleswig-Holstein', index: 95 },
    { name: 'Thüringen', index: 85 }
  ],

  employerTypes: [
    {
      type: 'hersteller',
      label: 'Medizinprodukte-Hersteller',
      index: 108,
      note: 'Große, tarifgebundene Konzerne zahlen überdurchschnittlich; kleine und mittlere Unternehmen (laut BVMed rund 93 % der Unternehmen ab 20 Beschäftigten haben weniger als 250 Beschäftigte) teils deutlich darunter.'
    },
    {
      type: 'krankenhaus',
      label: 'Krankenhaus / Universitätsklinikum',
      index: 95,
      note: 'Überwiegend TVöD-K, TV-L oder kirchliche Arbeitsvertragsrichtlinien (AVR); transparente Stufensteigerung, Jahressonderzahlung und Zusatzversorgung, dafür geringere Spitzengehälter.'
    },
    {
      type: 'service',
      label: 'Technischer Dienstleister / Service-Unternehmen',
      index: 97,
      note: 'Häufig ohne Flächentarif; Zulagen für Bereitschaft, Rufdienst und Reisetätigkeit sowie Dienstwagen machen einen wichtigen Teil der Vergütung aus.'
    },
    {
      type: 'pruefdienst',
      label: 'Prüforganisation / Benannte Stelle',
      index: 103,
      note: 'Auditor/innen bei Benannten Stellen sind aufgrund knapper MDR/IVDR-Expertise gefragt; Prüfdienste für sicherheitstechnische und messtechnische Kontrollen eher im mittleren Bereich.'
    },
    {
      type: 'labor',
      label: 'Labor / Diagnostik',
      index: 94,
      note: 'Labordienstleister und Diagnostikanbieter mit breiter Spanne; IVD-Hersteller eher wie Medizinprodukte-Hersteller.'
    },
    {
      type: 'forschung',
      label: 'Hochschule / Forschungseinrichtung',
      index: 92,
      note: 'Meist TV-L oder TVöD (Bund), oft befristete Projektstellen und Teilzeit während der Promotion; Vollzeitwerte in E13 vergleichbar mit Klinikniveau.'
    }
  ],

  tariffs: [
    {
      name: 'TVöD-K (kommunale Krankenhäuser)',
      text: 'Tarifvertrag für den öffentlichen Dienst, Besonderer Teil Krankenhäuser. Nach der Tarifeinigung vom 6. April 2025 stiegen die Tabellenentgelte zum 1. April 2025 um 3,0 % (mindestens 110 EUR) und zum 1. Mai 2026 um weitere 2,8 %; die Laufzeit reicht bis 31. März 2027. Technische Fachkräfte werden je nach Tätigkeitsmerkmalen häufig in mittlere Entgeltgruppen (etwa E8–E10) eingruppiert, Bachelor-Ingenieur/innen typischerweise E9b–E11, Master und Medizinphysiker/innen E13. Innerhalb der Gruppe steigt das Entgelt über Erfahrungsstufen 1–6.'
    },
    {
      name: 'TV-L (Universitätskliniken der Länder)',
      text: 'Für viele Universitätskliniken gilt der Tarifvertrag der Länder (Hessen hat mit dem TV-H einen eigenen Tarifvertrag; einige Kliniken haben Haustarife). Nach der Tarifeinigung vom 14. Februar 2026 steigen die Tabellenentgelte ab 1. April 2026 um 2,8 % (mindestens 100 EUR), ab 1. März 2027 um 2,0 % und ab 1. Januar 2028 um 1,0 %; die Laufzeit reicht bis 31. Januar 2028. Medizinphysik-Expert/innen werden in der Regel in E13, mit erweiterten Fachkunden oder Leitungsaufgaben teils in E14 eingruppiert.'
    },
    {
      name: 'IG Metall – Flächentarif Metall- und Elektroindustrie',
      text: 'Tarifgebundene Medizintechnik-Hersteller wenden häufig den Flächentarif der Metall- und Elektroindustrie an (Entgeltrahmenabkommen, regional unterschiedlich). Der Abschluss vom November 2024 sah eine Einmalzahlung von 600 EUR sowie Erhöhungen um 2,0 % und 3,1 % vor, Laufzeit bis 31. Oktober 2026. In der Tarifrunde 2026 fordert die IG Metall 5 % mehr Geld; nach Ende der Friedenspflicht kam es ab November 2026 zu Warnstreiks. Aktuelle Verhandlungsstände sind bei IG Metall bzw. den Arbeitgeberverbänden zu prüfen. Zusätzlich gibt es tarifliches Zusatzgeld (T-ZUG) und Urlaubsgeld.'
    },
    {
      name: 'Kirchliche Arbeitsvertragsrichtlinien (AVR)',
      text: 'In Krankenhäusern in Trägerschaft von Caritas oder Diakonie gelten eigene Arbeitsvertragsrichtlinien, die sich in Struktur und Höhe weitgehend am TVöD orientieren.'
    },
    {
      name: 'Haustarif und außertarifliche Vergütung',
      text: 'Viele mittelständische Hersteller und Dienstleister sind nicht tarifgebunden und vergüten einzelvertraglich. Fach- und Führungskräfte oberhalb der höchsten Tarifgruppe erhalten oft außertarifliche (AT-)Verträge mit Bonusanteil.'
    }
  ],

  factors: [
    {
      title: 'Tarifbindung',
      text: 'Tarifgebundene Arbeitgeber zahlen im Mittel spürbar mehr und bieten Sonderzahlungen, geregelte Arbeitszeiten und Stufensteigerungen. Im Vorstellungsgespräch lohnt die Frage nach Tarif oder Gehaltsband.'
    },
    {
      title: 'Abschluss und Zusatzqualifikation',
      text: 'Ingenieurabschluss, staatlich geprüfte/r Techniker/in oder Meister/in, Fachkunde im Strahlenschutz (StrlSchV), Qualifikation als PRRC oder interne/r Auditor/in (ISO 13485) heben das Gehaltsniveau.'
    },
    {
      title: 'Regulatorische Expertise',
      text: 'Erfahrung mit MDR (EU) 2017/745, IVDR (EU) 2017/746, ISO 14971 und technischer Dokumentation ist seit Geltungsbeginn der MDR besonders gefragt und wird entsprechend vergütet.'
    },
    {
      title: 'Unternehmensgröße und Branche',
      text: 'Konzerne zahlen meist mehr als kleine Unternehmen. Zwischen Herstellern, Kliniken und Dienstleistern liegen je nach Funktion mehrere tausend Euro Jahresunterschied.'
    },
    {
      title: 'Region',
      text: 'Ballungsräume in Süd- und Westdeutschland sowie Hamburg liegen über dem Bundesschnitt, ostdeutsche Flächenländer darunter. Die Lebenshaltungskosten sollten in den Vergleich einbezogen werden.'
    },
    {
      title: 'Variable Bestandteile und Zusatzleistungen',
      text: 'Im Vertrieb und Außendienst machen Bonus, Provision und Dienstwagen einen großen Teil aus; in Kliniken zählen Bereitschaftsdienst-Vergütung, Jahressonderzahlung und betriebliche Altersversorgung.'
    },
    {
      title: 'Führungs- und Budgetverantwortung',
      text: 'Teamleitung, Leitung der Medizintechnik-Abteilung oder Projektverantwortung führen zu deutlichen Gehaltssprüngen, oft verbunden mit einem Wechsel in höhere Entgeltgruppen oder AT-Verträge.'
    }
  ],

  market: {
    summary:
      'Die deutsche Medizintechnik ist stark exportorientiert und mittelständisch geprägt. Laut SPECTARIS erzielten die Unternehmen mit mindestens 20 Beschäftigten 2024 rund 41,4 Mrd. EUR Umsatz bei einer Exportquote von gut 68 %. ' +
      'Regulatorische Anforderungen (MDR/IVDR), Digitalisierung und der Fachkräftebedarf in Kliniken und Industrie prägen den Arbeitsmarkt. ' +
      'Die Nachfrageeinschätzungen unten sind redaktionelle Einschätzungen und keine amtliche Engpassklassifizierung.',
    indicators: [
      {
        label: 'Umsatz Medizintechnik 2024 (Betriebe ab 20 Beschäftigten)',
        value: 'ca. 41,4 Mrd. EUR (+2,5 % ggü. 2023)',
        source: 'SPECTARIS Eckdaten 2025 auf Basis Destatis'
      },
      {
        label: 'Exportquote 2024',
        value: 'ca. 68,1 %',
        source: 'SPECTARIS Eckdaten 2025'
      },
      {
        label: 'Beschäftigte 2024 (Betriebe ab 20 Beschäftigten)',
        value: 'ca. 165.900 (+2,8 %)',
        source: 'SPECTARIS Eckdaten 2025'
      },
      {
        label: 'Betriebe ab 20 Beschäftigten (2024)',
        value: 'ca. 1.500',
        source: 'SPECTARIS Eckdaten 2025'
      },
      {
        label: 'Anteil Unternehmen (ab 20 Beschäftigten) mit weniger als 250 Beschäftigten',
        value: 'ca. 93 %',
        source: 'BVMed'
      },
      {
        label: 'Median-Bruttojahresverdienst Vollzeit 2025 (alle Berufe, Deutschland)',
        value: '54.066 EUR (Ost ohne Berlin: 46.013 EUR, West: 55.435 EUR)',
        source: 'Statistisches Bundesamt, Pressemitteilung April 2026'
      },
      {
        label: 'Engpassberufe in Deutschland (Fachkräfteengpassanalyse 2025)',
        value: '157 Berufsgattungen (2024: 163)',
        source: 'Statistik der Bundesagentur für Arbeit'
      }
    ],
    trends: [
      {
        title: 'Regulatorik als Jobmotor',
        text: 'MDR und IVDR haben den Aufwand für klinische Bewertung, technische Dokumentation und Post-Market Surveillance erhöht. Fachkräfte für Regulatory Affairs und Qualitätsmanagement sind entsprechend gefragt.',
        icon: '📋'
      },
      {
        title: 'Digitalisierung und Software als Medizinprodukt',
        text: 'Vernetzte Geräte, KI-gestützte Diagnostik und Software als Medizinprodukt erfordern Kompetenzen in IEC 62304, IEC 81001-5-1 (Cybersecurity) und Datenschutz.',
        icon: '💻'
      },
      {
        title: 'Krankenhausreform und Technikmanagement',
        text: 'Strukturveränderungen in der Kliniklandschaft und Investitionen in Digitalisierung verändern das Medizintechnik-Management in Krankenhäusern; Gerätemanagement nach MPBetreibV bleibt Pflichtaufgabe.',
        icon: '🏥'
      },
      {
        title: 'Service und Instandhaltung',
        text: 'Steigende Gerätezahlen und Prüfpflichten (STK, MTK, Prüfungen nach IEC 62353) sorgen für eine stabile Nachfrage nach Servicetechniker/innen.',
        icon: '🔧'
      },
      {
        title: 'Strahlentherapie und Bildgebung',
        text: 'Das Strahlenschutzrecht (StrlSchG/StrlSchV) schreibt die Hinzuziehung von Medizinphysik-Expert/innen vor; die Zahl qualifizierter Fachkräfte ist begrenzt.',
        icon: '☢️'
      }
    ],
    demand: [
      { professionId: 'regulatory-affairs', level: 'sehr hoch', text: 'MDR/IVDR-Erfahrung ist knapp; Hersteller und Benannte Stellen konkurrieren um dieselben Fachkräfte.' },
      { professionId: 'medizinphysiker', level: 'sehr hoch', text: 'Gesetzlich vorgeschriebene Funktion mit langer Weiterbildung; Stellen sind oft schwer zu besetzen.' },
      { professionId: 'software-entwickler', level: 'hoch', text: 'Digitalisierung und Cybersecurity-Anforderungen erhöhen den Bedarf an Entwickler/innen mit Medizinprodukte-Know-how.' },
      { professionId: 'qualitaetsmanager', level: 'hoch', text: 'ISO-13485-Systeme, Audits und Post-Market-Prozesse erfordern dauerhaft qualifiziertes Personal.' },
      { professionId: 'servicetechniker', level: 'hoch', text: 'Hersteller und Dienstleister suchen regelmäßig Techniker/innen für Installation, Wartung und Prüfungen.' },
      { professionId: 'medizintechniker', level: 'hoch', text: 'Kliniken und Servicefirmen benötigen Fachkräfte für Instandhaltung und sicherheitstechnische Kontrollen.' },
      { professionId: 'medizintechnikingenieur', level: 'hoch', text: 'Entwicklung, Verifizierung und Risikomanagement nach ISO 14971 bleiben Kernbedarfe der Industrie.' },
      { professionId: 'biomedizinischer-ingenieur', level: 'mittel', text: 'Gute Chancen in F&E und Industrie, Stellen in der Forschung jedoch häufig befristet.' },
      { professionId: 'technischer-leiter', level: 'mittel', text: 'Wenige, aber gut dotierte Positionen; Nachfolgebedarf durch Ruhestand erfahrener Leitungen.' },
      { professionId: 'geraetemanagement', level: 'mittel', text: 'Stabiler Bedarf in Krankenhäusern, abhängig von Klinikstrukturen und Outsourcing-Entscheidungen.' },
      { professionId: 'produktspezialist', level: 'mittel', text: 'Konjunktur- und produktabhängig; gefragt sind klinische Erfahrung und Vertriebsstärke.' },
      { professionId: 'anwendungstechniker', level: 'mittel', text: 'Bedarf vor allem bei Herstellern bildgebender Systeme, Labordiagnostik und Therapiegeräten.' }
    ]
  }
};
