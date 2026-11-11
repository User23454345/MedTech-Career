/* MedTech Career Hub – Berufsprofile Teil A
 * Klassisches Skript (kein ES-Modul). Hängt sich an window.MTH.
 * Berufe: medizintechniker, biomedizinischer-ingenieur, servicetechniker,
 *         medizintechnikingenieur, medizinphysiker, technischer-leiter
 * Stand: November 2026
 */
window.MTH = window.MTH || {};
MTH.professions = (MTH.professions || []).concat([
  {
    id: 'medizintechniker',
    title: 'Medizintechniker/in',
    icon: '🔧',
    category: 'Technik & Service',
    summary: 'Staatlich geprüfte Techniker/innen der Fachrichtung Medizintechnik sorgen dafür, dass medizinische Geräte sicher, funktionsfähig und normgerecht betrieben werden – an der Schnittstelle zwischen Technik, Klinikalltag und Vorschriften.',
    description: 'Medizintechniker/innen haben in der Regel eine technische Berufsausbildung (z. B. Elektroniker/in für Geräte und Systeme) abgeschlossen und sich anschließend an einer Fachschule zur/zum staatlich geprüften Techniker/in Fachrichtung Medizintechnik weitergebildet (DQR-Niveau 6). Sie installieren, warten, prüfen und reparieren Medizinprodukte – von Infusionspumpen und Patientenmonitoren bis zu Beatmungs- und Dialysegeräten. Ein großer Teil der Arbeit besteht aus sicherheitstechnischen Kontrollen (STK) und messtechnischen Kontrollen (MTK) nach der Medizinprodukte-Betreiberverordnung (MPBetreibV) sowie aus Prüfungen nach DIN EN 62353. Daneben dokumentieren sie Prüfergebnisse im Gerätemanagementsystem, weisen Anwender/innen ein und unterstützen bei Beschaffung und Inbetriebnahme neuer Geräte. Typische Arbeitgeber sind Krankenhäuser, herstellerunabhängige Servicedienstleister und Hersteller.',
    tasks: [
      'Wartung, Instandsetzung und Fehlerdiagnose an aktiven Medizinprodukten (z. B. Monitoring, Infusionstechnik, Beatmung)',
      'Durchführung sicherheitstechnischer Kontrollen (STK) und messtechnischer Kontrollen (MTK) nach MPBetreibV',
      'Wiederholungsprüfungen elektrischer Sicherheit nach DIN EN 62353 inklusive Prüfprotokoll',
      'Installation, Erstinbetriebnahme und Funktionsprüfung neuer Geräte',
      'Pflege von Bestandsverzeichnis und Medizinproduktebuch im Gerätemanagementsystem',
      'Einweisung von Pflege- und ärztlichem Personal in die sichere Gerätebedienung',
      'Bearbeitung von Vorkommnissen und Unterstützung bei der Kommunikation mit Herstellern'
    ],
    workplaces: [
      'Medizintechnik-Abteilungen von Krankenhäusern und Unikliniken',
      'Werkstätten herstellerunabhängiger Servicedienstleister',
      'Kundendienst von Medizinprodukteherstellern',
      'Rehabilitationskliniken und große Arztpraxen bzw. MVZ',
      'Prüfdienstleister für STK/MTK'
    ],
    employerTypes: ['krankenhaus', 'service', 'hersteller', 'pruefdienst'],
    skills: {
      hard: [
        'Elektrotechnik und Elektronik (Analog-/Digitaltechnik, Fehlersuche)',
        'Messtechnik und Umgang mit Prüfgeräten (z. B. Sicherheitstester, Patientensimulatoren)',
        'Kenntnis von MPBetreibV, MPDG und DIN EN 62353',
        'Grundlagen Anatomie/Physiologie und Gerätefunktion',
        'Technische Dokumentation und Gerätemanagement-Software',
        'Grundkenntnisse Netzwerke und medizinische IT'
      ],
      soft: [
        'Sorgfalt und Verantwortungsbewusstsein für Patientensicherheit',
        'Systematisches, lösungsorientiertes Arbeiten',
        'Kommunikationsfähigkeit gegenüber medizinischem Personal',
        'Belastbarkeit bei dringenden Störungen',
        'Teamfähigkeit'
      ]
    },
    requirements: [
      'Abgeschlossene Berufsausbildung in einem einschlägigen Beruf (z. B. Elektroniker/in, Mechatroniker/in; welche Berufe zugelassen sind, regelt die jeweilige Fachschule bzw. das Land)',
      'Berufserfahrung gemäß Zulassungsvoraussetzungen der jeweiligen Fachschule (landesrechtlich geregelt)',
      'Abschluss als staatlich geprüfte/r Techniker/in Fachrichtung Medizintechnik (Fachschule)',
      'Für STK/MTK: geeignete Ausbildung, Kenntnisse und Erfahrung im Sinne der MPBetreibV',
      'Häufig gewünscht: Qualifikation als Elektrofachkraft und Herstellerschulungen'
    ],
    entryPaths: [
      { type: 'Ausbildung', title: 'Elektroniker/in für Geräte und Systeme oder Mechatroniker/in', duration: '3,5 Jahre' },
      { type: 'Weiterbildung', title: 'Staatlich geprüfte/r Techniker/in Fachrichtung Medizintechnik (Fachschule)', duration: '2 Jahre Vollzeit oder ca. 3–4 Jahre berufsbegleitend' },
      { type: 'Weiterbildung', title: 'Zusatzqualifikationen: Prüfungen nach DIN EN 62353, STK/MTK-Schulungen, Herstellerschulungen', duration: 'wenige Tage je Kurs' },
      { type: 'Quereinstieg', title: 'Aus medizinisch-technischen Berufen (z. B. MTR, MTL) über die Fachschule Medizintechnik, sofern die Fachschule diese Berufe zulässt', duration: 'ca. 2–4 Jahre' }
    ],
    educationIds: [
      'ausb-elektroniker-geraete',
      'ausb-mechatroniker',
      'ausb-mtr',
      'ausb-mtl',
      'fs-techniker-medizintechnik',
      'wb-mte-pruefung-62353',
      'wb-stk-mtk',
      'wb-elektrofachkraft',
      'wb-medizinprodukteberater'
    ],
    profile: { technik: 5, medizin: 3, physik: 3, software: 2, kommunikation: 3, mobilitaet: 2, regulatorik: 3, fuehrung: 2, forschung: 1 },
    careerPath: [
      { title: 'Einstieg als Medizintechniker/in in Klinik oder Servicefirma', years: '0–2 J.' },
      { title: 'Spezialisierung auf Gerätegruppen (z. B. Beatmung, Dialyse, Bildgebung)', years: '2–5 J.' },
      { title: 'Gruppen- bzw. Teamleitung Medizintechnik', years: '5–8 J.' },
      { title: 'Stellvertretende Leitung oder Studium (z. B. B.Eng. Medizintechnik)', years: '8–12 J.' },
      { title: 'Technische Leitung Medizintechnik', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '07:00', activity: 'Dienstbeginn, Sichtung der Störmeldungen und Tickets im Gerätemanagementsystem' },
      { time: '07:45', activity: 'Einsatz auf der Intensivstation: defekter Patientenmonitor wird getauscht und geprüft' },
      { time: '09:30', activity: 'Geplante STK an Defibrillatoren und Infusionspumpen in der Werkstatt' },
      { time: '12:00', activity: 'Mittagspause' },
      { time: '12:45', activity: 'Elektrische Wiederholungsprüfung nach DIN EN 62353 und Protokollierung' },
      { time: '14:30', activity: 'Einweisung des Pflegepersonals in ein neu beschafftes Beatmungsgerät' },
      { time: '15:30', activity: 'Dokumentation, Ersatzteilbestellung und Rücksprache mit dem Herstellerservice' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Krankenhäuser und Servicedienstleister suchen seit Jahren qualifizierte Fachkräfte für Medizintechnik; die wachsende Gerätedichte und gesetzliche Prüfpflichten sorgen für eine stabile bis steigende Nachfrage.',
    related: ['servicetechniker', 'geraetemanagement', 'medizintechnikingenieur', 'technischer-leiter'],
    facts: { workload: 'Vollzeit, in Kliniken teils Rufbereitschaft', travel: 'gering', remote: 'kaum' }
  },

  {
    id: 'biomedizinischer-ingenieur',
    title: 'Biomedizinische/r Ingenieur/in',
    icon: '🧬',
    category: 'Ingenieurwesen & Entwicklung',
    summary: 'Biomedizinische Ingenieur/innen verbinden Ingenieurwissenschaften mit Biologie und Medizin, um neue Diagnose- und Therapieverfahren, Implantate oder Biomaterialien zu entwickeln.',
    description: 'Der Beruf ist stärker forschungs- und biologieorientiert als die klassische Medizintechnik: Im Mittelpunkt stehen etwa Biosignalverarbeitung, Biomechanik, Biomaterialien, Tissue Engineering, Biosensorik oder medizinische Bildverarbeitung. Biomedizinische Ingenieur/innen arbeiten in Forschungs- und Entwicklungsabteilungen von Herstellern, an Hochschulen und Forschungsinstituten sowie in Start-ups. Sie konzipieren Versuche, entwickeln Prototypen, werten Messdaten aus und begleiten präklinische und klinische Prüfungen bzw. Leistungsstudien. Da Entwicklungen später als Medizinprodukt oder In-vitro-Diagnostikum zugelassen werden sollen, gehören Grundkenntnisse in MDR (EU) 2017/745, IVDR (EU) 2017/746, Risikomanagement nach ISO 14971 und Biokompatibilität nach ISO 10993 zum Handwerkszeug.',
    tasks: [
      'Konzeption und Entwicklung von Prototypen für Diagnostik, Therapie oder Implantate',
      'Planung, Durchführung und Auswertung von Labor- und Tierversuchen bzw. Prüfstandsversuchen',
      'Entwicklung von Algorithmen zur Biosignal- und Bildverarbeitung',
      'Auswahl und Prüfung von Biomaterialien (z. B. Biokompatibilität nach ISO 10993)',
      'Mitarbeit an Risikomanagement (ISO 14971) und technischer Dokumentation',
      'Begleitung klinischer Prüfungen bzw. Leistungsstudien in Zusammenarbeit mit Kliniken',
      'Veröffentlichung von Forschungsergebnissen und Einwerbung von Fördermitteln'
    ],
    workplaces: [
      'Forschungs- und Entwicklungsabteilungen von Medizinprodukte- und Diagnostikherstellern',
      'Universitäten, Hochschulen und Universitätskliniken',
      'Außeruniversitäre Forschungsinstitute',
      'MedTech- und Biotech-Start-ups',
      'Labore für Prüfung und Entwicklung'
    ],
    employerTypes: ['hersteller', 'forschung', 'labor', 'krankenhaus'],
    skills: {
      hard: [
        'Biomechanik, Biomaterialien und Physiologie',
        'Signal- und Bildverarbeitung (z. B. Python, MATLAB)',
        'Sensorik, Messtechnik und Datenanalyse/Statistik',
        'CAD und Prototyping (z. B. 3D-Druck)',
        'Grundlagen MDR/IVDR, ISO 14971 und ISO 10993',
        'Wissenschaftliches Arbeiten und Versuchsplanung'
      ],
      soft: [
        'Interdisziplinäres Denken zwischen Technik, Biologie und Medizin',
        'Analytische Fähigkeiten und Neugier',
        'Englisch in Wort und Schrift (Fachliteratur, Publikationen)',
        'Ausdauer bei langen Entwicklungszyklen',
        'Teamarbeit mit Ärzt/innen, Biolog/innen und Ingenieur/innen'
      ]
    },
    requirements: [
      'Bachelorabschluss in Biomedical Engineering, Biomedizintechnik, Medizintechnik oder verwandtem Fach',
      'Für Forschung und Entwicklung meist Masterabschluss, in der Wissenschaft häufig Promotion',
      'Gute Kenntnisse in Mathematik, Physik und Biologie',
      'Sehr gute Englischkenntnisse'
    ],
    entryPaths: [
      { type: 'Studium', title: 'B.Sc./B.Eng. Biomedical Engineering bzw. Biomedizintechnik', duration: '6–7 Semester' },
      { type: 'Studium', title: 'M.Sc. Biomedical Engineering oder Medizintechnik', duration: '3–4 Semester' },
      { type: 'Studium', title: 'Promotion an Hochschule oder Forschungsinstitut (optional)', duration: 'ca. 3–5 Jahre' },
      { type: 'Quereinstieg', title: 'Aus Maschinenbau, Elektrotechnik, Physik oder Biologie über einen einschlägigen Master', duration: '2–4 Semester' }
    ],
    educationIds: [
      'bsc-biomedical-engineering',
      'bsc-medizintechnik',
      'msc-biomedical-engineering',
      'msc-medizintechnik',
      'dual-medizintechnik',
      'wb-qm-iso13485',
      'wb-regulatory-affairs'
    ],
    profile: { technik: 4, medizin: 4, physik: 4, software: 3, kommunikation: 3, mobilitaet: 1, regulatorik: 3, fuehrung: 2, forschung: 5 },
    careerPath: [
      { title: 'Einstieg als Entwicklungsingenieur/in oder wissenschaftliche/r Mitarbeiter/in', years: '0–3 J.' },
      { title: 'Projektingenieur/in bzw. Postdoc mit eigenem Themenschwerpunkt', years: '3–6 J.' },
      { title: 'Projekt- oder Teamleitung F&E', years: '6–10 J.' },
      { title: 'Leitung Forschung & Entwicklung oder Gruppenleitung an Forschungseinrichtung', years: '10–15 J.' },
      { title: 'Bereichsleitung, Professur oder Gründung eines eigenen Unternehmens', years: 'ab 15 J.' }
    ],
    dayInLife: [
      { time: '08:30', activity: 'Auswertung der Messdaten vom Vortag am Prüfstand' },
      { time: '09:30', activity: 'Daily Stand-up mit dem interdisziplinären Entwicklungsteam' },
      { time: '10:00', activity: 'Anpassung eines Algorithmus zur Filterung von EKG-Signalen' },
      { time: '12:30', activity: 'Mittagspause' },
      { time: '13:30', activity: 'Abstimmung mit der Klinik zu Studiendesign und Patientenrekrutierung' },
      { time: '15:00', activity: 'Aktualisierung der Risikoanalyse nach ISO 14971 für den Prototyp' },
      { time: '16:30', activity: 'Literaturrecherche und Arbeit an einer Publikation' }
    ],
    outlook: 'gut',
    outlookText: 'Die Nachfrage ist in Forschung und innovativen Unternehmen gut, Stellen in der Wissenschaft sind jedoch häufig befristet; ein Masterabschluss und Praxiserfahrung verbessern die Chancen deutlich.',
    related: ['medizintechnikingenieur', 'software-entwickler', 'regulatory-affairs', 'medizinphysiker'],
    facts: { workload: 'Vollzeit, in der Forschung häufig befristete Verträge', travel: 'gering', remote: 'teilweise' }
  },

  {
    id: 'servicetechniker',
    title: 'Servicetechniker/in Medizintechnik',
    icon: '🚐',
    category: 'Technik & Service',
    summary: 'Servicetechniker/innen betreuen Medizingeräte direkt beim Kunden – meist im Außendienst für Hersteller oder Servicedienstleister – und sind für Installation, Wartung und Reparatur zuständig.',
    description: 'Im Außendienst sind Servicetechniker/innen für ein festes Gebiet oder eine bestimmte Produktgruppe zuständig, etwa Röntgen- und CT-Anlagen, Laborgeräte, Endoskopie oder Dentaltechnik. Sie installieren neue Systeme, führen planmäßige Wartungen und herstellerspezifische Prüfungen durch, beheben Störungen vor Ort oder per Remote-Zugriff und dokumentieren alle Arbeiten im Servicesystem. Da sie häufig die direkten Ansprechpartner/innen des Herstellers im Krankenhaus oder in der Praxis sind, sind Kundenorientierung und souveränes Auftreten genauso wichtig wie technisches Können. Ausgangspunkt ist meist eine elektrotechnische oder mechatronische Ausbildung, ergänzt durch intensive Produktschulungen beim Hersteller; ein Firmenwagen und eine hohe Reisebereitschaft gehören in der Regel dazu.',
    tasks: [
      'Installation und Inbetriebnahme von Medizingeräten und -systemen beim Kunden',
      'Planmäßige Wartung, Kalibrierung und herstellerspezifische Sicherheitsprüfungen',
      'Störungsdiagnose und Reparatur vor Ort sowie Remote-Support',
      'Durchführung von STK/MTK und elektrischen Prüfungen nach DIN EN 62353',
      'Umsetzung von Software-Updates und sicherheitsrelevanten Korrekturmaßnahmen (Field Safety Corrective Actions)',
      'Serviceberichte, Ersatzteilmanagement und Dokumentation im Servicesystem',
      'Ansprechpartner/in für Medizintechnik-Abteilungen und Anwender/innen vor Ort'
    ],
    workplaces: [
      'Außendienst im zugeordneten Servicegebiet (Kliniken, Praxen, Labore)',
      'Servicezentralen und Werkstätten von Herstellern',
      'Herstellerunabhängige Servicedienstleister',
      'Homeoffice für Planung, Berichte und Remote-Diagnose'
    ],
    employerTypes: ['hersteller', 'service', 'pruefdienst'],
    skills: {
      hard: [
        'Elektrotechnik, Elektronik und Mechanik',
        'Systematische Fehlersuche an komplexen Systemen',
        'Netzwerk- und IT-Grundlagen (Remote-Service, DICOM/HL7-Schnittstellen)',
        'Prüfungen nach DIN EN 62353 sowie STK/MTK nach MPBetreibV',
        'Bei Röntgensystemen: Kenntnisse im Strahlenschutz',
        'Technisches Englisch (Servicehandbücher, Schulungen)'
      ],
      soft: [
        'Kundenorientierung und sicheres Auftreten',
        'Selbstständigkeit und Selbstorganisation',
        'Flexibilität und Reisebereitschaft',
        'Ruhe in Stresssituationen bei Geräteausfällen',
        'Lernbereitschaft für neue Produktgenerationen'
      ]
    },
    requirements: [
      'Abgeschlossene Ausbildung als Elektroniker/in, Mechatroniker/in oder vergleichbar; alternativ Techniker/in bzw. Ingenieur/in',
      'Führerschein Klasse B',
      'Hohe Reisebereitschaft, teils mit Übernachtungen',
      'Bereitschaft zu Herstellerschulungen, teils im Ausland',
      'Für Arbeiten an Röntgeneinrichtungen: entsprechende Kenntnisse bzw. Fachkunde im Strahlenschutz'
    ],
    entryPaths: [
      { type: 'Ausbildung', title: 'Elektroniker/in für Geräte und Systeme', duration: '3,5 Jahre' },
      { type: 'Ausbildung', title: 'Mechatroniker/in', duration: '3,5 Jahre' },
      { type: 'Weiterbildung', title: 'Herstellerspezifische Produkt- und Serviceschulungen', duration: 'mehrere Wochen bis Monate, laufend' },
      { type: 'Quereinstieg', title: 'Aus Industrieservice, IT-Support oder Gebäudetechnik mit Elektro-Ausbildung', duration: 'Einarbeitung ca. 6–12 Monate' }
    ],
    educationIds: [
      'ausb-elektroniker-geraete',
      'ausb-mechatroniker',
      'fs-techniker-medizintechnik',
      'dual-medizintechnik',
      'wb-mte-pruefung-62353',
      'wb-stk-mtk',
      'wb-elektrofachkraft',
      'wb-fachkunde-strahlenschutz',
      'wb-produktschulung-applikation',
      'wb-medizinprodukteberater'
    ],
    profile: { technik: 5, medizin: 2, physik: 3, software: 3, kommunikation: 4, mobilitaet: 5, regulatorik: 2, fuehrung: 1, forschung: 1 },
    careerPath: [
      { title: 'Einstieg als Servicetechniker/in mit Einarbeitung und Herstellerschulungen', years: '0–2 J.' },
      { title: 'Field Service Engineer für komplexe Systeme (z. B. CT, MRT, Labor)', years: '2–5 J.' },
      { title: 'Senior Service Engineer, Spezialist/in oder Trainer/in', years: '5–8 J.' },
      { title: 'Regionale Serviceleitung bzw. Teamleitung Field Service', years: '8–12 J.' },
      { title: 'Serviceleitung Deutschland oder Wechsel in Produkt- bzw. Vertriebsrolle', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '07:00', activity: 'Tagesplanung am Laptop, Prüfung von Ersatzteillieferungen und Tickets' },
      { time: '08:00', activity: 'Fahrt zum ersten Kunden, einem Kreiskrankenhaus' },
      { time: '09:00', activity: 'Planmäßige Wartung eines Röntgensystems inklusive Sicherheitsprüfung' },
      { time: '12:30', activity: 'Mittagspause unterwegs' },
      { time: '13:30', activity: 'Störungseinsatz in einer Radiologiepraxis: Fehleranalyse mit Remote-Support der Zentrale' },
      { time: '16:00', activity: 'Abschlussgespräch mit der Medizintechnik-Abteilung und Übergabe des Serviceberichts' },
      { time: '17:00', activity: 'Rückfahrt und Dokumentation im Servicesystem' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Servicetechniker/innen werden von Herstellern und Dienstleistern stark nachgefragt; viele Stellen bleiben wegen der hohen Reiseanforderungen lange offen.',
    related: ['medizintechniker', 'anwendungstechniker', 'produktspezialist', 'geraetemanagement'],
    facts: { workload: 'Vollzeit, Außendienst, teils Rufbereitschaft', travel: 'hoch', remote: 'teilweise' }
  },

  {
    id: 'medizintechnikingenieur',
    title: 'Medizintechnikingenieur/in',
    icon: '⚙️',
    category: 'Ingenieurwesen & Entwicklung',
    summary: 'Medizintechnikingenieur/innen entwickeln, verbessern und betreuen Medizinprodukte über den gesamten Lebenszyklus – von der Anforderung über Design und Verifizierung bis zur Serienbetreuung.',
    description: 'Mit einem Studium der Medizintechnik arbeiten Ingenieur/innen vor allem bei Herstellern in Entwicklung, Konstruktion, Systemtechnik, Test und Verifizierung oder Produktpflege, aber auch in Krankenhäusern als Ingenieur/in für Medizintechnik. Ihre Arbeit folgt den Anforderungen der MDR (EU) 2017/745 und harmonisierter Normen: Design Controls im Qualitätsmanagementsystem nach ISO 13485, Risikomanagement nach ISO 14971, elektrische Sicherheit und Leistungsmerkmale nach IEC 60601, Gebrauchstauglichkeit nach IEC 62366-1 und Software-Lebenszyklus nach IEC 62304. Im Unterschied zu Biomedizinischen Ingenieur/innen liegt der Schwerpunkt meist stärker auf industrieller Produktentwicklung und Systemtechnik. Im Krankenhaus übernehmen sie Planungs-, Beschaffungs- und Projektaufgaben und sind häufig Kandidat/innen für Leitungsfunktionen.',
    tasks: [
      'Erarbeitung von Produkt- und Systemanforderungen gemeinsam mit Anwender/innen und Produktmanagement',
      'Konstruktion bzw. Elektronikentwicklung von Medizinprodukten',
      'Erstellung und Durchführung von Verifizierungs- und Validierungsplänen (z. B. Prüfungen nach IEC 60601)',
      'Risikomanagement nach ISO 14971 und Mitarbeit an der technischen Dokumentation nach MDR',
      'Zusammenarbeit mit Benannten Stellen und Prüflaboren bei Konformitätsbewertung und Normprüfungen',
      'Analyse von Feldrückmeldungen und Umsetzung von Design-Änderungen',
      'Im Krankenhaus: Planung von Medizintechnik bei Neu- und Umbauten sowie Beschaffungsprojekte'
    ],
    workplaces: [
      'Entwicklungs- und Testabteilungen von Medizinprodukteherstellern',
      'Prüflabore und Benannte Stellen',
      'Medizintechnik-Abteilungen größerer Kliniken',
      'Ingenieur- und Planungsbüros für Krankenhausplanung',
      'Zulieferer und Engineering-Dienstleister'
    ],
    employerTypes: ['hersteller', 'krankenhaus', 'pruefdienst', 'forschung'],
    skills: {
      hard: [
        'Elektronik-, Mechanik- oder Systementwicklung',
        'Normen: IEC 60601-Reihe, ISO 14971, ISO 13485, IEC 62366-1, IEC 62304',
        'Anforderungsmanagement und Verifizierung/Validierung',
        'CAD, Simulation und Messtechnik',
        'Kenntnisse der MDR (EU) 2017/745 und der technischen Dokumentation',
        'Projektmanagement (klassisch und agil)'
      ],
      soft: [
        'Strukturiertes und gründliches Arbeiten',
        'Kommunikation in interdisziplinären Teams',
        'Verantwortungsbewusstsein für Sicherheit und Qualität',
        'Englischkenntnisse für internationale Projekte',
        'Problemlösungskompetenz'
      ]
    },
    requirements: [
      'Abgeschlossenes Studium der Medizintechnik (B.Eng./B.Sc. oder M.Eng./M.Sc.) oder Elektrotechnik/Maschinenbau mit medizintechnischem Schwerpunkt',
      'Kenntnisse regulatorischer Anforderungen an Medizinprodukte',
      'Gute Englischkenntnisse',
      'Für Leitungsfunktionen meist mehrjährige Berufserfahrung'
    ],
    entryPaths: [
      { type: 'Studium', title: 'B.Eng./B.Sc. Medizintechnik', duration: '6–7 Semester' },
      { type: 'Studium', title: 'Duales Studium Medizintechnik (mit Praxispartner)', duration: 'ca. 3–4,5 Jahre' },
      { type: 'Studium', title: 'M.Eng./M.Sc. Medizintechnik', duration: '3–4 Semester' },
      { type: 'Quereinstieg', title: 'Aus Elektrotechnik, Mechatronik oder Maschinenbau mit Einarbeitung in Medizinprodukterecht', duration: 'Einarbeitung ca. 6–12 Monate' },
      { type: 'Weiterbildung', title: 'Vom/von der staatl. gepr. Techniker/in über ein (berufsbegleitendes) Bachelorstudium', duration: 'ca. 3–4 Jahre' }
    ],
    educationIds: [
      'bsc-medizintechnik',
      'dual-medizintechnik',
      'msc-medizintechnik',
      'bsc-biomedical-engineering',
      'msc-biomedical-engineering',
      'fs-techniker-medizintechnik',
      'wb-qm-iso13485',
      'wb-regulatory-affairs',
      'wb-iec62304'
    ],
    profile: { technik: 5, medizin: 3, physik: 4, software: 3, kommunikation: 3, mobilitaet: 2, regulatorik: 4, fuehrung: 2, forschung: 4 },
    careerPath: [
      { title: 'Einstieg als Entwicklungs- oder Testingenieur/in', years: '0–2 J.' },
      { title: 'Systemingenieur/in bzw. Projektingenieur/in mit Verantwortung für Teilsysteme', years: '2–5 J.' },
      { title: 'Senior Engineer, technische Projektleitung oder Fachexpert/in für Normen', years: '5–8 J.' },
      { title: 'Teamleitung Entwicklung oder Leitung Medizintechnik im Krankenhaus', years: '8–12 J.' },
      { title: 'Abteilungs- bzw. Bereichsleitung R&D oder Technische Leitung', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '08:00', activity: 'Durchsicht der Testergebnisse aus dem Prüflabor' },
      { time: '09:00', activity: 'Design Review mit Konstruktion, Software und Qualitätsmanagement' },
      { time: '10:30', activity: 'Überarbeitung der Anforderungsspezifikation nach Anwenderfeedback' },
      { time: '12:30', activity: 'Mittagspause' },
      { time: '13:30', activity: 'Aktualisierung der Risikoanalyse nach ISO 14971 für eine Design-Änderung' },
      { time: '15:00', activity: 'Telefonat mit externem Prüflabor zur Vorbereitung der Prüfung nach IEC 60601-1' },
      { time: '16:00', activity: 'Planung der Verifizierungstests für den nächsten Sprint' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Ingenieur/innen mit Medizintechnik- und Regulatorik-Know-how sind gefragt, insbesondere seit die MDR den Dokumentations- und Prüfaufwand bei Herstellern deutlich erhöht hat.',
    related: ['biomedizinischer-ingenieur', 'software-entwickler', 'qualitaetsmanager', 'regulatory-affairs', 'technischer-leiter'],
    facts: { workload: 'Vollzeit, Gleitzeit verbreitet', travel: 'mittel', remote: 'teilweise' }
  },

  {
    id: 'medizinphysiker',
    title: 'Medizinphysiker/in (Medizinphysik-Experte/in)',
    icon: '⚛️',
    category: 'Physik & Strahlung',
    summary: 'Medizinphysiker/innen sorgen in Strahlentherapie, Nuklearmedizin und Radiologie für die sichere und optimale Anwendung ionisierender Strahlung am Menschen – mit der gesetzlich geregelten Rolle als Medizinphysik-Experte/in.',
    description: 'Der Medizinphysik-Experte bzw. die Medizinphysik-Expertin (MPE) ist im Strahlenschutzgesetz (StrlSchG) und in der Strahlenschutzverordnung (StrlSchV) verankert: Bei Behandlungen mit individuellem Bestrahlungsplan (Strahlentherapie) muss eine MPE-Fachkraft eng eingebunden sein; bei standardisierten nuklearmedizinischen Behandlungen, Untersuchungen mit offenen radioaktiven Stoffen und Untersuchungen mit Computertomographen ist sie nach § 131 StrlSchV zur Mitarbeit hinzuzuziehen. Voraussetzung ist in der Regel ein Hochschulabschluss in Medizinphysik oder Physik (Master bzw. Diplom) sowie die erforderliche Fachkunde im Strahlenschutz, die durch Sachkunde (praktische Erfahrung) und anerkannte Kurse erworben und von der zuständigen Behörde bescheinigt wird. In der Strahlentherapie erstellen und prüfen Medizinphysiker/innen Bestrahlungspläne, führen Dosimetrie und Qualitätssicherung an Linearbeschleunigern durch und verantworten die Dosisberechnung; in Nuklearmedizin und Radiologie stehen Qualitätssicherung, Dosisoptimierung und Strahlenschutz im Vordergrund. Darüber hinaus bietet die Deutsche Gesellschaft für Medizinische Physik (DGMP) eine Fachanerkennung an.',
    tasks: [
      'Bestrahlungsplanung und physikalische Plan-Prüfung in der Strahlentherapie',
      'Dosimetrie, Kalibrierung und Qualitätssicherung an Linearbeschleunigern und Afterloadern',
      'Konstanz- und Abnahmeprüfungen an CT-, Röntgen- und nuklearmedizinischen Geräten',
      'Dosisoptimierung und Ermittlung von Patientendosen in Radiologie und Nuklearmedizin',
      'Strahlenschutzaufgaben, z. B. als Strahlenschutzbeauftragte/r, und Mitwirkung bei Genehmigungsverfahren',
      'Untersuchung und Meldung bedeutsamer Vorkommnisse nach StrlSchV',
      'Mitarbeit bei der Einführung neuer Verfahren, Forschung und Lehre (z. B. für MTR-Auszubildende)'
    ],
    workplaces: [
      'Kliniken und Praxen für Strahlentherapie',
      'Nuklearmedizinische Abteilungen und Praxen',
      'Radiologische Abteilungen und Radiologie-Praxisverbünde',
      'Universitätskliniken und Forschungszentren',
      'Hersteller von Strahlentherapie- und Bildgebungssystemen sowie Behörden und Sachverständigenorganisationen'
    ],
    employerTypes: ['krankenhaus', 'forschung', 'hersteller', 'pruefdienst'],
    skills: {
      hard: [
        'Strahlenphysik, Dosimetrie und Strahlenbiologie',
        'Bestrahlungsplanungssysteme und Dosisberechnungsalgorithmen',
        'Qualitätssicherung und Messtechnik (Ionisationskammern, Phantome)',
        'Rechtsgrundlagen: StrlSchG, StrlSchV, Richtlinie Strahlenschutz in der Medizin',
        'Bildgebende Verfahren (CT, PET, SPECT, MRT)',
        'Programmierung und Datenanalyse (z. B. Python, MATLAB)'
      ],
      soft: [
        'Höchste Sorgfalt und Verantwortungsbewusstsein',
        'Zusammenarbeit mit Ärzt/innen und MTR auf Augenhöhe',
        'Entscheidungssicherheit unter Zeitdruck',
        'Didaktische Fähigkeiten für Unterweisungen und Lehre',
        'Analytisches Denken'
      ]
    },
    requirements: [
      'Hochschulabschluss (Master oder Diplom) in Medizinphysik, Physik oder einem vergleichbaren naturwissenschaftlich-technischen Fach',
      'Erforderliche Fachkunde im Strahlenschutz für das jeweilige Anwendungsgebiet (Sachkunde plus anerkannte Kurse, behördlich bescheinigt)',
      'Regelmäßige Aktualisierung der Fachkunde (in der Regel mindestens alle fünf Jahre)',
      'Optional, aber verbreitet: Fachanerkennung der DGMP'
    ],
    entryPaths: [
      { type: 'Studium', title: 'B.Sc. Medizinphysik oder Physik', duration: '6–7 Semester' },
      { type: 'Studium', title: 'M.Sc. Medizinphysik bzw. Medical Physics', duration: '4 Semester' },
      { type: 'Weiterbildung', title: 'Erwerb der Fachkunde als Medizinphysik-Experte/in (Sachkunde + Strahlenschutzkurse)', duration: 'Sachkundezeit je nach Anwendungsgebiet ca. 12–18 Monate (Strahlentherapie, Nuklearmedizin, Röntgendiagnostik), bei mehreren Gebieten länger' },
      { type: 'Weiterbildung', title: 'Fachanerkennung Medizinische Physik (DGMP)', duration: 'mehrjährig, berufsbegleitend' },
      { type: 'Quereinstieg', title: 'Physiker/innen (Master, Diplom oder Promotion) über Sachkunde und Fachkundekurse', duration: 'ca. 1–2 Jahre' }
    ],
    educationIds: [
      'bsc-medizinphysik',
      'msc-medizinphysik',
      'wb-fachkunde-strahlenschutz',
      'wb-mpe-dgmp',
      'msc-biomedical-engineering'
    ],
    profile: { technik: 4, medizin: 4, physik: 5, software: 3, kommunikation: 3, mobilitaet: 1, regulatorik: 4, fuehrung: 2, forschung: 4 },
    careerPath: [
      { title: 'Einstieg als Medizinphysiker/in in Weiterbildung (Erwerb der Sachkunde)', years: '0–2 J.' },
      { title: 'Medizinphysik-Experte/in mit Fachkunde im jeweiligen Anwendungsgebiet', years: '2–5 J.' },
      { title: 'Erfahrene/r MPE mit Zusatzverantwortung (z. B. Strahlenschutzbeauftragte/r)', years: '5–8 J.' },
      { title: 'Leitende/r Medizinphysiker/in einer Abteilung', years: '8–12 J.' },
      { title: 'Leitung Medizinische Physik eines Klinikums oder Professur', years: 'ab 12 J.' }
    ],
    dayInLife: [
      { time: '07:00', activity: 'Morgendliche Konstanzprüfung am Linearbeschleuniger vor Behandlungsbeginn' },
      { time: '08:00', activity: 'Besprechung neuer Patientenfälle mit Strahlentherapeut/innen' },
      { time: '09:00', activity: 'Erstellung und Optimierung von Bestrahlungsplänen' },
      { time: '11:30', activity: 'Physikalische Planprüfung und patientenspezifische Verifikationsmessung' },
      { time: '12:30', activity: 'Mittagspause' },
      { time: '13:30', activity: 'Qualitätssicherung und Dosisoptimierung am CT der Radiologie' },
      { time: '15:30', activity: 'Strahlenschutzunterweisung für MTR und Dokumentation der Messergebnisse' }
    ],
    outlook: 'sehr gut',
    outlookText: 'Durch die Anforderungen der StrlSchV an die Einbindung von Medizinphysik-Expert/innen in Strahlentherapie, Nuklearmedizin und CT ist der Bedarf hoch; qualifizierte Fachkräfte mit Fachkunde sind knapp.',
    related: ['biomedizinischer-ingenieur', 'medizintechnikingenieur', 'anwendungstechniker'],
    facts: { workload: 'Vollzeit, in der Strahlentherapie teils Früh-/Spätdienste und Rufbereitschaft', travel: 'gering', remote: 'kaum' }
  },

  {
    id: 'technischer-leiter',
    title: 'Technische/r Leiter/in Medizintechnik',
    icon: '🏥',
    category: 'Management & Qualität',
    summary: 'Technische Leiter/innen Medizintechnik verantworten den sicheren, wirtschaftlichen und rechtskonformen Betrieb des gesamten Medizingeräteparks einer Einrichtung und führen das Medizintechnik-Team.',
    description: 'In Krankenhäusern, Klinikverbünden oder bei Servicedienstleistern leiten sie die Abteilung Medizintechnik bzw. das Gerätemanagement. Sie sind dafür verantwortlich, dass die Betreiberpflichten nach MPDG und Medizinprodukte-Betreiberverordnung (MPBetreibV) erfüllt werden – etwa Bestandsverzeichnis, Einweisungen, STK/MTK und Meldepflichten bei Vorkommnissen – und übernehmen häufig die Funktion der bzw. des Beauftragten für Medizinproduktesicherheit nach MPBetreibV. Hinzu kommen Investitions- und Budgetplanung, Beschaffungsprojekte, Wartungs- und Serviceverträge, die Einbindung der Medizintechnik in IT-Netzwerke (z. B. Risikomanagement nach DIN EN IEC 80001-1) sowie die Mitarbeit bei Bau- und Umbauvorhaben. Typischer Hintergrund ist ein Ingenieurstudium der Medizintechnik oder eine Technikerlaufbahn mit langjähriger Erfahrung und Führungsweiterbildung.',
    tasks: [
      'Fachliche und disziplinarische Führung des Medizintechnik-Teams',
      'Sicherstellung der Betreiberpflichten nach MPDG und MPBetreibV (Bestandsverzeichnis, STK/MTK, Einweisungen)',
      'Wahrnehmung der Aufgaben als Beauftragte/r für Medizinproduktesicherheit bzw. enge Zusammenarbeit mit dieser Funktion',
      'Investitions-, Budget- und Ersatzbeschaffungsplanung für den Gerätepark',
      'Ausschreibung, Bewertung und Verhandlung von Beschaffungen sowie Wartungsverträgen',
      'Bearbeitung von Vorkommnissen, Rückrufen und Sicherheitsmitteilungen der Hersteller',
      'Planung der Medizintechnik bei Neu- und Umbauten sowie Abstimmung mit IT, Haustechnik und Klinikleitung'
    ],
    workplaces: [
      'Krankenhäuser, Universitätskliniken und Klinikverbünde',
      'Herstellerunabhängige Medizintechnik-Dienstleister',
      'Rehakliniken und große Gesundheitszentren',
      'Service-Organisationen von Herstellern'
    ],
    employerTypes: ['krankenhaus', 'service', 'hersteller'],
    skills: {
      hard: [
        'Medizinprodukterecht: MDR, MPDG, MPBetreibV',
        'Gerätemanagement, Instandhaltungsstrategien und Kennzahlen',
        'Investitions- und Budgetplanung, Vergaberecht (in öffentlichen Häusern)',
        'Medizintechnik im IT-Netzwerk und Informationssicherheit (z. B. DIN EN IEC 80001-1)',
        'Qualitäts- und Risikomanagement',
        'Projektmanagement bei Bau- und Beschaffungsvorhaben'
      ],
      soft: [
        'Führungs- und Personalkompetenz',
        'Verhandlungsgeschick gegenüber Herstellern und Geschäftsführung',
        'Durchsetzungsvermögen und Entscheidungsfreude',
        'Vernetztes Denken zwischen Medizin, Technik und Wirtschaft',
        'Konfliktfähigkeit'
      ]
    },
    requirements: [
      'Studium der Medizintechnik bzw. eines ingenieurwissenschaftlichen Fachs oder staatl. gepr. Techniker/in Medizintechnik mit langjähriger Erfahrung',
      'Mehrjährige Berufserfahrung in der Medizintechnik, idealerweise mit Personalverantwortung',
      'Fundierte Kenntnisse in MPDG und MPBetreibV',
      'Betriebswirtschaftliche Grundkenntnisse bzw. Weiterbildung im Gesundheitsmanagement'
    ],
    entryPaths: [
      { type: 'Studium', title: 'B.Eng./M.Eng. Medizintechnik mit anschließender Berufserfahrung', duration: '3–5 Jahre Studium + mehrere Jahre Praxis' },
      { type: 'Weiterbildung', title: 'Staatl. gepr. Techniker/in Medizintechnik mit Führungsweiterbildung', duration: 'mehrjährige Praxis + Fortbildung' },
      { type: 'Weiterbildung', title: 'Weiterbildung Führung bzw. Gesundheits- und Krankenhausmanagement', duration: 'ca. 6–24 Monate berufsbegleitend' },
      { type: 'Quereinstieg', title: 'Aus dem Herstellerservice (Serviceleitung) in die Klinik', duration: 'Einarbeitung ca. 6–12 Monate' }
    ],
    educationIds: [
      'bsc-medizintechnik',
      'msc-medizintechnik',
      'fs-techniker-medizintechnik',
      'dual-medizintechnik',
      'bsc-medizininformatik',
      'wb-meister-techniker-fuehrung',
      'wb-gesundheitsmanagement',
      'wb-qm-iso13485',
      'wb-stk-mtk'
    ],
    profile: { technik: 4, medizin: 3, physik: 2, software: 3, kommunikation: 5, mobilitaet: 2, regulatorik: 5, fuehrung: 5, forschung: 1 },
    careerPath: [
      { title: 'Medizintechniker/in oder Medizintechnikingenieur/in', years: '0–5 J.' },
      { title: 'Teamleitung bzw. Fachgruppenleitung Medizintechnik', years: '5–8 J.' },
      { title: 'Stellvertretende Leitung Medizintechnik', years: '8–12 J.' },
      { title: 'Technische Leitung Medizintechnik einer Klinik', years: '12–15 J.' },
      { title: 'Leitung Medizintechnik eines Klinikverbunds oder Gesamtleitung Technik', years: 'ab 15 J.' }
    ],
    dayInLife: [
      { time: '07:30', activity: 'Abstimmung mit den Teamleitungen zu offenen Störungen und Personaleinsatz' },
      { time: '08:30', activity: 'Bearbeitung einer Sicherheitsmitteilung eines Herstellers und Prüfung der betroffenen Geräte' },
      { time: '10:00', activity: 'Investitionsrunde mit Geschäftsführung und Chefärzt/innen zur Ersatzbeschaffung' },
      { time: '12:00', activity: 'Mittagspause' },
      { time: '13:00', activity: 'Bieterpräsentationen im Rahmen einer Ausschreibung für Ultraschallsysteme' },
      { time: '15:00', activity: 'Baubesprechung zur Medizintechnik im neuen OP-Trakt' },
      { time: '16:30', activity: 'Mitarbeitergespräche und Freigabe von Wartungsverträgen' }
    ],
    outlook: 'gut',
    outlookText: 'Leitungspositionen sind begrenzt, werden aber aufgrund des Generationswechsels und steigender regulatorischer Anforderungen zunehmend mit qualifizierten Fachkräften neu besetzt.',
    related: ['medizintechnikingenieur', 'medizintechniker', 'geraetemanagement', 'qualitaetsmanager'],
    facts: { workload: 'Vollzeit, Führungsverantwortung, teils Erreichbarkeit außerhalb der Kernzeit', travel: 'gering', remote: 'teilweise' }
  }
]);
