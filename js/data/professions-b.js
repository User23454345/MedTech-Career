/* MedTech Career Hub – Berufsprofile Teil B
 * Klassisches Skript (kein ES-Modul). Hängt sich an window.MTH.
 * Stand: November 2026
 */
window.MTH = window.MTH || {};
MTH.professions = (MTH.professions || []).concat([
  {
    id: 'geraetemanagement',
    title: 'Mitarbeiter/in Krankenhaus-Gerätemanagement',
    icon: '🗂️',
    category: 'Technik & Service',
    summary: 'Mitarbeitende im Gerätemanagement sorgen dafür, dass alle Medizinprodukte eines Krankenhauses erfasst, geprüft, gewartet und rechtskonform betrieben werden. Sie verbinden Technik, Organisation und Dokumentation nach der Medizinprodukte-Betreiberverordnung (MPBetreibV, Neufassung 2025).',
    description: 'Ein Krankenhaus betreibt oft mehrere tausend aktive Medizinprodukte – von Infusionspumpen über Beatmungsgeräte bis zu Großgeräten der Bildgebung. Das Gerätemanagement (häufig Teil der Abteilung Medizintechnik) führt das Bestandsverzeichnis und die Medizinproduktebücher, plant sicherheitstechnische Kontrollen (STK), messtechnische Kontrollen (MTK) und Instandhaltungen und überwacht deren Fristen. Dazu gehören die Organisation und Dokumentation von Einweisungen des Personals, die Bearbeitung von Störungsmeldungen, die Umsetzung von Sicherheitsinformationen und Rückrufen der Hersteller sowie die Mitwirkung an Beschaffungen. Gearbeitet wird überwiegend mit Gerätemanagement- bzw. CAFM-Software, in enger Abstimmung mit Stationen, Einkauf, Herstellern, Servicedienstleistern und dem bzw. der Beauftragten für Medizinproduktesicherheit.',
    tasks: [
      'Bestandsverzeichnis und Medizinproduktebücher nach MPBetreibV führen und aktuell halten',
      'Fristen für sicherheitstechnische (STK) und messtechnische Kontrollen (MTK) sowie Wartungen planen und überwachen',
      'Prüfungen nach DIN EN 62353 (Wiederholungsprüfungen) und Funktionsprüfungen durchführen oder beauftragen und dokumentieren',
      'Ersteinweisungen und Einweisungen des Anwenderpersonals organisieren, nachweisen und beauftragte Personen nach MPBetreibV verwalten',
      'Störungen und Reparaturaufträge annehmen, priorisieren und mit Herstellern oder Servicepartnern koordinieren',
      'Sicherheitsinformationen und Rückrufe (Field Safety Notices) erfassen, betroffene Geräte identifizieren und Maßnahmen nachverfolgen',
      'Gerätedaten, Wartungsverträge und Kosten in der Gerätemanagement- bzw. CAFM-Software pflegen und auswerten'
    ],
    workplaces: [
      'Abteilung Medizintechnik von Krankenhäusern und Universitätskliniken',
      'Klinikverbünde mit zentralem Medizintechnik-Management',
      'Externe Medizintechnik-Dienstleister (Multivendor-Service)',
      'Reha-Kliniken, MVZ und größere Praxen',
      'Pflegeeinrichtungen mit umfangreichem Gerätebestand'
    ],
    employerTypes: ['krankenhaus', 'service', 'pruefdienst'],
    skills: {
      hard: [
        'Medizinprodukterecht im Betrieb: MPBetreibV, MPDG, MDR (EU) 2017/745 in Grundzügen',
        'Prüfverfahren nach DIN EN 62353 sowie Kenntnisse zu IEC 60601',
        'STK/MTK-Fristenmanagement und Instandhaltungsplanung',
        'Gerätemanagement- und CAFM-Software, Datenpflege und Auswertungen (z. B. Excel)',
        'Grundlagen Elektrotechnik und Medizingerätetechnik',
        'Dokumentation, Inventarisierung und Lebenszyklusmanagement von Medizinprodukten'
      ],
      soft: [
        'Sorgfalt und Struktur bei Dokumentation und Fristen',
        'Organisationstalent und Priorisierung',
        'Kommunikationsfähigkeit gegenüber Pflege, Ärzteschaft und Herstellern',
        'Verantwortungsbewusstsein für Patientensicherheit',
        'Serviceorientierung'
      ]
    },
    requirements: [
      'Abgeschlossene technische Ausbildung (z. B. Elektroniker/in für Geräte und Systeme, Mechatroniker/in) oder Weiterbildung zum/zur Techniker/in',
      'Alternativ Studium der Medizintechnik oder eine vergleichbare Qualifikation',
      'Für die Durchführung von STK: Erfüllung der Anforderungen nach § 5 MPBetreibV (geeignete Ausbildung, Kenntnisse und praktische Erfahrung, z. B. durch Herstellerschulung)',
      'Für elektrische Prüfungen: Qualifikation als Elektrofachkraft',
      'Sicherer Umgang mit EDV und Datenbanken'
    ],
    entryPaths: [
      { type: 'Ausbildung', title: 'Elektroniker/in für Geräte und Systeme mit anschließender Spezialisierung im Krankenhaus', duration: '3,5 Jahre' },
      { type: 'Weiterbildung', title: 'Staatlich geprüfte/r Techniker/in Medizintechnik', duration: '2 Jahre Vollzeit / ca. 4 Jahre Teilzeit' },
      { type: 'Studium', title: 'Bachelor Medizintechnik oder Biomedical Engineering', duration: '6–7 Semester' },
      { type: 'Quereinstieg', title: 'Aus Elektrotechnik, Pflege oder Verwaltung mit Zusatzqualifikation (STK/MTK, DIN EN 62353)', duration: 'individuell' }
    ],
    educationIds: [
      'ausb-elektroniker-geraete',
      'ausb-mechatroniker',
      'fs-techniker-medizintechnik',
      'bsc-medizintechnik',
      'dual-medizintechnik',
      'wb-mte-pruefung-62353',
      'wb-stk-mtk',
      'wb-elektrofachkraft',
      'wb-gesundheitsmanagement'
    ],
    profile: { technik: 4, medizin: 2, physik: 2, software: 3, kommunikation: 3, mobilitaet: 1, regulatorik: 4, fuehrung: 2, forschung: 1 },
    careerPath: [
      { title: 'Einstieg als Mitarbeiter/in Gerätemanagement / Medizintechnik', years: '0–2 J.' },
      { title: 'Fachkraft für STK/MTK und Prüfungen nach DIN EN 62353', years: '2–5 J.' },
      { title: 'Koordinator/in Gerätemanagement bzw. Systemverantwortliche/r CAFM', years: '5–8 J.' },
      { title: 'Teamleitung Medizintechnik / Beauftragte/r für Medizinproduktesicherheit', years: '8–12 J.' },
      { title: 'Technische/r Leiter/in Medizintechnik', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '07:30', activity: 'Neue Störungsmeldungen der Stationen im Ticketsystem sichten und priorisieren' },
      { time: '08:30', activity: 'Fällige STK und Wartungen der Woche prüfen, Geräte auf Stationen anfordern' },
      { time: '10:00', activity: 'Wiederholungsprüfung nach DIN EN 62353 an mehreren Infusionspumpen durchführen und protokollieren' },
      { time: '12:00', activity: 'Neues Ultraschallgerät inventarisieren, im Bestandsverzeichnis anlegen und Ersteinweisung terminieren' },
      { time: '13:30', activity: 'Herstellerinformation zu einem Rückruf auswerten und betroffene Seriennummern im Bestand ermitteln' },
      { time: '15:00', activity: 'Abstimmung mit externem Servicedienstleister über ausstehende Reparaturen' },
      { time: '16:00', activity: 'Prüfprotokolle und Einweisungsnachweise in der Gerätemanagementsoftware abschließen' }
    ],
    outlook: 'gut',
    outlookText: 'Der Bedarf an qualifiziertem Personal für das Medizintechnik-Management in Kliniken ist stabil bis steigend, da Gerätebestände wachsen und die Dokumentationspflichten nach MPBetreibV umfangreich sind. Fachkräfte mit STK- und Prüfqualifikation sind vielerorts gesucht.',
    related: ['medizintechniker', 'servicetechniker', 'technischer-leiter', 'qualitaetsmanager'],
    facts: { workload: 'Vollzeit, überwiegend Tagdienst; Rufbereitschaft je nach Klinik möglich', travel: 'gering', remote: 'kaum' }
  },

  {
    id: 'produktspezialist',
    title: 'Produktspezialist/in',
    icon: '🤝',
    category: 'Vertrieb & Anwendung',
    summary: 'Produktspezialistinnen und Produktspezialisten beraten Kliniken und Praxen fachlich zu Medizinprodukten und unterstützen den Vertrieb. Sie verbinden technisches und medizinisches Wissen mit Kundenkontakt im Außendienst.',
    description: 'Produktspezialist/innen sind bei Herstellern oder Händlern die fachlichen Ansprechpersonen für ein Produktportfolio, etwa Implantate, Patientenmonitoring, Endoskopie oder Labordiagnostik. Sie präsentieren Produkte, führen Demonstrationen durch, begleiten Anwendungen im OP oder auf Station und weisen Anwender/innen in die sichere Handhabung ein. Wer Fachkreise über Medizinprodukte informiert und einweist, muss nach § 83 MPDG die Sachkenntnis als Medizinprodukteberater/in nachweisen. Zum Alltag gehören Kundenbesuche in einem Vertriebsgebiet, Messen und Fortbildungsveranstaltungen sowie die Weitergabe von Kundenrückmeldungen und Vorkommnishinweisen an Hersteller, Produktmanagement und Vigilanz.',
    tasks: [
      'Produkte bei Ärzteschaft, Pflege, Medizintechnik und Einkauf fachlich präsentieren und demonstrieren',
      'Anwender/innen als Medizinprodukteberater/in in die Handhabung einweisen und Einweisungen dokumentieren',
      'Anwendungen im OP, Herzkatheterlabor oder auf Station begleiten (je nach Produktgruppe)',
      'Vertriebsteam und Key-Account-Management bei Ausschreibungen und Angeboten fachlich unterstützen',
      'Kundenrückmeldungen, Beschwerden und mögliche Vorkommnisse an Qualitätsmanagement und Vigilanz weiterleiten',
      'Workshops, Fortbildungen und Messeauftritte mitgestalten',
      'Markt- und Wettbewerbsbeobachtung in der eigenen Region'
    ],
    workplaces: [
      'Außendienst in einem Vertriebsgebiet (Kliniken, Praxen, Labore)',
      'Medizinproduktehersteller und Vertriebsgesellschaften',
      'Medizintechnik-Fachhandel',
      'OP-Säle, Katheterlabore und Funktionsabteilungen bei Kunden',
      'Homeoffice für Planung und Berichtswesen'
    ],
    employerTypes: ['hersteller', 'service'],
    skills: {
      hard: [
        'Tiefes Produktwissen und Verständnis der klinischen Anwendung',
        'Medizinische Grundlagen (Anatomie, Physiologie) im jeweiligen Fachgebiet',
        'Kenntnisse zu MPDG (insb. Medizinprodukteberater/in nach § 83) und MDR in Grundzügen',
        'Präsentations- und Schulungstechniken',
        'CRM-Systeme und Vertriebsreporting',
        'Hygiene- und Verhaltensregeln im OP'
      ],
      soft: [
        'Überzeugungskraft und Kundenorientierung',
        'Kommunikationsstärke gegenüber Fachpublikum',
        'Selbstorganisation und Eigenständigkeit im Außendienst',
        'Belastbarkeit und Flexibilität bei Terminen',
        'Verhandlungsgeschick'
      ]
    },
    requirements: [
      'Studium (z. B. Medizintechnik, Biomedical Engineering, Naturwissenschaften) oder Ausbildung im Gesundheitswesen (z. B. Pflege, MTR, MTL) mit Berufserfahrung',
      'Nachweis der Sachkenntnis als Medizinprodukteberater/in nach § 83 MPDG',
      'Führerschein Klasse B und hohe Reisebereitschaft',
      'Gute Englischkenntnisse, bei internationalen Herstellern oft gefordert',
      'Je nach Produkt: OP-Erfahrung oder klinische Praxis von Vorteil'
    ],
    entryPaths: [
      { type: 'Studium', title: 'Bachelor Medizintechnik oder Biomedical Engineering', duration: '6–7 Semester' },
      { type: 'Ausbildung', title: 'MTR, MTL oder Pflegefachkraft mit klinischer Erfahrung', duration: '3 Jahre + Berufserfahrung' },
      { type: 'Weiterbildung', title: 'Medizinprodukteberater/in nach § 83 MPDG (Basiskurs plus produktspezifische Schulung durch den Hersteller)', duration: 'wenige Tage' },
      { type: 'Quereinstieg', title: 'Aus Service- oder Anwendungstechnik in den Vertrieb', duration: 'individuell' }
    ],
    educationIds: [
      'bsc-medizintechnik',
      'bsc-biomedical-engineering',
      'dual-medizintechnik',
      'ausb-mtr',
      'ausb-mtl',
      'wb-medizinprodukteberater',
      'wb-produktschulung-applikation'
    ],
    profile: { technik: 3, medizin: 4, physik: 2, software: 2, kommunikation: 5, mobilitaet: 5, regulatorik: 2, fuehrung: 2, forschung: 1 },
    careerPath: [
      { title: 'Einstieg als Junior-Produktspezialist/in oder Medizinprodukteberater/in', years: '0–2 J.' },
      { title: 'Produktspezialist/in mit eigenem Vertriebsgebiet', years: '2–5 J.' },
      { title: 'Senior-Produktspezialist/in / Key Account Manager/in', years: '5–8 J.' },
      { title: 'Produktmanager/in oder Vertriebsleitung Region', years: '8–12 J.' },
      { title: 'Head of Sales / Marketing-Leitung', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '06:45', activity: 'Anfahrt zu einer Klinik im Vertriebsgebiet' },
      { time: '08:00', activity: 'Anwendungsbegleitung im OP bei einem Eingriff mit einem neuen Produkt' },
      { time: '11:00', activity: 'Einweisung des Pflegeteams einer Intensivstation, Nachweis dokumentieren' },
      { time: '13:00', activity: 'Gespräch mit Chefärztin und Einkauf zu einem geplanten Produktwechsel' },
      { time: '15:00', activity: 'Kundenrückmeldung zu einer Auffälligkeit an das Qualitätsmanagement weitergeben' },
      { time: '16:30', activity: 'Besuchsberichte im CRM erfassen und Angebote mit dem Innendienst abstimmen' }
    ],
    outlook: 'gut',
    outlookText: 'Hersteller suchen kontinuierlich fachlich versierte Produktspezialist/innen, insbesondere mit klinischem Hintergrund oder technischem Studium. Die Nachfrage hängt jedoch stärker von Produktgruppen und Marktentwicklung ab als in klinischen Technikberufen.',
    related: ['anwendungstechniker', 'servicetechniker', 'biomedizinischer-ingenieur', 'regulatory-affairs'],
    facts: { workload: 'Vollzeit, flexible Arbeitszeiten, Termine teils früh am Morgen (OP)', travel: 'hoch', remote: 'teilweise' }
  },

  {
    id: 'anwendungstechniker',
    title: 'Anwendungstechniker/in / Applikationsspezialist/in',
    icon: '🖥️',
    category: 'Vertrieb & Anwendung',
    summary: 'Applikationsspezialistinnen und -spezialisten schulen Anwender/innen in Kliniken und Laboren auf komplexe Medizingeräte und optimieren deren klinischen Einsatz. Typische Bereiche sind Bildgebung, Labordiagnostik, Beatmung und Monitoring.',
    description: 'Anwendungstechniker/innen bzw. Applikationsspezialist/innen arbeiten meist für Hersteller und begleiten die Inbetriebnahme neuer Systeme beim Kunden: Sie richten Protokolle und Arbeitsabläufe ein, schulen Ärzteschaft, MTR, MTL oder Pflege und stehen bei Fragen zur klinischen Anwendung zur Verfügung. In der Bildgebung (CT, MRT, Angiographie, Röntgen) gehört etwa die Optimierung von Untersuchungsprotokollen unter Berücksichtigung von Bildqualität und Dosis dazu, in der Labordiagnostik die Einrichtung von Analysesystemen und Validierungen. Sie unterstützen Vertrieb und Service fachlich, geben Rückmeldungen aus der Praxis an die Entwicklung weiter und wirken bei klinischen Bewertungen, Studien oder Messeauftritten mit. Die Arbeit ist geprägt von Reisetätigkeit und engem Kontakt zum klinischen Fachpersonal.',
    tasks: [
      'Anwender/innen bei Inbetriebnahme neuer Geräte und Softwareversionen schulen und Einweisungen dokumentieren',
      'Untersuchungs- und Messprotokolle einrichten und an den klinischen Bedarf anpassen (z. B. Dosisoptimierung in der Bildgebung)',
      'Kunden bei Anwendungsfragen vor Ort, telefonisch oder per Fernzugriff unterstützen',
      'Vertrieb bei Demonstrationen, Teststellungen und Ausschreibungen fachlich unterstützen',
      'Rückmeldungen aus der klinischen Praxis an Produktmanagement und Entwicklung weitergeben',
      'Schulungsunterlagen und Anwendungshinweise erstellen und aktualisieren',
      'An Usability-Tests, Anwenderstudien oder Messen mitwirken'
    ],
    workplaces: [
      'Medizinproduktehersteller (Bildgebung, Labordiagnostik, Intensivmedizin, Kardiologie)',
      'Kliniken, Radiologiepraxen und Labore beim Kunden vor Ort',
      'Trainings- und Schulungszentren der Hersteller',
      'Remote-Support aus dem Homeoffice oder Büro'
    ],
    employerTypes: ['hersteller', 'labor'],
    skills: {
      hard: [
        'Fundiertes Anwendungswissen im Fachgebiet (z. B. Radiologie, Labormedizin, Anästhesie)',
        'Medizinische Grundlagen und Untersuchungsabläufe',
        'Strahlenschutz und Dosiskonzepte in der Bildgebung (StrlSchG/StrlSchV) bzw. Qualitätssicherung im Labor',
        'IT-Grundlagen: Netzwerke, DICOM, HL7, PACS/LIS-Anbindung',
        'Didaktik und Schulungsmethoden',
        'Medizinprodukterecht in Grundzügen (MPDG, MPBetreibV-Einweisungspflicht)'
      ],
      soft: [
        'Didaktisches Geschick und Geduld',
        'Kommunikationsfähigkeit auf Augenhöhe mit Fachpersonal',
        'Kundenorientierung und Problemlösefähigkeit',
        'Reisebereitschaft und Flexibilität',
        'Teamfähigkeit zwischen Vertrieb, Service und Entwicklung'
      ]
    },
    requirements: [
      'Ausbildung als MTR oder MTL mit Berufserfahrung oder Studium (Medizintechnik, Medizinphysik, Biomedical Engineering)',
      'Für die Bildgebung: Fachkunde oder Kenntnisse im Strahlenschutz von Vorteil',
      'Nachweis als Medizinprodukteberater/in nach § 83 MPDG, sofern Fachkreise informiert und eingewiesen werden',
      'Führerschein Klasse B und Reisebereitschaft',
      'Gute Englischkenntnisse'
    ],
    entryPaths: [
      { type: 'Ausbildung', title: 'MTR (Medizinische/r Technologe/Technologin für Radiologie) oder MTL (für Laboratoriumsanalytik) + Berufserfahrung', duration: '3 Jahre + 2–3 Jahre Praxis' },
      { type: 'Studium', title: 'Bachelor Medizintechnik, Medizinphysik oder Biomedical Engineering', duration: '6–7 Semester' },
      { type: 'Weiterbildung', title: 'Herstellerschulungen und Produktzertifizierungen, Medizinprodukteberater/in', duration: 'Wochen bis Monate' },
      { type: 'Quereinstieg', title: 'Aus der klinischen Praxis (z. B. Radiologie, Labor, Intensivpflege)', duration: 'individuell' }
    ],
    educationIds: [
      'ausb-mtr',
      'ausb-mtl',
      'bsc-medizintechnik',
      'bsc-medizinphysik',
      'bsc-biomedical-engineering',
      'wb-produktschulung-applikation',
      'wb-medizinprodukteberater',
      'wb-fachkunde-strahlenschutz'
    ],
    profile: { technik: 3, medizin: 4, physik: 3, software: 3, kommunikation: 5, mobilitaet: 4, regulatorik: 2, fuehrung: 1, forschung: 2 },
    careerPath: [
      { title: 'Einstieg als Junior-Applikationsspezialist/in', years: '0–2 J.' },
      { title: 'Applikationsspezialist/in mit eigener Kundenregion', years: '2–5 J.' },
      { title: 'Senior- bzw. Lead-Applikationsspezialist/in, Trainer/in für Kolleginnen und Kollegen', years: '5–8 J.' },
      { title: 'Teamleitung Applikation oder klinische/r Produktmanager/in', years: '8–12 J.' },
      { title: 'Leitung Clinical Applications / Marketing', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '08:00', activity: 'Ankunft in einer Radiologie, Kurzbesprechung mit der leitenden MTR' },
      { time: '08:30', activity: 'Schulung des Teams an einem neu installierten CT-System' },
      { time: '11:00', activity: 'Untersuchungsprotokolle gemeinsam mit der Radiologin anpassen und Dosiswerte prüfen' },
      { time: '13:30', activity: 'Remote-Support für einen anderen Kunden zu einer Software-Funktion' },
      { time: '15:00', activity: 'Rückmeldung zu einem Bedienproblem an das Produktmanagement dokumentieren' },
      { time: '16:30', activity: 'Einweisungsnachweise ausfüllen und nächste Kundentermine planen' }
    ],
    outlook: 'gut',
    outlookText: 'Mit der zunehmenden Komplexität von Geräten und Software steigt der Schulungs- und Beratungsbedarf bei Kunden. Besonders gefragt sind Fachkräfte, die klinische Erfahrung (z. B. als MTR oder MTL) mit technischem Verständnis verbinden.',
    related: ['produktspezialist', 'medizinphysiker', 'servicetechniker', 'software-entwickler'],
    facts: { workload: 'Vollzeit, projektbezogene Einsätze, gelegentlich Übernachtungen', travel: 'hoch', remote: 'teilweise' }
  },

  {
    id: 'qualitaetsmanager',
    title: 'Qualitätsmanager/in Medizinprodukte',
    icon: '✅',
    category: 'Management & Qualität',
    summary: 'Qualitätsmanagerinnen und Qualitätsmanager stellen sicher, dass Medizinprodukte nach einem wirksamen Qualitätsmanagementsystem gemäß ISO 13485 und den Anforderungen der MDR bzw. IVDR entwickelt, hergestellt und überwacht werden.',
    description: 'Im Qualitätsmanagement (QM) von Medizinprodukteherstellern wird das QM-System nach DIN EN ISO 13485 aufgebaut, gepflegt und weiterentwickelt. Dazu gehören die Lenkung von Dokumenten und Aufzeichnungen, interne Audits, die Begleitung von Audits durch Benannte Stellen und Behörden, CAPA-Prozesse sowie Lieferantenqualifizierung und -überwachung. Qualitätsmanager/innen arbeiten eng mit Entwicklung, Produktion und Regulatory Affairs zusammen, etwa beim Risikomanagement nach ISO 14971, bei Validierungen von Prozessen und Software oder beim Reklamations- und Beschwerdemanagement im Rahmen der Überwachung nach dem Inverkehrbringen (Post-Market Surveillance). Für den US-Markt kommen Anforderungen der FDA (Quality Management System Regulation, 21 CFR 820) hinzu.',
    tasks: [
      'QM-System nach ISO 13485 pflegen, Prozesse beschreiben und kontinuierlich verbessern',
      'Interne Audits und Lieferantenaudits planen, durchführen und nachverfolgen',
      'Audits durch Benannte Stellen und Behörden vorbereiten und begleiten',
      'CAPA-Verfahren (Korrektur- und Vorbeugemaßnahmen), Abweichungen und Nichtkonformitäten bearbeiten',
      'Reklamationen und Beschwerden auswerten und an Vigilanz und Post-Market Surveillance übergeben',
      'Prozess-, Geräte- und Softwarevalidierungen koordinieren bzw. prüfen',
      'Schulungen zu QM-Themen durchführen und Qualitätskennzahlen für das Management-Review aufbereiten'
    ],
    workplaces: [
      'Medizinproduktehersteller (Entwicklung und Produktion)',
      'Zulieferer und Auftragsfertiger der Medizintechnik',
      'Hersteller von In-vitro-Diagnostika',
      'Benannte Stellen und Zertifizierungsgesellschaften (als Auditor/in)',
      'Beratungsunternehmen für Medizinprodukte-QM',
      'Krankenhäuser (klinisches Qualitäts- und Risikomanagement, eingeschränkt)'
    ],
    employerTypes: ['hersteller', 'pruefdienst', 'labor', 'krankenhaus'],
    skills: {
      hard: [
        'DIN EN ISO 13485 und Anforderungen der MDR (EU) 2017/745 bzw. IVDR (EU) 2017/746',
        'Risikomanagement nach DIN EN ISO 14971',
        'Auditmethodik (z. B. nach ISO 19011)',
        'CAPA, Root-Cause-Analyse, FMEA, statistische Methoden',
        'Validierung von Prozessen und Software (inkl. computergestützter Systeme)',
        'FDA 21 CFR 820 (QMSR) und MDSAP in Grundzügen'
      ],
      soft: [
        'Analytisches und strukturiertes Denken',
        'Durchsetzungsvermögen und Diplomatie',
        'Genauigkeit und Integrität',
        'Moderations- und Schulungskompetenz',
        'Abteilungsübergreifende Zusammenarbeit'
      ]
    },
    requirements: [
      'Studium (z. B. Medizintechnik, Ingenieurwesen, Naturwissenschaften) oder technische Ausbildung mit Weiterbildung',
      'Weiterbildung im Qualitätsmanagement, z. B. QM-Beauftragte/r oder interne/r Auditor/in ISO 13485',
      'Kenntnisse des Medizinprodukterechts (MDR/IVDR, MPDG)',
      'Sehr gute Deutsch- und gute Englischkenntnisse',
      'Für leitende Positionen: mehrjährige Erfahrung in der Medizinprodukteindustrie'
    ],
    entryPaths: [
      { type: 'Studium', title: 'Bachelor/Master Medizintechnik, Biomedical Engineering oder Naturwissenschaften', duration: '6–10 Semester' },
      { type: 'Weiterbildung', title: 'QM-Beauftragte/r bzw. interne/r Auditor/in nach ISO 13485', duration: 'einige Tage bis Wochen' },
      { type: 'Ausbildung', title: 'Technische Ausbildung + Techniker/in, anschließend QS/QM in der Produktion', duration: '3,5 + 2 Jahre' },
      { type: 'Quereinstieg', title: 'Aus Entwicklung, Produktion oder Labor in die Qualitätssicherung', duration: 'individuell' }
    ],
    educationIds: [
      'bsc-medizintechnik',
      'bsc-biomedical-engineering',
      'msc-medizintechnik',
      'msc-biomedical-engineering',
      'fs-techniker-medizintechnik',
      'dual-medizintechnik',
      'wb-qm-iso13485',
      'wb-regulatory-affairs',
      'wb-prrc',
      'wb-meister-techniker-fuehrung'
    ],
    profile: { technik: 3, medizin: 2, physik: 2, software: 2, kommunikation: 4, mobilitaet: 2, regulatorik: 5, fuehrung: 3, forschung: 2 },
    careerPath: [
      { title: 'Einstieg als QM-Mitarbeiter/in bzw. Quality Engineer', years: '0–2 J.' },
      { title: 'Qualitätsmanager/in mit Verantwortung für Prozesse und Audits', years: '2–5 J.' },
      { title: 'Senior Quality Manager/in, QM-Beauftragte/r', years: '5–8 J.' },
      { title: 'Leitung Qualitätsmanagement, ggf. PRRC nach Art. 15 MDR', years: '8–12 J.' },
      { title: 'Head of Quality / Director Quality & Regulatory', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '08:00', activity: 'Offene CAPAs und Abweichungsmeldungen im eQMS durchsehen' },
      { time: '09:00', activity: 'Internes Audit im Bereich Produktion: Prozessbeobachtung und Gespräche' },
      { time: '11:30', activity: 'Ursachenanalyse zu einer Kundenreklamation mit Entwicklung und Produktion' },
      { time: '13:30', activity: 'Lieferantenbewertung und Freigabe eines neuen Zulieferers vorbereiten' },
      { time: '15:00', activity: 'Vorbereitung des Überwachungsaudits durch die Benannte Stelle' },
      { time: '16:30', activity: 'Verfahrensanweisung überarbeiten und zur Freigabe weiterleiten' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Durch die gestiegenen Anforderungen der MDR und IVDR besteht bei Herstellern ein anhaltend hoher Bedarf an Fachkräften für Qualitätsmanagement. Erfahrene QM-Fachleute mit Medizinprodukte-Hintergrund sind besonders gefragt.',
    related: ['regulatory-affairs', 'medizintechnikingenieur', 'software-entwickler', 'geraetemanagement'],
    facts: { workload: 'Vollzeit, Büroarbeit mit Gleitzeit; Auditphasen mit Mehrbelastung', travel: 'mittel', remote: 'teilweise' }
  },

  {
    id: 'regulatory-affairs',
    title: 'Regulatory Affairs Manager/in',
    icon: '📜',
    category: 'Management & Qualität',
    summary: 'Regulatory Affairs Manager/innen sorgen dafür, dass Medizinprodukte die gesetzlichen Anforderungen erfüllen und in Europa und weltweit in Verkehr gebracht werden dürfen. Sie erstellen und pflegen die technische Dokumentation und kommunizieren mit Benannten Stellen und Behörden.',
    description: 'Regulatory Affairs (RA) begleitet ein Medizinprodukt über den gesamten Lebenszyklus: von der Klassifizierung und regulatorischen Strategie in der Entwicklung über die Konformitätsbewertung nach MDR (EU) 2017/745 bzw. IVDR (EU) 2017/746 bis zur Überwachung nach dem Inverkehrbringen. RA-Manager/innen erstellen die technische Dokumentation, koordinieren Beiträge zur klinischen Bewertung, prüfen Kennzeichnung und Gebrauchsanweisung und bereiten Einreichungen bei Benannten Stellen vor. Für internationale Märkte kommen Zulassungsverfahren wie 510(k) oder De Novo bei der US-FDA hinzu. Sie verfolgen Änderungen von Gesetzen, Normen und MDCG-Leitlinien, bewerten deren Auswirkungen und unterstützen bei Registrierungen in EUDAMED sowie im Vigilanzfall bei der Kommunikation mit dem BfArM bzw. zuständigen Behörden.',
    tasks: [
      'Medizinprodukte klassifizieren und regulatorische Strategien für EU und weitere Märkte entwickeln',
      'Technische Dokumentation nach Anhang II und III MDR (bzw. IVDR) erstellen und aktuell halten',
      'Einreichungen bei Benannten Stellen und internationalen Behörden (z. B. FDA) vorbereiten und Rückfragen beantworten',
      'Kennzeichnung, Gebrauchsanweisungen und Werbeaussagen regulatorisch prüfen',
      'Klinische Bewertung, Post-Market Surveillance (PMS) und PSUR-Berichte koordinieren bzw. mitgestalten',
      'Produkt- und Wirtschaftsakteursdaten (z. B. UDI) in EUDAMED registrieren und pflegen',
      'Regulatorische Änderungen (Normen, MDCG-Leitlinien, Gesetze) beobachten und intern umsetzen'
    ],
    workplaces: [
      'Medizinproduktehersteller aller Größen',
      'Hersteller von In-vitro-Diagnostika und Software als Medizinprodukt',
      'Regulatory-Beratungsunternehmen',
      'Benannte Stellen (als Produktgutachter/in)',
      'Behörden (z. B. BfArM, Landesbehörden für Medizinprodukte)'
    ],
    employerTypes: ['hersteller', 'pruefdienst', 'labor'],
    skills: {
      hard: [
        'MDR (EU) 2017/745, IVDR (EU) 2017/746 und MPDG',
        'Technische Dokumentation, Konformitätsbewertungsverfahren und harmonisierte Normen',
        'ISO 14971 (Risikomanagement), ISO 13485, IEC 62366-1 (Gebrauchstauglichkeit)',
        'Klinische Bewertung und Post-Market Surveillance (inkl. MDCG-Leitlinien)',
        'Internationale Zulassungen, z. B. FDA 510(k)/De Novo/PMA',
        'EUDAMED und UDI-System'
      ],
      soft: [
        'Sehr gutes schriftliches Ausdrucksvermögen (Deutsch und Englisch)',
        'Analytisches Denken und Genauigkeit',
        'Projektmanagement und Priorisierung',
        'Überzeugungskraft im Dialog mit Behörden und Benannten Stellen',
        'Bereitschaft zum kontinuierlichen Lernen'
      ]
    },
    requirements: [
      'Hochschulabschluss in Medizintechnik, Ingenieurwesen, Naturwissenschaften, Medizin, Pharmazie oder Rechtswissenschaften',
      'Fundierte Kenntnisse des europäischen Medizinprodukterechts',
      'Sehr gute Englischkenntnisse in Wort und Schrift',
      'Weiterbildung im Bereich Regulatory Affairs von Vorteil (z. B. Zertifikatskurs, Master)',
      'Für die Funktion als PRRC (Art. 15 MDR): Hochschulabschluss und mindestens ein Jahr Berufserfahrung in Regulierungsfragen oder QM-Systemen bzw. vier Jahre Berufserfahrung ohne entsprechenden Abschluss'
    ],
    entryPaths: [
      { type: 'Studium', title: 'Bachelor/Master Medizintechnik, Biomedical Engineering oder Naturwissenschaften', duration: '6–10 Semester' },
      { type: 'Weiterbildung', title: 'Zertifikatskurs oder berufsbegleitender Master Regulatory Affairs', duration: 'Monate bis 2 Jahre' },
      { type: 'Quereinstieg', title: 'Aus Entwicklung, Qualitätsmanagement oder klinischer Forschung', duration: 'individuell' },
      { type: 'Studium', title: 'Promotion oder Master für Positionen mit wissenschaftlichem Schwerpunkt', duration: '2–4 Jahre' }
    ],
    educationIds: [
      'bsc-medizintechnik',
      'bsc-biomedical-engineering',
      'msc-medizintechnik',
      'msc-biomedical-engineering',
      'bsc-medizininformatik',
      'wb-regulatory-affairs',
      'wb-prrc',
      'wb-qm-iso13485',
      'wb-iec62304'
    ],
    profile: { technik: 3, medizin: 3, physik: 2, software: 2, kommunikation: 4, mobilitaet: 1, regulatorik: 5, fuehrung: 3, forschung: 2 },
    careerPath: [
      { title: 'Einstieg als Regulatory Affairs Specialist / Junior Manager/in', years: '0–2 J.' },
      { title: 'Regulatory Affairs Manager/in mit eigener Produktverantwortung', years: '2–5 J.' },
      { title: 'Senior RA Manager/in, ggf. PRRC nach Art. 15 MDR', years: '5–8 J.' },
      { title: 'Teamleitung bzw. Head of Regulatory Affairs', years: '8–12 J.' },
      { title: 'Director Regulatory & Quality / selbstständige Beratung', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '08:30', activity: 'Neue MDCG-Leitlinien und Normenänderungen sichten und bewerten' },
      { time: '09:30', activity: 'Abstimmung mit der Entwicklung zur Klassifizierung eines neuen Produkts nach Anhang VIII MDR' },
      { time: '11:00', activity: 'Kapitel der technischen Dokumentation überarbeiten' },
      { time: '13:30', activity: 'Rückfragen der Benannten Stelle zu einer Einreichung beantworten' },
      { time: '15:00', activity: 'Gebrauchsanweisung und Etikett einer neuen Produktvariante prüfen' },
      { time: '16:30', activity: 'Telefonkonferenz mit internationalem Team zur FDA-Einreichung' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Seit Geltung der MDR (2021) und IVDR (2022) ist der Bedarf an Regulatory-Affairs-Fachleuten deutlich gestiegen; Hersteller suchen insbesondere erfahrene Fachkräfte für Rezertifizierungen und neue Produkte. Die Arbeitsmarktlage gilt als sehr gut.',
    related: ['qualitaetsmanager', 'medizintechnikingenieur', 'software-entwickler', 'biomedizinischer-ingenieur'],
    facts: { workload: 'Vollzeit, Büroarbeit mit Gleitzeit; Fristen bei Einreichungen', travel: 'gering', remote: 'gut möglich' }
  },

  {
    id: 'software-entwickler',
    title: 'Software-Entwickler/in Medizinprodukte',
    icon: '💻',
    category: 'Ingenieurwesen & Entwicklung',
    summary: 'Software-Entwicklerinnen und -Entwickler für Medizinprodukte programmieren Geräte-Software, Medical Apps und Software als Medizinprodukt nach den Anforderungen von IEC 62304 und MDR. Sicherheit, Nachvollziehbarkeit und Cybersecurity stehen dabei im Mittelpunkt.',
    description: 'Software steckt heute in nahezu allen Medizingeräten – von Infusionspumpen und Beatmungsgeräten über Bildgebungssysteme bis zu eigenständiger Software als Medizinprodukt (Medical Device Software, MDSW), etwa Diagnose-Apps, KI-gestützte Bildauswertung oder digitale Gesundheitsanwendungen (DiGA). Entwickler/innen arbeiten nach einem Software-Lebenszyklusprozess gemäß IEC 62304, der je nach Software-Sicherheitsklasse (A, B oder C) Anforderungen an Planung, Anforderungsanalyse, Architektur, Implementierung, Verifizierung und Wartung stellt. Die Klassifizierung als Medizinprodukt richtet sich nach der MDR, insbesondere nach Regel 11 in Anhang VIII. Hinzu kommen Risikomanagement nach ISO 14971, Gebrauchstauglichkeit nach IEC 62366-1 und Cybersecurity, z. B. nach IEC 81001-5-1 und den MDCG-Leitlinien. Gearbeitet wird meist in interdisziplinären, oft agilen Teams mit Systemingenieur/innen, Qualitätsmanagement und Regulatory Affairs.',
    tasks: [
      'Software-Anforderungen analysieren und in eine nachvollziehbare Architektur überführen',
      'Embedded-, Desktop-, Web- oder Mobile-Software für Medizinprodukte implementieren',
      'Software nach IEC 62304 dokumentieren (Entwicklungsplan, Anforderungen, Architektur, Traceability)',
      'Unit-, Integrations- und Systemtests erstellen und automatisieren (Verifizierung)',
      'An Risikoanalysen nach ISO 14971 und an Cybersecurity-Bedrohungsanalysen mitwirken',
      'SOUP/OTS-Komponenten (Software unbekannter Herkunft) bewerten und überwachen',
      'Fehler aus dem Feld analysieren, Wartungsreleases und Sicherheitsupdates umsetzen'
    ],
    workplaces: [
      'Medizinproduktehersteller (Geräte- und Systemsoftware)',
      'Digital-Health-Unternehmen, Start-ups und DiGA-Hersteller',
      'Entwicklungsdienstleister mit Medizintechnik-Schwerpunkt',
      'Forschungseinrichtungen und Universitätskliniken',
      'Hersteller von Labor- und Diagnostiksoftware'
    ],
    employerTypes: ['hersteller', 'forschung', 'labor'],
    skills: {
      hard: [
        'Programmiersprachen je nach Einsatz: C/C++ (Embedded), C#/.NET, Java, Python, TypeScript',
        'IEC 62304 (Software-Lebenszyklus) und IEC 82304-1 (Gesundheitssoftware)',
        'Risikomanagement nach ISO 14971 und Gebrauchstauglichkeit nach IEC 62366-1',
        'Cybersecurity für Medizinprodukte (z. B. IEC 81001-5-1, MDCG 2019-16 Rev. 1)',
        'Software-Testing, CI/CD, Versionsverwaltung (Git) und Anforderungsmanagement',
        'Schnittstellen und Standards im Gesundheitswesen (HL7, FHIR, DICOM)',
        'Grundlagen der MDR, insbesondere Regel 11 für Software'
      ],
      soft: [
        'Analytisches Denken und Sorgfalt',
        'Bereitschaft zu ausführlicher Dokumentation',
        'Teamfähigkeit in interdisziplinären Teams',
        'Verantwortungsbewusstsein für Patientensicherheit',
        'Lernbereitschaft bei neuen Technologien und Regularien'
      ]
    },
    requirements: [
      'Studium der Informatik, Medizininformatik, Medizintechnik, Elektrotechnik oder vergleichbar',
      'Alternativ Ausbildung als Fachinformatiker/in mit einschlägiger Berufserfahrung',
      'Fundierte Programmierkenntnisse und Erfahrung in Softwaretests',
      'Kenntnisse zu IEC 62304 und regulierter Entwicklung (oder Bereitschaft zur Einarbeitung)',
      'Gute Englischkenntnisse (Dokumentation und internationale Teams)'
    ],
    entryPaths: [
      { type: 'Studium', title: 'Bachelor Medizininformatik oder Informatik', duration: '6–7 Semester' },
      { type: 'Studium', title: 'Bachelor/Master Medizintechnik oder Biomedical Engineering mit Software-Schwerpunkt', duration: '6–10 Semester' },
      { type: 'Weiterbildung', title: 'Schulung Software-Lebenszyklus nach IEC 62304', duration: '1–3 Tage' },
      { type: 'Quereinstieg', title: 'Aus der allgemeinen Softwareentwicklung (z. B. Automotive, Industrie) in die Medizintechnik', duration: 'individuell' }
    ],
    educationIds: [
      'bsc-medizininformatik',
      'bsc-medizintechnik',
      'bsc-biomedical-engineering',
      'msc-medizintechnik',
      'msc-biomedical-engineering',
      'dual-medizintechnik',
      'wb-iec62304',
      'wb-regulatory-affairs',
      'wb-qm-iso13485'
    ],
    profile: { technik: 3, medizin: 2, physik: 3, software: 5, kommunikation: 3, mobilitaet: 1, regulatorik: 4, fuehrung: 2, forschung: 4 },
    careerPath: [
      { title: 'Einstieg als Junior Software Engineer Medizintechnik', years: '0–2 J.' },
      { title: 'Software-Entwickler/in mit Modulverantwortung', years: '2–5 J.' },
      { title: 'Senior Developer / Software-Architekt/in', years: '5–8 J.' },
      { title: 'Technical Lead bzw. Teamleitung Software', years: '8–12 J.' },
      { title: 'Leitung Softwareentwicklung / Head of Software Engineering', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '09:00', activity: 'Daily Stand-up mit dem Entwicklungsteam' },
      { time: '09:30', activity: 'Implementierung einer neuen Funktion inkl. Unit-Tests' },
      { time: '11:30', activity: 'Code-Review und Prüfung der Traceability zu Software-Anforderungen' },
      { time: '13:30', activity: 'Workshop zur Cybersecurity-Bedrohungsanalyse mit Systemengineering und QM' },
      { time: '15:00', activity: 'Bewertung einer Sicherheitslücke in einer eingesetzten Open-Source-Bibliothek (SOUP)' },
      { time: '16:30', activity: 'Architekturdokumentation aktualisieren und Release-Planung abstimmen' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Die Digitalisierung im Gesundheitswesen, KI-Anwendungen und steigende Cybersecurity-Anforderungen sorgen für eine hohe Nachfrage nach Software-Fachkräften mit Medizinprodukte-Know-how. Erfahrung mit IEC 62304 ist ein deutlicher Vorteil.',
    related: ['medizintechnikingenieur', 'biomedizinischer-ingenieur', 'regulatory-affairs', 'qualitaetsmanager'],
    facts: { workload: 'Vollzeit, Gleitzeit; Releasephasen mit Mehrbelastung möglich', travel: 'gering', remote: 'gut möglich' }
  }
]);
