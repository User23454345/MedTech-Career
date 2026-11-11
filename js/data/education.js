/* MedTech Career Hub – Aus- und Weiterbildung (Stand: November 2026)
 * Klassisches Skript, hängt sich an window.MTH (keine ES-Module).
 * Hinweis: Anbieter sind reale Beispiele, keine vollständige Liste. Dauer, Kosten und
 * Zugangsvoraussetzungen können sich je nach Bundesland, Hochschule und Jahrgang ändern.
 */
window.MTH = window.MTH || {};

MTH.education = {
  programs: [
    /* ---------------------------------------------------------------- Ausbildung */
    {
      id: 'ausb-elektroniker-geraete',
      type: 'Ausbildung',
      level: 'Duale Berufsausbildung (IHK), DQR 4',
      title: 'Elektroniker/in für Geräte und Systeme',
      duration: '3,5 Jahre (Verkürzung bei guten Leistungen bzw. Abitur möglich)',
      degree: 'Facharbeiter/in – Abschlussprüfung vor der IHK',
      description: 'Klassischer Einstiegsberuf in die Medizintechnik: Elektroniker/innen für Geräte und Systeme fertigen, prüfen und reparieren elektronische Baugruppen und Geräte. Viele Medizintechnik-Hersteller bilden in diesem Beruf aus, häufig mit Einsatz in Fertigung, Prüffeld oder Service. Die Ausbildung ist eine solide Basis für die spätere Weiterbildung zur/zum staatlich geprüften Techniker/in Medizintechnik.',
      requirements: [
        'Rechtlich kein bestimmter Schulabschluss vorgeschrieben; in der Praxis meist mittlerer Schulabschluss oder (Fach-)Abitur',
        'Gute Leistungen in Mathematik und Physik',
        'Technisches Verständnis, Fingerfertigkeit und Sorgfalt',
        'Farbsehen (Kennzeichnung von Leitungen und Bauteilen)'
      ],
      contents: [
        'Analyse und Prüfung elektronischer Schaltungen und Systeme',
        'Fertigung und Montage von Baugruppen, Löt- und Verbindungstechnik',
        'Inbetriebnahme, Fehlersuche und Instandsetzung von Geräten',
        'Elektrische Sicherheit, Schutzmaßnahmen, Prüfung nach VDE-Bestimmungen',
        'Programmierung und Konfiguration von Geräten und Steuerungen',
        'Qualitätssicherung und Dokumentation'
      ],
      providers: [
        'Ausbildungsbetriebe der Medizintechnik-Industrie (z. B. Siemens Healthineers, Drägerwerk, B. Braun)',
        'Berufsschulen (Fachbereich Elektrotechnik) im dualen System',
        'Zuständige Industrie- und Handelskammern (IHK) für Prüfung und Eintragung'
      ],
      costs: 'Ausbildungsvergütung je nach Tarif und Ausbildungsjahr, Richtwert ca. 1.000–1.450 € brutto/Monat (z. B. Tarif der Metall- und Elektroindustrie)',
      professionIds: ['servicetechniker', 'medizintechniker', 'geraetemanagement']
    },
    {
      id: 'ausb-mechatroniker',
      type: 'Ausbildung',
      level: 'Duale Berufsausbildung (IHK), DQR 4',
      title: 'Mechatroniker/in',
      duration: '3,5 Jahre (Verkürzung möglich)',
      degree: 'Facharbeiter/in – Abschlussprüfung vor der IHK',
      description: 'Mechatroniker/innen verbinden Mechanik, Elektronik und Informationstechnik. In der Medizintechnik montieren, prüfen und warten sie komplexe Systeme wie OP-Tische, Patientenliegen, Laborautomaten oder Großgeräte der Bildgebung. Der Beruf eignet sich besonders für den Außendienst-Service und als Zugangsberuf zur Techniker-Weiterbildung.',
      requirements: [
        'In der Praxis meist mittlerer Schulabschluss oder (Fach-)Abitur',
        'Gute Kenntnisse in Mathematik, Physik und Technik',
        'Handwerkliches Geschick und räumliches Vorstellungsvermögen',
        'Farbsehen'
      ],
      contents: [
        'Mechanische Bearbeitung, Montage und Demontage von Baugruppen',
        'Elektrische und elektronische Baugruppen, Sensorik und Aktorik',
        'Pneumatik, Hydraulik und Antriebstechnik',
        'Steuerungstechnik und Programmierung (z. B. SPS)',
        'Inbetriebnahme, Instandhaltung und Fehlerdiagnose',
        'Arbeitssicherheit und elektrische Sicherheit'
      ],
      providers: [
        'Medizintechnik-Hersteller und technische Dienstleister mit Ausbildungsbetrieb',
        'Berufsschulen im dualen System',
        'Zuständige Industrie- und Handelskammern (IHK)'
      ],
      costs: 'Ausbildungsvergütung je nach Tarif und Ausbildungsjahr, Richtwert ca. 1.000–1.450 € brutto/Monat',
      professionIds: ['servicetechniker', 'medizintechniker', 'anwendungstechniker']
    },
    {
      id: 'ausb-mtr',
      type: 'Ausbildung',
      level: 'Schulische Ausbildung mit Praxiseinsätzen (Gesundheitsfachberuf, staatliche Prüfung)',
      title: 'Medizinische/r Technologe/in für Radiologie (MTR)',
      duration: '3 Jahre (Vollzeit)',
      degree: 'Staatliche Prüfung; Erlaubnis zum Führen der Berufsbezeichnung nach MT-Berufe-Gesetz (MTBG)',
      description: 'Seit dem 1. Januar 2023 regelt das MT-Berufe-Gesetz (MTBG) die frühere MTRA-Ausbildung neu. MTR arbeiten in Radiologie, Nuklearmedizin und Strahlentherapie und führen dabei vorbehaltene Tätigkeiten aus, etwa die technische Durchführung radiologischer Untersuchungen. Die Ausbildung ist schulgeldfrei, es gibt einen Ausbildungsvertrag mit angemessener Ausbildungsvergütung. Der Beruf ist ein möglicher Einstieg in Applikationsspezialist/innen-Tätigkeiten bei Herstellern bildgebender Systeme.',
      requirements: [
        'Mittlerer Schulabschluss oder gleichwertige abgeschlossene Schulbildung (bzw. Hauptschulabschluss mit abgeschlossener Berufsausbildung)',
        'Gesundheitliche Eignung für die Ausübung des Berufs',
        'Interesse an Physik, Technik und Medizin, Freude am Umgang mit Patient/innen'
      ],
      contents: [
        'Radiologische Diagnostik (Röntgen, CT, MRT) und Bildverarbeitung',
        'Nuklearmedizin und Strahlentherapie',
        'Strahlenphysik, Dosimetrie und Strahlenschutz (StrlSchG/StrlSchV)',
        'Anatomie, Physiologie und Krankheitslehre',
        'Qualitätssicherung an radiologischen Geräten',
        'Praktische Einsätze in Kliniken und Praxen'
      ],
      providers: [
        'Staatlich anerkannte MT-Schulen an Universitätskliniken (z. B. Universitätsklinikum Würzburg, UKSH Akademie Kiel/Lübeck)',
        'Weitere Berufsfachschulen für MT-Berufe an Kliniken'
      ],
      costs: 'Kein Schulgeld; tarifliche Ausbildungsvergütung (z. B. TVAöD), Richtwert ca. 1.300–1.500 € brutto/Monat',
      professionIds: ['anwendungstechniker', 'produktspezialist', 'medizinphysiker'],
      link: 'https://www.bundesgesundheitsministerium.de/themen/gesundheitswesen/gesundheitsberufe/berufe-in-der-medizinischen-technologie.html'
    },
    {
      id: 'ausb-mtl',
      type: 'Ausbildung',
      level: 'Schulische Ausbildung mit Praxiseinsätzen (Gesundheitsfachberuf, staatliche Prüfung)',
      title: 'Medizinische/r Technologe/in für Laboratoriumsanalytik (MTL)',
      duration: '3 Jahre (Vollzeit)',
      degree: 'Staatliche Prüfung; Erlaubnis zum Führen der Berufsbezeichnung nach MT-Berufe-Gesetz (MTBG)',
      description: 'Nachfolgeberuf der MTLA nach dem MT-Berufe-Gesetz. MTL führen labordiagnostische Analysen in klinischer Chemie, Hämatologie, Immunologie, Mikrobiologie und Histologie durch und bedienen hochautomatisierte Analysesysteme. Für die Medizintechnik ist der Beruf vor allem als Zugang zu Applikations- und Produktspezialist/innen-Rollen bei Herstellern von In-vitro-Diagnostika (IVDR) interessant.',
      requirements: [
        'Mittlerer Schulabschluss oder gleichwertige abgeschlossene Schulbildung (bzw. Hauptschulabschluss mit abgeschlossener Berufsausbildung)',
        'Gesundheitliche Eignung',
        'Interesse an Biologie, Chemie und sorgfältigem, genauem Arbeiten'
      ],
      contents: [
        'Klinische Chemie, Hämatologie und Hämostaseologie',
        'Immunologie, Transfusionsmedizin und Mikrobiologie',
        'Histologie und Zytologie',
        'Qualitätssicherung im medizinischen Labor (z. B. Rili-BÄK)',
        'Bedienung, Validierung und Wartung von Laboranalysegeräten',
        'Praktische Einsätze in Laboren'
      ],
      providers: [
        'Staatlich anerkannte MT-Schulen an Universitätskliniken und Krankenhäusern',
        'Berufsfachschulen für MT-Berufe in den Ländern'
      ],
      costs: 'Kein Schulgeld; Ausbildungsvergütung nach Tarif bzw. Ausbildungsvertrag',
      professionIds: ['anwendungstechniker', 'produktspezialist', 'qualitaetsmanager'],
      link: 'https://www.bundesgesundheitsministerium.de/themen/gesundheitswesen/gesundheitsberufe/berufe-in-der-medizinischen-technologie.html'
    },

    /* ---------------------------------------------------------------- Fachschule */
    {
      id: 'fs-techniker-medizintechnik',
      type: 'Fachschule',
      level: 'Staatlich geprüfte/r Techniker/in, DQR 6 (Bachelor Professional in Technik)',
      title: 'Staatlich geprüfte/r Techniker/in Medizintechnik',
      duration: '2 Jahre Vollzeit bzw. ca. 3–4 Jahre berufsbegleitend in Teilzeit',
      degree: 'Staatlich geprüfte/r Techniker/in, Fachrichtung Medizintechnik (in Bayern: Staatlich geprüfte/r Medizintechniker/in)',
      description: 'Die Fachschulweiterbildung qualifiziert Fachkräfte aus Elektro-, Metall- oder Gesundheitsberufen für anspruchsvolle Aufgaben in Service, Prüfung, Gerätemanagement und Vertrieb. Inhalte und Bezeichnung variieren je nach Bundesland; Lehrpläne gibt es u. a. in Nordrhein-Westfalen, Sachsen und Baden-Württemberg. Der Abschluss ist auf DQR-Stufe 6 eingeordnet und kann – je nach Land und Zusatzprüfung – die Fachhochschulreife einschließen.',
      requirements: [
        'Abgeschlossene, einschlägige Berufsausbildung (z. B. Elektroniker/in, Mechatroniker/in, MTR/MTL)',
        'In der Regel mindestens ein Jahr Berufspraxis (länderspezifisch)',
        'Meist mittlerer Schulabschluss bzw. Berufsschulabschluss'
      ],
      contents: [
        'Medizinische Gerätetechnik (z. B. Patientenüberwachung, Beatmung, Bildgebung, Labor)',
        'Elektrische Sicherheit, Prüfung nach DIN EN 62353 (VDE 0751-1) und IEC 60601',
        'Medizinprodukterecht: MDR (EU) 2017/745, MPDG, MPBetreibV',
        'Messtechnik, Elektronik, Informations- und Netzwerktechnik',
        'Anatomie, Physiologie und Hygiene',
        'Betriebswirtschaft, Projekt- und Qualitätsmanagement, Mitarbeiterführung'
      ],
      providers: [
        'Medizinisch-Technische Akademie Esslingen (MTAE)',
        'Fachakademie für Medizintechnik an der Maschinenbauschule Ansbach (Bayern)',
        'Weitere Fachschulen für Technik mit Fachrichtung Medizintechnik in den Ländern'
      ],
      costs: 'An staatlichen Fachschulen meist schulgeldfrei, an privaten Trägern Gebühren; Förderung über Aufstiegs-BAföG möglich',
      professionIds: ['medizintechniker', 'servicetechniker', 'geraetemanagement', 'technischer-leiter']
    },

    /* ---------------------------------------------------------------- Studium Bachelor */
    {
      id: 'bsc-medizintechnik',
      type: 'Studium',
      level: 'Bachelor (B.Sc. / B.Eng.)',
      title: 'Medizintechnik (Bachelor)',
      duration: '6–7 Semester (je nach Hochschule inkl. Praxissemester)',
      degree: 'Bachelor of Science (B.Sc.) oder Bachelor of Engineering (B.Eng.)',
      description: 'Ingenieurstudium mit Schwerpunkt auf Entwicklung, Herstellung und Betrieb medizintechnischer Geräte und Systeme. Mathematik, Physik, Elektrotechnik und Informatik bilden die Grundlage, ergänzt um medizinische Grundlagen und Medizinprodukterecht. Es handelt sich um ein technisch-mathematisches Studium, nicht um ein „kleines Medizinstudium“.',
      requirements: [
        'Allgemeine oder fachgebundene Hochschulreife bzw. Fachhochschulreife (an HAW)',
        'Beruflich Qualifizierte (z. B. Meister/in, Techniker/in) nach Landesrecht',
        'Teilweise Vorpraktikum oder örtliche Zulassungsbeschränkung (NC)'
      ],
      contents: [
        'Mathematik, Physik, Elektrotechnik, Mechanik',
        'Elektronik, Messtechnik, Signal- und Bildverarbeitung',
        'Anatomie, Physiologie und medizinische Grundlagen',
        'Medizinische Gerätetechnik, Bildgebung, Biomaterialien',
        'Regulatorik: MDR, ISO 13485, ISO 14971, IEC 60601, IEC 62304',
        'Praxissemester, Projektarbeiten und Bachelorarbeit'
      ],
      providers: [
        'HAW Hamburg',
        'TH Lübeck (Biomedizintechnik)',
        'Hochschule Furtwangen – Hochschulcampus Tuttlingen',
        'Technische Hochschule Ulm',
        'Universität Stuttgart und Universität Tübingen (Kooperationsstudiengang)',
        'Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)'
      ],
      costs: 'Semesterbeitrag ca. 150–400 € je nach Hochschule; in Baden-Württemberg Studiengebühren für Nicht-EU-Studierende',
      professionIds: ['medizintechnikingenieur', 'biomedizinischer-ingenieur', 'servicetechniker', 'produktspezialist', 'qualitaetsmanager', 'regulatory-affairs'],
      link: 'https://www.haw-hamburg.de/studium/studiengaenge-a-z/studiengaenge-detail/course/courses/show/medizintechnik/'
    },
    {
      id: 'bsc-biomedical-engineering',
      type: 'Studium',
      level: 'Bachelor (B.Sc. / B.Eng.)',
      title: 'Biomedical Engineering / Biomedizinische Technik (Bachelor)',
      duration: '6–7 Semester',
      degree: 'Bachelor of Science (B.Sc.) oder Bachelor of Engineering (B.Eng.)',
      description: 'Interdisziplinäres Studium an der Schnittstelle von Ingenieurwissenschaften, Biologie und Medizin. Je nach Hochschule liegt der Schwerpunkt stärker auf Maschinenbau und Biomechanik, auf Elektronik und Sensorik oder auf Biomaterialien. Wahlmodule ermöglichen Vertiefungen etwa in Medizingeräteentwicklung, Bildgebung oder biomedizinischer Datenanalyse.',
      requirements: [
        'Hochschulreife bzw. Fachhochschulreife',
        'Gute Kenntnisse in Mathematik, Physik und Biologie',
        'Ggf. Vorpraktikum je nach Hochschule'
      ],
      contents: [
        'Ingenieurmathematik, Physik, Technische Mechanik',
        'Biologie, Anatomie, Physiologie und Biochemie',
        'Biomechanik, Biomaterialien und Implantattechnik',
        'Sensorik, Signalverarbeitung und medizinische Bildgebung',
        'Konstruktion und Entwicklung von Medizinprodukten',
        'Qualitätsmanagement und Medizinprodukterecht'
      ],
      providers: [
        'OTH Regensburg (Biomedical Engineering, B.Sc., 7 Semester inkl. Praxissemester)',
        'HAW Hamburg (Medizintechnik/Biomedical Engineering)',
        'Technische Hochschule Mittelhessen (Biomedizinische Technik)'
      ],
      costs: 'Semesterbeitrag je nach Hochschule (Richtwert ca. 150–400 €)',
      professionIds: ['biomedizinischer-ingenieur', 'medizintechnikingenieur', 'qualitaetsmanager', 'regulatory-affairs'],
      link: 'https://www.oth-regensburg.de/en/study-programme/biomedical-engineering-studieren-bachelor'
    },
    {
      id: 'bsc-medizinphysik',
      type: 'Studium',
      level: 'Bachelor (B.Sc. / B.Eng.)',
      title: 'Medizinphysik / Medizinische Physik (Bachelor)',
      duration: '6 Semester',
      degree: 'Bachelor of Science (B.Sc.) bzw. Bachelor of Engineering (B.Eng.)',
      description: 'Physikalisch geprägtes Studium mit Anwendungen in Strahlentherapie, Nuklearmedizin, Röntgendiagnostik, MRT und Ultraschall. Es bereitet auf einen Master in Medizinischer Physik vor, der in der Regel Voraussetzung für die Tätigkeit als Medizinphysik-Experte/in (MPE) ist. Die DGMP veröffentlicht eine Übersicht mit Bewertung der Studiengänge in Deutschland.',
      requirements: [
        'Allgemeine Hochschulreife bzw. Fachhochschulreife (an HAW)',
        'Sehr gute Kenntnisse in Mathematik und Physik'
      ],
      contents: [
        'Experimentalphysik, theoretische Physik und Mathematik',
        'Strahlenphysik, Dosimetrie und Strahlenschutz',
        'Physik der bildgebenden Verfahren (Röntgen, CT, MRT, Nuklearmedizin, Ultraschall)',
        'Anatomie, Physiologie und Strahlenbiologie',
        'Elektronik, Messtechnik und Programmierung',
        'Laborpraktika und Bachelorarbeit'
      ],
      providers: [
        'TU Dortmund (Medizinphysik, B.Sc.)',
        'Martin-Luther-Universität Halle-Wittenberg (Medizinische Physik, B.Sc.)',
        'Berliner Hochschule für Technik – BHT (Medizinphysik)'
      ],
      costs: 'Semesterbeitrag je nach Hochschule (Richtwert ca. 150–400 €)',
      professionIds: ['medizinphysiker', 'anwendungstechniker', 'produktspezialist'],
      link: 'https://www.dgmp.de'
    },
    {
      id: 'bsc-medizininformatik',
      type: 'Studium',
      level: 'Bachelor (B.Sc.)',
      title: 'Medizinische Informatik / Medizininformatik (Bachelor)',
      duration: '6–7 Semester',
      degree: 'Bachelor of Science (B.Sc.)',
      description: 'Informatikstudium mit Anwendung im Gesundheitswesen: Krankenhausinformationssysteme, medizinische Datenverarbeitung, Bildverarbeitung und Software als Medizinprodukt. Absolvent/innen entwickeln Software nach IEC 62304 oder betreuen IT-Systeme und vernetzte Medizingeräte im Krankenhaus. Der Studiengang in Heidelberg/Heilbronn besteht als Kooperation bereits seit 1972.',
      requirements: [
        'Hochschulreife bzw. Fachhochschulreife (an HAW)',
        'Interesse an Programmierung, Mathematik und Medizin',
        'Teilweise hochschuleigenes Auswahlverfahren'
      ],
      contents: [
        'Programmierung, Algorithmen, Datenbanken und Software Engineering',
        'Medizinische Dokumentation, Klassifikationen und Terminologien',
        'Krankenhausinformationssysteme und Interoperabilität (z. B. HL7 FHIR, DICOM)',
        'Medizinische Bild- und Signalverarbeitung',
        'Datenschutz, IT-Sicherheit und Software als Medizinprodukt',
        'Medizinische Grundlagen und Biometrie'
      ],
      providers: [
        'Universität Heidelberg und Hochschule Heilbronn (gemeinsamer Studiengang Medizinische Informatik, B.Sc.)',
        'DHBW Karlsruhe (Informatik – Studienrichtung Medizinische Informatik, dual)'
      ],
      costs: 'Semesterbeitrag je nach Hochschule; duale Varianten mit Vergütung durch Partnerunternehmen',
      professionIds: ['software-entwickler', 'geraetemanagement', 'regulatory-affairs'],
      link: 'https://www.uni-heidelberg.de/de/studium/alle-studienfaecher/medizinische-informatik/medizinische-informatik-bachelor-100'
    },

    /* ---------------------------------------------------------------- Duales Studium */
    {
      id: 'dual-medizintechnik',
      type: 'Duales Studium',
      level: 'Bachelor (B.Eng. / B.Sc.)',
      title: 'Duales Studium Medizintechnik',
      duration: '3 Jahre (6 Semester), Wechsel von Theorie- und Praxisphasen (an der DHBW je ca. 12 Wochen)',
      degree: 'Bachelor of Engineering (B.Eng.) bzw. Bachelor of Science (B.Sc.)',
      description: 'Das duale Studium verbindet ein Hochschulstudium mit Praxisphasen in einem Partnerunternehmen, etwa einem Medizintechnik-Hersteller oder einer Klinik. Die Bewerbung erfolgt in der Regel direkt beim Partnerunternehmen, das einen Studien- bzw. Ausbildungsvertrag abschließt und eine Vergütung zahlt. Eine frühzeitige Bewerbung, oft etwa ein Jahr vor Studienbeginn, ist sinnvoll.',
      requirements: [
        'Hochschulreife bzw. Fachhochschulreife (ggf. mit Studierfähigkeitstest)',
        'Studienvertrag mit einem Partnerunternehmen',
        'Gute Kenntnisse in Mathematik und Naturwissenschaften'
      ],
      contents: [
        'Ingenieurgrundlagen: Mathematik, Physik, Elektrotechnik, Informatik',
        'Medizinische Gerätetechnik, System- und Informationstechnik in der Medizin',
        'Anatomie und Physiologie',
        'Medizinprodukterecht und Qualitätsmanagement',
        'Projektarbeiten im Partnerunternehmen',
        'Bachelorarbeit mit Praxisbezug'
      ],
      providers: [
        'DHBW Mannheim (Medizintechnik, B.Eng.)',
        'DHBW Heidenheim (Medizintechnik)',
        'DHBW Karlsruhe und DHBW Mannheim (Medizintechnische Wissenschaften – Rettungswissenschaften)'
      ],
      costs: 'Keine Studiengebühren an der DHBW für EU-Studierende; monatliche Vergütung durch das Partnerunternehmen (tarif- und branchenabhängig)',
      professionIds: ['medizintechnikingenieur', 'servicetechniker', 'produktspezialist', 'anwendungstechniker'],
      link: 'https://www.heidenheim.dhbw.de/medizintechnische-wissenschaften-studieren'
    },

    /* ---------------------------------------------------------------- Studium Master */
    {
      id: 'msc-medizintechnik',
      type: 'Studium',
      level: 'Master (M.Sc. / M.Eng.)',
      title: 'Medizintechnik (Master)',
      duration: '3–4 Semester',
      degree: 'Master of Science (M.Sc.) bzw. Master of Engineering (M.Eng.)',
      description: 'Konsekutiver Master zur Vertiefung in Entwicklung, Forschung und Management medizintechnischer Systeme. Typische Schwerpunkte sind medizinische Bildgebung, Medizinelektronik, Biomechanik, Implantate oder Medizininformatik. Der Abschluss öffnet den Weg in Entwicklungs- und Leitungspositionen sowie zur Promotion.',
      requirements: [
        'Bachelor in Medizintechnik oder einem verwandten Ingenieur-/Naturwissenschaftsfach',
        'Teilweise Mindestnote oder Eignungsfeststellungsverfahren',
        'Bei englischsprachigen Studiengängen Sprachnachweis'
      ],
      contents: [
        'Vertiefung medizinische Bildgebung und Bildverarbeitung',
        'Medizinelektronik, Sensorik und Aktorik',
        'Biomechanik, Biomaterialien und Implantate',
        'Entwicklungsprozesse für Medizinprodukte (ISO 13485, ISO 14971, IEC 62304)',
        'Klinische Bewertung und Zulassung nach MDR',
        'Forschungsprojekt und Masterarbeit'
      ],
      providers: [
        'Universität Stuttgart (Medizintechnik, M.Sc.)',
        'Friedrich-Alexander-Universität Erlangen-Nürnberg (Medizintechnik, M.Sc.)',
        'Universität Tübingen (Biomedical Technologies, M.Sc.)'
      ],
      costs: 'Semesterbeitrag je nach Hochschule; in Baden-Württemberg Gebühren für Nicht-EU-Studierende und Zweitstudium',
      professionIds: ['medizintechnikingenieur', 'biomedizinischer-ingenieur', 'technischer-leiter', 'regulatory-affairs', 'qualitaetsmanager'],
      link: 'https://www.uni-stuttgart.de/studium/studienangebot/Medizintechnik-M.Sc./'
    },
    {
      id: 'msc-medizinphysik',
      type: 'Studium',
      level: 'Master (M.Sc.)',
      title: 'Medizinische Physik / Medical Physics (Master)',
      duration: '4 Semester',
      degree: 'Master of Science (M.Sc.)',
      description: 'Der Master in Medizinischer Physik ist der übliche Weg zur Tätigkeit als Medizinphysiker/in und zur späteren Fachanerkennung durch die DGMP. Schwerpunkte sind Strahlentherapie, Nuklearmedizin, Röntgendiagnostik und Strahlenschutz. Viele Programme sind eng mit Universitätskliniken verbunden und teilweise englischsprachig.',
      requirements: [
        'Bachelor in Physik, Medizinphysik oder einem eng verwandten Fach',
        'Sehr gute Kenntnisse in Physik und Mathematik',
        'Bei englischsprachigen Programmen Sprachnachweis'
      ],
      contents: [
        'Strahlenphysik, Dosimetrie und Bestrahlungsplanung',
        'Physik der Strahlentherapie und Nuklearmedizin',
        'Bildgebende Verfahren und Bildrekonstruktion',
        'Strahlenschutz und Strahlenbiologie (StrlSchG/StrlSchV)',
        'Qualitätssicherung an medizinischen Strahlenanlagen',
        'Klinische Praktika und Masterarbeit'
      ],
      providers: [
        'Universität Heidelberg – Medizinische Fakultät Mannheim (M.Sc. mit Schwerpunkt Medizinische Physik/Radiotherapie)',
        'TU Dortmund (Medizinphysik, M.Sc.)',
        'Martin-Luther-Universität Halle-Wittenberg (Medizinische Physik, M.Sc.)',
        'Universität Tübingen (Medizinische Strahlenwissenschaften, M.Sc.)'
      ],
      costs: 'Semesterbeitrag je nach Hochschule',
      professionIds: ['medizinphysiker'],
      link: 'https://www.uni-heidelberg.de/de/studium/alle-studienfaecher/biomedical-engineering/biomedical-engineering-master'
    },
    {
      id: 'msc-biomedical-engineering',
      type: 'Studium',
      level: 'Master (M.Sc.)',
      title: 'Biomedical Engineering (Master)',
      duration: '3–4 Semester',
      degree: 'Master of Science (M.Sc.)',
      description: 'Forschungsnaher, oft englischsprachiger Master für Absolvent/innen aus Ingenieur- und Naturwissenschaften. Inhalte reichen von biomedizinischer Bildgebung und Biosensorik bis zu Medizinphysik und Gewebetechnik. Der Abschluss qualifiziert für Entwicklung und Forschung in Industrie, Kliniken und Forschungseinrichtungen.',
      requirements: [
        'Bachelor in Ingenieurwissenschaften, Physik, Informatik oder Life Sciences',
        'Englischkenntnisse (bei englischsprachigen Programmen meist Niveau B2/C1)',
        'Teilweise Eignungsfeststellungsverfahren'
      ],
      contents: [
        'Biomedizinische Bildgebung und Biosensortechnologien',
        'Medizinische Physik und Signalverarbeitung',
        'Gewebe- und Zelltechnik, Biomaterialien',
        'Modellierung, Simulation und Datenanalyse',
        'Forschungspraktikum und Masterarbeit'
      ],
      providers: [
        'Technische Universität München – TUM (Biomedical Engineering and Medical Physics, M.Sc., englischsprachig)',
        'Universität Heidelberg – Medizinische Fakultät Mannheim (Biomedical Engineering, M.Sc.)',
        'Hochschule Furtwangen – Campus Villingen-Schwenningen (Biomedical Engineering, M.Sc.)',
        'RWTH Aachen (Biomedical Engineering, M.Sc.)'
      ],
      costs: 'Semesterbeitrag je nach Hochschule; an der TUM und in Baden-Württemberg Studiengebühren für Nicht-EU-Studierende',
      professionIds: ['biomedizinischer-ingenieur', 'medizintechnikingenieur', 'medizinphysiker', 'software-entwickler'],
      link: 'https://www.tum.de/studium/studienangebot/detail/biomedical-engineering-and-medical-physics-master-of-science-msc'
    },

    /* ---------------------------------------------------------------- Weiterbildung / Zertifikate */
    {
      id: 'wb-medizinprodukteberater',
      type: 'Zertifikat',
      level: 'Sachkundenachweis nach § 83 MPDG',
      title: 'Medizinprodukteberater/in nach § 83 MPDG',
      duration: 'ca. 1 Tag (Seminar mit Prüfung), regelmäßige Auffrischung empfohlen',
      degree: 'Zertifikat bzw. Teilnahmebescheinigung des Anbieters als Sachkundenachweis',
      description: 'Wer beruflich Fachkreise über Medizinprodukte fachlich informiert oder in deren sachgerechte Handhabung einweist, ist Medizinprodukteberater/in im Sinne von § 83 MPDG und muss die erforderliche Sachkenntnis nachweisen. Die Regelung (früher § 31 MPG) gilt auch unter MDR und IVDR fort. Arbeitgeber müssen dafür sorgen, dass der Kenntnisstand regelmäßig aktualisiert wird.',
      requirements: [
        'Ausbildung in einem naturwissenschaftlichen, medizinischen oder technischen Beruf und Schulung zu den jeweiligen Medizinprodukten – oder entsprechende Berufserfahrung in der Beratung',
        'Tätigkeit im Außendienst, Vertrieb, Produktmanagement oder in der Applikation'
      ],
      contents: [
        'Rechtliche Grundlagen: MDR, IVDR, MPDG, MPBetreibV',
        'Aufgaben und Pflichten des Medizinprodukteberaters, Dokumentation',
        'Rolle im Vigilanzsystem: Meldung von Vorkommnissen',
        'Heilmittelwerbegesetz (HWG) und Medizinprodukte-Kodex / Antikorruption',
        'Behörden und ihre Strukturen (z. B. BfArM, Landesbehörden)',
        'Abschlussprüfung bzw. Wissenstest'
      ],
      providers: [
        'TÜV SÜD Akademie',
        'TÜV Rheinland Akademie',
        'Hersteller-interne Schulungsprogramme'
      ],
      costs: 'Richtwert: ca. 500–800 € netto pro Seminar (z. B. TÜV SÜD Akademie 2026: 709 € zzgl. 55 € Prüfungsgebühr)',
      professionIds: ['produktspezialist', 'anwendungstechniker', 'servicetechniker'],
      link: 'https://www.tuvsud.com/de-de/store/akademie/seminare-technik/medizintechnik/nationale-gesetzgebung-fuer-medizintechnik/4611083'
    },
    {
      id: 'wb-mte-pruefung-62353',
      type: 'Weiterbildung',
      level: 'Fachseminar (Herstellerunabhängig)',
      title: 'Prüfung medizinischer elektrischer Geräte nach DIN EN 62353 (VDE 0751-1)',
      duration: 'ca. 1–2 Tage (Theorie und Praxis mit Prüfgeräten)',
      degree: 'Teilnahmebescheinigung bzw. Zertifikat des Anbieters',
      description: 'Die DIN EN 62353 (VDE 0751-1) regelt Wiederholungsprüfungen und Prüfungen nach Instandsetzung von medizinischen elektrischen Geräten und Systemen. Das Seminar vermittelt die normgerechte Durchführung von Sichtprüfung, Schutzleiter-, Isolations- und Ableitstrommessungen sowie die Bewertung und Dokumentation der Ergebnisse. Die Kenntnisse sind Grundlage für sicherheitstechnische Kontrollen und den Betrieb im Krankenhaus.',
      requirements: [
        'Elektrotechnische Ausbildung bzw. Elektrofachkraft oder Elektrofachkraft für festgelegte Tätigkeiten',
        'Grundkenntnisse zu Medizinprodukten und Schutzklassen'
      ],
      contents: [
        'Aufbau und Inhalt der DIN EN 62353 im Vergleich zur IEC 60601-1',
        'Schutzklassen und Anwendungsteile (Typ B, BF, CF)',
        'Messverfahren: Schutzleiterwiderstand, Isolationswiderstand, Ersatz-, Direkt- und Differenzableitstrom',
        'Prüfung von ME-Systemen und Mehrfachsteckdosen',
        'Grenzwerte, Bewertung und Prüfprotokoll',
        'Praktische Übungen mit Prüfgeräten'
      ],
      providers: [
        'MEBEDO Akademie',
        'TÜV SÜD Akademie',
        'VDE-Bildungsangebote (VDE Verlag / VDE-Seminare)'
      ],
      costs: 'Richtwert ca. 500–1.000 € netto je nach Umfang',
      professionIds: ['medizintechniker', 'servicetechniker', 'geraetemanagement']
    },
    {
      id: 'wb-stk-mtk',
      type: 'Weiterbildung',
      level: 'Fachseminar nach MPBetreibV',
      title: 'Sicherheitstechnische und messtechnische Kontrollen (STK/MTK) nach MPBetreibV',
      duration: 'ca. 1 Tag je Seminar (STK bzw. MTK), dazu gerätespezifische Herstellerschulungen',
      degree: 'Teilnahmebescheinigung; Qualifikationsnachweis im Sinne von § 5 MPBetreibV gemeinsam mit Ausbildung und Erfahrung',
      description: 'Sicherheitstechnische Kontrollen (§ 11 MPBetreibV, Anlage 1) und messtechnische Kontrollen (§ 14 MPBetreibV, Anlage 2) dürfen nur Personen durchführen, die die Anforderungen des § 5 MPBetreibV erfüllen: Sachkenntnis, Erfahrung, Weisungsunabhängigkeit sowie geeignete Mess- und Prüfeinrichtungen. Die Seminare vermitteln rechtliche Grundlagen, Prüfabläufe und Dokumentation. Für MTK ist der Leitfaden der PTB eine wichtige Grundlage.',
      requirements: [
        'Einschlägige technische Ausbildung (z. B. Elektroniker/in, Techniker/in Medizintechnik) oder Studium',
        'Kenntnisse in MPDG und MPBetreibV',
        'Praktische Erfahrung mit den zu prüfenden Gerätearten'
      ],
      contents: [
        'Betreiberpflichten nach MPBetreibV, Medizinproduktebuch und Bestandsverzeichnis',
        'STK: Fristen, Prüfumfang, Herstellerangaben, Prüfprotokolle',
        'MTK: Anlage-2-Produkte (z. B. Blutdruckmessgeräte, Thermometer), Fehlergrenzen, Prüfnormale und Kalibrierung',
        'Leitfaden für messtechnische Kontrollen der PTB',
        'Qualifikation und Organisation des Prüfpersonals',
        'Umgang mit Mängeln und Außerbetriebnahme'
      ],
      providers: [
        'TÜV SÜD Akademie (Praxisseminare STK und MTK)',
        'TÜV Rheinland Akademie',
        'Hersteller-Serviceschulungen für gerätespezifische Kontrollen'
      ],
      costs: 'Richtwert ca. 600–900 € netto je Seminar',
      professionIds: ['medizintechniker', 'servicetechniker', 'geraetemanagement', 'technischer-leiter'],
      link: 'https://www.tuvsud.com/de-de/store/akademie/seminare-technik/medizintechnik/nationale-gesetzgebung-fuer-medizintechnik/4611038'
    },
    {
      id: 'wb-elektrofachkraft',
      type: 'Weiterbildung',
      level: 'Lehrgang nach DGUV Vorschrift 3',
      title: 'Elektrofachkraft (EFK) / Elektrofachkraft für festgelegte Tätigkeiten (EFKffT)',
      duration: 'EFKffT: ca. 80–200 Unterrichtseinheiten je nach Anbieter und Tätigkeitsumfang; jährliche Unterweisung bzw. Wiederholungsschulung',
      degree: 'Zertifikat des Lehrgangs; schriftliche Bestellung durch den Arbeitgeber für die festgelegten Tätigkeiten',
      description: 'Nach DGUV Vorschrift 3 dürfen elektrische Arbeiten nur von Elektrofachkräften oder unter deren Leitung ausgeführt werden. Fachkräfte ohne elektrotechnische Ausbildung – etwa aus Mechanik oder Gesundheitsberufen – können sich zur Elektrofachkraft für festgelegte Tätigkeiten qualifizieren, z. B. für Prüfungen ortsveränderlicher Betriebsmittel oder Arbeiten an Medizingeräten bis 1.000 V AC. Die Qualifikation gilt nur für die tatsächlich ausgebildeten und schriftlich übertragenen Tätigkeiten.',
      requirements: [
        'Abgeschlossene Berufsausbildung in einem handwerklichen oder gewerblich-technischen Beruf (für EFKffT)',
        'Für die volle EFK: elektrotechnische Berufsausbildung, Techniker- oder Ingenieurabschluss',
        'Ergänzend betriebliche, anlagenspezifische Einweisung'
      ],
      contents: [
        'Gefahren des elektrischen Stroms und Erste Hilfe',
        'Schutzmaßnahmen und fünf Sicherheitsregeln',
        'DGUV Vorschrift 3, DIN VDE 0105-100, DIN VDE 0701-0702',
        'Messen und Prüfen elektrischer Betriebsmittel',
        'Verantwortung und Rechtsfolgen',
        'Praktische Übungen und Prüfung'
      ],
      providers: [
        'Industrie- und Handelskammern (IHK-Zertifikatslehrgänge)',
        'Technische Akademie Esslingen (TAE)',
        'TÜV-Akademien'
      ],
      costs: 'Richtwert EFKffT ca. 1.500–2.500 € je nach Umfang',
      professionIds: ['medizintechniker', 'servicetechniker', 'geraetemanagement']
    },
    {
      id: 'wb-fachkunde-strahlenschutz',
      type: 'Weiterbildung',
      level: 'Behördlich anerkannte Strahlenschutzkurse (Fachkunde nach StrlSchV)',
      title: 'Fachkunde im Strahlenschutz',
      duration: 'Grund- und Spezialkurse je nach Fachkundegruppe ca. 2–5 Tage, zusätzlich Sachkundezeit; Aktualisierung mindestens alle 5 Jahre',
      degree: 'Fachkundebescheinigung der zuständigen Landesbehörde',
      description: 'Wer als Strahlenschutzbeauftragte/r tätig ist, Röntgeneinrichtungen oder Bestrahlungsgeräte errichtet, prüft oder wartet oder als Medizinphysik-Experte/in arbeitet, benötigt die erforderliche Fachkunde im Strahlenschutz nach StrlSchG und StrlSchV. Sie setzt sich aus Ausbildung, praktischer Erfahrung (Sachkunde) und anerkannten Kursen zusammen. Die Anforderungen sind in den Fachkunde-Richtlinien Medizin und Technik festgelegt; die Fachkunde ist mindestens alle fünf Jahre durch einen Aktualisierungskurs zu erneuern.',
      requirements: [
        'Geeignete Ausbildung (z. B. Techniker/in, Ingenieur/in, Physiker/in, MTR)',
        'Sachkundezeit in der jeweiligen Anwendungsgruppe',
        'Teilnahme an anerkannten Grund- und Spezialkursen'
      ],
      contents: [
        'Physikalische Grundlagen ionisierender Strahlung und Dosimetrie',
        'Strahlenbiologie und Strahlenrisiko',
        'Rechtsgrundlagen: StrlSchG, StrlSchV, Richtlinien',
        'Praktischer Strahlenschutz, Abschirmung, Messtechnik',
        'Qualitätssicherung, Abnahme- und Konstanzprüfungen',
        'Pflichten von Strahlenschutzverantwortlichen und -beauftragten'
      ],
      providers: [
        'Karlsruher Institut für Technologie (KIT) – Fortbildungszentrum für Technik und Umwelt',
        'TÜV SÜD Akademie',
        'Ärztekammern und Universitätskliniken (für Kurse im medizinischen Bereich)'
      ],
      costs: 'Richtwert ca. 300–1.200 € je Kurs',
      professionIds: ['medizinphysiker', 'servicetechniker', 'anwendungstechniker', 'medizintechniker']
    },
    {
      id: 'wb-mpe-dgmp',
      type: 'Weiterbildung',
      level: 'Fachanerkennung der Fachgesellschaft (DGMP)',
      title: 'Fachanerkennung Medizinische Physik (DGMP) – Medizinphysik-Experte/in',
      duration: 'In der Regel mindestens 3 Jahre strukturierte Weiterbildung unter Anleitung',
      degree: 'Fachanerkennung „Medizinphysiker/in (DGMP)“',
      description: 'Die Deutsche Gesellschaft für Medizinische Physik (DGMP) vergibt nach ihrer Weiterbildungsordnung die Fachanerkennung für Medizinische Physik. Voraussetzung ist eine mehrjährige berufliche Tätigkeit unter Anleitung einer/eines Weiterbildungsermächtigten, der Nachweis theoretischer Inhalte sowie ein abschließendes Fachgespräch. Die Fachanerkennung ist von der staatlich geforderten Fachkunde im Strahlenschutz für Medizinphysik-Experten zu unterscheiden, die zusätzlich bei der zuständigen Behörde nachgewiesen wird.',
      requirements: [
        'Masterabschluss in Medizinischer Physik oder Physik bzw. gleichwertiger Hochschulabschluss',
        'Anstellung an einer Einrichtung mit Weiterbildungsermächtigung',
        'Nachweis der geforderten Kurse und Tätigkeitsfelder'
      ],
      contents: [
        'Klinische Tätigkeit in Strahlentherapie, Nuklearmedizin und/oder Röntgendiagnostik',
        'Dosimetrie, Bestrahlungsplanung und Qualitätssicherung',
        'Strahlenschutz und Fachkunde nach StrlSchV',
        'Theoretische Weiterbildung nach Stoffkatalog der DGMP',
        'Fachgespräch vor der Fachanerkennungskommission'
      ],
      providers: [
        'Deutsche Gesellschaft für Medizinische Physik (DGMP)',
        'Weiterbildungsermächtigte Kliniken (z. B. Universitätskliniken)',
        'Universität Heidelberg (Kurs Medizinische Physik nach DGMP-Stoffkatalog)'
      ],
      costs: 'Weiterbildung erfolgt in der Regel berufsbegleitend in einer bezahlten Anstellung; Gebühren für Kurse und Anerkennung je nach Anbieter',
      professionIds: ['medizinphysiker'],
      link: 'https://www.dgmp.de'
    },
    {
      id: 'wb-qm-iso13485',
      type: 'Zertifikat',
      level: 'Personenzertifikat bzw. Lehrgangszertifikat',
      title: 'Qualitätsmanagementbeauftragte/r und interne/r Auditor/in ISO 13485',
      duration: 'ca. 3–10 Tage je nach Modul (QMB, interne/r Auditor/in)',
      degree: 'Zertifikat des Anbieters (z. B. TÜV, DGQ)',
      description: 'Die DIN EN ISO 13485 ist der zentrale Standard für Qualitätsmanagementsysteme von Medizinprodukte-Herstellern und wird zur Erfüllung der QM-Anforderungen der MDR (Art. 10) genutzt. Die Weiterbildung vermittelt Aufbau, Pflege und Auditierung eines QM-Systems einschließlich Risikomanagement nach ISO 14971. Sie ist ein typischer Einstieg in Qualitätsmanagement und Regulatory Affairs.',
      requirements: [
        'Technische, naturwissenschaftliche oder kaufmännische Ausbildung bzw. Studium',
        'Berufserfahrung im Umfeld Medizinprodukte von Vorteil'
      ],
      contents: [
        'Anforderungen der DIN EN ISO 13485 und Bezug zur MDR/IVDR',
        'Dokumentenlenkung, CAPA, Lieferantenmanagement',
        'Risikomanagement nach DIN EN ISO 14971',
        'Validierung von Prozessen und Software',
        'Auditplanung und -durchführung nach ISO 19011',
        'Managementbewertung und kontinuierliche Verbesserung'
      ],
      providers: [
        'TÜV SÜD Akademie',
        'TÜV Rheinland Akademie',
        'TÜV NORD Akademie',
        'Deutsche Gesellschaft für Qualität (DGQ)'
      ],
      costs: 'Richtwert ca. 1.500–4.500 € je nach Umfang und Zertifikat',
      professionIds: ['qualitaetsmanager', 'regulatory-affairs', 'medizintechnikingenieur']
    },
    {
      id: 'wb-regulatory-affairs',
      type: 'Weiterbildung',
      level: 'Seminarreihe / Zertifikatslehrgang',
      title: 'Regulatory Affairs Medizinprodukte (MDR/IVDR)',
      duration: 'Mehrere Module, insgesamt ca. 5–15 Tage; berufsbegleitend',
      degree: 'Zertifikat des Anbieters',
      description: 'Regulatory-Affairs-Weiterbildungen vermitteln den Weg eines Medizinprodukts in den Markt: Klassifizierung, Konformitätsbewertungsverfahren, technische Dokumentation, klinische Bewertung und Überwachung nach dem Inverkehrbringen. Grundlage sind MDR (EU) 2017/745, IVDR (EU) 2017/746, das MPDG sowie MDCG-Leitlinien. Absolvent/innen arbeiten an der Schnittstelle zwischen Entwicklung, Qualitätsmanagement, Benannten Stellen und Behörden.',
      requirements: [
        'Studium oder Berufsausbildung in Technik, Naturwissenschaften, Medizin oder Pharmazie',
        'Gute Englischkenntnisse (Normen und Leitlinien oft englischsprachig)'
      ],
      contents: [
        'Aufbau und Systematik von MDR und IVDR, Rolle des MPDG',
        'Klassifizierung und Konformitätsbewertungsverfahren, Benannte Stellen',
        'Technische Dokumentation (Anhang II und III MDR), grundlegende Sicherheits- und Leistungsanforderungen',
        'Klinische Bewertung und klinische Prüfungen',
        'Post-Market Surveillance, PSUR, Vigilanz und EUDAMED',
        'Internationale Zulassungen (z. B. FDA 510(k)) im Überblick'
      ],
      providers: [
        'Johner Institut',
        'TÜV SÜD Akademie (z. B. Kompaktseminar MDR-Expert)',
        'TÜV Rheinland Akademie',
        'BVMed-Akademie'
      ],
      costs: 'Richtwert ca. 700–900 € je Seminartag; Zertifikatslehrgänge mehrere Tausend Euro',
      professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'medizintechnikingenieur', 'software-entwickler']
    },
    {
      id: 'wb-prrc',
      type: 'Weiterbildung',
      level: 'Fachseminar (Qualifikation gemäß Art. 15 MDR / Art. 15 IVDR)',
      title: 'Verantwortliche Person für die Einhaltung der Regulierungsvorschriften (PRRC) nach Art. 15 MDR',
      duration: 'ca. 1–2 Tage',
      degree: 'Teilnahmebescheinigung; die rechtlich geforderte Qualifikation ergibt sich aus Abschluss und Berufserfahrung',
      description: 'Hersteller müssen nach Art. 15 MDR mindestens eine Person mit dem erforderlichen Fachwissen auf dem Gebiet der Medizinprodukte verfügbar haben, die für die Einhaltung der Regulierungsvorschriften verantwortlich ist. Gefordert ist ein Hochschulabschluss in Recht, Medizin, Pharmazie, Ingenieurwesen oder einer anderen einschlägigen wissenschaftlichen Disziplin plus mindestens ein Jahr Berufserfahrung in Regulierungsfragen oder QM-Systemen – oder alternativ vier Jahre einschlägige Berufserfahrung. Kleinst- und Kleinunternehmen dürfen eine externe PRRC dauerhaft und ständig zur Verfügung haben.',
      requirements: [
        'Hochschulabschluss in einem einschlägigen Fach und mindestens 1 Jahr Erfahrung in Regulatory Affairs oder QM-Systemen für Medizinprodukte',
        'Alternativ: mindestens 4 Jahre Berufserfahrung in Regulierungsfragen oder QM-Systemen für Medizinprodukte'
      ],
      contents: [
        'Anforderungen nach Art. 15 MDR/IVDR und MDCG 2019-7',
        'Aufgaben: Konformitätsprüfung vor Freigabe, technische Dokumentation, PMS, Vigilanz, Prüfprodukte',
        'Haftungsrechtliche Aspekte und Weisungsunabhängigkeit',
        'Registrierung in EUDAMED',
        'Sonderregelungen für Kleinst- und Kleinunternehmen'
      ],
      providers: [
        'TÜV NORD Akademie',
        'TÜV SÜD Akademie',
        'TÜV Rheinland Akademie (modularer Lehrgang PRRC MDR)',
        'Johner Institut',
        'DIN Media'
      ],
      costs: 'Richtwert ca. 700–1.200 € netto (z. B. TÜV NORD Online-Seminar: 690 € zzgl. USt.)',
      professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'technischer-leiter'],
      link: 'https://www.tuev-nord.de/de/weiterbildung/seminare/verantwortliche-person-nach-artikel-15-mdr/'
    },
    {
      id: 'wb-iec62304',
      type: 'Weiterbildung',
      level: 'Fachseminar / Zertifikat',
      title: 'Medizinische Software nach IEC 62304 (und IEC 82304)',
      duration: 'ca. 1–3 Tage; zertifizierende Programme länger',
      degree: 'Teilnahmebescheinigung bzw. Zertifikat (z. B. Certified Professional for Medical Software)',
      description: 'Die DIN EN 62304 legt Anforderungen an den Lebenszyklus von Software in Medizinprodukten und Software als Medizinprodukt fest. Das Seminar vermittelt Software-Sicherheitsklassen, Entwicklungs-, Wartungs- und Risikomanagementprozesse sowie die Schnittstellen zu MDR, ISO 14971 und IEC 82304-1. Ergänzend werden Anforderungen an Usability (IEC 62366-1) und IT-Sicherheit behandelt.',
      requirements: [
        'Erfahrung in Softwareentwicklung, Test oder Qualitätssicherung',
        'Grundkenntnisse im Medizinprodukterecht von Vorteil'
      ],
      contents: [
        'Software-Sicherheitsklassen A, B, C',
        'Softwareentwicklungsplan, Anforderungen, Architektur, Verifizierung',
        'SOUP/OTS-Komponenten und Konfigurationsmanagement',
        'Risikomanagement für Software nach ISO 14971',
        'Problemlösung und Software-Wartung',
        'Qualifizierung von Software als Medizinprodukt (MDCG 2019-11) und Cybersecurity'
      ],
      providers: [
        'Johner Institut',
        'TÜV SÜD Akademie',
        'VDE-Bildungsangebote'
      ],
      costs: 'Richtwert ca. 800–1.500 € netto je Seminar',
      professionIds: ['software-entwickler', 'regulatory-affairs', 'qualitaetsmanager'],
      link: 'https://www.johner-institut.de/en/academy/seminars-courses-and-workshops/seminar-medical-software-and-iec-62304-iec-82304'
    },
    {
      id: 'wb-meister-techniker-fuehrung',
      type: 'Weiterbildung',
      level: 'Aufstiegsfortbildung (z. B. IHK-Meister/in, DQR 6) und Führungskräfteentwicklung',
      title: 'Führungsqualifikation für Meister/innen und Techniker/innen (inkl. Ausbildereignung)',
      duration: 'Industriemeister/in: ca. 1–2 Jahre berufsbegleitend; AEVO-Lehrgang: wenige Wochen; Führungsseminare: einige Tage',
      degree: 'z. B. Geprüfte/r Industriemeister/in Fachrichtung Elektrotechnik (IHK), Ausbildereignung nach AEVO, Anbieterzertifikate',
      description: 'Für den Schritt in die Teamleitung im Service, in der Medizintechnik-Abteilung eines Krankenhauses oder in der Fertigung sind Führungs-, Organisations- und Betriebswirtschaftskenntnisse gefragt. Neben der Aufstiegsfortbildung zum/zur Industriemeister/in bieten sich die Ausbildereignungsprüfung (AEVO) sowie Seminare zu Mitarbeiterführung, Budget- und Projektmanagement an. Die Fortbildungen sind in vielen Fällen über Aufstiegs-BAföG förderfähig.',
      requirements: [
        'Abgeschlossene Berufsausbildung und Berufserfahrung (je nach Prüfungsordnung)',
        'Für die Techniker-Führungsrolle: Abschluss als staatlich geprüfte/r Techniker/in oder gleichwertig'
      ],
      contents: [
        'Mitarbeiterführung, Kommunikation und Konfliktmanagement',
        'Personalplanung und Arbeitsorganisation',
        'Betriebswirtschaft, Kostenrechnung und Investitionsplanung',
        'Arbeits-, Umwelt- und Gesundheitsschutz',
        'Ausbildung von Nachwuchskräften (AEVO)',
        'Projekt- und Qualitätsmanagement'
      ],
      providers: [
        'Industrie- und Handelskammern (IHK)',
        'Handwerkskammern (HWK)',
        'TÜV-Akademien und weitere Bildungsträger'
      ],
      costs: 'Industriemeister/in Richtwert ca. 4.000–8.000 € (förderfähig über Aufstiegs-BAföG); AEVO-Lehrgang ca. 400–1.000 €',
      professionIds: ['technischer-leiter', 'medizintechniker', 'geraetemanagement', 'servicetechniker']
    },
    {
      id: 'wb-produktschulung-applikation',
      type: 'Weiterbildung',
      level: 'Herstellerschulung / Produktzertifizierung',
      title: 'Produkt- und Applikationsschulungen der Hersteller',
      duration: 'Einige Tage bis mehrere Wochen je Produktlinie; laufende Updates',
      degree: 'Herstellerzertifikat (Service- bzw. Applikationsberechtigung für bestimmte Geräte)',
      description: 'Für Service und Applikation sind gerätespezifische Herstellerschulungen unverzichtbar: Viele Hersteller verlangen sie als Voraussetzung, um Wartungen, STK oder Einweisungen an ihren Systemen durchzuführen. Applikationsspezialist/innen werden zudem in klinischen Workflows geschult, um Anwender/innen in Kliniken zu trainieren. Die Schulungen finden in Trainingszentren der Hersteller sowie online statt.',
      requirements: [
        'Anstellung bei Hersteller, Serviceunternehmen oder Klinik mit entsprechendem Gerätebestand',
        'Technische oder medizinische Grundqualifikation (z. B. Techniker/in, MTR, Ingenieur/in)'
      ],
      contents: [
        'Systemaufbau, Funktionsweise und Bedienung',
        'Installation, Kalibrierung und Fehlerdiagnose',
        'Wartung, Sicherheits- und Funktionsprüfungen nach Herstellervorgaben',
        'Klinische Anwendung und Workflows',
        'Einweisung von Anwender/innen nach MPBetreibV',
        'Software-Updates und Netzwerkintegration'
      ],
      providers: [
        'Siemens Healthineers (u. a. Lernplattform PEPconnect)',
        'Aesculap Akademie (B. Braun)',
        'Drägerwerk (Produkt- und Serviceschulungen)'
      ],
      costs: 'Für Mitarbeitende meist vom Arbeitgeber getragen; für externe Teilnehmende kostenpflichtig',
      professionIds: ['anwendungstechniker', 'produktspezialist', 'servicetechniker', 'medizintechniker']
    },
    {
      id: 'wb-gesundheitsmanagement',
      type: 'Weiterbildung',
      level: 'Zertifikatskurs oder berufsbegleitender Master (z. B. M.A./MBA)',
      title: 'Gesundheits- und Krankenhausmanagement',
      duration: 'Zertifikatskurse einige Monate; berufsbegleitender Master ca. 4–5 Semester',
      degree: 'Hochschulzertifikat bzw. Master of Arts / MBA',
      description: 'Für Führungsaufgaben in der Medizintechnik von Kliniken, im Vertrieb oder im Produktmanagement sind Kenntnisse über Strukturen, Finanzierung und Prozesse des Gesundheitswesens hilfreich. Die Programme vermitteln Gesundheitsökonomie, Krankenhausfinanzierung (z. B. DRG-System), Beschaffung, Controlling und Prozessmanagement. Viele Angebote sind als Fernstudium berufsbegleitend studierbar.',
      requirements: [
        'Für Master: erster Hochschulabschluss und in der Regel Berufserfahrung',
        'Für Zertifikatskurse: abgeschlossene Ausbildung oder Studium und Berufspraxis'
      ],
      contents: [
        'Strukturen und Finanzierung des deutschen Gesundheitswesens',
        'Krankenhausmanagement, Controlling und Investitionsplanung',
        'Beschaffung und Technologiebewertung (Health Technology Assessment)',
        'Prozess- und Qualitätsmanagement im Krankenhaus',
        'Personalführung und Change Management',
        'Gesundheitsrecht und Digitalisierung im Gesundheitswesen'
      ],
      providers: [
        'APOLLON Hochschule der Gesundheitswirtschaft (Fernstudium)',
        'FOM Hochschule für Oekonomie & Management',
        'Hochschule Fresenius'
      ],
      costs: 'Berufsbegleitender Master an privaten Hochschulen Richtwert ca. 10.000–20.000 € gesamt',
      professionIds: ['technischer-leiter', 'geraetemanagement', 'produktspezialist', 'qualitaetsmanager']
    }
  ],

  generalRequirements: [
    {
      title: 'Schulfächer',
      text: 'Gute Leistungen in Mathematik und Physik sind für fast alle technischen Wege wichtig. Je nach Richtung kommen Biologie und Chemie (Labor, Biomedizintechnik), Informatik (Software, Medizininformatik) und Englisch (Normen, Fachliteratur, internationale Teams) hinzu.'
    },
    {
      title: 'Technisches Verständnis',
      text: 'Freude am Verstehen, Prüfen und Reparieren von Geräten sowie an Elektronik, Mechanik und Messtechnik ist die Grundlage für Service, Prüfung und Entwicklung. Systematische Fehlersuche und sorgfältiges Arbeiten sind besonders gefragt.'
    },
    {
      title: 'Interesse an Medizin und Patientensicherheit',
      text: 'Medizinprodukte werden am Menschen angewendet. Grundkenntnisse in Anatomie und Physiologie sowie ein ausgeprägtes Verantwortungsbewusstsein für Patient/innen und Anwender/innen sind daher wichtig.'
    },
    {
      title: 'Sorgfalt und Dokumentation',
      text: 'Regulatorische Vorgaben wie MDR, MPDG und MPBetreibV verlangen lückenlose Nachweise. Wer gern strukturiert arbeitet und Prüfprotokolle, Risikoanalysen oder technische Dokumentation genau führt, ist im Vorteil.'
    },
    {
      title: 'Kommunikation und Teamfähigkeit',
      text: 'Die Arbeit findet an der Schnittstelle von Technik, Medizin und Verwaltung statt. Fachliche Inhalte müssen verständlich gegenüber Ärzt/innen, Pflegekräften, Kund/innen und Behörden vermittelt werden.'
    },
    {
      title: 'Gesundheitliche Eignung',
      text: 'Für viele Berufe ist Farbsehen (z. B. bei Leitungskennzeichnungen) von Bedeutung. In Klinik und Service gehören Hygieneregeln, Impfschutz nach Vorgaben des Arbeitgebers sowie gelegentlich körperliche Arbeit und Bereitschaftsdienste dazu. Für Gesundheitsfachberufe wie MTR/MTL ist die gesundheitliche Eignung Zulassungsvoraussetzung.'
    },
    {
      title: 'Lernbereitschaft',
      text: 'Normen, Geräte und Software ändern sich ständig. Regelmäßige Fortbildungen – etwa als Medizinprodukteberater/in, zur Fachkunde im Strahlenschutz oder in Herstellerschulungen – sind fester Bestandteil des Berufslebens und teils gesetzlich vorgeschrieben.'
    },
    {
      title: 'Mobilität und Englisch',
      text: 'Im Außendienst-Service und in der Applikation sind Reisebereitschaft und Führerschein Klasse B oft Voraussetzung. Bei international tätigen Herstellern werden gute Englischkenntnisse erwartet.'
    }
  ],

  development: [
    {
      from: 'Ausbildung (z. B. Elektroniker/in für Geräte und Systeme, Mechatroniker/in)',
      to: 'Staatlich geprüfte/r Techniker/in Medizintechnik',
      how: 'Nach mindestens einem Jahr Berufspraxis (je nach Bundesland) die zweijährige Fachschule in Vollzeit oder berufsbegleitend in Teilzeit besuchen; Förderung über Aufstiegs-BAföG möglich.'
    },
    {
      from: 'Staatlich geprüfte/r Techniker/in Medizintechnik',
      to: 'Bachelor Medizintechnik (Ingenieur/in)',
      how: 'Der Techniker-Abschluss ermöglicht als beruflich Qualifizierte/r je nach Landesrecht den Hochschulzugang; berufsbegleitende oder duale Formate sowie die Anrechnung von Vorleistungen verkürzen ggf. das Studium.'
    },
    {
      from: 'Servicetechniker/in Medizintechnik',
      to: 'Leitung Medizintechnik / Technische/r Leiter/in im Krankenhaus',
      how: 'Mehrjährige Erfahrung im Gerätemanagement, Qualifikationen zu STK/MTK und MPBetreibV sowie eine Führungsfortbildung (Industriemeister/in, AEVO, Führungsseminare) oder ein Studium.'
    },
    {
      from: 'Bachelor Medizintechnik / Biomedical Engineering',
      to: 'Master und Entwicklungs- oder Projektleitung',
      how: 'Konsekutiver Master (M.Sc./M.Eng.) mit Spezialisierung, etwa in Bildgebung, Medizinelektronik oder Software; anschließend Verantwortung für Entwicklungsprojekte oder Promotion.'
    },
    {
      from: 'Ingenieur/in oder Naturwissenschaftler/in in der Entwicklung',
      to: 'Qualitätsmanagement / Regulatory Affairs / PRRC',
      how: 'Weiterbildungen zu ISO 13485, ISO 14971 und MDR/IVDR; nach mindestens einem Jahr Erfahrung in Regulatory Affairs oder QM-Systemen ist die Benennung als PRRC nach Art. 15 MDR möglich.'
    },
    {
      from: 'Bachelor/Master Physik oder Medizinphysik',
      to: 'Medizinphysik-Experte/in mit DGMP-Fachanerkennung',
      how: 'Master in Medizinischer Physik, Fachkunde im Strahlenschutz nach StrlSchV und mehrjährige Weiterbildung an einer weiterbildungsermächtigten Klinik mit Fachgespräch vor der DGMP.'
    },
    {
      from: 'MTR / MTL oder Servicetechniker/in',
      to: 'Applikationsspezialist/in bzw. Produktspezialist/in bei einem Hersteller',
      how: 'Klinische Praxiserfahrung, Herstellerschulungen, Sachkundenachweis als Medizinprodukteberater/in nach § 83 MPDG sowie Reisebereitschaft und gute Kommunikationsfähigkeit.'
    },
    {
      from: 'Software-Entwickler/in (z. B. nach Informatik- oder Medizininformatikstudium)',
      to: 'Software-Architekt/in bzw. Verantwortliche/r für Medical Software',
      how: 'Vertiefung in IEC 62304, IEC 82304-1, IEC 62366-1 und Cybersecurity; Erfahrung mit Software als Medizinprodukt sowie Schnittstellenkompetenz zu Regulatory Affairs.'
    }
  ]
};
