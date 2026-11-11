/* MedTech Career Hub – Arbeitgeber (Teil B): Krankenhäuser, Servicedienstleister, Prüf- und Zertifizierungsstellen,
 * Labore und Forschungseinrichtungen in Deutschland/DACH.
 * Stand: November 2026. Zahlen nur, wenn belastbar; Kennnummern Benannter Stellen vor Verwendung in NANDO prüfen.
 * Klassisches Skript (kein ES-Modul).
 */
window.MTH = window.MTH || {};
MTH.employers = (MTH.employers || []).concat([
  /* ---------------------------------------------------------------- Krankenhäuser */
  {
    id: 'charite', name: 'Charité – Universitätsmedizin Berlin',
    type: 'krankenhaus',
    hq: 'Berlin', state: 'Berlin', region: 'ost',
    locations: ['Campus Charité Mitte', 'Campus Virchow-Klinikum', 'Campus Benjamin Franklin', 'Campus Berlin Buch'],
    focus: ['Universitäre Maximalversorgung', 'Forschung und Lehre', 'Bildgebung und Strahlentherapie', 'Intensivmedizin'],
    size: 'Öffentliche Einrichtung',
    founded: '1710',
    description: 'Eines der größten Universitätsklinika Europas mit mehreren Campus-Standorten in Berlin. Der umfangreiche Gerätepark – von Großgeräten der Radiologie bis zur Intensivmedizin – wird überwiegend durch die Tochtergesellschaft Charité CFM betreut. Für Medizinphysik, Medizininformatik und forschungsnahe Technikprojekte bestehen zudem zahlreiche Stellen in Kliniken und Instituten.',
    professionIds: ['medizinphysiker', 'biomedizinischer-ingenieur', 'software-entwickler', 'medizintechnikingenieur', 'technischer-leiter', 'qualitaetsmanager'],
    website: 'https://www.charite.de'
  },
  {
    id: 'ukhd', name: 'Universitätsklinikum Heidelberg',
    type: 'krankenhaus',
    hq: 'Heidelberg', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Heidelberg (Campus Im Neuenheimer Feld)'],
    focus: ['Universitäre Maximalversorgung', 'Onkologie und Strahlentherapie (u. a. Ionenstrahl-Therapiezentrum HIT)', 'Medizinische Software', 'Translationale Forschung'],
    size: 'Öffentliche Einrichtung',
    description: 'Großes Universitätsklinikum mit enger Verbindung zum Deutschen Krebsforschungszentrum und zum Heidelberger Ionenstrahl-Therapiezentrum (HIT). Die Abteilung Medizintechnik betreut den gesamten Geräte- und Anlagenpark; zudem ist das Klinikum für die Eigenentwicklung medizinischer Software als Medizinprodukt zertifiziert. Interessant für Medizinphysik, Medizintechnik und Softwareentwicklung.',
    professionIds: ['medizinphysiker', 'medizintechnikingenieur', 'medizintechniker', 'geraetemanagement', 'software-entwickler', 'regulatory-affairs', 'technischer-leiter'],
    website: 'https://www.klinikum.uni-heidelberg.de'
  },
  {
    id: 'lmu-klinikum', name: 'LMU Klinikum München',
    type: 'krankenhaus',
    hq: 'München', state: 'Bayern', region: 'sued',
    locations: ['Campus Großhadern', 'Campus Innenstadt'],
    focus: ['Universitäre Maximalversorgung', 'Radiologie und Nuklearmedizin', 'Strahlentherapie', 'Klinische Forschung'],
    size: 'Öffentliche Einrichtung',
    description: 'Universitätsklinikum der Ludwig-Maximilians-Universität mit den Hauptstandorten Großhadern und Innenstadt. Die Medizintechnik verantwortet Beschaffung, Instandhaltung und sicherheitstechnische Prüfungen nach MPBetreibV für einen großen, heterogenen Gerätepark. Medizinphysik-Expertinnen und -Experten sind in Strahlentherapie, Nuklearmedizin und Radiologie tätig.',
    professionIds: ['medizintechniker', 'medizintechnikingenieur', 'geraetemanagement', 'medizinphysiker', 'technischer-leiter', 'biomedizinischer-ingenieur'],
    website: 'https://www.lmu-klinikum.de'
  },
  {
    id: 'uke', name: 'Universitätsklinikum Hamburg-Eppendorf (UKE)',
    type: 'krankenhaus',
    hq: 'Hamburg', state: 'Hamburg', region: 'nord',
    locations: ['Hamburg-Eppendorf'],
    focus: ['Universitäre Maximalversorgung', 'Digitalisierung im Krankenhaus', 'Herz- und Gefäßmedizin', 'Forschung und Lehre'],
    size: 'Öffentliche Einrichtung',
    founded: '1889 (Allgemeines Krankenhaus Eppendorf)',
    description: 'Universitätsklinikum im Norden Hamburgs, bekannt für seine weitgehend digitalisierte Patientenversorgung. Medizintechnik und IT arbeiten eng zusammen, etwa bei vernetzten Geräten und Medizingeräte-Schnittstellen. Gefragt sind Fachkräfte für Gerätemanagement, Medizinphysik und Medizininformatik.',
    professionIds: ['medizintechniker', 'medizintechnikingenieur', 'geraetemanagement', 'medizinphysiker', 'software-entwickler', 'technischer-leiter'],
    website: 'https://www.uke.de'
  },
  {
    id: 'uniklinik-koeln', name: 'Uniklinik Köln',
    type: 'krankenhaus',
    hq: 'Köln', state: 'Nordrhein-Westfalen', region: 'west',
    locations: ['Köln-Lindenthal'],
    focus: ['Universitäre Maximalversorgung', 'Onkologie (CIO)', 'Strahlentherapie', 'Herzzentrum'],
    size: 'Öffentliche Einrichtung',
    description: 'Universitätsklinikum der Universität zu Köln mit großem Spektrum an Fachkliniken und Zentren. Das Medizintechnik-Team betreut Medizinprodukte über den gesamten Lebenszyklus – von der Beschaffung über Einweisungen bis zu STK und MTK. Für Medizinphysikerinnen und Medizinphysiker bieten Strahlentherapie und Nuklearmedizin Einsatzfelder.',
    professionIds: ['medizintechniker', 'medizintechnikingenieur', 'geraetemanagement', 'medizinphysiker', 'technischer-leiter'],
    website: 'https://www.uk-koeln.de'
  },
  {
    id: 'ukdd', name: 'Universitätsklinikum Carl Gustav Carus Dresden',
    type: 'krankenhaus',
    hq: 'Dresden', state: 'Sachsen', region: 'ost',
    locations: ['Dresden-Johannstadt'],
    focus: ['Universitäre Maximalversorgung', 'Protonentherapie (OncoRay)', 'Onkologie', 'Digitale Medizin'],
    size: 'Öffentliche Einrichtung',
    description: 'Universitätsklinikum der TU Dresden mit einem Schwerpunkt in der Krebsmedizin, unter anderem mit dem Nationalen Zentrum für Tumorerkrankungen (NCT/UCC) Dresden und der Protonentherapie. Medizintechnik, Medizinphysik und Forschungsgruppen arbeiten eng mit Hochschule und Forschungsinstituten der Region zusammen.',
    professionIds: ['medizinphysiker', 'medizintechniker', 'medizintechnikingenieur', 'geraetemanagement', 'biomedizinischer-ingenieur'],
    website: 'https://www.uniklinikum-dresden.de'
  },
  {
    id: 'helios', name: 'Helios Kliniken',
    type: 'krankenhaus',
    hq: 'Berlin', state: 'Berlin', region: 'ost',
    locations: ['Bundesweit über 80 Kliniken, u. a. Berlin-Buch, Erfurt, Krefeld, Wuppertal, Schwerin'],
    focus: ['Akut- und Maximalversorgung', 'Zentraler Einkauf und Gerätestandardisierung', 'Medizintechnik-Management'],
    size: 'Konzern',
    founded: '1994',
    description: 'Größter privater Klinikbetreiber Deutschlands und Teil des Fresenius-Konzerns. Medizintechnik wird an den Standorten durch eigene Abteilungen betreut und konzernweit über Fachgruppen und Rahmenverträge gesteuert. Vielfältige Einstiegs- und Aufstiegsmöglichkeiten bis zur regionalen oder zentralen Leitung Medizintechnik.',
    professionIds: ['medizintechniker', 'geraetemanagement', 'medizintechnikingenieur', 'technischer-leiter', 'medizinphysiker', 'qualitaetsmanager'],
    website: 'https://www.helios-gesundheit.de'
  },
  {
    id: 'asklepios', name: 'Asklepios Kliniken',
    type: 'krankenhaus',
    hq: 'Hamburg', state: 'Hamburg', region: 'nord',
    locations: ['Hamburg (u. a. AK St. Georg, AK Barmbek, AK Altona)', 'Hessen', 'Bayern', 'Brandenburg', 'Thüringen'],
    focus: ['Akut- und Fachkliniken', 'Rehabilitation', 'Digitalisierung'],
    size: 'Konzern',
    founded: '1985',
    description: 'Großer privater Klinikkonzern mit Schwerpunkt in Hamburg und Kliniken in zahlreichen Bundesländern. Die Medizintechnik der Häuser übernimmt Instandhaltung, Prüfungen und Investitionsplanung. Typische Einstiegsrollen sind Medizintechniker/in und Mitarbeiter/in im Gerätemanagement.',
    professionIds: ['medizintechniker', 'geraetemanagement', 'medizintechnikingenieur', 'technischer-leiter', 'medizinphysiker'],
    website: 'https://www.asklepios.com'
  },
  {
    id: 'sana-kliniken', name: 'Sana Kliniken AG',
    type: 'krankenhaus',
    hq: 'Ismaning', state: 'Bayern', region: 'sued',
    locations: ['Bundesweit Kliniken, u. a. Berlin-Lichtenberg, Duisburg, Düsseldorf, Hof, Lübeck'],
    focus: ['Akut- und Schwerpunktversorgung', 'Krankenhausdienstleistungen (Medizintechnik, Sterilgut)'],
    size: 'Konzern',
    founded: '1976',
    description: 'Klinikkonzern im Besitz privater Krankenversicherungen mit Hauptsitz in Ismaning bei München. Neben dem Klinikbetrieb bietet Sana über eigene Dienstleistungsgesellschaften medizintechnischen Service auch für konzernfremde Häuser an. Dadurch entstehen Stellen sowohl in Kliniken als auch im überregionalen Gerätemanagement.',
    professionIds: ['medizintechniker', 'geraetemanagement', 'medizintechnikingenieur', 'technischer-leiter', 'medizinphysiker'],
    website: 'https://www.sana.de'
  },
  {
    id: 'vivantes', name: 'Vivantes – Netzwerk für Gesundheit',
    type: 'krankenhaus',
    hq: 'Berlin', state: 'Berlin', region: 'ost',
    locations: ['Berlin (u. a. Klinikum Neukölln, Klinikum im Friedrichshain, Klinikum Spandau, Humboldt-Klinikum)'],
    focus: ['Kommunale Akut- und Notfallversorgung', 'Zentrale Medizintechnik'],
    size: 'Öffentliche Einrichtung',
    founded: '2001',
    description: 'Größter kommunaler Krankenhauskonzern Deutschlands im Eigentum des Landes Berlin mit mehreren Klinika in der Stadt. Die Medizintechnik ist zentral organisiert und betreut die Geräte aller Standorte. Bezahlung in Anlehnung an den TVöD.',
    professionIds: ['medizintechniker', 'geraetemanagement', 'medizintechnikingenieur', 'technischer-leiter', 'medizinphysiker'],
    website: 'https://www.vivantes.de'
  },
  {
    id: 'usz', name: 'Universitätsspital Zürich (USZ)',
    type: 'krankenhaus',
    hq: 'Zürich', state: 'Kanton Zürich (Schweiz)', region: 'international',
    locations: ['Zürich'],
    focus: ['Universitäre Maximalversorgung', 'Radio-Onkologie', 'Medizintechnik und Medizininformatik'],
    size: 'Öffentliche Einrichtung',
    description: 'Eines der größten Spitäler der Schweiz und Universitätsspital der Universität Zürich. Für deutschsprachige Fachkräfte attraktiv, wobei in der Schweiz eigene Regelungen gelten (MepV statt MPDG/MPBetreibV, Strahlenschutzrecht nach StSV). Einsatzfelder bieten Medizintechnik, Medizinphysik und Informatik.',
    professionIds: ['medizintechnikingenieur', 'medizintechniker', 'medizinphysiker', 'geraetemanagement', 'technischer-leiter'],
    website: 'https://www.usz.ch'
  },

  /* ---------------------------------------------------------------- Service / Gerätemanagement */
  {
    id: 'charite-cfm', name: 'Charité CFM Facility Management GmbH',
    type: 'service',
    hq: 'Berlin', state: 'Berlin', region: 'ost',
    locations: ['Berlin (Campus-Standorte der Charité)'],
    focus: ['Medizintechnisches Gerätemanagement', 'Instandhaltung und STK/MTK', 'Konstanzprüfungen nach StrlSchV', 'Gebäude- und Betriebstechnik'],
    size: 'Großunternehmen',
    founded: '2006',
    description: 'Tochtergesellschaft der Charité für Facility-Management und Medizintechnik. Der Geschäftsbereich Medizintechnik betreut nach eigenen Angaben mehr als 94.000 Geräte an den Charité-Standorten, einschließlich Konstanzprüfungen in der Radiologie. Angeboten wird auch ein duales Studium Medizintechnik.',
    professionIds: ['medizintechniker', 'geraetemanagement', 'servicetechniker', 'medizintechnikingenieur', 'technischer-leiter', 'qualitaetsmanager']
  },
  {
    id: 'sana-medizintechnik-service', name: 'Sana Medizintechnisches Servicezentrum GmbH (Sana Klinik Service)',
    type: 'service',
    hq: 'Ismaning', state: 'Bayern', region: 'sued',
    locations: ['Bundesweite Servicestandorte in Kliniken'],
    focus: ['Herstellerunabhängiges Gerätemanagement', 'Instandhaltung und Prüfungen nach MPBetreibV', 'Aufbereitung von Medizinprodukten (AEMP)'],
    size: 'Großunternehmen',
    description: 'Dienstleistungsgesellschaft innerhalb der Sana-Gruppe (Geschäftsbereich Krankenhaus-Services), die Medizintechnik- und AEMP-Leistungen für Sana-Kliniken und externe Krankenhäuser erbringt. Typisch sind Stellen für Servicetechniker/innen, Medizintechniker/innen und Leitungsfunktionen in regionalen Medizintechnik-Teams.',
    professionIds: ['servicetechniker', 'medizintechniker', 'geraetemanagement', 'technischer-leiter', 'qualitaetsmanager'],
    website: 'https://www.sana.de'
  },
  {
    id: 'draeger-tgm', name: 'Dräger TGM GmbH (Multivendor Service)',
    type: 'service',
    hq: 'Lübeck', state: 'Schleswig-Holstein', region: 'nord',
    locations: ['Lübeck', 'Einsatz in Kliniken bundesweit'],
    focus: ['Technisches Gerätemanagement', 'Herstellerübergreifender Service (Multivendor)', 'Wartung, STK und Prüfungen'],
    size: 'Mittelstand',
    description: 'Servicegesellschaft des Dräger-Konzerns, die im Krankenhaus nicht nur Dräger-Geräte, sondern Geräteparks unterschiedlicher Hersteller betreut. Mitarbeitende arbeiten häufig vor Ort in den Kundenkliniken. Ein typischer Arbeitgeber für Servicetechniker/innen und Medizintechniker/innen mit Interesse an breiter Gerätevielfalt.',
    professionIds: ['servicetechniker', 'medizintechniker', 'geraetemanagement', 'technischer-leiter'],
    website: 'https://www.draeger.com/de_de/Hospital/Services/Multivendor-Service'
  },
  {
    id: 'fresenius-health-services', name: 'Fresenius Health Services GmbH',
    type: 'service',
    hq: 'Berlin', state: 'Berlin', region: 'ost',
    locations: ['Berlin', 'Servicestandorte in Kliniken in Deutschland und weiteren europäischen Ländern'],
    focus: ['Medizintechnik-Management', 'Gebäude- und Betriebstechnik', 'Sterilgutversorgung'],
    size: 'Großunternehmen',
    description: 'Seit Januar 2025 führt Fresenius das zuvor zu VAMED gehörende Geschäft mit technischen Krankenhausdienstleistungen als Tochtergesellschaft unter dem Namen Fresenius Health Services weiter. Angeboten werden Betrieb und Instandhaltung der Medizintechnik, Gebäudetechnik und Sterilgutversorgung für Gesundheitseinrichtungen.',
    professionIds: ['medizintechniker', 'servicetechniker', 'geraetemanagement', 'medizintechnikingenieur', 'technischer-leiter'],
    website: 'https://www.fresenius.com'
  },

  /* ---------------------------------------------------------------- Prüfdienste / Benannte Stellen */
  {
    id: 'tuev-sued', name: 'TÜV SÜD Product Service GmbH',
    type: 'pruefdienst',
    hq: 'München', state: 'Bayern', region: 'sued',
    locations: ['München', 'weitere Standorte in Deutschland'],
    focus: ['Benannte Stelle nach MDR/IVDR (Kennnummer 0123)', 'Zertifizierung nach ISO 13485', 'Prüfungen nach IEC 60601', 'Software-Bewertung nach IEC 62304'],
    size: 'Konzern',
    founded: '1866 (TÜV SÜD)',
    description: 'Eine der größten Benannten Stellen für Medizinprodukte und In-vitro-Diagnostika in Europa. Auditorinnen, Auditoren und Produktspezialisten bewerten technische Dokumentationen, Qualitätsmanagementsysteme und klinische Bewertungen. Gefragt sind Ingenieurinnen und Ingenieure mit mehrjähriger Industrieerfahrung.',
    professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'medizintechnikingenieur', 'biomedizinischer-ingenieur', 'software-entwickler'],
    website: 'https://www.tuvsud.com/de-de'
  },
  {
    id: 'tuev-rheinland', name: 'TÜV Rheinland',
    type: 'pruefdienst',
    hq: 'Köln', state: 'Nordrhein-Westfalen', region: 'west',
    locations: ['Köln', 'Nürnberg (TÜV Rheinland LGA Products)', 'weitere Standorte'],
    focus: ['Konformitätsbewertung nach MDR', 'Produktprüfung Medizintechnik', 'Klinikservice: STK/MTK und Gerätemanagement-Beratung'],
    size: 'Konzern',
    founded: '1872',
    description: 'Prüfkonzern, der sowohl Herstellern (Prüfung und Zertifizierung von Medizinprodukten) als auch Krankenhäusern (sicherheitstechnische und messtechnische Kontrollen, Beratung zum Gerätemanagement) Dienstleistungen anbietet. Dadurch passen Profile aus Regulatorik ebenso wie aus der Krankenhaustechnik.',
    professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'medizintechnikingenieur', 'medizintechniker', 'servicetechniker'],
    website: 'https://www.tuv.com'
  },
  {
    id: 'tuev-nord', name: 'TÜV NORD Gruppe (TÜV NORD CERT)',
    type: 'pruefdienst',
    hq: 'Hannover', state: 'Niedersachsen', region: 'nord',
    locations: ['Hannover', 'Essen (TÜV NORD CERT GmbH)', 'Hamburg'],
    focus: ['Benannte Stelle nach MDR (TÜV NORD CERT, Kennnummer 0044)', 'Zertifizierung nach ISO 13485', 'Prüfung medizinischer elektrischer Geräte'],
    size: 'Konzern',
    description: 'Technischer Dienstleistungskonzern, dessen Zertifizierungsgesellschaft TÜV NORD CERT als Benannte Stelle Medizinprodukte nach MDR bewertet. Typische Rollen sind Produktgutachter/in, Lead Auditor/in und Prüfingenieur/in.',
    professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'medizintechnikingenieur', 'biomedizinischer-ingenieur'],
    website: 'https://www.tuev-nord.de'
  },
  {
    id: 'dekra', name: 'DEKRA',
    type: 'pruefdienst',
    hq: 'Stuttgart', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Stuttgart', 'bundesweite Niederlassungen'],
    focus: ['Benannte Stelle für Medizinprodukte (DEKRA Certification GmbH, Kennnummer 0124)', 'Audits nach ISO 13485', 'Prüfungen ortsveränderlicher Geräte'],
    size: 'Konzern',
    founded: '1925',
    description: 'Internationale Prüforganisation mit Sitz in Stuttgart, die über ihre Zertifizierungsgesellschaften Medizinprodukte und Qualitätsmanagementsysteme bewertet. Für Fachkräfte mit Erfahrung aus Entwicklung, Qualitätsmanagement oder Regulatory Affairs bietet DEKRA Wege in die Auditoren- und Gutachtertätigkeit.',
    professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'medizintechnikingenieur', 'servicetechniker'],
    website: 'https://www.dekra.de'
  },
  {
    id: 'vde-institut', name: 'VDE Prüf- und Zertifizierungsinstitut GmbH',
    type: 'pruefdienst',
    hq: 'Offenbach am Main', state: 'Hessen', region: 'west',
    locations: ['Offenbach am Main'],
    focus: ['Elektrische Sicherheit nach IEC 60601', 'EMV-Prüfungen', 'Prüfzeichen und Zertifizierung elektrotechnischer Produkte'],
    size: 'Mittelstand',
    description: 'Prüfinstitut des Verbands der Elektrotechnik Elektronik Informationstechnik (VDE) mit eigenen Laboren für elektrische Sicherheit und elektromagnetische Verträglichkeit. Für Medizintechnik relevant sind insbesondere Prüfungen medizinischer elektrischer Geräte nach der Normenreihe IEC 60601. Gefragt sind Prüfingenieurinnen und Prüfingenieure aus der Elektrotechnik.',
    professionIds: ['medizintechnikingenieur', 'biomedizinischer-ingenieur', 'qualitaetsmanager', 'regulatory-affairs'],
    website: 'https://www.vde.com/tic-de'
  },
  {
    id: 'mdc', name: 'mdc medical device certification GmbH',
    type: 'pruefdienst',
    hq: 'Stuttgart', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Stuttgart', 'Berlin', 'Tuttlingen'],
    focus: ['Benannte Stelle für Medizinprodukte und IVD (Kennnummer 0483)', 'Zertifizierung nach ISO 13485', 'Bewertung technischer Dokumentationen'],
    size: 'Mittelstand',
    description: 'Auf Medizinprodukte und In-vitro-Diagnostika spezialisierte Benannte Stelle mit Sitz in Stuttgart. Das Unternehmen ist seit 1994 unter der Kennnummer 0483 notifiziert. Typische Positionen sind Auditor/in, Produktspezialist/in für technische Dokumentation und Fachexpert/in für klinische Bewertung.',
    professionIds: ['regulatory-affairs', 'qualitaetsmanager', 'medizintechnikingenieur', 'biomedizinischer-ingenieur'],
    website: 'https://www.mdc-ce.de'
  },
  {
    id: 'dqs-med', name: 'DQS Medizinprodukte GmbH',
    type: 'pruefdienst',
    hq: 'Frankfurt am Main', state: 'Hessen', region: 'west',
    locations: ['Frankfurt am Main'],
    focus: ['Benannte Stelle nach MDR (Kennnummer 0297)', 'Zertifizierung nach ISO 13485', 'MDSAP-Audits'],
    size: 'Mittelstand',
    founded: '1995',
    description: 'Benannte Stelle für Medizinprodukte innerhalb der DQS-Gruppe, die von der ZLG nach Verordnung (EU) 2017/745 benannt ist. Neben Konformitätsbewertungen führt sie Audits von Qualitätsmanagementsystemen durch. Gute Option für Qualitäts- und Regulatory-Fachleute, die in die Auditorentätigkeit wechseln möchten.',
    professionIds: ['qualitaetsmanager', 'regulatory-affairs', 'medizintechnikingenieur'],
    website: 'https://www.dqsglobal.com/de'
  },

  /* ---------------------------------------------------------------- Labore */
  {
    id: 'synlab', name: 'SYNLAB',
    type: 'labor',
    hq: 'München', state: 'Bayern', region: 'sued',
    locations: ['München', 'bundesweite Laborstandorte'],
    focus: ['Medizinische Labordiagnostik', 'Laborautomation', 'Labor-IT'],
    size: 'Konzern',
    description: 'Internationaler Anbieter medizinischer Labordiagnostik mit zahlreichen Laborstandorten in Deutschland. Hochautomatisierte Analysenstraßen, Labor-IT und qualitätsgesicherte Prozesse nach IVDR- und Akkreditierungsanforderungen schaffen Bedarf an Technik-, IT- und Qualitätsprofilen.',
    professionIds: ['anwendungstechniker', 'qualitaetsmanager', 'software-entwickler', 'servicetechniker', 'biomedizinischer-ingenieur'],
    website: 'https://www.synlab.de'
  },
  {
    id: 'limbach', name: 'Limbach Gruppe',
    type: 'labor',
    hq: 'Heidelberg', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Heidelberg', 'bundesweite Laborstandorte'],
    focus: ['Labormedizin', 'Mikrobiologie und Humangenetik', 'Labor-IT und Organisation'],
    size: 'Großunternehmen',
    description: 'Inhabergeführter Laborverbund mit Stammsitz in Heidelberg und Laboren in mehreren Bundesländern sowie im europäischen Ausland. Neben medizinischem Laborpersonal werden IT-, Qualitäts- und Organisationsfachleute gesucht, etwa für Laborautomation und Qualitätsmanagement.',
    professionIds: ['qualitaetsmanager', 'software-entwickler', 'anwendungstechniker', 'biomedizinischer-ingenieur'],
    website: 'https://www.limbachgruppe.com'
  },
  {
    id: 'sonic-bioscientia', name: 'Sonic Healthcare Germany / Bioscientia',
    type: 'labor',
    hq: 'Ingelheim am Rhein', state: 'Rheinland-Pfalz', region: 'west',
    locations: ['Ingelheim', 'Berlin', 'Jena', 'Freiburg', 'Moers', 'St. Ingbert'],
    focus: ['Labormedizin und Spezialdiagnostik', 'Humangenetik', 'Laborautomation und zentrale Labor-IT'],
    size: 'Großunternehmen',
    description: 'Bioscientia gehört seit 2007 zur australischen Sonic-Healthcare-Gruppe, die in Deutschland mehrere Laborverbünde betreibt. Der Standort Ingelheim gilt als größtes medizinisches Labor in Rheinland-Pfalz; dort ist auch die zentrale IT angesiedelt. Einsatzfelder bestehen in Laborautomation, IT und Qualitätsmanagement.',
    professionIds: ['qualitaetsmanager', 'software-entwickler', 'anwendungstechniker', 'servicetechniker'],
    website: 'https://www.bioscientia.de'
  },
  {
    id: 'amedes', name: 'amedes Gruppe',
    type: 'labor',
    hq: 'Göttingen', state: 'Niedersachsen', region: 'nord',
    locations: ['Göttingen', 'Hamburg', 'Hannover', 'weitere Standorte in Deutschland'],
    focus: ['Labordiagnostik', 'Humangenetik', 'Pathologie'],
    size: 'Großunternehmen',
    description: 'Anbieter medizinischer Diagnostik mit Laboren und Praxen an zahlreichen Standorten in Deutschland sowie im Ausland. In Göttingen bündelt das Kompetenzzentrum „NewHome“ Labor, Logistik und zentrale Unternehmensbereiche. Bedarf besteht unter anderem an IT-, Qualitäts- und Technikfachkräften.',
    professionIds: ['qualitaetsmanager', 'software-entwickler', 'anwendungstechniker'],
    website: 'https://www.amedes-group.com'
  },

  /* ---------------------------------------------------------------- Forschung */
  {
    id: 'fraunhofer-mevis', name: 'Fraunhofer-Institut für Digitale Medizin MEVIS',
    type: 'forschung',
    hq: 'Bremen', state: 'Bremen', region: 'nord',
    locations: ['Bremen', 'Lübeck'],
    focus: ['Medizinische Bildverarbeitung', 'KI in der Diagnostik', 'Software für Radiologie und Chirurgie'],
    size: 'Forschungseinrichtung',
    founded: '1995 (als MeVis), seit 2009 Fraunhofer-Institut',
    description: 'Fraunhofer-Institut für Software zur bildgestützten Diagnostik und Therapie. Entwicklungen reichen von KI-Methoden für Radiologie und Pathologie bis zu Planungssoftware für chirurgische Eingriffe, häufig in Kooperation mit Kliniken und Herstellern. Ideal für Software-Entwickler/innen und Biomedizintechniker/innen mit Interesse an angewandter Forschung.',
    professionIds: ['software-entwickler', 'biomedizinischer-ingenieur', 'medizinphysiker', 'regulatory-affairs'],
    website: 'https://www.mevis.fraunhofer.de'
  },
  {
    id: 'fraunhofer-ibmt', name: 'Fraunhofer-Institut für Biomedizinische Technik IBMT',
    type: 'forschung',
    hq: 'Sulzbach (Saar)', state: 'Saarland', region: 'west',
    locations: ['Sulzbach (Saar)', 'Potsdam-Golm'],
    focus: ['Ultraschalltechnik', 'Medizintechnische Sensorik und Elektronik', 'Biobanken und Kryotechnologie'],
    size: 'Forschungseinrichtung',
    founded: '1987',
    description: 'Fraunhofer-Institut für biomedizinische Technik mit Schwerpunkten unter anderem in Ultraschall, Sensorik, Mikrosystemen und Kryobiotechnologie. Arbeitet in Auftragsforschung für Industrie und öffentliche Geldgeber. Geeignet für Ingenieurinnen und Ingenieure der Medizintechnik, Elektrotechnik und Physik.',
    professionIds: ['biomedizinischer-ingenieur', 'medizintechnikingenieur', 'software-entwickler', 'medizinphysiker'],
    website: 'https://www.ibmt.fraunhofer.de'
  },
  {
    id: 'dkfz', name: 'Deutsches Krebsforschungszentrum (DKFZ)',
    type: 'forschung',
    hq: 'Heidelberg', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Heidelberg'],
    focus: ['Medizinische Physik in der Strahlentherapie', 'Bildgebung und Radiologie', 'Medizinische Bildverarbeitung und KI'],
    size: 'Forschungseinrichtung',
    founded: '1964',
    description: 'Größte biomedizinische Forschungseinrichtung Deutschlands und Mitglied der Helmholtz-Gemeinschaft. Abteilungen der Medizinischen Physik in Strahlentherapie und Radiologie sowie Gruppen für Bildverarbeitung bieten Stellen für Physik, Ingenieurwesen und Informatik, häufig mit Promotionsmöglichkeit.',
    professionIds: ['medizinphysiker', 'biomedizinischer-ingenieur', 'software-entwickler', 'medizintechnikingenieur'],
    website: 'https://www.dkfz.de'
  },
  {
    id: 'ptb', name: 'Physikalisch-Technische Bundesanstalt (PTB)',
    type: 'forschung',
    hq: 'Braunschweig', state: 'Niedersachsen', region: 'nord',
    locations: ['Braunschweig', 'Berlin'],
    focus: ['Metrologie in der Medizin', 'Dosimetrie und Strahlenschutz', 'Medizinische Messtechnik (z. B. MRT, Ultraschall)'],
    size: 'Öffentliche Einrichtung',
    founded: '1887 (als Physikalisch-Technische Reichsanstalt)',
    description: 'Nationales Metrologieinstitut Deutschlands im Geschäftsbereich des Bundeswirtschaftsministeriums. Für die Medizintechnik relevant sind unter anderem Dosimetrie-Normale für die Strahlentherapie sowie die messtechnischen Grundlagen für messtechnische Kontrollen nach MPBetreibV. Stellen richten sich vor allem an Physiker/innen und Ingenieur/innen.',
    professionIds: ['medizinphysiker', 'biomedizinischer-ingenieur', 'medizintechnikingenieur'],
    website: 'https://www.ptb.de'
  },
  {
    id: 'kit', name: 'Karlsruher Institut für Technologie (KIT)',
    type: 'forschung',
    hq: 'Karlsruhe', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Karlsruhe', 'Eggenstein-Leopoldshafen (Campus Nord)'],
    focus: ['Biomedizinische Technik (u. a. Institut für Biomedizinische Technik)', 'Medizinische Robotik', 'Mikro- und Nanotechnologie'],
    size: 'Forschungseinrichtung',
    founded: '2009 (Fusion von Universität Karlsruhe und Forschungszentrum Karlsruhe)',
    description: 'Technische Universität und Großforschungseinrichtung der Helmholtz-Gemeinschaft. Institute wie das Institut für Biomedizinische Technik forschen etwa zu kardialer Modellierung und medizinischer Signalverarbeitung. Bietet Stellen für wissenschaftliche Mitarbeitende, Promovierende und technische Fachkräfte.',
    professionIds: ['biomedizinischer-ingenieur', 'medizintechnikingenieur', 'software-entwickler', 'medizinphysiker'],
    website: 'https://www.kit.edu'
  },
  {
    id: 'nmi', name: 'NMI Naturwissenschaftliches und Medizinisches Institut an der Universität Tübingen',
    type: 'forschung',
    hq: 'Reutlingen', state: 'Baden-Württemberg', region: 'sued',
    locations: ['Reutlingen'],
    focus: ['Medizintechnik und Biomaterialien', 'Bioelektronik und Neuroimplantate', 'Pharma- und Biotech-Dienstleistungen'],
    size: 'Forschungseinrichtung',
    founded: '1985',
    description: 'Anwendungsorientiertes Forschungsinstitut an der Schnittstelle von Lebens- und Materialwissenschaften, Mitglied der Innovationsallianz Baden-Württemberg. Für die Medizintechnik relevant sind unter anderem Oberflächen und Biomaterialien für Implantate sowie Mikroelektroden. Zusammenarbeit vor allem mit Unternehmen aus der Region.',
    professionIds: ['biomedizinischer-ingenieur', 'medizintechnikingenieur', 'qualitaetsmanager'],
    website: 'https://www.nmi.de'
  }
]);
