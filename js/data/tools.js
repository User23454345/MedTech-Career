/* MedTech Career Hub – Werkzeuge: Selbsteinschätzung, Lernpfade, Bewerbung, Interview, Portale, Verbände
 * Klassisches Skript (kein ES-Modul). Stand: November 2026.
 * Alle Angaben dienen der Orientierung und ersetzen keine individuelle Beratung.
 */
window.MTH = window.MTH || {};

MTH.tools = {
  /* ================================================================
   * Kompetenzdimensionen für die Selbsteinschätzung (Werte 1–5)
   * ================================================================ */
  dimensions: [
    {
      id: 'technik',
      label: 'Gerätetechnik',
      question: 'Wie gern und wie sicher arbeiten Sie mit Elektronik, Mechanik und technischen Geräten – etwa beim Messen, Fehlersuchen oder Reparieren?',
      hint: 'Hoch einschätzen, wenn Sie z. B. gern Schaltpläne lesen, mit Messgeräten umgehen oder Geräte zerlegen und instand setzen.'
    },
    {
      id: 'medizin',
      label: 'Medizin & Biologie',
      question: 'Wie stark interessieren Sie sich für den menschlichen Körper, Krankheitsbilder und die Abläufe in Klinik und Praxis?',
      hint: 'Relevant für Berufe nah am Patienten oder am klinischen Personal – z. B. Anwendungsberatung, Medizinphysik oder Labordiagnostik.'
    },
    {
      id: 'physik',
      label: 'Physik & Mathematik',
      question: 'Wie leicht fallen Ihnen Physik und Mathematik, z. B. Berechnungen, Formeln, Messunsicherheiten oder physikalische Zusammenhänge?',
      hint: 'Besonders wichtig in Medizinphysik, Entwicklung und Bildgebung (Röntgen, CT, MRT, Ultraschall, Strahlentherapie).'
    },
    {
      id: 'software',
      label: 'IT & Software',
      question: 'Wie vertraut sind Sie mit Programmierung, Netzwerken, Datenbanken oder IT-Systemen und wie gern arbeiten Sie damit?',
      hint: 'Medizingeräte sind zunehmend vernetzt; Software ist oft selbst ein Medizinprodukt. Auch Grundkenntnisse in IT-Sicherheit zählen.'
    },
    {
      id: 'kommunikation',
      label: 'Kommunikation',
      question: 'Wie wohl fühlen Sie sich im Kontakt mit Kundinnen und Kunden, klinischem Personal und im Team – auch beim Erklären komplexer Technik?',
      hint: 'Gefragt bei Einweisungen, Schulungen, Beratung, Vertrieb sowie in der Abstimmung zwischen Technik, Medizin und Verwaltung.'
    },
    {
      id: 'mobilitaet',
      label: 'Mobilität',
      question: 'Wie hoch ist Ihre Bereitschaft zu reisen, im Außendienst zu arbeiten oder wechselnde Einsatzorte zu haben?',
      hint: 'Service- und Vertriebsberufe sind oft mit täglichen Fahrten und Übernachtungen verbunden; Klinik- und Laborberufe sind ortsgebunden.'
    },
    {
      id: 'regulatorik',
      label: 'Normen & Recht',
      question: 'Wie gern beschäftigen Sie sich mit Normen, Gesetzen und sorgfältiger Dokumentation – etwa MDR, ISO 13485 oder Prüfprotokollen?',
      hint: 'Kernkompetenz in Qualitätsmanagement und Regulatory Affairs, aber auch in Prüfung und Gerätemanagement (MPBetreibV, IEC 62353) unverzichtbar.'
    },
    {
      id: 'fuehrung',
      label: 'Führung',
      question: 'Wie gern übernehmen Sie Verantwortung für Menschen, Budgets, Projekte und Abläufe?',
      hint: 'Wichtig für Leitungsfunktionen, z. B. Technische Leitung Medizintechnik, Teamleitung im Service oder Projektleitung.'
    },
    {
      id: 'forschung',
      label: 'Forschung & Entwicklung',
      question: 'Wie stark reizt es Sie, Neues zu entwickeln, zu experimentieren und wissenschaftlich zu arbeiten?',
      hint: 'Relevant in Entwicklungsabteilungen von Herstellern, an Hochschulen, Universitätskliniken und Forschungsinstituten.'
    }
  ],

  /* ================================================================
   * Lernpfade je Beruf (4–6 Schritte)
   * ================================================================ */
  learningPaths: {
    medizintechniker: [
      {
        phase: 'Orientierung',
        title: 'Schulische Basis und Praktikum',
        text: 'Gute Kenntnisse in Mathematik, Physik und Technik schaffen die Grundlage. Ein Praktikum in einer Medizintechnik-Abteilung eines Krankenhauses oder bei einem Servicedienstleister gibt einen realistischen Einblick.',
        duration: 'während der Schulzeit',
        educationIds: []
      },
      {
        phase: 'Fundament',
        title: 'Berufsausbildung im Elektro- oder Mechatronikbereich',
        text: 'Eine abgeschlossene Ausbildung, z. B. als Elektroniker/in für Geräte und Systeme oder Mechatroniker/in, ist die übliche Voraussetzung für die Fachschule.',
        duration: '3,5 Jahre',
        educationIds: ['ausb-elektroniker-geraete', 'ausb-mechatroniker']
      },
      {
        phase: 'Berufspraxis',
        title: 'Berufserfahrung sammeln',
        text: 'Für die Zulassung zur Fachschule ist in der Regel einschlägige Berufspraxis erforderlich (je nach Bundesland und Schulform unterschiedlich). Erfahrung in Instandhaltung oder Service ist ein Vorteil.',
        duration: 'ca. 1–2 Jahre',
        educationIds: ['wb-elektrofachkraft']
      },
      {
        phase: 'Qualifizierung',
        title: 'Staatlich geprüfte/r Techniker/in Medizintechnik',
        text: 'Die Fachschule vermittelt Medizingerätetechnik, Messtechnik, Medizinprodukterecht und Betriebswirtschaft. Möglich in Vollzeit oder berufsbegleitend in Teilzeit.',
        duration: '2 Jahre Vollzeit / ca. 4 Jahre Teilzeit',
        educationIds: ['fs-techniker-medizintechnik']
      },
      {
        phase: 'Spezialisierung',
        title: 'Prüfqualifikationen erwerben',
        text: 'Herstellerschulungen sowie Lehrgänge zu Prüfungen nach IEC 62353 und zu sicherheits- und messtechnischen Kontrollen (STK/MTK) nach MPBetreibV erweitern den Einsatzbereich.',
        duration: 'mehrere Tage bis Wochen',
        educationIds: ['wb-mte-pruefung-62353', 'wb-stk-mtk']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Verantwortung oder Studium',
        text: 'Mit Erfahrung sind Team- oder Bereichsleitungen möglich. Alternativ öffnet ein (berufsbegleitendes) Studium der Medizintechnik den Weg in Ingenieurfunktionen.',
        duration: 'ab ca. 3–5 Jahren Berufserfahrung',
        educationIds: ['wb-meister-techniker-fuehrung', 'bsc-medizintechnik']
      }
    ],

    'biomedizinischer-ingenieur': [
      {
        phase: 'Orientierung',
        title: 'Hochschulzugang und Interessen klären',
        text: 'Allgemeine oder fachgebundene Hochschulreife bzw. Fachhochschulreife. Starke Leistungen in Mathematik, Physik, Biologie und Informatik erleichtern den Einstieg.',
        duration: 'während der Schulzeit',
        educationIds: []
      },
      {
        phase: 'Studium',
        title: 'Bachelor in Biomedical Engineering oder Medizintechnik',
        text: 'Ingenieurwissenschaftliche Grundlagen kombiniert mit Medizin und Biologie: Biosignalverarbeitung, Biomaterialien, Biomechanik und Medizingerätetechnik.',
        duration: '6–7 Semester',
        educationIds: ['bsc-biomedical-engineering', 'bsc-medizintechnik']
      },
      {
        phase: 'Praxis',
        title: 'Praxissemester und Abschlussarbeit in der Industrie oder Forschung',
        text: 'Praxisphasen bei Herstellern, in Universitätskliniken oder Forschungsinstituten schaffen Kontakte und klären die spätere Ausrichtung.',
        duration: 'ca. 3–6 Monate',
        educationIds: []
      },
      {
        phase: 'Vertiefung',
        title: 'Master für Entwicklung und Forschung',
        text: 'Ein Masterabschluss ist für viele Entwicklungs- und Forschungspositionen üblich und Voraussetzung für eine Promotion.',
        duration: '3–4 Semester',
        educationIds: ['msc-biomedical-engineering', 'msc-medizintechnik']
      },
      {
        phase: 'Berufseinstieg',
        title: 'Normenwissen für die Produktentwicklung',
        text: 'Kenntnisse in Risikomanagement (ISO 14971), Qualitätsmanagement (ISO 13485) und – bei softwarebasierten Produkten – IEC 62304 sind in der Entwicklung gefragt.',
        duration: 'begleitend, Kurse von 1–5 Tagen',
        educationIds: ['wb-qm-iso13485', 'wb-iec62304']
      }
    ],

    servicetechniker: [
      {
        phase: 'Fundament',
        title: 'Technische Berufsausbildung',
        text: 'Üblich ist eine Ausbildung im Elektro- oder Mechatronikbereich. Wichtig sind solide Kenntnisse in Elektrotechnik, Messtechnik und systematischer Fehlersuche.',
        duration: '3,5 Jahre',
        educationIds: ['ausb-elektroniker-geraete', 'ausb-mechatroniker']
      },
      {
        phase: 'Grundlagen',
        title: 'Elektrosicherheit und Führerschein',
        text: 'Die Qualifikation als Elektrofachkraft und ein Pkw-Führerschein (Klasse B) sind für den Außendienst in der Regel Voraussetzung.',
        duration: 'begleitend',
        educationIds: ['wb-elektrofachkraft']
      },
      {
        phase: 'Einarbeitung',
        title: 'Herstellerschulungen auf Gerätefamilien',
        text: 'Servicetechniker/innen werden meist intensiv auf bestimmte Gerätegruppen geschult, z. B. Beatmung, Bildgebung, Labor- oder Sterilisationstechnik.',
        duration: 'mehrere Wochen bis Monate',
        educationIds: ['wb-produktschulung-applikation']
      },
      {
        phase: 'Qualifizierung',
        title: 'Prüfungen und Kontrollen nach Norm und Verordnung',
        text: 'Prüfungen nach IEC 62353 sowie sicherheits- und messtechnische Kontrollen nach MPBetreibV gehören zum Alltag und erfordern entsprechende Sachkenntnis.',
        duration: 'Lehrgänge von wenigen Tagen',
        educationIds: ['wb-mte-pruefung-62353', 'wb-stk-mtk']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Spezialist/in, Teamleitung oder Techniker/in',
        text: 'Mit Erfahrung folgen Rollen als Second-Level-Support, Spezialist/in für komplexe Systeme oder Serviceleitung. Die Fachschule für Medizintechnik ist eine verbreitete Aufstiegsoption.',
        duration: 'ab ca. 3–5 Jahren',
        educationIds: ['fs-techniker-medizintechnik', 'wb-meister-techniker-fuehrung']
      }
    ],

    medizintechnikingenieur: [
      {
        phase: 'Orientierung',
        title: 'Hochschulzugang und Studienwahl',
        text: 'Mit (Fach-)Hochschulreife stehen Bachelorstudiengänge an Hochschulen für angewandte Wissenschaften und Universitäten offen. Alternativ verbindet ein duales Studium Praxis und Studium.',
        duration: 'während der Schulzeit',
        educationIds: []
      },
      {
        phase: 'Studium',
        title: 'Bachelor Medizintechnik (klassisch oder dual)',
        text: 'Elektrotechnik, Mechanik, Informatik, Physiologie und Medizingerätetechnik bilden den Kern. Das duale Studium bietet frühe Praxiserfahrung in einem Partnerunternehmen.',
        duration: '6–7 Semester (dual teils länger)',
        educationIds: ['bsc-medizintechnik', 'dual-medizintechnik']
      },
      {
        phase: 'Vertiefung',
        title: 'Master für Entwicklung oder Projektleitung',
        text: 'Ein Master vertieft z. B. Bildgebung, Implantate, Robotik oder Medizininformatik und erleichtert den Zugang zu Entwicklungs- und Leitungsfunktionen.',
        duration: '3–4 Semester',
        educationIds: ['msc-medizintechnik', 'msc-biomedical-engineering']
      },
      {
        phase: 'Berufseinstieg',
        title: 'Regulatorisches Grundlagenwissen',
        text: 'Wer Medizinprodukte entwickelt, arbeitet nach MDR, ISO 13485, ISO 14971 und produktspezifischen Normen wie IEC 60601. Entsprechende Kurse beschleunigen die Einarbeitung.',
        duration: 'begleitend',
        educationIds: ['wb-qm-iso13485', 'wb-regulatory-affairs']
      },
      {
        phase: 'Spezialisierung',
        title: 'Fachliche Schwerpunkte setzen',
        text: 'Je nach Rolle sind Software (IEC 62304), Prüfung und Sicherheit (IEC 62353) oder klinisches Gerätemanagement sinnvolle Ergänzungen.',
        duration: 'nach Bedarf',
        educationIds: ['wb-iec62304', 'wb-mte-pruefung-62353']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Projekt- oder Teamleitung',
        text: 'Mit Erfahrung folgen Projektleitung, Teamleitung in der Entwicklung oder die Technische Leitung einer Klinik-Medizintechnik.',
        duration: 'ab ca. 5 Jahren',
        educationIds: ['wb-meister-techniker-fuehrung', 'wb-gesundheitsmanagement']
      }
    ],

    medizinphysiker: [
      {
        phase: 'Orientierung',
        title: 'Starke Grundlagen in Physik und Mathematik',
        text: 'Hochschulreife mit Interesse an Physik, Mathematik und Medizin. Ein Praktikum in einer Strahlentherapie oder Radiologie gibt frühe Einblicke.',
        duration: 'während der Schulzeit',
        educationIds: []
      },
      {
        phase: 'Studium',
        title: 'Bachelor in Medizinphysik oder Physik',
        text: 'Physikalische Grundlagen, Strahlenphysik, Dosimetrie und Bildgebung. Auch ein klassisches Physikstudium ist ein üblicher Einstieg.',
        duration: '6–7 Semester',
        educationIds: ['bsc-medizinphysik']
      },
      {
        phase: 'Vertiefung',
        title: 'Master in Medizinphysik',
        text: 'Ein Masterabschluss in Medizinphysik oder Physik mit medizinphysikalischem Schwerpunkt ist die übliche Grundlage für die Tätigkeit als Medizinphysik-Experte/in.',
        duration: '3–4 Semester',
        educationIds: ['msc-medizinphysik']
      },
      {
        phase: 'Fachkunde',
        title: 'Praktische Erfahrung und Fachkunde im Strahlenschutz',
        text: 'Für die Tätigkeit als Medizinphysik-Experte/in sind nach Strahlenschutzrecht (StrlSchG/StrlSchV) Sachkunde durch praktische Tätigkeit und Kurse sowie die erteilte Fachkunde im Strahlenschutz erforderlich – je nach Anwendungsgebiet (z. B. Strahlentherapie, Nuklearmedizin, Röntgendiagnostik).',
        duration: 'je nach Anwendungsgebiet unterschiedlich (Sachkundezeiten nach Fachkunde-Richtlinie)',
        educationIds: ['wb-fachkunde-strahlenschutz']
      },
      {
        phase: 'Anerkennung',
        title: 'Fachanerkennung der DGMP',
        text: 'Die Fachanerkennung „Medizinische Physik“ der Deutschen Gesellschaft für Medizinische Physik bestätigt eine strukturierte Weiterbildung und ist in Kliniken ein anerkanntes Qualifikationsmerkmal.',
        duration: 'mehrjährige strukturierte Weiterbildung',
        educationIds: ['wb-mpe-dgmp']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Leitung oder Forschung',
        text: 'Mit Erfahrung sind die Leitung einer Medizinphysik-Abteilung, Tätigkeiten in Forschung und Lehre oder bei Herstellern von Bestrahlungs- und Bildgebungssystemen möglich.',
        duration: 'langfristig',
        educationIds: ['wb-meister-techniker-fuehrung']
      }
    ],

    'technischer-leiter': [
      {
        phase: 'Fundament',
        title: 'Technische Ausbildung oder Studium',
        text: 'Ausgangspunkt ist meist ein Studium der Medizintechnik bzw. Elektrotechnik oder der Weg über Ausbildung und staatlich geprüfte/n Techniker/in Medizintechnik.',
        duration: '3–4 Jahre',
        educationIds: ['bsc-medizintechnik', 'fs-techniker-medizintechnik']
      },
      {
        phase: 'Berufspraxis',
        title: 'Mehrjährige Erfahrung in der Klinik-Medizintechnik',
        text: 'Erfahrung mit Instandhaltung, Prüfungen, Beschaffung und dem Medizinprodukte-Bestand eines Hauses ist die wichtigste Grundlage für die Leitung.',
        duration: 'ca. 3–7 Jahre',
        educationIds: ['wb-stk-mtk', 'wb-mte-pruefung-62353']
      },
      {
        phase: 'Recht & Organisation',
        title: 'Betreiberpflichten sicher beherrschen',
        text: 'Technische Leitungen verantworten die Umsetzung der MPBetreibV, oft auch die Funktion bzw. Zusammenarbeit mit der/dem Beauftragten für Medizinproduktesicherheit, sowie Meldewege bei Vorkommnissen.',
        duration: 'begleitend',
        educationIds: ['wb-regulatory-affairs']
      },
      {
        phase: 'Führung',
        title: 'Führungs- und Managementkompetenz',
        text: 'Personalführung, Budgetplanung, Investitionsplanung und Verhandlung mit Lieferanten. Weiterbildungen in Führung oder Gesundheitsmanagement bereiten darauf vor.',
        duration: 'mehrere Monate, oft berufsbegleitend',
        educationIds: ['wb-meister-techniker-fuehrung', 'wb-gesundheitsmanagement']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Leitung eines Klinikverbunds oder Masterabschluss',
        text: 'In größeren Klinikverbünden ist die übergreifende Leitung der Medizintechnik möglich. Ein Master kann diesen Schritt unterstützen.',
        duration: 'langfristig',
        educationIds: ['msc-medizintechnik']
      }
    ],

    geraetemanagement: [
      {
        phase: 'Fundament',
        title: 'Technische oder medizinische Berufsausbildung',
        text: 'Üblich sind Ausbildungen im Elektrobereich. Auch medizinisch-technische Berufe wie MTR oder MTL bringen wertvolles Wissen über Geräte im klinischen Einsatz mit.',
        duration: '3–3,5 Jahre',
        educationIds: ['ausb-elektroniker-geraete', 'ausb-mtr', 'ausb-mtl']
      },
      {
        phase: 'Einarbeitung',
        title: 'Bestandsverzeichnis und Medizinproduktebuch',
        text: 'Kern des Gerätemanagements: Inventarisierung, Dokumentation von Einweisungen, Prüffristen und Instandhaltung, meist in einer Software zur Geräteverwaltung.',
        duration: 'erste Monate',
        educationIds: []
      },
      {
        phase: 'Qualifizierung',
        title: 'Prüfungen, STK und MTK',
        text: 'Kenntnisse zu Prüfungen nach IEC 62353 und den Kontrollpflichten nach MPBetreibV sind für Planung und Durchführung von Prüfungen nötig.',
        duration: 'Lehrgänge von wenigen Tagen',
        educationIds: ['wb-mte-pruefung-62353', 'wb-stk-mtk', 'wb-elektrofachkraft']
      },
      {
        phase: 'Aufstieg',
        title: 'Staatlich geprüfte/r Techniker/in Medizintechnik',
        text: 'Der Techniker-Abschluss vertieft Gerätetechnik und Recht und qualifiziert für verantwortungsvollere Aufgaben im Gerätemanagement.',
        duration: '2 Jahre Vollzeit / ca. 4 Jahre Teilzeit',
        educationIds: ['fs-techniker-medizintechnik']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Koordination und Leitung',
        text: 'Mit Erfahrung sind die Koordination des Gerätemanagements, die Mitarbeit bei Beschaffungen oder Leitungsaufgaben möglich.',
        duration: 'ab ca. 3–5 Jahren',
        educationIds: ['wb-meister-techniker-fuehrung', 'wb-gesundheitsmanagement']
      }
    ],

    produktspezialist: [
      {
        phase: 'Fundament',
        title: 'Fachlicher Hintergrund in Technik oder Medizin',
        text: 'Häufige Einstiege: Studium der Medizintechnik oder ein medizinisch-technischer bzw. pflegerischer Beruf mit großer Nähe zur klinischen Praxis.',
        duration: '3–4 Jahre',
        educationIds: ['bsc-medizintechnik', 'ausb-mtr', 'ausb-mtl']
      },
      {
        phase: 'Pflichtqualifikation',
        title: 'Medizinprodukteberater/in nach § 83 MPDG',
        text: 'Wer beruflich Fachkreise fachlich informiert und in die Anwendung einweist, muss die Sachkenntnis als Medizinprodukteberater/in nachweisen und regelmäßig auffrischen.',
        duration: 'Lehrgang von wenigen Tagen',
        educationIds: ['wb-medizinprodukteberater']
      },
      {
        phase: 'Einarbeitung',
        title: 'Produkt- und Anwendungsschulungen',
        text: 'Intensive Schulungen zum Produktportfolio, zu klinischen Anwendungen und zu Wettbewerbsprodukten. Hospitationen im OP oder auf Station sind üblich.',
        duration: 'mehrere Wochen',
        educationIds: ['wb-produktschulung-applikation']
      },
      {
        phase: 'Praxis',
        title: 'Außendienst und Kundenbeziehungen',
        text: 'Aufbau eines Netzwerks in Kliniken und Praxen, Durchführung von Produktdemonstrationen und Unterstützung bei Ausschreibungen.',
        duration: '1–3 Jahre',
        educationIds: []
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Key Account, Produktmanagement oder Vertriebsleitung',
        text: 'Mit Erfahrung folgen Rollen im Key Account Management, im Produktmanagement (Marketing) oder in der regionalen Vertriebsleitung.',
        duration: 'ab ca. 3–5 Jahren',
        educationIds: ['wb-gesundheitsmanagement']
      }
    ],

    anwendungstechniker: [
      {
        phase: 'Fundament',
        title: 'Medizinisch-technische oder technische Ausbildung',
        text: 'Besonders gefragt sind MTR in der Bildgebung und Strahlentherapie sowie MTL in der Labordiagnostik. Auch Ingenieurinnen und Ingenieure der Medizintechnik steigen hier ein.',
        duration: '3 Jahre (Ausbildung) bzw. 3–4 Jahre (Studium)',
        educationIds: ['ausb-mtr', 'ausb-mtl', 'bsc-medizintechnik']
      },
      {
        phase: 'Berufspraxis',
        title: 'Klinische Erfahrung sammeln',
        text: 'Erfahrung in Radiologie, Labor, OP oder Intensivmedizin ist ein großer Vorteil, um Anwendende auf Augenhöhe zu beraten.',
        duration: 'ca. 2–3 Jahre',
        educationIds: []
      },
      {
        phase: 'Pflichtqualifikation',
        title: 'Medizinprodukteberater/in',
        text: 'Für die fachliche Information und Einweisung von Fachkreisen ist die Sachkenntnis nach § 83 MPDG erforderlich.',
        duration: 'Lehrgang von wenigen Tagen',
        educationIds: ['wb-medizinprodukteberater']
      },
      {
        phase: 'Einarbeitung',
        title: 'Applikationsschulungen beim Hersteller',
        text: 'Tiefgehende Schulungen zu Systemen, Protokollen und Software. Bei Bildgebungssystemen ist zusätzlich Fachkunde im Strahlenschutz oft gefordert oder hilfreich.',
        duration: 'mehrere Wochen bis Monate',
        educationIds: ['wb-produktschulung-applikation', 'wb-fachkunde-strahlenschutz']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Senior-Applikation, Trainer/in oder Produktmanagement',
        text: 'Mit Erfahrung sind Rollen als Senior-Applikationsspezialist/in, interne/r Trainer/in, Teamleitung oder im Produktmanagement möglich.',
        duration: 'ab ca. 3–5 Jahren',
        educationIds: ['wb-meister-techniker-fuehrung']
      }
    ],

    qualitaetsmanager: [
      {
        phase: 'Fundament',
        title: 'Technisches oder naturwissenschaftliches Studium',
        text: 'Üblich sind Studiengänge der Medizintechnik, des Biomedical Engineering oder verwandter Fächer. Auch der Weg über Techniker/in mit Berufserfahrung ist möglich.',
        duration: '3–4 Jahre',
        educationIds: ['bsc-medizintechnik', 'bsc-biomedical-engineering', 'fs-techniker-medizintechnik']
      },
      {
        phase: 'Qualifizierung',
        title: 'Qualitätsmanagement nach ISO 13485',
        text: 'Aufbau und Pflege des QM-Systems, CAPA, Lieferantenbewertung und Prozessvalidierung. Lehrgänge zu QM-Beauftragten oder internen Auditoren sind verbreitet.',
        duration: 'mehrere Tage bis Wochen',
        educationIds: ['wb-qm-iso13485']
      },
      {
        phase: 'Berufseinstieg',
        title: 'Praxis in QM, Prüfung oder Produktion',
        text: 'Einstiegsrollen wie Qualitätsingenieur/in oder QM-Referent/in vermitteln Erfahrung mit Audits, Abweichungen und Dokumentenlenkung.',
        duration: 'ca. 2–3 Jahre',
        educationIds: []
      },
      {
        phase: 'Vertiefung',
        title: 'Risikomanagement und Regulatorik',
        text: 'Kenntnisse in ISO 14971, MDR/IVDR und Post-Market Surveillance erweitern den Verantwortungsbereich. Bei Softwareprodukten kommt IEC 62304 hinzu.',
        duration: 'begleitend',
        educationIds: ['wb-regulatory-affairs', 'wb-iec62304']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'QM-Leitung oder PRRC',
        text: 'Mit Erfahrung folgen Leitungsfunktionen im Qualitätsmanagement. Bei entsprechender Qualifikation kommt die Rolle der für die Einhaltung der Regulierungsvorschriften verantwortlichen Person (PRRC, Art. 15 MDR) in Betracht.',
        duration: 'ab ca. 4–5 Jahren',
        educationIds: ['wb-prrc', 'wb-meister-techniker-fuehrung']
      }
    ],

    'regulatory-affairs': [
      {
        phase: 'Fundament',
        title: 'Natur- oder ingenieurwissenschaftliches Studium',
        text: 'Medizintechnik, Biomedical Engineering, Medizinphysik oder verwandte Fächer bilden die fachliche Basis für die Bewertung technischer Dokumentation.',
        duration: '3–4 Jahre',
        educationIds: ['bsc-medizintechnik', 'bsc-biomedical-engineering']
      },
      {
        phase: 'Vertiefung',
        title: 'Master oder Spezialisierung',
        text: 'Ein Master ist nicht zwingend, wird aber in vielen Stellenanzeigen bevorzugt. Einige Hochschulen bieten regulatorische Schwerpunkte an.',
        duration: '3–4 Semester',
        educationIds: ['msc-medizintechnik', 'msc-biomedical-engineering']
      },
      {
        phase: 'Qualifizierung',
        title: 'Weiterbildung Regulatory Affairs',
        text: 'MDR/IVDR, Klassifizierung, Konformitätsbewertungsverfahren, technische Dokumentation, klinische Bewertung und Vigilanz bilden den Kern.',
        duration: 'mehrere Wochen bis Monate, oft berufsbegleitend',
        educationIds: ['wb-regulatory-affairs']
      },
      {
        phase: 'Berufseinstieg',
        title: 'Praxis in RA, QM oder Entwicklung',
        text: 'Einstiegsrollen wie RA-Specialist oder Junior Regulatory Affairs Manager/in. Kenntnisse in ISO 13485 und ISO 14971 sind unverzichtbar.',
        duration: 'ca. 2–3 Jahre',
        educationIds: ['wb-qm-iso13485']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Senior RA, internationale Zulassungen oder PRRC',
        text: 'Mit Erfahrung folgen internationale Zulassungen (z. B. USA), Teamleitung oder die Rolle als PRRC nach Art. 15 MDR.',
        duration: 'ab ca. 4–5 Jahren',
        educationIds: ['wb-prrc', 'wb-meister-techniker-fuehrung']
      }
    ],

    'software-entwickler': [
      {
        phase: 'Fundament',
        title: 'Studium der (Medizin-)Informatik oder Medizintechnik',
        text: 'Medizininformatik verbindet Informatik mit medizinischem Wissen. Auch Informatik oder Medizintechnik mit Softwareschwerpunkt sind gängige Wege.',
        duration: '6–7 Semester',
        educationIds: ['bsc-medizininformatik', 'bsc-medizintechnik']
      },
      {
        phase: 'Praxis',
        title: 'Programmierpraxis und Projekte',
        text: 'Praxisprojekte, Werkstudententätigkeit oder Abschlussarbeit bei Herstellern von Medizingeräten oder Medizinsoftware. Gefragt sind z. B. C/C++, C#, Java, Python, Embedded-Entwicklung und Schnittstellen wie DICOM und HL7/FHIR.',
        duration: 'während des Studiums',
        educationIds: []
      },
      {
        phase: 'Regulatorik',
        title: 'Softwarelebenszyklus nach IEC 62304',
        text: 'Medizinische Software wird nach IEC 62304 entwickelt: Sicherheitsklassen, Anforderungs- und Architekturdokumentation, Verifikation und Problemlösungsprozess.',
        duration: 'Kurs von 1–3 Tagen, dann Praxis',
        educationIds: ['wb-iec62304']
      },
      {
        phase: 'Vertiefung',
        title: 'Risikomanagement, Usability und IT-Sicherheit',
        text: 'ISO 14971, IEC 62366-1 (Gebrauchstauglichkeit) und Anforderungen an die Cybersicherheit vernetzter Medizinprodukte ergänzen das Profil. Ein Master vertieft z. B. Bildverarbeitung oder KI.',
        duration: 'begleitend bzw. 3–4 Semester',
        educationIds: ['wb-qm-iso13485', 'msc-medizintechnik', 'msc-biomedical-engineering']
      },
      {
        phase: 'Weiterentwicklung',
        title: 'Softwarearchitektur oder Teamleitung',
        text: 'Mit Erfahrung folgen Rollen als Softwarearchitekt/in, technische Projektleitung oder Teamleitung in der Entwicklung.',
        duration: 'ab ca. 4–5 Jahren',
        educationIds: ['wb-meister-techniker-fuehrung']
      }
    ]
  },

  /* ================================================================
   * Bewerbungstipps
   * ================================================================ */
  application: [
    {
      title: 'Lebenslauf',
      tips: [
        'Tabellarisch, antichronologisch (neueste Station zuerst) und in der Regel nicht länger als zwei Seiten.',
        'Gerätegruppen und Hersteller konkret nennen, z. B. „Wartung von Beatmungs- und Infusionstechnik“ statt nur „Wartung medizinischer Geräte“.',
        'Normen und Regelwerke, mit denen gearbeitet wurde, ausdrücklich aufführen: MDR, MPDG, MPBetreibV, ISO 13485, ISO 14971, IEC 60601, IEC 62353, IEC 62304.',
        'Erfolge messbar machen, wo möglich: z. B. Anzahl betreuter Geräte, Verkürzung von Ausfallzeiten, erfolgreich begleitete Audits oder Zulassungen.',
        'Qualifikationen wie Elektrofachkraft, Medizinprodukteberater/in oder Fachkunde im Strahlenschutz in einem eigenen Abschnitt sichtbar machen.',
        'Software- und IT-Kenntnisse gezielt nennen (z. B. Geräteverwaltungs-Software, ERP-Systeme, Programmiersprachen, DICOM/HL7).',
        'Führerschein angeben, wenn die Stelle Außendienst oder wechselnde Einsatzorte umfasst.'
      ]
    },
    {
      title: 'Anschreiben',
      tips: [
        'Auf eine Seite begrenzen und auf die konkrete Stelle zuschneiden – Formulierungen aus der Stellenanzeige aufgreifen.',
        'Den Bezug zur Medizintechnik begründen: Was motiviert an Technik im Dienst der Patientensicherheit?',
        'Zwei bis drei Belege aus der Praxis anführen, die zu den Kernanforderungen passen, statt Fähigkeiten nur aufzuzählen.',
        'Bei Herstellern das Produktportfolio, bei Kliniken das Leistungsspektrum (z. B. Maximalversorgung, Schwerpunkte) kennen und kurz darauf eingehen.',
        'Frühestmöglichen Eintrittstermin und – wenn ausdrücklich gefordert – die Gehaltsvorstellung als Jahresbrutto nennen.',
        'Viele Unternehmen verzichten inzwischen auf ein Anschreiben; ist es optional, kann ein kurzes Motivationsschreiben dennoch Pluspunkte bringen.'
      ]
    },
    {
      title: 'Zeugnisse & Zertifikate',
      tips: [
        'Abschlusszeugnisse von Schule, Ausbildung, Fachschule oder Hochschule beifügen; bei Hochschulabschlüssen auch das Transcript of Records.',
        'Arbeitszeugnisse aller relevanten Stationen beilegen – bei langjähriger Tätigkeit ohne Wechsel ggf. ein Zwischenzeugnis anfordern.',
        'Zertifikate mit Bezug zur Stelle ergänzen, z. B. Medizinprodukteberater/in (§ 83 MPDG), Elektrofachkraft, Prüfungen nach IEC 62353, Fachkunde im Strahlenschutz, interne/r Auditor/in ISO 13485.',
        'Herstellerschulungen mit Gerätetyp und Datum aufführen – sie sind im Service ein wichtiges Auswahlkriterium.',
        'Ausländische Abschlüsse frühzeitig anerkennen lassen; Informationen bietet das Portal „Anerkennung in Deutschland“ des Bundes.',
        'Alle Dokumente in einer gut lesbaren PDF-Datei in sinnvoller Reihenfolge zusammenfassen.'
      ]
    },
    {
      title: 'Online-Bewerbung & Bewerbermanagementsysteme (ATS)',
      tips: [
        'Viele Hersteller und Klinikkonzerne nutzen Bewerbermanagementsysteme, die Unterlagen automatisch auslesen. Einfache Layouts ohne Textfelder, Grafiken oder Tabellen im Lebenslauf sind sicherer.',
        'Schlüsselbegriffe der Stellenanzeige (z. B. „ISO 13485“, „Technische Dokumentation“, „Instandhaltung“) wörtlich übernehmen, sofern sie zutreffen.',
        'Dateien als PDF mit aussagekräftigen Namen hochladen, z. B. „Nachname_Lebenslauf.pdf“.',
        'Pflichtfelder im Formular sorgfältig ausfüllen – Angaben sollten mit dem Lebenslauf übereinstimmen.',
        'Eine seriöse E-Mail-Adresse verwenden und den Spam-Ordner während des Bewerbungsprozesses regelmäßig prüfen.',
        'Online-Profile (z. B. LinkedIn oder XING) aktuell halten – Recruiter/innen gleichen diese häufig ab.'
      ]
    },
    {
      title: 'Initiativbewerbung',
      tips: [
        'Besonders erfolgversprechend bei mittelständischen Herstellern, Servicedienstleistern und Kliniken mit eigener Medizintechnik-Abteilung.',
        'Vorab recherchieren: Welche Produkte, Standorte und Abteilungen gibt es? Ansprechperson möglichst telefonisch oder über die Karriereseite ermitteln.',
        'Klar benennen, in welchem Bereich (z. B. Service, Entwicklung, Qualitätsmanagement) und mit welcher Qualifikation ein Beitrag geleistet werden kann.',
        'Messen, Fachtagungen und Veranstaltungen von Fachverbänden bieten gute Gelegenheiten für den persönlichen Erstkontakt.',
        'Nach etwa zwei Wochen ohne Rückmeldung höflich nachfassen.'
      ]
    },
    {
      title: 'Bewerbung um Ausbildung, duales Studium oder Praktikum',
      tips: [
        'Viele Betriebe schreiben Ausbildungsplätze und duale Studienplätze rund ein Jahr vor Beginn aus; frühzeitig bewerben lohnt sich.',
        'Schulnoten in Mathematik, Physik, Informatik und Deutsch sind wichtig – praktische Erfahrungen (Schülerpraktikum, Technik-AG, Bastelprojekte) gleichen schwächere Noten teilweise aus.',
        'Im Anschreiben konkret machen, warum Medizintechnik: z. B. ein Praktikum im Krankenhaus oder Interesse an Elektronik und Gesundheit.',
        'Für MTR- und MTL-Ausbildungen auf Bewerbungsfristen der Schulen achten; teils ist ein Nachweis der gesundheitlichen Eignung erforderlich.',
        'Online-Tests und Assessment-Center sind bei größeren Unternehmen üblich – Übungsaufgaben zu Mathematik, Logik und Technikverständnis helfen.',
        'Die Berufsberatung der Bundesagentur für Arbeit unterstützt kostenfrei bei Berufswahl und Bewerbung.'
      ]
    },
    {
      title: 'Gehaltsverhandlung',
      tips: [
        'Marktwerte vorab recherchieren: Gehaltsübersichten, Tarifverträge (z. B. TVöD, TV-L, Metall- und Elektroindustrie) und Erfahrungen aus dem Netzwerk nutzen.',
        'Gehaltsvorstellung als Jahresbrutto mit einer realistischen Spanne angeben und begründen (Qualifikationen, Verantwortung, Erfahrung).',
        'Region und Arbeitgebertyp berücksichtigen: Hersteller zahlen häufig anders als Kliniken oder Dienstleister.',
        'Gesamtpaket betrachten: Dienstwagen (auch zur Privatnutzung), Rufbereitschaftsvergütung, betriebliche Altersvorsorge, Weiterbildungsbudget, Homeoffice-Anteile, Urlaubstage.',
        'Bei tarifgebundenen Arbeitgebern über die Eingruppierung und die Anerkennung von Berufserfahrung (Stufenzuordnung) verhandeln.',
        'Ruhig und sachlich bleiben; nach dem Nennen der eigenen Zahl kurz abwarten statt sofort nachzugeben.'
      ]
    }
  ],

  documentsChecklist: [
    'Anschreiben bzw. Motivationsschreiben (max. eine Seite, auf die Stelle zugeschnitten)',
    'Tabellarischer Lebenslauf (aktuell, lückenlos, mit Datum)',
    'Bewerbungsfoto (optional – in Deutschland nicht verpflichtend)',
    'Schulabschlusszeugnis',
    'Ausbildungs-, Fachschul- oder Hochschulzeugnis inkl. Notenübersicht',
    'Arbeitszeugnisse bzw. Praktikumsbescheinigungen',
    'Nachweise relevanter Qualifikationen (z. B. Elektrofachkraft, Medizinprodukteberater/in, Fachkunde im Strahlenschutz)',
    'Herstellerschulungen und Weiterbildungszertifikate',
    'Ggf. Anerkennungsbescheid für ausländische Abschlüsse',
    'Alles zu einer PDF-Datei zusammengefasst (Dateigröße in der Regel unter 5 MB)',
    'Unterlagen auf Rechtschreibung, Ansprechperson und Firmennamen geprüft'
  ],

  /* ================================================================
   * Vorstellungsgespräch
   * ================================================================ */
  interview: {
    method: {
      title: 'STAR-Methode',
      steps: [
        { key: 'S', label: 'Situation', text: 'Ausgangslage kurz und konkret schildern: Wo, wann, in welcher Rolle? Beispiel: „Ausfall eines Beatmungsgeräts auf der Intensivstation während der Nachtschicht.“' },
        { key: 'T', label: 'Task (Aufgabe)', text: 'Die eigene Aufgabe bzw. das Ziel benennen: Was sollte erreicht werden und worin lag die Herausforderung?' },
        { key: 'A', label: 'Action (Handlung)', text: 'Das eigene Vorgehen Schritt für Schritt beschreiben – in der Ich-Form, mit Begründung der Entscheidungen.' },
        { key: 'R', label: 'Result (Ergebnis)', text: 'Ergebnis möglichst messbar darstellen und eine Erkenntnis für die Zukunft ergänzen.' }
      ]
    },

    general: [
      { q: 'Erzählen Sie etwas über sich.', hint: 'Zwei Minuten, roter Faden: Ausbildung/Studium, wichtigste Stationen, aktuelle Kompetenzen und warum genau diese Stelle der nächste logische Schritt ist. Kein vollständiges Nacherzählen des Lebenslaufs.' },
      { q: 'Warum möchten Sie in der Medizintechnik arbeiten?', hint: 'Persönliche Motivation konkret machen – z. B. Verbindung von Technik und Patientenwohl, ein Schlüsselerlebnis im Praktikum oder Interesse an regulierten, sicherheitskritischen Produkten.' },
      { q: 'Warum haben Sie sich bei uns beworben?', hint: 'Recherche zeigen: Produkte, Standorte, Versorgungsauftrag oder aktuelle Projekte des Arbeitgebers nennen und mit eigenen Interessen verknüpfen.' },
      { q: 'Was sind Ihre Stärken?', hint: 'Zwei bis drei stellenrelevante Stärken nennen und jeweils mit einem kurzen Beispiel belegen, etwa Sorgfalt bei Prüfprotokollen oder Ruhe bei Störungen im laufenden Klinikbetrieb.' },
      { q: 'Wo sehen Sie Entwicklungsbedarf?', hint: 'Eine echte, aber nicht stellenkritische Schwäche nennen und zeigen, was bereits zur Verbesserung unternommen wird.' },
      { q: 'Beschreiben Sie eine Situation, in der Sie unter Zeitdruck einen Fehler beheben mussten.', hint: 'Mit der STAR-Methode antworten. Systematisches Vorgehen, Priorisierung, Kommunikation mit Anwendenden und Dokumentation hervorheben.' },
      { q: 'Wie gehen Sie mit Konflikten mit Kolleginnen und Kollegen oder Kundschaft um?', hint: 'Ein konkretes Beispiel wählen: zuhören, Sachebene herstellen, Lösung vereinbaren. In der Klinik etwa der Konflikt zwischen schneller Geräteverfügbarkeit und notwendiger Prüfung.' },
      { q: 'Wie halten Sie Ihr Fachwissen aktuell?', hint: 'Konkret werden: Fachzeitschriften, Verbandsveranstaltungen, Normenänderungen, Herstellerschulungen, Onlinekurse oder Messebesuche.' },
      { q: 'Wo sehen Sie sich in fünf Jahren?', hint: 'Entwicklung innerhalb des Unternehmens skizzieren (Spezialisierung, Verantwortung, Weiterbildung) – realistisch und zur Stelle passend.' },
      { q: 'Welche Gehaltsvorstellung haben Sie?', hint: 'Jahresbrutto als begründete Spanne nennen. Vorab Tarifverträge und Marktwerte recherchieren und bei Bedarf nach weiteren Leistungen fragen.' }
    ],

    technical: [
      {
        area: 'Medizinprodukterecht / MDR',
        questions: [
          { q: 'Welche Risikoklassen kennt die MDR und wovon hängt die Einstufung ab?', hint: 'Klassen I, IIa, IIb und III. Einstufung nach den Klassifizierungsregeln in Anhang VIII MDR, u. a. abhängig von Zweckbestimmung, Invasivität, Anwendungsdauer, Aktivität und Körperregion.' },
          { q: 'Was ist eine PRRC und welche Aufgaben hat sie?', hint: 'Person Responsible for Regulatory Compliance nach Art. 15 MDR: u. a. Prüfung der Konformität vor Freigabe, technische Dokumentation und Konformitätserklärung, Überwachung nach dem Inverkehrbringen sowie Erfüllung der Meldepflichten.' },
          { q: 'Welche Rolle spielt das MPDG neben der MDR?', hint: 'Die MDR gilt als EU-Verordnung unmittelbar. Das Medizinprodukterecht-Durchführungsgesetz (MPDG) regelt ergänzend nationale Punkte, z. B. Zuständigkeiten von Behörden, Medizinprodukteberater/innen (§ 83) sowie Straf- und Bußgeldvorschriften.' },
          { q: 'Was gehört zur technischen Dokumentation eines Medizinprodukts?', hint: 'Nach Anhang II und III MDR u. a. Produktbeschreibung und Zweckbestimmung, Kennzeichnung und Gebrauchsanweisung, Auslegungs- und Herstellungsinformationen, grundlegende Sicherheits- und Leistungsanforderungen, Nutzen-Risiko-Analyse und Risikomanagement, Verifizierung und Validierung inkl. klinischer Bewertung sowie Post-Market Surveillance.' },
          { q: 'Was ist bei einem schwerwiegenden Vorkommnis zu tun?', hint: 'Hersteller melden schwerwiegende Vorkommnisse nach Art. 87 MDR an die zuständige Behörde, in Deutschland meist das BfArM. Betreiber und Anwender haben eigene Meldepflichten nach der Medizinprodukte-Anwendermelde- und Informationsverordnung (MPAMIV). Gerät sichern, nicht verändern, dokumentieren.' },
          { q: 'Welche Pflichten haben Betreiber von Medizinprodukten?', hint: 'Nach MPBetreibV u. a. Einweisung der Anwendenden, Bestandsverzeichnis und Medizinproduktebuch, Instandhaltung durch qualifiziertes Personal, sicherheits- und messtechnische Kontrollen sowie in Gesundheitseinrichtungen mit regelmäßig mehr als 20 Beschäftigten die Bestimmung einer/eines Beauftragten für Medizinproduktesicherheit.' }
        ]
      },
      {
        area: 'Gerätetechnik & Sicherheit',
        questions: [
          { q: 'Welche Messungen gehören zu einer Wiederholungsprüfung nach IEC 62353?', hint: 'Sichtprüfung, Messung des Schutzleiterwiderstands (bei Schutzklasse I), Messung von Ableitströmen (Geräte- und Patientenableitstrom, je nach Verfahren direkt, differenziell oder als Ersatzableitstrom), ggf. Isolationswiderstand sowie Funktionsprüfung und Dokumentation.' },
          { q: 'Was bedeuten die Anwendungsteil-Typen B, BF und CF?', hint: 'Klassifizierung nach IEC 60601-1 für den Schutz gegen elektrischen Schlag. B: Body, nicht isoliert; BF: Body Floating, isoliertes Anwendungsteil; CF: Cardiac Floating, für die direkte Anwendung am Herzen mit den strengsten Grenzwerten für Patientenableitströme.' },
          { q: 'Wie gehen Sie bei der Fehlersuche an einem Gerät vor, das sporadisch ausfällt?', hint: 'Systematisch: Fehlerbeschreibung und Fehlerspeicher auswerten, Rahmenbedingungen erfragen, Fehler reproduzieren, Service-Dokumentation nutzen, Komponenten gezielt prüfen, Ergebnis und Maßnahmen dokumentieren, abschließend Prüfung nach Instandsetzung.' },
          { q: 'Was ist ein medizinisches elektrisches System und was ist dabei zu beachten?', hint: 'Kombination mehrerer Geräte, von denen mindestens eines ein ME-Gerät ist (IEC 60601-1). Zu beachten sind u. a. Ableitströme in der Patientenumgebung, Mehrfachsteckdosen und die Gesamtsicherheit des Systems; die Prüfung erfolgt als System.' },
          { q: 'Was sind sicherheits- und messtechnische Kontrollen (STK/MTK)?', hint: 'Nach der MPBetreibV (Neufassung 2025) vorgeschriebene Kontrollen für bestimmte Medizinprodukte: STK für die in Anlage 1 genannten aktiven Medizinprodukte, MTK für Produkte mit Messfunktion nach Anlage 2 (z. B. bestimmte Blutdruck- und Temperaturmessgeräte). Fristen und Umfang sind festgelegt; die Ergebnisse sind zu protokollieren.' },
          { q: 'Worauf achten Sie bei vernetzten Medizingeräten im Kliniknetz?', hint: 'Risikomanagement für IT-Netzwerke mit Medizinprodukten (IEC 80001-1), Netzsegmentierung, Patch- und Update-Management in Abstimmung mit dem Hersteller, Zugriffsrechte sowie die Vorgaben zur Cybersicherheit in der MDR.' }
        ]
      },
      {
        area: 'Qualitätsmanagement',
        questions: [
          { q: 'Worin unterscheidet sich ISO 13485 von ISO 9001?', hint: 'ISO 13485 ist auf Medizinprodukte und regulatorische Anforderungen ausgerichtet: stärkerer Fokus auf Dokumentation, Risikomanagement, Validierung, Rückverfolgbarkeit und Wirksamkeit statt kontinuierlicher Verbesserung und Kundenzufriedenheit als Leitmotiv.' },
          { q: 'Wie läuft ein CAPA-Prozess ab?', hint: 'Problem erfassen und bewerten, Sofortmaßnahmen, Ursachenanalyse (z. B. 5-Why, Ishikawa), Korrektur- und Vorbeugemaßnahmen festlegen, umsetzen, Wirksamkeit prüfen und dokumentieren.' },
          { q: 'Wie ist das Risikomanagement nach ISO 14971 aufgebaut?', hint: 'Risikomanagementplan, Risikoanalyse (Gefährdungen, Gefährdungssituationen), Risikobewertung, Risikobeherrschung, Bewertung des Gesamt-Restrisikos, Risikomanagementbericht sowie Aktivitäten in der Herstellung und nach der Herstellung über den gesamten Lebenszyklus.' },
          { q: 'Wie bereiten Sie ein Audit durch eine Benannte Stelle vor?', hint: 'Interne Audits und Managementbewertung abgeschlossen, Dokumentation aktuell und gelenkt, offene CAPAs im Blick, Ansprechpersonen benannt und vorbereitet, Ablauf und Räume organisiert.' },
          { q: 'Was versteht man unter Prozessvalidierung?', hint: 'Nachweis, dass ein Prozess, dessen Ergebnis nicht vollständig nachträglich geprüft werden kann (z. B. Sterilisation, Schweißen, Kleben), dauerhaft die festgelegten Anforderungen erfüllt – typischerweise mit IQ, OQ und PQ.' }
        ]
      },
      {
        area: 'Strahlenschutz & Medizinphysik',
        questions: [
          { q: 'Welche Grundsätze des Strahlenschutzes kennen Sie?', hint: 'Rechtfertigung, Optimierung (Dosis so gering wie vernünftigerweise erreichbar) und Dosisbegrenzung, verankert im Strahlenschutzgesetz (StrlSchG). Praktisch: Abstand, Abschirmung, Aufenthaltszeit.' },
          { q: 'Welche Aufgaben hat ein/e Medizinphysik-Experte/in?', hint: 'U. a. Dosimetrie und Bestrahlungsplanung, Optimierung von Untersuchungsprotokollen, Qualitätssicherung der Geräte (Abnahme- und Konstanzprüfungen), Mitwirkung im Strahlenschutz sowie bei der Bewertung von Vorkommnissen. Die Hinzuziehung ist nach Strahlenschutzrecht je nach Anwendung vorgeschrieben.' },
          { q: 'Was sind diagnostische Referenzwerte?', hint: 'Vom Bundesamt für Strahlenschutz (BfS) veröffentlichte Werte für typische Untersuchungen in Röntgendiagnostik und Nuklearmedizin. Sie sind keine Grenzwerte, sondern dienen der Optimierung; dauerhafte Überschreitungen sind zu prüfen und zu begründen.' },
          { q: 'Wie unterscheiden sich Abnahme- und Konstanzprüfung?', hint: 'Die Abnahmeprüfung erfolgt vor Inbetriebnahme bzw. nach wesentlichen Änderungen und legt Bezugswerte fest. Konstanzprüfungen werden regelmäßig durchgeführt und prüfen, ob die Bezugswerte eingehalten werden.' },
          { q: 'Wie würden Sie bei einer Abweichung in der täglichen Qualitätskontrolle eines Linearbeschleunigers vorgehen?', hint: 'Messung wiederholen und Messaufbau prüfen, Toleranzen bewerten, ggf. Patientenbehandlung bis zur Klärung aussetzen, Ursache mit Technik bzw. Hersteller klären, Ergebnis dokumentieren und Verantwortliche informieren.' }
        ]
      },
      {
        area: 'Software / IEC 62304',
        questions: [
          { q: 'Welche Sicherheitsklassen kennt die IEC 62304 und was folgt daraus?', hint: 'Klassen A (keine Verletzung möglich), B (keine schwere Verletzung möglich) und C (Tod oder schwere Verletzung möglich). Je höher die Klasse, desto umfangreicher die geforderten Aktivitäten, z. B. detailliertes Design und Unit-Verifikation.' },
          { q: 'Wann ist Software ein Medizinprodukt?', hint: 'Wenn sie vom Hersteller für einen medizinischen Zweck im Sinne von Art. 2 MDR bestimmt ist, z. B. Diagnose, Überwachung oder Therapie. Die Klassifizierung eigenständiger Software erfolgt vor allem nach Regel 11 in Anhang VIII MDR.' },
          { q: 'Was ist SOUP und wie wird damit umgegangen?', hint: 'Software of Unknown Provenance, z. B. Open-Source-Bibliotheken oder Betriebssysteme. Sie muss identifiziert, mit Version dokumentiert, hinsichtlich Anforderungen und bekannter Anomalien bewertet und im Risikomanagement berücksichtigt werden.' },
          { q: 'Wie hängen IEC 62304, ISO 14971 und IEC 62366-1 zusammen?', hint: 'IEC 62304 regelt den Softwarelebenszyklus, ISO 14971 das Risikomanagement, auf das die IEC 62304 verweist, und IEC 62366-1 die Gebrauchstauglichkeit. Gemeinsam sichern sie, dass Software sicher und anwendungsgerecht ist.' },
          { q: 'Wie stellen Sie die Rückverfolgbarkeit von Anforderungen sicher?', hint: 'Traceability von Anforderungen über Architektur und Implementierung bis zu Tests und Risikomaßnahmen, z. B. mit einem Requirements-Management-Werkzeug; Änderungen werden über ein Konfigurations- und Änderungsmanagement gesteuert.' },
          { q: 'Welche Rolle spielt Cybersicherheit bei Medizinsoftware?', hint: 'Die MDR fordert in Anhang I Maßnahmen zur IT-Sicherheit. Relevant sind u. a. Bedrohungsanalyse, sichere Entwicklung, Update- und Patch-Konzepte sowie Hinweise für Betreiber; Leitlinien bietet z. B. MDCG 2019-16.' }
        ]
      },
      {
        area: 'Vertrieb & Anwendung',
        questions: [
          { q: 'Wie bereiten Sie eine Produktdemonstration in einer Klinik vor?', hint: 'Bedarf und Arbeitsabläufe der Station kennen, Ansprechpersonen und Entscheidungsweg klären, Demonstration an die Zielgruppe anpassen, Hygieneanforderungen beachten, Nutzen für Patientinnen, Patienten und Personal klar herausarbeiten.' },
          { q: 'Welche Pflichten haben Sie als Medizinprodukteberater/in?', hint: 'Nach § 83 MPDG fachliche Information und Einweisung der Fachkreise in die sachgerechte Handhabung, Weitergabe von Mitteilungen über Risiken und Vorkommnisse an den Hersteller, Nachweis der Sachkenntnis sowie regelmäßige Schulung.' },
          { q: 'Wie gehen Sie mit dem Einwand „Ihr Produkt ist zu teuer“ um?', hint: 'Einwand ernst nehmen, nachfragen, Gesamtkosten über den Lebenszyklus (Wartung, Verbrauchsmaterial, Ausfallzeiten) und klinischen Nutzen gegenüberstellen; Argumente mit Daten untermauern.' },
          { q: 'Wie erklären Sie eine komplexe Gerätefunktion einer Pflegekraft ohne technischen Hintergrund?', hint: 'An Arbeitsabläufen orientieren, Fachbegriffe übersetzen, zeigen und selbst ausprobieren lassen, Verständnis überprüfen, Einweisung dokumentieren.' },
          { q: 'Was wissen Sie über Beschaffungsprozesse in Krankenhäusern?', hint: 'Bedarfsanmeldung durch Fachabteilung, Abstimmung mit Medizintechnik und Einkauf, bei öffentlichen Häusern Vergaberecht und Ausschreibungen, häufig Einkaufsgemeinschaften. Entscheidungen fallen meist im Team aus Medizin, Technik und Verwaltung.' }
        ]
      }
    ],

    ownQuestions: [
      'Wie sieht die Einarbeitung in den ersten Wochen und Monaten aus?',
      'Mit welchen Gerätegruppen oder Produkten arbeite ich hauptsächlich?',
      'Wie ist das Team aufgebaut und mit welchen Abteilungen arbeite ich eng zusammen?',
      'Welche Herstellerschulungen und Weiterbildungen werden angeboten oder gefördert?',
      'Wie sind Rufbereitschaft, Schichtarbeit oder Reisetätigkeit geregelt?',
      'Welche Projekte stehen in den nächsten ein bis zwei Jahren an, z. B. Neubauten, Digitalisierung oder Zulassungen?',
      'Wie wird Erfolg in dieser Position gemessen?',
      'Welche Entwicklungsmöglichkeiten gibt es nach einigen Jahren?',
      'Gibt es einen Tarifvertrag oder eine Betriebsvereinbarung zur Vergütung?',
      'Wie geht es im Bewerbungsprozess weiter und bis wann ist mit einer Rückmeldung zu rechnen?'
    ],

    dos: [
      'Unternehmen, Produkte bzw. Klinikprofil gründlich recherchieren',
      'Antworten auf Situationsfragen mit der STAR-Methode strukturieren',
      'Fachbegriffe und Normen korrekt verwenden und bei Bedarf kurz erklären',
      'Sicherheitsbewusstsein zeigen: Patientensicherheit hat immer Vorrang',
      'Konkrete Beispiele aus Praxis, Praktikum oder Studium vorbereiten',
      'Eigene Fragen stellen und Interesse an der Arbeit zeigen',
      'Pünktlich erscheinen; bei Videogesprächen Technik, Licht und Ton vorher testen',
      'Kleidung dem Umfeld anpassen – gepflegt, im Zweifel etwas formeller'
    ],

    donts: [
      'Frühere Arbeitgeber, Kolleginnen oder Kollegen schlechtmachen',
      'Kenntnisse übertreiben – Fachfragen decken Lücken schnell auf',
      'Pflichten aus MDR, MPBetreibV oder Strahlenschutzrecht als „Bürokratie“ abtun',
      'Vertrauliche Informationen früherer Arbeitgeber preisgeben',
      'Nur nach Gehalt, Urlaub und Homeoffice fragen',
      'Unvorbereitet zum Gespräch kommen, ohne Stellenanzeige und Lebenslauf zu kennen',
      'Antworten auswendig lernen und abspulen statt frei zu sprechen'
    ]
  },

  /* ================================================================
   * Jobportale (nur reale Angebote)
   * ================================================================ */
  jobPortals: [
    {
      name: 'Jobsuche der Bundesagentur für Arbeit',
      url: 'https://www.arbeitsagentur.de/jobsuche/',
      description: 'Größte öffentliche Stellenbörse in Deutschland mit Arbeits-, Ausbildungs- und Praktikumsstellen sowie dualen Studienplätzen; kostenfrei.',
      focus: 'Beides'
    },
    {
      name: 'StepStone',
      url: 'https://www.stepstone.de/',
      description: 'Großes kommerzielles Jobportal mit vielen Stellen für Fach- und Führungskräfte, u. a. bei Medizintechnikherstellern.',
      focus: 'Stellen'
    },
    {
      name: 'Indeed',
      url: 'https://de.indeed.com/',
      description: 'Stellensuchmaschine, die Angebote aus Karriereseiten und Jobbörsen bündelt; umfangreiche Filter nach Ort und Berufsfeld.',
      focus: 'Beides'
    },
    {
      name: 'LinkedIn Jobs',
      url: 'https://www.linkedin.com/jobs/',
      description: 'Berufliches Netzwerk mit Stellenbörse; besonders für internationale Hersteller, Ingenieur- und Regulatory-Affairs-Positionen relevant.',
      focus: 'Stellen'
    },
    {
      name: 'XING Stellenmarkt',
      url: 'https://www.xing.com/jobs',
      description: 'Stellenmarkt des im deutschsprachigen Raum verbreiteten Karrierenetzwerks.',
      focus: 'Stellen'
    },
    {
      name: 'jobvector',
      url: 'https://www.jobvector.de/',
      description: 'Jobbörse für Naturwissenschaften, Medizin, IT und Ingenieurwesen mit eigener Suche nach Medizintechnik-Stellen.',
      focus: 'Stellen'
    },
    {
      name: 'stellenmarkt.de',
      url: 'https://www.stellenmarkt.de/',
      description: 'Allgemeine Jobbörse mit Suchseiten für Medizintechnik und Medizinprodukte.',
      focus: 'Stellen'
    },
    {
      name: 'AUBI-plus',
      url: 'https://www.aubi-plus.de/',
      description: 'Portal für Ausbildungsplätze, duale Studiengänge und Schülerpraktika, z. B. Elektroniker/in für Geräte und Systeme oder duales Studium Medizintechnik.',
      focus: 'Ausbildung'
    },
    {
      name: 'Ausbildung.de',
      url: 'https://www.ausbildung.de/',
      description: 'Ausbildungsportal mit Berufsinformationen und Stellen für Ausbildung und duales Studium.',
      focus: 'Ausbildung'
    },
    {
      name: 'DGMP – Stellenangebote Medizinphysik',
      url: 'https://www.dgmp.de/',
      description: 'Die Deutsche Gesellschaft für Medizinische Physik informiert auf ihrer Website über Stellenangebote in der Medizinphysik, z. B. Promotionsstellen.',
      focus: 'Stellen'
    }
  ],

  /* ================================================================
   * Verbände & Netzwerke (nur reale Organisationen)
   * ================================================================ */
  associations: [
    {
      name: 'Bundesverband Medizintechnologie e. V.',
      abbr: 'BVMed',
      url: 'https://www.bvmed.de/',
      description: 'Interessenvertretung von Herstellern und Händlern von Medizinprodukten in Deutschland mit Sitz in Berlin; bietet Informationen, Seminare und Veranstaltungen zum Medizinprodukterecht.'
    },
    {
      name: 'SPECTARIS – Deutscher Industrieverband für Optik, Photonik, Analysen- und Medizintechnik e. V.',
      abbr: 'SPECTARIS',
      url: 'https://www.spectaris.de/',
      description: 'Industrieverband mit eigenem Fachverband Medizintechnik; vertritt überwiegend mittelständische Hersteller und veröffentlicht Branchenzahlen.'
    },
    {
      name: 'ZVEI – Verband der Elektro- und Digitalindustrie e. V.',
      abbr: 'ZVEI',
      url: 'https://www.zvei.org/',
      description: 'Verband der Elektro- und Digitalindustrie, in dem auch Hersteller elektromedizinischer Technik (z. B. Bildgebung) organisiert sind.'
    },
    {
      name: 'Deutsche Gesellschaft für Biomedizinische Technik im VDE',
      abbr: 'VDE DGBMT',
      url: 'https://www.vde.com/de/dgbmt',
      description: 'Wissenschaftlich-technische Fachgesellschaft für Medizintechnik im VDE, 1961 in Frankfurt am Main gegründet; organisiert Fachtagungen, fördert den Nachwuchs und erarbeitet Empfehlungen für Studium und Ausbildung.'
    },
    {
      name: 'Fachverband Biomedizinische Technik e. V.',
      abbr: 'fbmt',
      url: 'https://www.fbmt.de/',
      description: 'Berufsverband für Medizintechnikerinnen, Medizintechniker, Ingenieurinnen und Ingenieure insbesondere aus der Krankenhaustechnik; 1984 gegründet, mit Fortbildungen und Fachtagungen.'
    },
    {
      name: 'Deutsche Gesellschaft für Medizinische Physik e. V.',
      abbr: 'DGMP',
      url: 'https://www.dgmp.de/',
      description: 'Wissenschaftliche Fachgesellschaft der Medizinphysik in Deutschland; vergibt die Fachanerkennung Medizinische Physik und informiert über Weiterbildung und Stellen.'
    },
    {
      name: 'MedTech Europe',
      abbr: 'MedTech Europe',
      url: 'https://www.medtecheurope.org/',
      description: 'Europäischer Dachverband der Medizintechnik- und In-vitro-Diagnostik-Industrie mit Sitz in Brüssel; Informationen zu MDR, IVDR und europäischer Gesundheitspolitik.'
    },
    {
      name: 'VDI Verein Deutscher Ingenieure e. V.',
      abbr: 'VDI',
      url: 'https://www.vdi.de/',
      description: 'Großer Ingenieurverein; der Fachbereich Medizintechnik gehört zur VDI-Gesellschaft Technologies of Life Sciences. Der VDI bietet zudem Richtlinienarbeit (u. a. VDI-Handbuch Medizintechnik), Netzwerke für Studierende und junge Ingenieurinnen und Ingenieure sowie Karriereinformationen.'
    }
  ]
};
