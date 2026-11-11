/* =========================================================
   MedTech Career Hub – Anwendung (Hash-Router, Seiten, Tools)
   ========================================================= */
(function () {
  'use strict';

  var MTH = window.MTH || {};
  var C = window.MTHCharts;
  var esc = C.esc;

  /* ---------------------------------------------------------
     Daten vorbereiten (defensiv – fehlende Felder sind erlaubt)
     --------------------------------------------------------- */
  var PROF_ORDER = ['medizintechniker', 'biomedizinischer-ingenieur', 'servicetechniker', 'medizintechnikingenieur',
    'medizinphysiker', 'technischer-leiter', 'geraetemanagement', 'produktspezialist', 'anwendungstechniker',
    'qualitaetsmanager', 'regulatory-affairs', 'software-entwickler'];

  var professions = (MTH.professions || []).slice().sort(function (a, b) {
    var ia = PROF_ORDER.indexOf(a.id), ib = PROF_ORDER.indexOf(b.id);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  var education = MTH.education || { programs: [] };
  var programs = education.programs || [];
  var employers = (MTH.employers || []).slice().sort(function (a, b) { return a.name.localeCompare(b.name, 'de'); });
  var salaries = MTH.salaries || { byProfession: {} };
  var tools = MTH.tools || {};

  function indexBy(list) { var m = {}; list.forEach(function (x) { m[x.id] = x; }); return m; }
  var profById = indexBy(professions);
  var progById = indexBy(programs);
  var empById = indexBy(employers);

  var DIMENSIONS = (tools.dimensions && tools.dimensions.length ? tools.dimensions : [
    { id: 'technik', label: 'Gerätetechnik' }, { id: 'medizin', label: 'Medizin & Biologie' },
    { id: 'physik', label: 'Physik & Mathe' }, { id: 'software', label: 'IT & Software' },
    { id: 'kommunikation', label: 'Kommunikation' }, { id: 'mobilitaet', label: 'Mobilität' },
    { id: 'regulatorik', label: 'Normen & Recht' }, { id: 'fuehrung', label: 'Führung' },
    { id: 'forschung', label: 'Forschung & Entwicklung' }
  ]);

  var CATEGORIES = [
    { id: 'Technik & Service', cls: 'cat-technik', short: 'Technik & Service' },
    { id: 'Ingenieurwesen & Entwicklung', cls: 'cat-ingenieur', short: 'Ingenieurwesen' },
    { id: 'Physik & Strahlung', cls: 'cat-physik', short: 'Physik & Strahlung' },
    { id: 'Management & Qualität', cls: 'cat-management', short: 'Management & Qualität' },
    { id: 'Vertrieb & Anwendung', cls: 'cat-vertrieb', short: 'Vertrieb & Anwendung' }
  ];
  function catCls(cat) { var c = CATEGORIES.filter(function (x) { return x.id === cat; })[0]; return c ? c.cls : 'cat-technik'; }

  var EMP_TYPES = [
    { id: 'hersteller', label: 'Hersteller', plural: 'Medizintechnikhersteller', icon: '🏭', color: '#2a78d6' },
    { id: 'krankenhaus', label: 'Krankenhaus', plural: 'Krankenhäuser & Kliniken', icon: '🏥', color: '#c43c3c' },
    { id: 'service', label: 'Serviceunternehmen', plural: 'Serviceunternehmen', icon: '🛠️', color: '#b8551f' },
    { id: 'pruefdienst', label: 'Prüfdienstleister', plural: 'Prüf- & Zertifizierungsdienstleister', icon: '✅', color: '#6250d6' },
    { id: 'labor', label: 'Labor', plural: 'Medizinische Labore', icon: '🧪', color: '#0f8a68' },
    { id: 'forschung', label: 'Forschung', plural: 'Forschungsinstitute', icon: '🔬', color: '#3c6e1f' }
  ];
  var empTypeById = indexBy(EMP_TYPES);

  var REGIONS = [
    { id: 'nord', label: 'Nord', long: 'Norddeutschland' },
    { id: 'ost', label: 'Ost', long: 'Ostdeutschland' },
    { id: 'west', label: 'West', long: 'Westdeutschland' },
    { id: 'sued', label: 'Süd', long: 'Süddeutschland' },
    { id: 'international', label: 'DACH/International', long: 'Österreich, Schweiz & international' }
  ];
  var regionById = indexBy(REGIONS);

  var EDU_TYPES = ['Ausbildung', 'Fachschule', 'Studium', 'Duales Studium', 'Weiterbildung', 'Zertifikat'];
  var EDU_ICONS = { 'Ausbildung': '🧰', 'Fachschule': '🏫', 'Studium': '🎓', 'Duales Studium': '🔁', 'Weiterbildung': '📈', 'Zertifikat': '📜' };

  /* ---------------------------------------------------------
     Hilfsfunktionen
     --------------------------------------------------------- */
  var app = document.getElementById('app');
  function arr(x) { return Array.isArray(x) ? x : (x ? [x] : []); }
  function list(items, cls) {
    items = arr(items);
    if (!items.length) return '<p class="muted small">Keine Angaben.</p>';
    return '<ul class="' + (cls || 'check-list') + '">' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }
  function tags(items, cls) {
    return '<div class="tags">' + arr(items).map(function (t) { return '<span class="tag ' + (cls || '') + '">' + esc(t) + '</span>'; }).join('') + '</div>';
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-'); }
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  }
  function initials(name) {
    var words = String(name).replace(/[()]/g, '').split(/[\s\-\/]+/).filter(function (w) { return w && /[A-Za-zÄÖÜ]/.test(w[0]); });
    var s = words.length === 1 ? words[0].slice(0, 2) : (words[0][0] + (words[1] ? words[1][0] : ''));
    return s.toUpperCase();
  }
  function outlookCls(o) { return slug(o || 'stabil'); }
  function safeUrl(u) { return /^https?:\/\//i.test(u || '') ? u : ''; }
  function extLink(url, text, cls) {
    url = safeUrl(url);
    if (!url) return '';
    return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"' + (cls ? ' class="' + cls + '"' : '') + '>' + esc(text) + ' <span aria-hidden="true">↗</span></a>';
  }
  function store(key, val) {
    try {
      if (val === undefined) { var v = localStorage.getItem('mth-' + key); return v ? JSON.parse(v) : null; }
      localStorage.setItem('mth-' + key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function pageHero(eyebrow, title, text, crumbs) {
    return '<section class="page-hero"><div class="container">' +
      (crumbs ? '<nav class="breadcrumb" aria-label="Brotkrumen">' + crumbs + '</nav>' : '') +
      (eyebrow ? '<div class="eyebrow">' + esc(eyebrow) + '</div>' : '') +
      '<h1>' + title + '</h1>' + (text ? '<p>' + text + '</p>' : '') + '</div></section>';
  }
  function crumb(parts) {
    return parts.map(function (p) { return p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + '</a>' : esc(p[0]); }).join(' › ');
  }
  function sal(id) { return (salaries.byProfession || {})[id]; }
  function median(id) {
    var s = sal(id); if (!s) return null;
    if (s.median) return s.median;
    if (s.mid) return (s.mid[0] + s.mid[1]) / 2;
    return null;
  }

  /* ---------- Merkliste ---------- */
  var favs = store('favs') || { professions: [], employers: [], programs: [] };
  ['professions', 'employers', 'programs'].forEach(function (k) { favs[k] = favs[k] || []; });
  function isFav(kind, id) { return favs[kind].indexOf(id) >= 0; }
  function toggleFav(kind, id) {
    var i = favs[kind].indexOf(id);
    if (i >= 0) favs[kind].splice(i, 1); else favs[kind].push(id);
    store('favs', favs);
    updateFavCount();
    return i < 0;
  }
  function favCount() { return favs.professions.length + favs.employers.length + favs.programs.length; }
  function updateFavCount() {
    var el = document.querySelector('.fav-count');
    var n = favCount();
    if (el) { el.textContent = n; el.hidden = n === 0; }
  }
  function favBtn(kind, id, name) {
    var on = isFav(kind, id);
    return '<button type="button" class="fav-btn" data-fav="' + kind + ':' + esc(id) + '" aria-pressed="' + on +
      '" aria-label="' + esc(name) + (on ? ' von Merkliste entfernen' : ' merken') + '" title="Merken">' + (on ? '★' : '☆') + '</button>';
  }

  /* ---------------------------------------------------------
     Karten-Komponenten
     --------------------------------------------------------- */
  function profCard(p) {
    var m = median(p.id);
    return '<article class="card card-link prof-card ' + catCls(p.category) + '">' +
      favBtn('professions', p.id, p.title) +
      '<a href="#/berufe/' + esc(p.id) + '" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;flex:1">' +
      '<div class="card-title-row"><span class="icon-badge" aria-hidden="true">' + esc(p.icon || '🩺') + '</span>' +
      '<div style="padding-right:2.2rem"><h3>' + esc(p.title) + '</h3><div class="meta"><span class="cat-dot"></span> ' + esc(p.category || '') + '</div></div></div>' +
      '<p class="small" style="margin-top:.7rem">' + esc(p.summary || '') + '</p>' +
      '<div class="card-foot"><span>' + (m ? 'Median ca. ' + C.keur(m) : '') + '</span>' +
      '<span class="outlook ' + outlookCls(p.outlook) + '">Aussichten: ' + esc(p.outlook || '–') + '</span></div>' +
      '</a></article>';
  }

  function empLogo(e, lg) {
    var t = empTypeById[e.type] || EMP_TYPES[0];
    return '<span class="logo-badge' + (lg ? ' lg' : '') + '" style="background:' + t.color + '" aria-hidden="true">' + esc(initials(e.name)) + '</span>';
  }
  function empCard(e) {
    var t = empTypeById[e.type] || {};
    return '<article class="card card-link">' + favBtn('employers', e.id, e.name) +
      '<a href="#/arbeitgeber/' + esc(e.id) + '" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;flex:1">' +
      '<div class="card-title-row">' + empLogo(e) + '<div style="padding-right:2.2rem"><h3>' + esc(e.name) + '</h3>' +
      '<div class="meta">' + esc(t.label || '') + ' · ' + esc(e.hq || '') + (e.state ? ', ' + esc(e.state) : '') + '</div></div></div>' +
      '<p class="small" style="margin-top:.7rem">' + esc(trunc(e.description, 170)) + '</p>' +
      '<div class="card-foot">' + tags(arr(e.focus).slice(0, 3)) + '</div></a></article>';
  }
  function trunc(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + ' …' : s; }

  function progCard(p) {
    return '<article class="card card-link">' + favBtn('programs', p.id, p.title) +
      '<a href="#/ausbildung/' + esc(p.id) + '" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;flex:1">' +
      '<div class="card-title-row"><span class="icon-badge" aria-hidden="true">' + (EDU_ICONS[p.type] || '🎓') + '</span>' +
      '<div style="padding-right:2.2rem"><h3>' + esc(p.title) + '</h3><div class="meta">' + esc(p.type) + (p.level ? ' · ' + esc(p.level) : '') + '</div></div></div>' +
      '<p class="small" style="margin-top:.7rem">' + esc(trunc(p.description, 160)) + '</p>' +
      '<div class="card-foot"><span>⏱ ' + esc(p.duration || '–') + '</span><span>' + esc(trunc(p.degree || '', 40)) + '</span></div></a></article>';
  }

  /* ---------------------------------------------------------
     Gehalts-Spannenbalken (HTML, mit Tooltip)
     --------------------------------------------------------- */
  function salaryRanges(ids, opts) {
    opts = opts || {};
    var rows = ids.map(function (id) { return { id: id, s: sal(id), p: profById[id] }; }).filter(function (r) { return r.s && r.p && r.s.entry; });
    if (!rows.length) return '<p class="muted">Keine Gehaltsdaten vorhanden.</p>';
    if (opts.sort) rows.sort(function (a, b) { return (median(b.id) || 0) - (median(a.id) || 0); });
    var lo = Math.min.apply(null, rows.map(function (r) { return r.s.entry[0]; }));
    var hi = Math.max.apply(null, rows.map(function (r) { return (r.s.senior || r.s.mid || r.s.entry)[1]; }));
    lo = Math.floor(lo / 10000) * 10000; hi = Math.ceil(hi / 10000) * 10000;
    function pct(v) { return ((v - lo) / (hi - lo) * 100).toFixed(2); }
    var ticks = [];
    var step = (hi - lo) > 80000 ? 20000 : 10000;
    for (var t = lo; t <= hi; t += step) ticks.push('<span style="left:' + pct(t) + '%">' + (t / 1000) + ' T€</span>');

    var html = '<div class="salary-ranges" role="table" aria-label="Gehaltsspannen nach Beruf">';
    rows.forEach(function (r) {
      var segs = [];
      var prevEnd = -Infinity;
      [['entry', 'Einstieg'], ['mid', 'Mit Berufserfahrung'], ['senior', 'Senior / Leitung']].forEach(function (k) {
        var v = r.s[k[0]]; if (!v) return;
        var start = Math.max(v[0], prevEnd);
        if (start >= v[1]) return;
        var gap = prevEnd > -Infinity ? ' margin-left:2px;' : '';
        segs.push('<span class="seg ' + k[0] + '" style="left:calc(' + pct(start) + '% + ' + (gap ? 2 : 0) + 'px);width:calc(' + (pct(v[1]) - pct(start)).toFixed(2) + '% - ' + (gap ? 2 : 0) + 'px)" tabindex="0" data-tip="' +
          esc('<strong>' + esc(r.p.title) + '</strong><br>' + k[1] + ': ' + C.eur(v[0]) + ' – ' + C.eur(v[1])) + '"></span>');
        prevEnd = v[1];
      });
      var m = median(r.id);
      html += '<div class="range-row" role="row"><div class="name" role="rowheader"><a href="#/berufe/' + esc(r.id) + '">' + esc(r.p.title) + '</a></div>' +
        '<div class="range-track" role="cell"><span class="bg"></span>' + segs.join('') +
        (m ? '<span class="median" style="left:calc(' + pct(m) + '% - 1px)" data-tip="' + esc('Median (Richtwert): ' + C.eur(m)) + '"></span>' : '') +
        '</div><div class="med" role="cell">' + (m ? C.keur(m) : '–') + '</div></div>';
    });
    html += '<div class="range-axis" aria-hidden="true"><div></div><div class="ticks">' + ticks.join('') + '</div><div style="text-align:right">Median</div></div></div>';
    html += '<div class="chart-legend"><span><i class="sw" style="background:var(--seq-250)"></i>Einstieg</span>' +
      '<span><i class="sw" style="background:var(--seq-450)"></i>Mit Erfahrung</span>' +
      '<span><i class="sw" style="background:var(--seq-600)"></i>Senior / Leitung</span>' +
      '<span><i class="sw" style="background:var(--text);width:3px"></i>Median</span>' +
      '<span class="muted">Jahresbrutto Vollzeit, Richtwerte</span></div>';
    return html;
  }

  function indexBars(items, labelKey) {
    // items: [{label, index}] – Index 100 = Bundesschnitt; Balken ab Basis 80
    var base = 80, top = Math.max(120, Math.max.apply(null, items.map(function (i) { return i.index || 100; })) + 2);
    function pct(v) { return ((v - base) / (top - base) * 100).toFixed(1); }
    return '<div>' + items.map(function (i) {
      return '<div class="hbar" data-tip="' + esc('<strong>' + esc(i[labelKey || 'label']) + '</strong><br>Index ' + i.index + ' (Bundesschnitt = 100)' + (i.note ? '<br>' + esc(i.note) : '')) + '">' +
        '<span>' + esc(i[labelKey || 'label']) + '</span><span class="track"><span class="fill" style="width:' + pct(i.index) + '%"></span>' +
        '<span class="baseline" style="left:' + pct(100) + '%" title="Bundesschnitt"></span></span><span class="val">' + i.index + '</span></div>';
    }).join('') + '</div><p class="tiny muted" style="margin-top:.4rem">Die senkrechte Linie markiert den Bundesschnitt (100). Skala beginnt bei ' + base + '.</p>';
  }

  /* ---------------------------------------------------------
     Seiten
     --------------------------------------------------------- */

  /* ===== Startseite ===== */
  function pageHome() {
    var empCounts = {};
    employers.forEach(function (e) { empCounts[e.type] = (empCounts[e.type] || 0) + 1; });
    var market = (salaries.market || {});
    var heroTiles = professions.slice(0, 9).map(function (p) {
      return '<a class="hero-tile" href="#/berufe/' + esc(p.id) + '"><span aria-hidden="true">' + esc(p.icon || '🩺') + '</span>' + esc(shortTitle(p.title)) + '</a>';
    }).join('');

    var catSections = CATEGORIES.map(function (c) {
      var ps = professions.filter(function (p) { return p.category === c.id; });
      if (!ps.length) return '';
      return '<div class="' + c.cls + '" style="margin-bottom:1.6rem"><h3 style="display:flex;gap:.5rem;align-items:center"><span class="cat-dot"></span>' + esc(c.id) +
        ' <span class="muted small" style="font-weight:500">(' + ps.length + ')</span></h3><div class="grid grid-auto">' + ps.map(profCard).join('') + '</div></div>';
    }).join('');

    var featured = pickFeatured();

    return '' +
      '<section class="hero"><div class="container hero-grid"><div>' +
      '<div class="eyebrow">Karriereportal Medizintechnik</div>' +
      '<h1>Technik, die Leben rettet – finden Sie Ihren Weg in die Medizintechnik.</h1>' +
      '<p class="lead">Berufsbilder, Ausbildung und Studium, Arbeitgeber, Gehälter und Arbeitsmarkt – kompakt, verständlich und mit Werkzeugen für Ihre persönliche Karriereplanung.</p>' +
      '<form class="hero-search" role="search" data-search-form><label class="sr-only" for="hero-q">Suche</label>' +
      '<input id="hero-q" name="q" type="search" placeholder="Beruf, Studiengang oder Unternehmen suchen …" autocomplete="off">' +
      '<button class="btn" type="submit">Suchen</button></form>' +
      '<div class="hero-quick"><a href="#/tools/kompetenzprofil">🧭 Welcher Beruf passt zu mir?</a><a href="#/gehalt">💶 Gehälter</a><a href="#/ausbildung">🎓 Ausbildung & Studium</a><a href="#/tools/stellen">🔎 Stellen finden</a></div>' +
      '</div><div class="hero-visual" aria-label="Schnellzugriff Berufe">' + heroTiles + '</div></div></section>' +

      '<div class="container stats"><div class="grid grid-4">' +
      stat(professions.length, 'Berufsbilder im Detail', '#/berufe') +
      stat(programs.length, 'Ausbildungs- & Studienwege', '#/ausbildung') +
      stat(employers.length, 'Arbeitgeber im Verzeichnis', '#/arbeitgeber') +
      stat(6, 'interaktive Karriere-Tools', '#/tools') +
      '</div></div>' +

      '<div class="container page">' +
      '<section class="section" style="margin-top:2rem"><div class="section-head"><div><div class="eyebrow">Berufswelt</div><h2>Die wichtigsten Berufe der Medizintechnik</h2>' +
      '<p>Von der Werkstatt über das Labor bis zum OP: ' + professions.length + ' Berufsbilder, gruppiert nach Tätigkeitsfeld.</p></div>' +
      '<a class="btn secondary" href="#/tools/vergleich">Berufe vergleichen →</a></div>' + catSections + '</section>' +

      '<section class="section"><div class="section-head"><div><div class="eyebrow">Karrierewege</div><h2>So führen die Wege in die Medizintechnik</h2>' +
      '<p>Typische Einstiege und Aufstiege – vom Schulabschluss bis zur Leitungsfunktion.</p></div><a class="btn secondary" href="#/tools/lernpfad">Persönlichen Lernpfad erstellen →</a></div>' +
      pathwayGraphic() + '</section>' +

      '<section class="section"><div class="section-head"><div><div class="eyebrow">Arbeitgeber</div><h2>Wer stellt ein? Arbeitgeber der Medizintechnik</h2>' +
      '<p>Hersteller, Kliniken, Servicefirmen, Prüfdienstleister, Labore und Forschung.</p></div><a class="btn secondary" href="#/arbeitgeber">Alle ' + employers.length + ' Arbeitgeber →</a></div>' +
      '<div class="grid grid-auto-sm" style="margin-bottom:1.4rem">' + EMP_TYPES.map(function (t) {
        return '<a class="card card-link" href="#/arbeitgeber?typ=' + t.id + '" style="flex-direction:row;align-items:center;gap:.8rem">' +
          '<span class="icon-badge" aria-hidden="true">' + t.icon + '</span><div><strong>' + esc(t.plural) + '</strong><div class="meta">' + (empCounts[t.id] || 0) + ' Einträge</div></div></a>';
      }).join('') + '</div>' +
      '<div class="grid grid-auto">' + featured.map(empCard).join('') + '</div></section>' +

      '<section class="section"><div class="grid grid-2">' +
      '<div class="card"><div class="eyebrow">Gehälter</div><h2 style="font-size:1.3rem">Was verdient man in der Medizintechnik?</h2>' +
      '<p class="small muted">Median-Richtwerte (Jahresbrutto, Vollzeit) – Details, Regionen und Rechner im Bereich Gehalt.</p>' +
      salaryRanges(PROF_ORDER, { sort: true }).replace('class="salary-ranges"', 'class="salary-ranges compact"') +
      '<p style="margin-top:1rem"><a class="btn" href="#/gehalt">Zum Gehaltsrechner →</a></p></div>' +
      '<div class="card"><div class="eyebrow">Arbeitsmarkt</div><h2 style="font-size:1.3rem">Trends &amp; Entwicklung</h2>' +
      (market.summary ? '<p class="small">' + esc(market.summary) + '</p>' : '') +
      arr(market.trends).slice(0, 5).map(function (t) {
        return '<div style="display:flex;gap:.7rem;margin:.75rem 0"><span class="icon-badge" style="width:38px;height:38px;font-size:1.1rem" aria-hidden="true">' + esc(t.icon || '📈') + '</span><div><strong>' + esc(t.title) + '</strong><div class="small muted">' + esc(trunc(t.text, 150)) + '</div></div></div>';
      }).join('') + '<p><a class="btn secondary" href="#/gehalt#markt">Mehr zum Arbeitsmarkt →</a></p></div>' +
      '</div></section>' +

      '<section class="section"><div class="section-head"><div><div class="eyebrow">Karriere-Tools</div><h2>Planen Sie Ihren nächsten Schritt</h2></div></div>' +
      toolTiles() + '</section>' +
      '</div>';
  }
  function stat(v, l, href) {
    return '<a class="card card-link stat" href="' + href + '"><div class="value">' + v + '</div><div class="label">' + esc(l) + '</div></a>';
  }
  function shortTitle(t) { return String(t).replace(/\s*\(.*\)/, '').replace(/\/in\b|\/r\b|\/e\b/g, '').replace(/\s*\/\s*Applikationsspezialist.*$/, ''); }
  function pickFeatured() {
    var out = [];
    EMP_TYPES.forEach(function (t) {
      var n = t.id === 'hersteller' ? 3 : 1;
      employers.filter(function (e) { return e.type === t.id; }).slice(0, n).forEach(function (e) { out.push(e); });
    });
    return out.slice(0, 8);
  }

  function pathwayGraphic() {
    function node(id, label, sub) {
      var p = progById[id];
      if (id && !p && !profById[id]) return '<div class="node">' + esc(label) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</div>';
      var href = profById[id] ? '#/berufe/' + id : '#/ausbildung/' + id;
      return '<a class="node" href="' + href + '">' + esc(label || (p && p.title)) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</a>';
    }
    return '<div class="pathway">' +
      '<div class="col"><h4>1 · Einstieg</h4>' +
      node('ausb-elektroniker-geraete', 'Ausbildung Elektronik / Mechatronik', '3–3,5 Jahre, dual') +
      node('ausb-mtr', 'Ausbildung MT-Berufe (MTR/MTL)', '3 Jahre, Berufsfachschule') +
      node('bsc-medizintechnik', 'Bachelor Medizintechnik', '6–7 Semester') +
      node('dual-medizintechnik', 'Duales Studium', 'Studium + Praxis') + '</div>' +
      '<div class="col"><h4>2 · Spezialisierung</h4>' +
      node('fs-techniker-medizintechnik', 'Staatl. gepr. Techniker/in Medizintechnik', '2 J. Vollzeit / 4 J. Teilzeit') +
      node('msc-medizinphysik', 'Master Medizinphysik', 'Basis für Medizinphysik-Experte') +
      node('msc-medizintechnik', 'Master Medizintechnik / BME', '3–4 Semester') +
      node('wb-medizinprodukteberater', 'Medizinprodukteberater/in', 'Pflicht im Vertrieb') + '</div>' +
      '<div class="col"><h4>3 · Fachfunktion</h4>' +
      node('servicetechniker', 'Servicetechniker/in') +
      node('medizintechnikingenieur', 'Medizintechnikingenieur/in') +
      node('medizinphysiker', 'Medizinphysiker/in') +
      node('produktspezialist', 'Produktspezialist/in') +
      node('qualitaetsmanager', 'Qualitätsmanager/in') + '</div>' +
      '<div class="col"><h4>4 · Verantwortung</h4>' +
      node('technischer-leiter', 'Technische/r Leiter/in', 'Medizintechnik im Klinikum') +
      node('regulatory-affairs', 'Regulatory Affairs / PRRC', 'Verantwortliche Person Art. 15 MDR') +
      node('', 'Teamleitung Service / Entwicklung', 'ab ca. 5–8 Jahren Erfahrung') +
      node('', 'Bereichs-/Produktmanagement', 'Vertrieb, Marketing, Strategie') + '</div>' +
      '</div>';
  }

  function toolTiles() {
    var t = [
      ['kompetenzprofil', '🧭', 'Kompetenzprofil', 'Stärken einschätzen und passende Berufe finden.'],
      ['lernpfad', '🗺️', 'Persönlicher Lernpfad', 'Schritt für Schritt zum Wunschberuf – mit Fortschritt.'],
      ['vergleich', '⚖️', 'Berufsbildervergleich', 'Bis zu drei Berufe direkt nebeneinander.'],
      ['bewerbung', '📄', 'Bewerbungswissen', 'Tipps und Checkliste für MedTech-Bewerbungen.'],
      ['interview', '🎤', 'Interviewvorbereitung', 'Fragen trainieren mit Lernkarten und STAR-Methode.'],
      ['stellen', '🔎', 'Stellen & Ausbildung', 'Direkte Suchlinks und Karriereseiten der Arbeitgeber.']
    ];
    return '<div class="grid grid-3">' + t.map(function (x) {
      return '<a class="card card-link" href="#/tools/' + x[0] + '"><span class="icon-badge" aria-hidden="true">' + x[1] + '</span>' +
        '<h3 style="margin-top:.8rem">' + x[2] + '</h3><p class="small" style="margin:0">' + x[3] + '</p><div class="card-foot"><span>Öffnen →</span></div></a>';
    }).join('') + '</div>';
  }

  /* ===== Berufe – Übersicht ===== */
  var profFilter = { q: '', cat: '', emp: '' };
  function pageProfessions() {
    return pageHero('Berufswelt', 'Berufsbilder der Medizintechnik',
      'Was machen Medizintechniker/innen, Medizinphysiker/innen oder Produktspezialist/innen eigentlich? Hier finden Sie Aufgaben, Voraussetzungen, Karrierewege und Gehaltsrichtwerte.',
      crumb([['Start', '#/'], ['Berufswelt']])) +
      '<div class="container page">' +
      '<div class="toolbar"><input class="input search" type="search" placeholder="Beruf oder Tätigkeit suchen …" aria-label="Berufe durchsuchen" data-filter="q" value="' + esc(profFilter.q) + '">' +
      '<select class="select" data-filter="emp" aria-label="Arbeitgebertyp"><option value="">Alle Arbeitgebertypen</option>' +
      EMP_TYPES.map(function (t) { return '<option value="' + t.id + '"' + (profFilter.emp === t.id ? ' selected' : '') + '>' + esc(t.plural) + '</option>'; }).join('') + '</select>' +
      '<div class="chip-group" role="group" aria-label="Tätigkeitsfeld">' +
      '<button class="chip" data-cat="" aria-pressed="' + (!profFilter.cat) + '">Alle</button>' +
      CATEGORIES.map(function (c) { return '<button class="chip" data-cat="' + esc(c.id) + '" aria-pressed="' + (profFilter.cat === c.id) + '">' + esc(c.short) + '</button>'; }).join('') +
      '</div></div><p class="result-count" id="prof-count"></p><div class="grid grid-auto" id="prof-grid"></div>' +
      '<section class="section"><div class="section-head"><div><h2>Alle Berufe auf einen Blick</h2><p>Gehalt (Median-Richtwert), Einstieg und Arbeitsmarktaussichten.</p></div></div>' +
      overviewTable() + '</section></div>';
  }
  function overviewTable() {
    return '<div class="table-wrap"><table class="data"><thead><tr><th>Beruf</th><th>Tätigkeitsfeld</th><th>Typischer Einstieg</th><th class="num">Median (Richtwert)</th><th>Aussichten</th><th>Reisetätigkeit</th></tr></thead><tbody>' +
      professions.map(function (p) {
        var ep = arr(p.entryPaths)[0];
        var m = median(p.id);
        return '<tr><td><a href="#/berufe/' + esc(p.id) + '"><strong>' + esc(p.title) + '</strong></a></td><td>' + esc(p.category) + '</td><td>' +
          (ep ? esc(ep.type + ': ' + ep.title) : '–') + '</td><td class="num">' + (m ? C.eur(m) : '–') + '</td><td><span class="outlook ' + outlookCls(p.outlook) + '">' + esc(p.outlook || '–') +
          '</span></td><td>' + esc((p.facts || {}).travel || '–') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  function bindProfessions() {
    function render() {
      var q = norm(profFilter.q);
      var res = professions.filter(function (p) {
        if (profFilter.cat && p.category !== profFilter.cat) return false;
        if (profFilter.emp && arr(p.employerTypes).indexOf(profFilter.emp) < 0) return false;
        if (q) {
          var hay = norm([p.title, p.summary, p.description, arr(p.tasks).join(' '), arr((p.skills || {}).hard).join(' ')].join(' '));
          return q.split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
        }
        return true;
      });
      document.getElementById('prof-grid').innerHTML = res.length ? res.map(profCard).join('') : '<div class="empty">Keine Berufe gefunden. Filter zurücksetzen?</div>';
      document.getElementById('prof-count').textContent = res.length + ' von ' + professions.length + ' Berufen';
    }
    app.querySelector('[data-filter="q"]').addEventListener('input', function (e) { profFilter.q = e.target.value; render(); });
    app.querySelector('[data-filter="emp"]').addEventListener('change', function (e) { profFilter.emp = e.target.value; render(); });
    app.querySelectorAll('[data-cat]').forEach(function (b) {
      b.addEventListener('click', function () {
        profFilter.cat = b.getAttribute('data-cat');
        app.querySelectorAll('[data-cat]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        render();
      });
    });
    render();
  }

  /* ===== Beruf – Detail ===== */
  function pageProfession(id) {
    var p = profById[id];
    if (!p) return notFound();
    var s = sal(id);
    var emps = employers.filter(function (e) { return arr(e.professionIds).indexOf(id) >= 0; });
    var progs = arr(p.educationIds).map(function (x) { return progById[x]; }).filter(Boolean);
    var facts = p.facts || {};
    var lp = (tools.learningPaths || {})[id];

    var head = '<section class="page-hero ' + catCls(p.category) + '"><div class="container">' +
      '<nav class="breadcrumb" aria-label="Brotkrumen">' + crumb([['Start', '#/'], ['Berufswelt', '#/berufe'], [p.title]]) + '</nav>' +
      '<div class="detail-head"><span class="icon-badge lg" aria-hidden="true" style="background:rgba(255,255,255,.15)">' + esc(p.icon || '🩺') + '</span>' +
      '<div class="titles"><div class="eyebrow">' + esc(p.category || '') + '</div><h1>' + esc(p.title) + '</h1><p>' + esc(p.summary || '') + '</p></div>' +
      '<div class="btn-row">' + favBtn('professions', p.id, p.title) +
      '<a class="btn secondary small" href="#/tools/vergleich?ids=' + esc(p.id) + '">⚖️ Vergleichen</a>' +
      '<a class="btn secondary small" href="#/tools/lernpfad?beruf=' + esc(p.id) + '">🗺️ Lernpfad</a></div></div></div></section>';

    var main = '<div class="anchor-nav"><a href="#ueberblick" data-anchor>Überblick</a><a href="#aufgaben" data-anchor>Aufgaben</a><a href="#tagesablauf" data-anchor>Arbeitsalltag</a><a href="#kompetenzen" data-anchor>Kompetenzen</a><a href="#weg" data-anchor>Ausbildungsweg</a><a href="#karriere" data-anchor>Karriere</a><a href="#gehalt" data-anchor>Gehalt</a><a href="#arbeitgeber" data-anchor>Arbeitgeber</a></div>' +
      '<section id="ueberblick" class="card"><h2>Überblick</h2><p>' + esc(p.description || '') + '</p>' +
      '<div class="grid grid-2" style="margin-top:1rem"><div><h4>Typische Einsatzorte</h4>' + list(p.workplaces, 'dot-list') + '</div>' +
      '<div><h4>Arbeitsbedingungen</h4><dl class="kv"><dt>Arbeitszeit</dt><dd>' + esc(facts.workload || '–') + '</dd><dt>Reisetätigkeit</dt><dd>' + esc(facts.travel || '–') +
      '</dd><dt>Homeoffice</dt><dd>' + esc(facts.remote || '–') + '</dd><dt>Aussichten</dt><dd><span class="outlook ' + outlookCls(p.outlook) + '">' + esc(p.outlook || '–') + '</span></dd></dl></div></div></section>' +

      '<section id="aufgaben" class="card section"><h2>Typische Aufgaben</h2>' + list(p.tasks) + '</section>' +

      (arr(p.dayInLife).length ? '<section id="tagesablauf" class="card section"><h2>Ein Tag im Beruf</h2><p class="small muted">Beispielhafter Tagesablauf – variiert je nach Arbeitgeber und Einsatz.</p><ol class="timeline">' +
        p.dayInLife.map(function (d) { return '<li><span class="time">' + esc(d.time) + '</span><span class="dot"></span><span class="act">' + esc(d.activity) + '</span></li>'; }).join('') + '</ol></section>' : '') +

      '<section id="kompetenzen" class="card section"><h2>Kompetenzen &amp; Voraussetzungen</h2><div class="grid grid-2"><div>' +
      (p.profile ? C.radar(DIMENSIONS, [{ name: p.title, values: p.profile }], { ariaLabel: 'Anforderungsprofil ' + p.title }) : '') +
      '<p class="tiny muted" style="text-align:center">Anforderungsprofil (1 = gering, 5 = sehr hoch)</p></div><div>' +
      '<h4>Fachliche Kompetenzen</h4>' + tags((p.skills || {}).hard, 'brand') +
      '<h4 style="margin-top:1rem">Persönliche Stärken</h4>' + tags((p.skills || {}).soft, 'accent') +
      '<h4 style="margin-top:1rem">Voraussetzungen</h4>' + list(p.requirements, 'dot-list') +
      '<p style="margin-top:1rem"><a href="#/tools/kompetenzprofil">Eigenes Profil abgleichen →</a></p></div></div></section>' +

      '<section id="weg" class="card section"><h2>Wege in den Beruf</h2><div class="grid grid-auto-sm">' +
      arr(p.entryPaths).map(function (e) {
        return '<div class="card" style="box-shadow:none;background:var(--surface-2);border:0"><span class="tag brand">' + esc(e.type) + '</span><h4 style="margin:.5rem 0 .2rem">' + esc(e.title) + '</h4><div class="small muted">' + esc(e.duration || '') + '</div></div>';
      }).join('') + '</div>' +
      (progs.length ? '<h4 style="margin-top:1.3rem">Passende Ausbildungen, Studiengänge &amp; Weiterbildungen</h4><div class="grid grid-auto">' + progs.map(progCard).join('') + '</div>' : '') +
      (lp ? '<p style="margin-top:1rem"><a class="btn" href="#/tools/lernpfad?beruf=' + esc(id) + '">Persönlichen Lernpfad öffnen →</a></p>' : '') + '</section>' +

      '<section id="karriere" class="card section"><h2>Karrierepfad</h2><div class="ladder">' +
      arr(p.careerPath).map(function (c, i) { return '<div class="ladder-step"><div class="lvl">Stufe ' + (i + 1) + '</div><div class="ttl">' + esc(c.title) + '</div><div class="yrs">' + esc(c.years || '') + '</div></div>'; }).join('') +
      '</div><p class="small" style="margin-top:1rem"><strong>Arbeitsmarkt:</strong> ' + esc(p.outlookText || '') + '</p></section>' +

      '<section id="gehalt" class="card section"><h2>Gehalt <span class="tag warn">Richtwert</span></h2>' +
      (s ? '<div class="grid grid-3" style="margin-bottom:1rem">' +
        salTile('Einstieg', s.entry) + salTile('Mit Berufserfahrung', s.mid) + salTile('Senior / Leitung', s.senior) + '</div>' +
        salaryRanges([id]) + (s.note ? '<p class="small muted" style="margin-top:.8rem">' + esc(s.note) + '</p>' : '') : '<p class="muted">Keine Gehaltsdaten verfügbar.</p>') +
      '<div class="notice" style="margin-top:1rem"><span aria-hidden="true">⚠️</span><span>Jahresbruttogehälter für Vollzeit in Deutschland. Die Werte sind <strong>Richtwerte</strong> aus öffentlich verfügbaren Quellen und können je nach Region, Tarifbindung, Arbeitgeber und Qualifikation deutlich abweichen. <a href="#/gehalt">Methodik &amp; Quellen</a></span></div></section>' +

      '<section id="arbeitgeber" class="section"><div class="section-head"><div><h2>Arbeitgeber für diesen Beruf</h2><p>' + emps.length + ' Einträge im Verzeichnis</p></div>' +
      '<a class="btn secondary" href="#/tools/stellen?beruf=' + esc(id) + '">Aktuelle Stellen suchen →</a></div>' +
      (emps.length ? '<div class="grid grid-auto">' + emps.slice(0, 9).map(empCard).join('') + '</div>' +
        (emps.length > 9 ? '<p style="margin-top:1rem"><a href="#/arbeitgeber?beruf=' + esc(id) + '">Alle ' + emps.length + ' Arbeitgeber anzeigen →</a></p>' : '') : '<p class="muted">Keine Einträge.</p>') + '</section>';

    var side = '<aside class="sticky"><div class="card"><h3>Auf einen Blick</h3><dl class="kv">' +
      '<dt>Feld</dt><dd>' + esc(p.category || '–') + '</dd>' +
      '<dt>Einstieg</dt><dd>' + esc(arr(p.entryPaths).map(function (e) { return e.type; }).filter(uniq).join(', ') || '–') + '</dd>' +
      '<dt>Median</dt><dd>' + (median(id) ? C.eur(median(id)) + ' <span class="tag warn">Richtwert</span>' : '–') + '</dd>' +
      '<dt>Aussichten</dt><dd>' + esc(p.outlook || '–') + '</dd>' +
      '<dt>Arbeitgeber</dt><dd>' + esc(arr(p.employerTypes).map(function (t) { return (empTypeById[t] || {}).label || t; }).join(', ')) + '</dd></dl></div>' +
      (arr(p.related).length ? '<div class="card" style="margin-top:1rem"><h3>Verwandte Berufe</h3><ul class="plain-list">' +
        arr(p.related).map(function (r) { var rp = profById[r]; return rp ? '<li><a href="#/berufe/' + esc(r) + '">' + esc(rp.icon || '') + ' ' + esc(rp.title) + '</a></li>' : ''; }).join('') +
        '</ul><p style="margin:.8rem 0 0"><a class="btn small secondary" href="#/tools/vergleich?ids=' + [id].concat(arr(p.related).slice(0, 2)).join(',') + '">Diese vergleichen</a></p></div>' : '') +
      '</aside>';

    return head + '<div class="container page"><div class="layout-side"><div>' + main + '</div>' + side + '</div></div>';
  }
  function uniq(v, i, a) { return a.indexOf(v) === i; }
  function salTile(label, r) {
    if (!r) return '';
    return '<div class="calc-result" style="text-align:left"><div class="small muted">' + esc(label) + '</div><div style="font-size:1.15rem;font-weight:800;color:var(--brand)">' +
      C.keur(r[0]) + ' – ' + C.keur(r[1]) + '</div></div>';
  }

  /* ===== Ausbildung & Studium ===== */
  var eduFilter = { type: '', q: '', prof: '' };
  function pageEducation() {
    var counts = {};
    programs.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    var types = EDU_TYPES.filter(function (t) { return counts[t]; });
    programs.forEach(function (p) { if (types.indexOf(p.type) < 0) types.push(p.type); });

    return pageHero('Ausbildung & Studium', 'Ausbildung, Studium &amp; Weiterbildung',
      'Welche Ausbildungsberufe, Studiengänge, Weiterbildungen und Zertifikate führen in die Medizintechnik? Mit Voraussetzungen, Lerninhalten und Entwicklungsmöglichkeiten.',
      crumb([['Start', '#/'], ['Ausbildung & Studium']])) +
      '<div class="container page">' +
      '<div class="grid grid-auto-sm" style="margin-bottom:1.5rem">' + types.map(function (t) {
        return '<button class="card card-link" data-edu-type="' + esc(t) + '" style="text-align:left;cursor:pointer;font:inherit;color:inherit;flex-direction:row;gap:.8rem;align-items:center">' +
          '<span class="icon-badge" aria-hidden="true">' + (EDU_ICONS[t] || '🎓') + '</span><span><strong>' + esc(t) + '</strong><span class="meta" style="display:block">' + counts[t] + ' Angebote</span></span></button>';
      }).join('') + '</div>' +
      '<div class="toolbar"><input class="input search" type="search" placeholder="Studiengang, Weiterbildung, Inhalt …" aria-label="Bildungsangebote durchsuchen" data-efilter="q" value="' + esc(eduFilter.q) + '">' +
      '<select class="select" data-efilter="prof" aria-label="Zielberuf"><option value="">Alle Zielberufe</option>' +
      professions.map(function (p) { return '<option value="' + esc(p.id) + '"' + (eduFilter.prof === p.id ? ' selected' : '') + '>' + esc(p.title) + '</option>'; }).join('') + '</select>' +
      '<div class="chip-group" role="group" aria-label="Art"><button class="chip" data-etype="" aria-pressed="' + (!eduFilter.type) + '">Alle</button>' +
      types.map(function (t) { return '<button class="chip" data-etype="' + esc(t) + '" aria-pressed="' + (eduFilter.type === t) + '">' + esc(t) + '</button>'; }).join('') + '</div></div>' +
      '<p class="result-count" id="edu-count"></p><div class="grid grid-auto" id="edu-grid"></div>' +

      '<section class="section"><div class="section-head"><div><div class="eyebrow">Voraussetzungen</div><h2>Was sollte man mitbringen?</h2></div></div>' +
      '<div class="grid grid-3">' + arr(education.generalRequirements).map(function (r) {
        return '<div class="card"><h3>' + esc(r.title) + '</h3><p class="small" style="margin:0">' + esc(r.text) + '</p></div>';
      }).join('') + '</div></section>' +

      '<section class="section"><div class="section-head"><div><div class="eyebrow">Berufliche Entwicklung</div><h2>Typische Aufstiegswege</h2><p>Durchlässigkeit ist hoch: Viele Wege führen von der Ausbildung bis zum Ingenieurstudium oder in die Leitung.</p></div></div>' +
      '<div class="grid grid-2">' + arr(education.development).map(function (d) {
        return '<div class="card"><div style="display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;font-weight:700"><span class="tag">' + esc(d.from) + '</span><span aria-hidden="true">→</span><span class="tag brand">' + esc(d.to) + '</span></div><p class="small" style="margin:.7rem 0 0">' + esc(d.how) + '</p></div>';
      }).join('') + '</div></section>' +
      '<section class="section">' + pathwayGraphic() + '</section></div>';
  }
  function bindEducation() {
    function render() {
      var q = norm(eduFilter.q);
      var res = programs.filter(function (p) {
        if (eduFilter.type && p.type !== eduFilter.type) return false;
        if (eduFilter.prof && arr(p.professionIds).indexOf(eduFilter.prof) < 0) return false;
        if (q) {
          var hay = norm([p.title, p.description, p.level, p.degree, arr(p.contents).join(' '), arr(p.providers).join(' ')].join(' '));
          return q.split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
        }
        return true;
      });
      document.getElementById('edu-grid').innerHTML = res.length ? res.map(progCard).join('') : '<div class="empty">Keine passenden Angebote gefunden.</div>';
      document.getElementById('edu-count').textContent = res.length + ' von ' + programs.length + ' Bildungsangeboten';
    }
    function setType(t) {
      eduFilter.type = t;
      app.querySelectorAll('[data-etype]').forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-etype') === t); });
      render();
    }
    app.querySelector('[data-efilter="q"]').addEventListener('input', function (e) { eduFilter.q = e.target.value; render(); });
    app.querySelector('[data-efilter="prof"]').addEventListener('change', function (e) { eduFilter.prof = e.target.value; render(); });
    app.querySelectorAll('[data-etype]').forEach(function (b) { b.addEventListener('click', function () { setType(b.getAttribute('data-etype')); }); });
    app.querySelectorAll('[data-edu-type]').forEach(function (b) {
      b.addEventListener('click', function () { setType(b.getAttribute('data-edu-type')); document.getElementById('edu-count').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    });
    render();
  }

  function pageProgram(id) {
    var p = progById[id];
    if (!p) return notFound();
    var profs = arr(p.professionIds).map(function (x) { return profById[x]; }).filter(Boolean);
    var similar = programs.filter(function (x) { return x.type === p.type && x.id !== p.id; }).slice(0, 4);
    return pageHero(p.type + (p.level ? ' · ' + p.level : ''), esc(p.title), esc(p.description || ''),
      crumb([['Start', '#/'], ['Ausbildung & Studium', '#/ausbildung'], [p.title]])) +
      '<div class="container page"><div class="layout-side"><div>' +
      '<section class="card"><h2>Typische Lerninhalte</h2>' + list(p.contents) + '</section>' +
      '<section class="card section"><h2>Voraussetzungen</h2>' + list(p.requirements, 'dot-list') + '</section>' +
      (arr(p.providers).length ? '<section class="card section"><h2>Anbieter (Beispiele)</h2><p class="small muted">Auswahl realer Hochschulen bzw. Bildungsträger – keine vollständige Liste. Aktuelle Zulassungsbedingungen bitte direkt beim Anbieter prüfen.</p>' + list(p.providers, 'dot-list two-col-list') + '</section>' : '') +
      '<section class="section"><h2>Führt zu diesen Berufen</h2><div class="grid grid-auto">' + profs.map(profCard).join('') + '</div></section>' +
      (similar.length ? '<section class="section"><h2>Ähnliche Angebote</h2><div class="grid grid-auto">' + similar.map(progCard).join('') + '</div></section>' : '') +
      '</div><aside class="sticky"><div class="card"><h3>Eckdaten</h3><dl class="kv">' +
      '<dt>Art</dt><dd>' + esc(p.type) + '</dd>' + (p.level ? '<dt>Niveau</dt><dd>' + esc(p.level) + '</dd>' : '') +
      '<dt>Dauer</dt><dd>' + esc(p.duration || '–') + '</dd><dt>Abschluss</dt><dd>' + esc(p.degree || '–') + '</dd>' +
      (p.costs ? '<dt>Kosten/Vergütung</dt><dd>' + esc(p.costs) + '</dd>' : '') + '</dl>' +
      '<div class="btn-row" style="margin-top:1rem">' + favBtn('programs', p.id, p.title) +
      (safeUrl(p.link) ? extLink(p.link, 'Offizielle Informationen', 'btn small secondary') : '') + '</div></div>' +
      (/Ausbildung|Duales/.test(p.type) ? '<div class="card" style="margin-top:1rem"><h3>Ausbildungsplätze finden</h3><p class="small">Aktuelle Ausbildungs- und Studienplätze in der Jobbörse der Bundesagentur für Arbeit:</p>' +
        extLink('https://www.arbeitsagentur.de/jobsuche/suche?angebotsart=4&was=' + encodeURIComponent(shortTitle(p.title)), 'Zur Jobbörse', 'btn small') + '</div>' : '') +
      '</aside></div></div>';
  }

  /* ===== Arbeitgeber ===== */
  var empFilter = { q: '', type: '', region: '', prof: '' };
  function pageEmployers(params) {
    if (params.typ !== undefined) empFilter.type = params.typ;
    if (params.beruf !== undefined) empFilter.prof = params.beruf;
    if (params.region !== undefined) empFilter.region = params.region;
    var regionCounts = {};
    employers.forEach(function (e) { regionCounts[e.region] = (regionCounts[e.region] || 0) + 1; });

    return pageHero('Unternehmensverzeichnis', 'Arbeitgeber &amp; Hersteller',
      'Medizintechnikhersteller, Krankenhäuser, Serviceunternehmen, Prüfdienstleister, Labore und Forschungsinstitute – mit Profilen, Schwerpunkten und Karriereseiten.',
      crumb([['Start', '#/'], ['Arbeitgeber']])) +
      '<div class="container page">' +
      '<div class="region-tiles" style="margin-bottom:1.2rem" role="group" aria-label="Nach Region filtern">' + REGIONS.map(function (r) {
        return '<button class="region-tile" data-region-tile="' + r.id + '" style="font:inherit;color:inherit"' + (empFilter.region === r.id ? ' aria-pressed="true"' : '') + '><div class="n">' + (regionCounts[r.id] || 0) + '</div><div class="l">' + esc(r.long) + '</div></button>';
      }).join('') + '</div>' +
      '<div class="toolbar"><input class="input search" type="search" placeholder="Unternehmen, Ort oder Schwerpunkt …" aria-label="Arbeitgeber durchsuchen" data-mfilter="q" value="' + esc(empFilter.q) + '">' +
      '<select class="select" data-mfilter="region" aria-label="Region"><option value="">Alle Regionen</option>' +
      REGIONS.map(function (r) { return '<option value="' + r.id + '"' + (empFilter.region === r.id ? ' selected' : '') + '>' + esc(r.long) + '</option>'; }).join('') + '</select>' +
      '<select class="select" data-mfilter="prof" aria-label="Beruf"><option value="">Alle Berufe</option>' +
      professions.map(function (p) { return '<option value="' + esc(p.id) + '"' + (empFilter.prof === p.id ? ' selected' : '') + '>' + esc(p.title) + '</option>'; }).join('') + '</select>' +
      '<div class="chip-group" role="group" aria-label="Arbeitgebertyp"><button class="chip" data-mtype="" aria-pressed="' + (!empFilter.type) + '">Alle</button>' +
      EMP_TYPES.map(function (t) { return '<button class="chip" data-mtype="' + t.id + '" aria-pressed="' + (empFilter.type === t.id) + '">' + t.icon + ' ' + esc(t.label) + '</button>'; }).join('') +
      '</div></div><p class="result-count" id="emp-count"></p><div class="grid grid-auto" id="emp-grid"></div>' +
      '<p class="small muted" style="margin-top:1.5rem">Hinweis: Das Verzeichnis ist eine redaktionelle Auswahl und erhebt keinen Anspruch auf Vollständigkeit. Die Aufnahme ist unabhängig und unentgeltlich; Angaben ohne Gewähr. Logos sind neutrale Platzhalter (Initialen).</p></div>';
  }
  function bindEmployers() {
    function render() {
      var q = norm(empFilter.q);
      var res = employers.filter(function (e) {
        if (empFilter.type && e.type !== empFilter.type) return false;
        if (empFilter.region && e.region !== empFilter.region) return false;
        if (empFilter.prof && arr(e.professionIds).indexOf(empFilter.prof) < 0) return false;
        if (q) {
          var hay = norm([e.name, e.hq, e.state, e.description, arr(e.focus).join(' '), arr(e.locations).join(' ')].join(' '));
          return q.split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
        }
        return true;
      });
      document.getElementById('emp-grid').innerHTML = res.length ? res.map(empCard).join('') : '<div class="empty">Keine Arbeitgeber gefunden.</div>';
      document.getElementById('emp-count').textContent = res.length + ' von ' + employers.length + ' Arbeitgebern';
      app.querySelectorAll('[data-region-tile]').forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-region-tile') === empFilter.region); x.style.borderColor = x.getAttribute('data-region-tile') === empFilter.region ? 'var(--brand)' : ''; });
      var sel = app.querySelector('[data-mfilter="region"]'); if (sel) sel.value = empFilter.region;
    }
    app.querySelector('[data-mfilter="q"]').addEventListener('input', function (e) { empFilter.q = e.target.value; render(); });
    app.querySelector('[data-mfilter="region"]').addEventListener('change', function (e) { empFilter.region = e.target.value; render(); });
    app.querySelector('[data-mfilter="prof"]').addEventListener('change', function (e) { empFilter.prof = e.target.value; render(); });
    app.querySelectorAll('[data-mtype]').forEach(function (b) {
      b.addEventListener('click', function () {
        empFilter.type = b.getAttribute('data-mtype');
        app.querySelectorAll('[data-mtype]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        render();
      });
    });
    app.querySelectorAll('[data-region-tile]').forEach(function (b) {
      b.addEventListener('click', function () { var r = b.getAttribute('data-region-tile'); empFilter.region = empFilter.region === r ? '' : r; render(); });
    });
    render();
  }

  function pageEmployer(id) {
    var e = empById[id];
    if (!e) return notFound();
    var t = empTypeById[e.type] || {};
    var profs = arr(e.professionIds).map(function (x) { return profById[x]; }).filter(Boolean);
    var similar = employers.filter(function (x) { return x.type === e.type && x.id !== e.id && arr(x.focus).some(function (f) { return arr(e.focus).indexOf(f) >= 0; }); });
    if (similar.length < 3) similar = similar.concat(employers.filter(function (x) { return x.type === e.type && x.id !== e.id && similar.indexOf(x) < 0; }));
    similar = similar.slice(0, 3);
    var reg = regionById[e.region] || {};

    return '<section class="page-hero"><div class="container"><nav class="breadcrumb" aria-label="Brotkrumen">' + crumb([['Start', '#/'], ['Arbeitgeber', '#/arbeitgeber'], [e.name]]) + '</nav>' +
      '<div class="detail-head">' + empLogo(e, true) + '<div class="titles"><div class="eyebrow">' + esc(t.icon || '') + ' ' + esc(t.label || '') + '</div><h1>' + esc(e.name) + '</h1>' +
      '<p>' + esc(e.hq || '') + (e.state ? ', ' + esc(e.state) : '') + (e.size ? ' · ' + esc(e.size) : '') + '</p></div>' +
      '<div class="btn-row">' + favBtn('employers', e.id, e.name) + (safeUrl(e.careerUrl) ? extLink(e.careerUrl, 'Karriereseite', 'btn small') : '') + '</div></div></div></section>' +
      '<div class="container page"><div class="layout-side"><div>' +
      '<section class="card"><h2>Unternehmensprofil</h2><p>' + esc(e.description || '') + '</p>' +
      '<h4>Schwerpunkte</h4>' + tags(e.focus, 'brand') +
      (arr(e.locations).length ? '<h4 style="margin-top:1rem">Standorte (Auswahl)</h4>' + tags(e.locations) : '') + '</section>' +
      '<section class="section"><h2>Gefragte Berufe</h2><div class="grid grid-auto">' + profs.map(profCard).join('') + '</div></section>' +
      (similar.length ? '<section class="section"><h2>Ähnliche Arbeitgeber</h2><div class="grid grid-auto">' + similar.map(empCard).join('') + '</div></section>' : '') +
      '</div><aside class="sticky"><div class="card"><h3>Steckbrief</h3><dl class="kv">' +
      '<dt>Typ</dt><dd>' + esc(t.label || '–') + '</dd>' +
      '<dt>Hauptsitz</dt><dd>' + esc(e.hq || '–') + '</dd>' +
      (e.state ? '<dt>Bundesland</dt><dd>' + esc(e.state) + '</dd>' : '') +
      '<dt>Region</dt><dd>' + esc(reg.long || '–') + '</dd>' +
      (e.size ? '<dt>Größe</dt><dd>' + esc(e.size) + '</dd>' : '') +
      (e.employees ? '<dt>Mitarbeitende</dt><dd>' + esc(e.employees) + '</dd>' : '') +
      (e.founded ? '<dt>Gegründet</dt><dd>' + esc(e.founded) + '</dd>' : '') + '</dl>' +
      '<div class="btn-row" style="margin-top:1rem;flex-direction:column">' +
      (safeUrl(e.careerUrl) ? extLink(e.careerUrl, 'Offene Stellen & Karriere', 'btn small') : '') +
      (safeUrl(e.website) ? extLink(e.website, 'Website', 'btn small secondary') : '') + '</div>' +
      '<p class="tiny muted" style="margin:.8rem 0 0">Angaben ohne Gewähr. Maßgeblich sind die Informationen des Unternehmens.</p></div></aside></div></div>';
  }

  /* ===== Gehalt & Arbeitsmarkt ===== */
  var calc = { prof: 'medizintechnikingenieur', exp: 1, region: '', emp: '' };
  function pageSalary() {
    var exps = arr(salaries.experience);
    if (calc.exp >= exps.length) calc.exp = Math.max(0, exps.length - 1);
    var market = salaries.market || {};
    var states = arr(salaries.states).slice().sort(function (a, b) { return b.index - a.index; });

    return pageHero('Gehälter & Arbeitsmarkt', 'Gehälter &amp; Arbeitsmarkt Medizintechnik',
      'Gehaltsspannen nach Beruf, Erfahrung, Region und Arbeitgebertyp – nachvollziehbar aufbereitet und als Richtwerte gekennzeichnet. Dazu Trends und Kennzahlen zum Arbeitsmarkt.',
      crumb([['Start', '#/'], ['Gehalt & Markt']])) +
      '<div class="container page">' +
      '<div class="notice" role="note"><span aria-hidden="true">⚠️</span><span><strong>Alle Gehaltsangaben sind Richtwerte</strong> (Jahresbrutto, Vollzeit, Stand ' + esc(salaries.asOf || '2026') + '). ' + esc(salaries.disclaimer || '') + '</span></div>' +
      '<div class="anchor-nav" style="margin-top:1.2rem"><a href="#spannen" data-anchor>Gehaltsspannen</a><a href="#rechner" data-anchor>Gehaltsrechner</a><a href="#regionen" data-anchor>Regionen</a><a href="#arbeitgebertyp" data-anchor>Arbeitgebertyp &amp; Tarif</a><a href="#markt" data-anchor>Arbeitsmarkt</a><a href="#quellen" data-anchor>Quellen</a></div>' +

      '<section id="spannen" class="card"><div class="section-head"><div><h2>Gehaltsspannen nach Beruf</h2><p>Einstieg, Berufserfahrung und Senior-/Leitungsebene. Fahren Sie über die Balken für Details.</p></div></div>' +
      salaryRanges(PROF_ORDER, { sort: true }) +
      '<details class="acc" style="margin-top:1rem"><summary>Als Tabelle anzeigen</summary><div class="acc-body"><div class="table-wrap"><table class="data"><thead><tr><th>Beruf</th><th class="num">Einstieg</th><th class="num">Mit Erfahrung</th><th class="num">Senior/Leitung</th><th class="num">Median</th></tr></thead><tbody>' +
      PROF_ORDER.filter(function (id) { return sal(id) && profById[id]; }).map(function (id) {
        var s = sal(id);
        function r(x) { return x ? C.keur(x[0]) + ' – ' + C.keur(x[1]) : '–'; }
        return '<tr><td><a href="#/berufe/' + id + '">' + esc(profById[id].title) + '</a></td><td class="num">' + r(s.entry) + '</td><td class="num">' + r(s.mid) + '</td><td class="num">' + r(s.senior) + '</td><td class="num">' + (median(id) ? C.eur(median(id)) : '–') + '</td></tr>';
      }).join('') + '</tbody></table></div></div></details></section>' +

      '<section id="rechner" class="section grid grid-2">' +
      '<div class="card"><h2>Gehaltsrechner</h2><p class="small muted">Grobe Orientierung auf Basis der Richtwerte: Median des Berufs × Erfahrungsfaktor × Regional- und Arbeitgeberindex.</p><div class="form-grid">' +
      '<label>Beruf<select class="select" data-calc="prof">' + professions.map(function (p) { return '<option value="' + esc(p.id) + '"' + (calc.prof === p.id ? ' selected' : '') + '>' + esc(p.title) + '</option>'; }).join('') + '</select></label>' +
      '<label>Berufserfahrung<select class="select" data-calc="exp">' + exps.map(function (e, i) { return '<option value="' + i + '"' + (calc.exp === i ? ' selected' : '') + '>' + esc(e.label) + '</option>'; }).join('') + '</select></label>' +
      '<label>Region / Bundesland<select class="select" data-calc="region"><option value="">Bundesdurchschnitt</option>' +
      arr(salaries.states).map(function (s) { return '<option value="' + esc(s.name) + '"' + (calc.region === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></label>' +
      '<label>Arbeitgebertyp<select class="select" data-calc="emp"><option value="">Alle / Durchschnitt</option>' +
      arr(salaries.employerTypes).map(function (t) { return '<option value="' + esc(t.type) + '"' + (calc.emp === t.type ? ' selected' : '') + '>' + esc(t.label) + '</option>'; }).join('') + '</select></label>' +
      '</div></div>' +
      '<div class="card" style="display:flex;flex-direction:column;justify-content:center"><div id="calc-out"></div></div></section>' +

      '<section id="regionen" class="section grid grid-2">' +
      '<div class="card"><h2>Regionale Unterschiede</h2><p class="small muted">Gehaltsindex nach Bundesland (Bundesschnitt = 100).</p>' + indexBars(states, 'name') + '</div>' +
      '<div class="card"><h2>Großregionen</h2>' + indexBars(arr(salaries.regions)) +
      arr(salaries.regions).filter(function (r) { return r.note; }).map(function (r) { return '<p class="small"><strong>' + esc(r.label) + ':</strong> ' + esc(r.note) + '</p>'; }).join('') + '</div></section>' +

      '<section id="arbeitgebertyp" class="section grid grid-2">' +
      '<div class="card"><h2>Nach Arbeitgebertyp</h2>' + indexBars(arr(salaries.employerTypes)) + '</div>' +
      '<div class="card"><h2>Tarifverträge &amp; Vergütungssysteme</h2>' + arr(salaries.tariffs).map(function (t) {
        return '<details class="acc"><summary>' + esc(t.name) + '</summary><div class="acc-body small">' + esc(t.text) + '</div></details>';
      }).join('') + '</div></section>' +

      '<section class="section"><h2>Was beeinflusst das Gehalt?</h2><div class="grid grid-3">' + arr(salaries.factors).map(function (f) {
        return '<div class="card"><h3>' + esc(f.title) + '</h3><p class="small" style="margin:0">' + esc(f.text) + '</p></div>';
      }).join('') + '</div></section>' +

      '<section id="markt" class="section"><div class="section-head"><div><div class="eyebrow">Arbeitsmarkt</div><h2>Arbeitsmarktentwicklung</h2>' + (market.summary ? '<p>' + esc(market.summary) + '</p>' : '') + '</div></div>' +
      '<div class="grid grid-4">' + arr(market.indicators).map(function (i) {
        return '<div class="card stat"><div class="value" style="font-size:1.5rem">' + esc(i.value) + '</div><div class="label">' + esc(i.label) + '</div><div class="tiny muted" style="margin-top:.4rem">Quelle: ' + esc(i.source || '–') + '</div></div>';
      }).join('') + '</div>' +
      '<div class="grid grid-3" style="margin-top:1rem">' + arr(market.trends).map(function (t) {
        return '<div class="card"><span class="icon-badge" aria-hidden="true">' + esc(t.icon || '📈') + '</span><h3 style="margin-top:.7rem">' + esc(t.title) + '</h3><p class="small" style="margin:0">' + esc(t.text) + '</p></div>';
      }).join('') + '</div>' +
      (arr(market.demand).length ? '<h3 style="margin-top:1.6rem">Nachfrage nach Berufen</h3><div class="table-wrap"><table class="data"><thead><tr><th>Beruf</th><th>Nachfrage</th><th>Einschätzung</th></tr></thead><tbody>' +
        market.demand.map(function (d) {
          var p = profById[d.professionId];
          var lvl = { 'sehr hoch': '▲▲ sehr hoch', 'hoch': '▲ hoch', 'mittel': '● mittel' }[d.level] || d.level;
          return '<tr><td>' + (p ? '<a href="#/berufe/' + esc(p.id) + '">' + esc(p.title) + '</a>' : esc(d.professionId)) + '</td><td style="white-space:nowrap"><span class="tag ' + (d.level === 'sehr hoch' ? 'accent' : d.level === 'hoch' ? 'brand' : '') + '">' + esc(lvl) + '</span></td><td class="small">' + esc(d.text) + '</td></tr>';
        }).join('') + '</tbody></table></div>' : '') + '</section>' +

      '<section id="quellen" class="section card"><h2>Methodik &amp; Quellen</h2>' + (salaries.methodology ? '<p class="small">' + esc(salaries.methodology) + '</p>' : '') +
      '<ul class="src-list small">' + arr(salaries.sources).map(function (s) {
        return '<li>' + (safeUrl(s.url) ? extLink(s.url, s.name) : '<strong>' + esc(s.name) + '</strong>') + (s.note ? ' – <span class="muted">' + esc(s.note) + '</span>' : '') + '</li>';
      }).join('') + '</ul></section></div>';
  }
  function bindSalary() {
    function render() {
      var m = median(calc.prof);
      var exps = arr(salaries.experience);
      var e = exps[calc.exp] || { factor: 1, label: '' };
      var st = arr(salaries.states).filter(function (s) { return s.name === calc.region; })[0];
      var et = arr(salaries.employerTypes).filter(function (t) { return t.type === calc.emp; })[0];
      var out = document.getElementById('calc-out');
      if (!m) { out.innerHTML = '<p class="muted">Für diesen Beruf liegen keine Daten vor.</p>'; return; }
      var v = m * (e.factor || 1) * (st ? st.index / 100 : 1) * (et ? et.index / 100 : 1);
      var lo = Math.round(v * 0.88 / 500) * 500, hi = Math.round(v * 1.12 / 500) * 500;
      out.innerHTML = '<div class="calc-result"><div class="small muted">Geschätztes Jahresbrutto (Richtwert)</div><div class="big">' + C.eur(lo) + ' – ' + C.eur(hi) + '</div>' +
        '<div class="small muted">≈ ' + C.eur(lo / 12) + ' – ' + C.eur(hi / 12) + ' pro Monat (bei 12 Gehältern)</div></div>' +
        '<dl class="kv small" style="margin-top:1rem"><dt>Median Beruf</dt><dd>' + C.eur(m) + '</dd><dt>Erfahrung</dt><dd>' + esc(e.label) + ' (× ' + (e.factor || 1).toFixed(2).replace('.', ',') + ')</dd>' +
        '<dt>Region</dt><dd>' + (st ? esc(st.name) + ' (Index ' + st.index + ')' : 'Bundesschnitt') + '</dd><dt>Arbeitgeber</dt><dd>' + (et ? esc(et.label) + ' (Index ' + et.index + ')' : 'Durchschnitt') + '</dd></dl>' +
        '<p class="tiny muted" style="margin:.8rem 0 0">Vereinfachte Schätzung; Faktoren wirken in der Realität nicht unabhängig voneinander. Tarifverträge, Zulagen, Bereitschaftsdienste, Boni und Firmenwagen sind nicht berücksichtigt.</p>';
    }
    app.querySelectorAll('[data-calc]').forEach(function (s) {
      s.addEventListener('change', function () {
        var k = s.getAttribute('data-calc');
        calc[k] = k === 'exp' ? parseInt(s.value, 10) : s.value;
        render();
      });
    });
    render();
  }

  /* ===== Karriere-Tools ===== */
  var TOOL_TABS = [
    ['kompetenzprofil', '🧭', 'Kompetenzprofil'], ['lernpfad', '🗺️', 'Lernpfad'], ['vergleich', '⚖️', 'Berufsvergleich'],
    ['bewerbung', '📄', 'Bewerbung'], ['interview', '🎤', 'Interview'], ['stellen', '🔎', 'Stellen & Ausbildung']
  ];
  function toolsShell(active, inner) {
    var t = TOOL_TABS.filter(function (x) { return x[0] === active; })[0];
    return pageHero('Karriere-Tools', t ? esc(t[2]) : 'Karriere-Tools', t ? '' : 'Werkzeuge für Orientierung, Planung und Bewerbung in der Medizintechnik.',
      crumb([['Start', '#/'], ['Karriere-Tools', '#/tools']].concat(t ? [[t[2]]] : []))) +
      '<div class="container page"><nav class="tabs" aria-label="Karriere-Tools">' + TOOL_TABS.map(function (x) {
        return '<a class="tab' + (x[0] === active ? ' active' : '') + '" href="#/tools/' + x[0] + '"' + (x[0] === active ? ' aria-current="page"' : '') + '><span aria-hidden="true">' + x[1] + '</span>' + x[2] + '</a>';
      }).join('') + '</nav>' + inner + '</div>';
  }
  function pageToolsHub() {
    return toolsShell('', toolTiles());
  }

  /* --- Kompetenzprofil --- */
  function pageCompetence() {
    var mine = store('profile') || {};
    var intro = '<div class="notice info" style="margin-bottom:1.2rem"><span aria-hidden="true">🧭</span><span>Schätzen Sie sich in neun Bereichen ein (1 = wenig Interesse/Erfahrung, 5 = sehr stark). Die Plattform vergleicht Ihr Profil mit den Anforderungsprofilen aller Berufe. Ihre Eingaben bleiben nur in Ihrem Browser gespeichert.</span></div>';
    return toolsShell('kompetenzprofil', intro + '<div class="grid grid-2"><div class="card"><h2>Selbsteinschätzung</h2>' +
      DIMENSIONS.map(function (d) {
        var v = mine[d.id] || 3;
        return '<div class="slider-row"><label for="dim-' + d.id + '"><span>' + esc(d.label) + '</span><output id="out-' + d.id + '">' + v + '</output></label>' +
          (d.question ? '<div class="q">' + esc(d.question) + '</div>' : '') +
          '<input type="range" min="1" max="5" step="1" id="dim-' + d.id + '" data-dim="' + d.id + '" value="' + v + '"><div class="scale-labels"><span>gering</span><span>sehr hoch</span></div></div>';
      }).join('') +
      '<div class="btn-row" style="margin-top:1rem"><button class="btn secondary small" type="button" data-reset-profile>Zurücksetzen</button></div></div>' +
      '<div><div class="card"><h2>Ihr Profil im Vergleich</h2><div id="match-radar"></div></div>' +
      '<div class="card" style="margin-top:1rem"><h2>Passende Berufe</h2><div id="match-list"></div><p class="tiny muted" style="margin-top:.8rem">Die Übereinstimmung ist eine Orientierungshilfe, keine Eignungsdiagnostik. Persönliche Beratung bietet z. B. die Berufsberatung der Bundesagentur für Arbeit.</p></div></div></div>');
  }
  function matchScores(mine) {
    return professions.filter(function (p) { return p.profile; }).map(function (p) {
      var num = 0, den = 0;
      DIMENSIONS.forEach(function (d) {
        var req = p.profile[d.id] || 1, u = mine[d.id] || 3;
        var w = 0.5 + req / 5;              // für den Beruf wichtige Bereiche zählen stärker
        var diff = Math.abs(u - req);
        if (u > req) diff *= 0.5;           // „Übererfüllung“ wird milder gewertet
        num += diff * w; den += 4 * w;
      });
      return { p: p, score: Math.round((1 - num / den) * 100) };
    }).sort(function (a, b) { return b.score - a.score; });
  }
  function bindCompetence() {
    var mine = store('profile') || {};
    DIMENSIONS.forEach(function (d) { if (!mine[d.id]) mine[d.id] = 3; });
    function render() {
      var res = matchScores(mine);
      var top = res[0];
      document.getElementById('match-radar').innerHTML = top ? C.radar(DIMENSIONS, [{ name: 'Mein Profil', values: mine }, { name: top.p.title, values: top.p.profile }], { ariaLabel: 'Eigenes Profil im Vergleich mit ' + top.p.title }) : '';
      document.getElementById('match-list').innerHTML = res.map(function (r, i) {
        return '<div class="match"><span class="rank">' + (i + 1) + '</span><div><a href="#/berufe/' + esc(r.p.id) + '"><strong>' + esc(r.p.icon || '') + ' ' + esc(r.p.title) + '</strong></a>' +
          '<div class="mbar"><i style="width:' + r.score + '%"></i></div></div><span class="pct">' + r.score + ' %</span></div>';
      }).join('') + (res.length >= 3 ? '<p style="margin-top:1rem"><a class="btn small" href="#/tools/vergleich?ids=' + res.slice(0, 3).map(function (r) { return r.p.id; }).join(',') + '">Top 3 vergleichen →</a></p>' : '');
    }
    app.querySelectorAll('[data-dim]').forEach(function (s) {
      s.addEventListener('input', function () {
        mine[s.getAttribute('data-dim')] = parseInt(s.value, 10);
        document.getElementById('out-' + s.getAttribute('data-dim')).textContent = s.value;
        store('profile', mine);
        render();
      });
    });
    app.querySelector('[data-reset-profile]').addEventListener('click', function () {
      DIMENSIONS.forEach(function (d) { mine[d.id] = 3; var s = document.getElementById('dim-' + d.id); s.value = 3; document.getElementById('out-' + d.id).textContent = 3; });
      store('profile', mine); render();
    });
    render();
  }

  /* --- Lernpfad --- */
  function pageLearning(params) {
    var id = params.beruf && profById[params.beruf] ? params.beruf : (store('lp-last') || 'medizintechnikingenieur');
    if (!profById[id]) id = professions[0] && professions[0].id;
    var p = profById[id];
    var steps = arr((tools.learningPaths || {})[id]);
    var done = store('lp-' + id) || [];
    var pct = steps.length ? Math.round(done.length / steps.length * 100) : 0;
    store('lp-last', id);
    return toolsShell('lernpfad', '<div class="toolbar"><label class="small" for="lp-select" style="font-weight:700">Zielberuf:</label><select class="select" id="lp-select" style="flex:1;max-width:420px">' +
      professions.map(function (x) { return '<option value="' + esc(x.id) + '"' + (x.id === id ? ' selected' : '') + '>' + esc(x.title) + '</option>'; }).join('') + '</select>' +
      '<button class="btn secondary small" type="button" onclick="window.print()">🖨️ Drucken</button></div>' +
      '<div class="layout-side"><div class="card"><h2>' + esc(p.icon || '') + ' Ihr Weg zum Beruf ' + esc(p.title) + '</h2>' +
      '<p class="small muted">Haken Sie erledigte Schritte ab – der Fortschritt wird lokal in Ihrem Browser gespeichert.</p>' +
      '<div class="small"><strong id="lp-pct">' + pct + ' %</strong> erledigt</div><div class="progress"><i id="lp-bar" style="width:' + pct + '%"></i></div>' +
      (steps.length ? '<ol class="steps">' + steps.map(function (s, i) {
        var progs = arr(s.educationIds).map(function (x) { return progById[x]; }).filter(Boolean);
        return '<li><div class="phase">' + esc(s.phase || '') + (s.duration ? ' · ' + esc(s.duration) : '') + '</div><h3 style="margin:.15rem 0 .3rem">' + esc(s.title) + '</h3><p class="small">' + esc(s.text || '') + '</p>' +
          (progs.length ? '<div class="tags" style="margin-bottom:.5rem">' + progs.map(function (pr) { return '<a class="tag brand" href="#/ausbildung/' + esc(pr.id) + '">' + (EDU_ICONS[pr.type] || '🎓') + ' ' + esc(pr.title) + '</a>'; }).join('') + '</div>' : '') +
          '<label class="todo"><input type="checkbox" data-step="' + i + '"' + (done.indexOf(i) >= 0 ? ' checked' : '') + '><span class="small">Erledigt</span></label></li>';
      }).join('') + '</ol>' : '<p class="muted">Für diesen Beruf ist noch kein Lernpfad hinterlegt.</p>') + '</div>' +
      '<aside class="sticky"><div class="card"><h3>Karrierestufen</h3><ol class="dot-list small">' + arr(p.careerPath).map(function (c) { return '<li><strong>' + esc(c.title) + '</strong> <span class="muted">' + esc(c.years || '') + '</span></li>'; }).join('') + '</ol>' +
      '<p style="margin:.8rem 0 0"><a href="#/berufe/' + esc(id) + '">Zum Berufsprofil →</a></p></div></aside></div>');
  }
  function bindLearning(params) {
    var sel = document.getElementById('lp-select');
    sel.addEventListener('change', function () { location.hash = '#/tools/lernpfad?beruf=' + sel.value; });
    var id = sel.value;
    app.querySelectorAll('[data-step]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var done = [];
        app.querySelectorAll('[data-step]').forEach(function (x) { if (x.checked) done.push(parseInt(x.getAttribute('data-step'), 10)); });
        store('lp-' + id, done);
        var total = app.querySelectorAll('[data-step]').length;
        var pct = total ? Math.round(done.length / total * 100) : 0;
        document.getElementById('lp-pct').textContent = pct + ' %';
        document.getElementById('lp-bar').style.width = pct + '%';
      });
    });
  }

  /* --- Vergleich --- */
  function pageCompare(params) {
    var ids = (params.ids || '').split(',').filter(function (x) { return profById[x]; }).filter(uniq).slice(0, 3);
    if (!ids.length) ids = ['medizintechniker', 'servicetechniker', 'medizintechnikingenieur'].filter(function (x) { return profById[x]; });
    var ps = ids.map(function (x) { return profById[x]; });
    function selects() {
      var out = '';
      for (var i = 0; i < 3; i++) {
        out += '<label class="compare-head" style="flex:1;min-width:200px"><span class="series-key" style="background:' + C.SERIES[i] + '"></span><select class="select" data-cmp="' + i + '" style="flex:1" aria-label="Beruf ' + (i + 1) + '">' +
          '<option value="">– ' + (i === 0 ? 'Beruf wählen' : 'optional') + ' –</option>' +
          professions.map(function (p) { return '<option value="' + esc(p.id) + '"' + (ids[i] === p.id ? ' selected' : '') + '>' + esc(p.title) + '</option>'; }).join('') + '</select></label>';
      }
      return out;
    }
    function row(label, fn) {
      return '<tr><td>' + label + '</td>' + ps.map(function (p) { return '<td>' + fn(p) + '</td>'; }).join('') + '</tr>';
    }
    function salRange(p) { var s = sal(p.id); return s && s.entry ? C.keur(s.entry[0]) + ' – ' + C.keur((s.senior || s.mid || s.entry)[1]) : '–'; }
    var table = '<div class="table-wrap"><table class="data compare-table"><thead><tr><th>Merkmal</th>' + ps.map(function (p, i) {
      return '<th><span class="compare-head"><span class="series-key" style="background:' + C.SERIES[i] + '"></span><a href="#/berufe/' + esc(p.id) + '">' + esc(p.title) + '</a></span></th>';
    }).join('') + '</tr></thead><tbody>' +
      row('Tätigkeitsfeld', function (p) { return esc(p.category || '–'); }) +
      row('Kurzbeschreibung', function (p) { return '<span class="small">' + esc(p.summary || '') + '</span>'; }) +
      row('Einstiegswege', function (p) { return '<ul class="dot-list small">' + arr(p.entryPaths).map(function (e) { return '<li>' + esc(e.type) + ': ' + esc(e.title) + (e.duration ? ' <span class="muted">(' + esc(e.duration) + ')</span>' : '') + '</li>'; }).join('') + '</ul>'; }) +
      row('Gehalt Median <span class="tag warn">Richtwert</span>', function (p) { var m = median(p.id); return m ? '<strong>' + C.eur(m) + '</strong>' : '–'; }) +
      row('Gehaltsspanne', salRange) +
      row('Arbeitsmarkt', function (p) { return '<span class="outlook ' + outlookCls(p.outlook) + '">' + esc(p.outlook || '–') + '</span>'; }) +
      row('Reisetätigkeit', function (p) { return esc((p.facts || {}).travel || '–'); }) +
      row('Homeoffice', function (p) { return esc((p.facts || {}).remote || '–'); }) +
      row('Arbeitszeit', function (p) { return '<span class="small">' + esc((p.facts || {}).workload || '–') + '</span>'; }) +
      row('Arbeitgeber', function (p) { return esc(arr(p.employerTypes).map(function (t) { return (empTypeById[t] || {}).label || t; }).join(', ')); }) +
      row('Kernaufgaben', function (p) { return '<ul class="dot-list small">' + arr(p.tasks).slice(0, 4).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'; }) +
      row('Fachkompetenzen', function (p) { return tags(arr((p.skills || {}).hard).slice(0, 6)); }) +
      DIMENSIONS.map(function (d) {
        return row(esc(d.label), function (p) {
          var v = (p.profile || {})[d.id] || 0;
          return '<span class="meter" style="grid-template-columns:1fr"><span class="bar" aria-label="' + v + ' von 5">' + [1, 2, 3, 4, 5].map(function (k) { return '<i class="' + (k <= v ? 'on' : '') + '"></i>'; }).join('') + '</span></span>';
        });
      }).join('') +
      '</tbody></table></div>';

    return toolsShell('vergleich', '<div class="toolbar">' + selects() + '</div>' +
      '<div class="grid grid-2" style="margin-bottom:1.2rem"><div class="card"><h2>Anforderungsprofile</h2>' +
      C.radar(DIMENSIONS, ps.map(function (p) { return { name: p.title, values: p.profile || {} }; }), { ariaLabel: 'Vergleich der Anforderungsprofile' }) + '</div>' +
      '<div class="card"><h2>Gehaltsspannen <span class="tag warn">Richtwert</span></h2>' + salaryRanges(ids) + '</div></div>' + table);
  }
  function bindCompare() {
    app.querySelectorAll('[data-cmp]').forEach(function (s) {
      s.addEventListener('change', function () {
        var ids = [];
        app.querySelectorAll('[data-cmp]').forEach(function (x) { if (x.value) ids.push(x.value); });
        location.hash = '#/tools/vergleich?ids=' + ids.filter(uniq).join(',');
      });
    });
  }

  /* --- Bewerbung --- */
  function pageApplication() {
    var checks = arr(tools.documentsChecklist);
    var done = store('doc-check') || [];
    var pct = checks.length ? Math.round(done.length / checks.length * 100) : 0;
    return toolsShell('bewerbung', '<div class="layout-side"><div>' +
      arr(tools.application).map(function (s, i) {
        return '<details class="acc"' + (i === 0 ? ' open' : '') + '><summary>' + esc(s.title) + '</summary><div class="acc-body">' + list(s.tips) + '</div></details>';
      }).join('') + '</div>' +
      '<aside class="sticky"><div class="card"><h3>Checkliste Bewerbungsunterlagen</h3><div class="small"><strong id="doc-pct">' + pct + ' %</strong> vollständig</div><div class="progress"><i id="doc-bar" style="width:' + pct + '%"></i></div>' +
      checks.map(function (c, i) { return '<label class="todo"><input type="checkbox" data-doc="' + i + '"' + (done.indexOf(i) >= 0 ? ' checked' : '') + '><span class="small">' + esc(c) + '</span></label>'; }).join('') +
      '</div><div class="card" style="margin-top:1rem"><h3>Weiter geht’s</h3><ul class="plain-list small"><li><a href="#/tools/interview">🎤 Vorstellungsgespräch üben</a></li><li><a href="#/gehalt#rechner">💶 Gehaltsvorstellung ermitteln</a></li><li><a href="#/tools/stellen">🔎 Stellen finden</a></li></ul></div></aside></div>');
  }
  function bindApplication() {
    app.querySelectorAll('[data-doc]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var done = [];
        app.querySelectorAll('[data-doc]').forEach(function (x) { if (x.checked) done.push(parseInt(x.getAttribute('data-doc'), 10)); });
        store('doc-check', done);
        var pct = Math.round(done.length / app.querySelectorAll('[data-doc]').length * 100);
        document.getElementById('doc-pct').textContent = pct + ' %';
        document.getElementById('doc-bar').style.width = pct + '%';
      });
    });
  }

  /* --- Interview --- */
  var deckState = { area: 'general', i: 0, shown: false };
  function deck() {
    var iv = tools.interview || {};
    if (deckState.area === 'general') return arr(iv.general);
    var a = arr(iv.technical).filter(function (t) { return t.area === deckState.area; })[0];
    return a ? arr(a.questions) : [];
  }
  function pageInterview() {
    var iv = tools.interview || {};
    var m = iv.method || {};
    return toolsShell('interview', '<div class="grid grid-2"><div>' +
      '<div class="card"><h2>Lernkarten</h2><div class="toolbar" style="padding:.5rem;margin-bottom:.8rem"><select class="select" id="deck-area" style="flex:1" aria-label="Themenbereich">' +
      '<option value="general">Allgemeine Fragen</option>' + arr(iv.technical).map(function (t) { return '<option value="' + esc(t.area) + '"' + (deckState.area === t.area ? ' selected' : '') + '>Fachfragen: ' + esc(t.area) + '</option>'; }).join('') + '</select></div>' +
      '<div class="card flashcard" id="flashcard" tabindex="0" role="button" aria-label="Karte umdrehen"></div>' +
      '<div class="btn-row" style="justify-content:space-between;margin-top:.8rem"><button class="btn secondary small" type="button" data-deck="prev">← Zurück</button><span class="small muted" id="deck-pos"></span><button class="btn small" type="button" data-deck="next">Weiter →</button></div>' +
      '<p class="kbd-hint" style="margin:.6rem 0 0">Tipp: Karte anklicken oder Leertaste drücken, um den Hinweis zu sehen.</p></div>' +
      '<div class="card" style="margin-top:1rem"><h2>Eigene Fragen an den Arbeitgeber</h2>' + list(iv.ownQuestions, 'dot-list') + '</div></div>' +
      '<div><div class="card"><h2>' + esc(m.title || 'STAR-Methode') + '</h2><p class="small muted">Strukturiert antworten – besonders bei Fragen nach konkreten Situationen.</p>' +
      arr(m.steps).map(function (s) {
        return '<div style="display:flex;gap:.8rem;margin:.7rem 0"><span class="icon-badge" style="font-weight:800;color:var(--brand)">' + esc(s.key) + '</span><div><strong>' + esc(s.label) + '</strong><div class="small muted">' + esc(s.text) + '</div></div></div>';
      }).join('') + '</div>' +
      '<div class="grid grid-2" style="margin-top:1rem"><div class="card"><h3>✅ Do’s</h3>' + list(iv.dos, 'dot-list small') + '</div><div class="card"><h3>❌ Don’ts</h3>' + list(iv.donts, 'dot-list small') + '</div></div>' +
      '<div class="card" style="margin-top:1rem"><h3>Alle Fragen im Überblick</h3>' + arr(iv.technical).map(function (t) {
        return '<details class="acc"><summary>' + esc(t.area) + ' (' + arr(t.questions).length + ')</summary><div class="acc-body small">' + arr(t.questions).map(function (q) { return '<p><strong>' + esc(q.q) + '</strong><br><span class="muted">' + esc(q.hint) + '</span></p>'; }).join('') + '</div></details>';
      }).join('') + '</div></div></div>');
  }
  function bindInterview() {
    var card = document.getElementById('flashcard');
    function render() {
      var d = deck();
      if (!d.length) { card.innerHTML = '<p class="muted">Keine Fragen vorhanden.</p>'; return; }
      deckState.i = (deckState.i + d.length) % d.length;
      var q = d[deckState.i];
      card.innerHTML = '<div class="q">' + esc(q.q) + '</div>' + (deckState.shown ? '<div class="hint-label">Hinweis</div><div class="a">' + esc(q.hint) + '</div>' : '<div class="kbd-hint" style="margin-top:1rem">Klicken für Hinweis</div>');
      document.getElementById('deck-pos').textContent = (deckState.i + 1) + ' / ' + d.length;
    }
    function flip() { deckState.shown = !deckState.shown; render(); }
    card.addEventListener('click', flip);
    card.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
    app.querySelectorAll('[data-deck]').forEach(function (b) {
      b.addEventListener('click', function () { deckState.i += b.getAttribute('data-deck') === 'next' ? 1 : -1; deckState.shown = false; render(); });
    });
    document.getElementById('deck-area').addEventListener('change', function (e) { deckState.area = e.target.value; deckState.i = 0; deckState.shown = false; render(); });
    render();
  }

  /* --- Stellen & Ausbildung --- */
  function pageJobs(params) {
    var id = params.beruf && profById[params.beruf] ? params.beruf : '';
    var p = profById[id];
    var term = p ? shortTitle(p.title) : 'Medizintechnik';
    var q = encodeURIComponent(term);
    var searches = [
      ['Jobbörse der Bundesagentur für Arbeit – Stellen', 'https://www.arbeitsagentur.de/jobsuche/suche?angebotsart=1&was=' + q],
      ['Jobbörse der Bundesagentur für Arbeit – Ausbildung & duales Studium', 'https://www.arbeitsagentur.de/jobsuche/suche?angebotsart=4&was=' + encodeURIComponent(p ? term : 'Medizintechnik')],
      ['StepStone', 'https://www.stepstone.de/jobs/' + encodeURIComponent(term.toLowerCase().replace(/\s+/g, '-'))],
      ['Indeed', 'https://de.indeed.com/jobs?q=' + q],
      ['LinkedIn Jobs', 'https://www.linkedin.com/jobs/search/?keywords=' + q + '&location=Deutschland']
    ];
    var emps = employers.filter(function (e) { return safeUrl(e.careerUrl) && (!id || arr(e.professionIds).indexOf(id) >= 0); });
    return toolsShell('stellen', '<div class="notice info" style="margin-bottom:1.2rem"><span aria-hidden="true">ℹ️</span><span>Der MedTech Career Hub veröffentlicht <strong>keine eigenen Stellenanzeigen</strong>. Damit Sie stets aktuelle Angebote sehen, führen die Links direkt zu Suchergebnissen etablierter Jobbörsen und zu den Karriereseiten der Arbeitgeber.</span></div>' +
      '<div class="toolbar"><label class="small" for="job-prof" style="font-weight:700">Beruf:</label><select class="select" id="job-prof" style="flex:1;max-width:420px"><option value="">Medizintechnik allgemein</option>' +
      professions.map(function (x) { return '<option value="' + esc(x.id) + '"' + (x.id === id ? ' selected' : '') + '>' + esc(x.title) + '</option>'; }).join('') + '</select></div>' +
      '<div class="grid grid-2"><div class="card"><h2>Direkt suchen: „' + esc(term) + '“</h2><ul class="plain-list">' +
      searches.map(function (s) { return '<li style="margin:.6rem 0">' + extLink(s[1], s[0]) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card"><h2>Weitere Jobportale</h2><ul class="plain-list small">' + arr(tools.jobPortals).map(function (j) {
        return '<li style="margin:.6rem 0">' + (safeUrl(j.url) ? extLink(j.url, j.name) : '<strong>' + esc(j.name) + '</strong>') + (j.focus ? ' <span class="tag">' + esc(j.focus) + '</span>' : '') + '<div class="muted">' + esc(j.description || '') + '</div></li>';
      }).join('') + '</ul></div></div>' +
      '<section class="section"><div class="section-head"><div><h2>Karriereseiten der Arbeitgeber</h2><p>' + emps.length + ' Arbeitgeber' + (p ? ', die ' + esc(p.title) + ' beschäftigen' : '') + '</p></div></div>' +
      '<div class="table-wrap"><table class="data"><thead><tr><th>Arbeitgeber</th><th>Typ</th><th>Hauptsitz</th><th>Karriere</th></tr></thead><tbody>' +
      emps.map(function (e) {
        return '<tr><td><a href="#/arbeitgeber/' + esc(e.id) + '"><strong>' + esc(e.name) + '</strong></a></td><td>' + esc((empTypeById[e.type] || {}).label || '') + '</td><td>' + esc(e.hq || '') + '</td><td>' + extLink(e.careerUrl, 'Stellenangebote') + '</td></tr>';
      }).join('') + '</tbody></table></div></section>' +
      (arr(tools.associations).length ? '<section class="section"><h2>Verbände &amp; Netzwerke</h2><p class="muted">Fachverbände bieten Stellenmärkte, Nachwuchsprogramme, Veranstaltungen und Kontakte.</p><div class="grid grid-auto">' +
        tools.associations.map(function (a) { return '<div class="card"><h3>' + esc(a.abbr || a.name) + '</h3><div class="meta">' + esc(a.abbr ? a.name : '') + '</div><p class="small">' + esc(a.description || '') + '</p>' + extLink(a.url, 'Website') + '</div>'; }).join('') + '</div></section>' : ''));
  }
  function bindJobs() {
    var s = document.getElementById('job-prof');
    s.addEventListener('change', function () { location.hash = '#/tools/stellen' + (s.value ? '?beruf=' + s.value : ''); });
  }

  /* ===== Merkliste ===== */
  function pageFavorites() {
    var ps = favs.professions.map(function (x) { return profById[x]; }).filter(Boolean);
    var es = favs.employers.map(function (x) { return empById[x]; }).filter(Boolean);
    var gs = favs.programs.map(function (x) { return progById[x]; }).filter(Boolean);
    var empty = !ps.length && !es.length && !gs.length;
    return pageHero('Merkliste', 'Ihre Merkliste', 'Gemerkte Berufe, Bildungsangebote und Arbeitgeber – lokal in Ihrem Browser gespeichert.', crumb([['Start', '#/'], ['Merkliste']])) +
      '<div class="container page">' + (empty ? '<div class="empty card"><p style="font-size:2rem;margin:0">☆</p><p>Noch nichts gemerkt. Nutzen Sie den Stern auf Berufs-, Bildungs- und Arbeitgeberkarten.</p><a class="btn" href="#/berufe">Berufe entdecken</a></div>' : '') +
      (ps.length ? '<section><div class="section-head"><h2>Berufe</h2>' + (ps.length > 1 ? '<a class="btn secondary small" href="#/tools/vergleich?ids=' + ps.slice(0, 3).map(function (p) { return p.id; }).join(',') + '">Vergleichen</a>' : '') + '</div><div class="grid grid-auto">' + ps.map(profCard).join('') + '</div></section>' : '') +
      (gs.length ? '<section class="section"><h2>Ausbildung &amp; Studium</h2><div class="grid grid-auto">' + gs.map(progCard).join('') + '</div></section>' : '') +
      (es.length ? '<section class="section"><h2>Arbeitgeber</h2><div class="grid grid-auto">' + es.map(empCard).join('') + '</div></section>' : '') + '</div>';
  }

  /* ===== Suche ===== */
  function pageSearch(params) {
    var q = params.q || '';
    var words = norm(q).split(/\s+/).filter(Boolean);
    function score(hayParts) {
      if (!words.length) return 0;
      var title = norm(hayParts[0]), rest = norm(hayParts.slice(1).join(' '));
      var s = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (title.indexOf(w) >= 0) s += 3; else if (rest.indexOf(w) >= 0) s += 1; else return 0;
      }
      return s;
    }
    var rp = professions.map(function (p) { return { x: p, s: score([p.title, p.summary, p.description, arr(p.tasks).join(' '), arr((p.skills || {}).hard).join(' ')]) }; }).filter(function (r) { return r.s; }).sort(function (a, b) { return b.s - a.s; });
    var rg = programs.map(function (p) { return { x: p, s: score([p.title, p.type, p.description, arr(p.contents).join(' '), arr(p.providers).join(' ')]) }; }).filter(function (r) { return r.s; }).sort(function (a, b) { return b.s - a.s; });
    var re = employers.map(function (e) { return { x: e, s: score([e.name, e.hq, e.state, e.description, arr(e.focus).join(' '), arr(e.locations).join(' ')]) }; }).filter(function (r) { return r.s; }).sort(function (a, b) { return b.s - a.s; });
    var total = rp.length + rg.length + re.length;
    return pageHero('Suche', 'Suchergebnisse', '', crumb([['Start', '#/'], ['Suche']])) +
      '<div class="container page"><form class="toolbar" role="search" data-search-form><input class="input search" name="q" type="search" value="' + esc(q) + '" aria-label="Suchbegriff" placeholder="Suchbegriff …"><button class="btn" type="submit">Suchen</button></form>' +
      '<p class="result-count">' + (q ? total + ' Treffer für „' + esc(q) + '“' : 'Bitte einen Suchbegriff eingeben.') + '</p>' +
      (rp.length ? '<section><h2>Berufe (' + rp.length + ')</h2><div class="grid grid-auto">' + rp.map(function (r) { return profCard(r.x); }).join('') + '</div></section>' : '') +
      (rg.length ? '<section class="section"><h2>Ausbildung &amp; Studium (' + rg.length + ')</h2><div class="grid grid-auto">' + rg.map(function (r) { return progCard(r.x); }).join('') + '</div></section>' : '') +
      (re.length ? '<section class="section"><h2>Arbeitgeber (' + re.length + ')</h2><div class="grid grid-auto">' + re.map(function (r) { return empCard(r.x); }).join('') + '</div></section>' : '') +
      (q && !total ? '<div class="empty card">Keine Treffer. Versuchen Sie es z. B. mit „MDR“, „Röntgen“, „Service“ oder einem Ortsnamen.</div>' : '') + '</div>';
  }

  /* ===== Über ===== */
  function pageAbout() {
    return pageHero('Über die Plattform', 'Über den MedTech Career Hub', 'Ziel, Methodik und Quellen.', crumb([['Start', '#/'], ['Über']])) +
      '<div class="container page"><div class="grid grid-2"><div class="card"><h2>Ziel</h2><p>Der MedTech Career Hub bündelt Informationen zu Berufen, Bildungswegen, Arbeitgebern, Gehältern und Arbeitsmarkt der Medizintechnik in Deutschland – für Schüler/innen, Studierende, Fachkräfte und Quereinsteiger/innen.</p>' +
      '<h3>Redaktionelle Grundsätze</h3><ul class="dot-list"><li>Gehälter sind stets als <strong>Richtwerte</strong> gekennzeichnet und mit Quellen belegt.</li><li>Unternehmensangaben stammen aus öffentlich zugänglichen Informationen der Organisationen; sie werden ohne Gewähr wiedergegeben.</li><li>Es werden keine erfundenen Stellenanzeigen gezeigt; stattdessen verlinken wir auf aktuelle Suchergebnisse und Karriereseiten.</li><li>Die Aufnahme in das Verzeichnis ist unabhängig und nicht bezahlt.</li><li>Persönliche Eingaben (Kompetenzprofil, Merkliste, Fortschritte) werden ausschließlich lokal im Browser gespeichert.</li></ul></div>' +
      '<div class="card"><h2>Quellen</h2><ul class="src-list small">' + arr(salaries.sources).map(function (s) {
        return '<li>' + (safeUrl(s.url) ? extLink(s.url, s.name) : esc(s.name)) + (s.note ? ' – <span class="muted">' + esc(s.note) + '</span>' : '') + '</li>';
      }).join('') + '</ul>' + (arr(tools.associations).length ? '<h3>Verbände</h3><ul class="src-list small">' + tools.associations.map(function (a) { return '<li>' + extLink(a.url, a.name) + '</li>'; }).join('') + '</ul>' : '') +
      '<p class="small muted">Stand der Inhalte: ' + esc(salaries.asOf || '2026') + '.</p></div></div></div>';
  }

  function notFound() {
    return pageHero('', 'Seite nicht gefunden', 'Die angeforderte Seite existiert nicht (mehr).', '') +
      '<div class="container page"><a class="btn" href="#/">Zur Startseite</a></div>';
  }

  /* ---------------------------------------------------------
     Router
     --------------------------------------------------------- */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var anchor = '';
    var parts = h.split('?');
    var path = parts[0];
    var query = parts.slice(1).join('?');
    // Unterstützt "#/gehalt#markt" (Sprungmarke innerhalb einer Route)
    var ai = path.indexOf('#');
    if (ai >= 0) { anchor = path.slice(ai + 1); path = path.slice(0, ai); }
    var qi = query.indexOf('#');
    if (qi >= 0) { anchor = query.slice(qi + 1); query = query.slice(0, qi); }
    var params = {};
    query.split('&').forEach(function (kv) {
      if (!kv) return;
      var p = kv.split('=');
      params[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' '));
    });
    return { segs: path.split('/').filter(Boolean), params: params, anchor: anchor };
  }

  var lastPath = null;
  function route() {
    var r = parseHash();
    var s = r.segs, html, bind, nav = s[0] || '';
    C.hideTip();
    switch (s[0]) {
      case undefined: case '': html = pageHome(); break;
      case 'berufe':
        if (s[1]) html = pageProfession(s[1]); else { html = pageProfessions(); bind = bindProfessions; }
        break;
      case 'ausbildung':
        if (s[1]) html = pageProgram(s[1]); else { html = pageEducation(); bind = bindEducation; }
        break;
      case 'arbeitgeber':
        if (s[1]) html = pageEmployer(s[1]); else { html = pageEmployers(r.params); bind = bindEmployers; }
        break;
      case 'gehalt': html = pageSalary(); bind = bindSalary; break;
      case 'tools':
        switch (s[1]) {
          case 'kompetenzprofil': html = pageCompetence(); bind = bindCompetence; break;
          case 'lernpfad': html = pageLearning(r.params); bind = bindLearning; break;
          case 'vergleich': html = pageCompare(r.params); bind = bindCompare; break;
          case 'bewerbung': html = pageApplication(); bind = bindApplication; break;
          case 'interview': html = pageInterview(); bind = bindInterview; break;
          case 'stellen': html = pageJobs(r.params); bind = bindJobs; break;
          default: html = pageToolsHub();
        }
        break;
      case 'merkliste': html = pageFavorites(); break;
      case 'suche': html = pageSearch(r.params); break;
      case 'ueber': html = pageAbout(); break;
      default: html = notFound();
    }
    app.innerHTML = html;
    if (bind) bind(r.params);

    // Navigation hervorheben
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      var on = a.getAttribute('data-nav') === nav;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    closeNav();

    // Seitentitel
    var h1 = app.querySelector('h1');
    document.title = (nav && h1 ? h1.textContent + ' – ' : '') + 'MedTech Career Hub';

    // Scrollen: Anker oder Seitenanfang (bei Filterwechsel derselben Seite nicht springen)
    var pathKey = s.join('/');
    if (r.anchor) {
      var el = document.getElementById(r.anchor);
      if (el) setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 0);
    } else if (pathKey !== lastPath) {
      window.scrollTo(0, 0);
      if (lastPath !== null) document.getElementById('main').focus({ preventScroll: true });
    }
    lastPath = pathKey;
  }

  /* ---------------------------------------------------------
     Globale Ereignisse
     --------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var fb = e.target.closest('[data-fav]');
    if (fb) {
      e.preventDefault(); e.stopPropagation();
      var parts = fb.getAttribute('data-fav').split(':');
      var on = toggleFav(parts[0], parts.slice(1).join(':'));
      document.querySelectorAll('[data-fav="' + fb.getAttribute('data-fav') + '"]').forEach(function (b) {
        b.setAttribute('aria-pressed', on); b.textContent = on ? '★' : '☆';
      });
      return;
    }
    // Sprungmarken innerhalb der Seite (ohne Routing)
    var a = e.target.closest('a[data-anchor]');
    if (a) {
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });
  document.addEventListener('submit', function (e) {
    var f = e.target.closest('[data-search-form]');
    if (!f) return;
    e.preventDefault();
    var q = f.querySelector('input[name="q"]').value.trim();
    location.hash = '#/suche?q=' + encodeURIComponent(q);
  });

  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.getElementById('main-nav');
  function closeNav() { mainNav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
  navToggle.addEventListener('click', function () {
    var open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });

  document.querySelector('.theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('mth-theme', next); } catch (err) { /* ignore */ }
  });

  C.bindTooltips(app);
  window.addEventListener('hashchange', route);
  updateFavCount();
  route();
})();
