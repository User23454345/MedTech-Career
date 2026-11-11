/* =========================================================
   MedTech Career Hub – kleine SVG-Diagrammbibliothek
   (keine Abhängigkeiten; klassisches Skript → window.MTHCharts)
   ========================================================= */
(function () {
  'use strict';

  var SERIES = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)'];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- Tooltip (eine Instanz für die ganze Seite) ---------- */
  var tip;
  function tooltip() {
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'viz-tooltip';
      tip.setAttribute('role', 'tooltip');
      document.body.appendChild(tip);
    }
    return tip;
  }
  function showTip(html, x, y) {
    var t = tooltip();
    t.innerHTML = html;
    t.classList.add('show');
    var w = t.offsetWidth, h = t.offsetHeight;
    var left = Math.min(window.innerWidth - w - 8, x + 14);
    var top = y - h - 12 < 4 ? y + 18 : y - h - 12;
    t.style.left = Math.max(4, left) + 'px';
    t.style.top = top + 'px';
  }
  function hideTip() { if (tip) tip.classList.remove('show'); }

  /** Bindet Tooltips an alle Elemente mit data-tip innerhalb von root. */
  function bindTooltips(root) {
    if (!root) return;
    root.addEventListener('mousemove', function (e) {
      var el = e.target.closest && e.target.closest('[data-tip]');
      if (!el || !root.contains(el)) { hideTip(); return; }
      showTip(el.getAttribute('data-tip'), e.clientX, e.clientY);
    });
    root.addEventListener('mouseleave', hideTip);
    root.addEventListener('focusin', function (e) {
      var el = e.target.closest && e.target.closest('[data-tip]');
      if (!el) return;
      var r = el.getBoundingClientRect();
      showTip(el.getAttribute('data-tip'), r.left + r.width / 2, r.top);
    });
    root.addEventListener('focusout', hideTip);
  }

  /**
   * Radar-/Netzdiagramm.
   * axes:   [{id, label}]
   * series: [{name, values:{id:1..5}}]  (max. 3 Reihen – validierte Farbslots 1–3)
   */
  function radar(axes, series, opts) {
    opts = opts || {};
    var size = opts.size || 360;
    var max = opts.max || 5;
    var cx = size / 2, cy = size / 2;
    var r = size / 2 - 62;
    var n = axes.length;
    var out = [];

    function pt(i, v) {
      var a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      return [cx + Math.cos(a) * r * (v / max), cy + Math.sin(a) * r * (v / max)];
    }

    out.push('<svg class="chart radar" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="' +
      esc(opts.ariaLabel || 'Kompetenzprofil als Netzdiagramm') + '">');

    // Gitter (Ringe)
    for (var lv = 1; lv <= max; lv++) {
      var ring = [];
      for (var i = 0; i < n; i++) ring.push(pt(i, lv).map(function (x) { return x.toFixed(1); }).join(','));
      out.push('<polygon points="' + ring.join(' ') + '" fill="none" class="grid-line"/>');
    }
    // Achsen + Beschriftung
    for (var j = 0; j < n; j++) {
      var p = pt(j, max);
      out.push('<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" class="grid-line"/>');
      var lp = pt(j, max + 0.95);
      var anchor = Math.abs(lp[0] - cx) < 8 ? 'middle' : (lp[0] > cx ? 'start' : 'end');
      out.push('<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 4).toFixed(1) + '" text-anchor="' + anchor +
        '" font-size="11.5" font-weight="600">' + esc(axes[j].label) + '</text>');
    }

    // Flächen
    series.forEach(function (s, si) {
      var color = SERIES[si % SERIES.length];
      var pts = axes.map(function (a, i) { return pt(i, s.values[a.id] || 0); });
      out.push('<polygon points="' + pts.map(function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ') +
        '" fill="' + color + '" fill-opacity="' + (series.length > 1 ? 0.12 : 0.18) + '" stroke="' + color +
        '" stroke-width="2" stroke-linejoin="round"/>');
    });
    // Punkte (mit Oberflächenring) + Tooltip-Trefferflächen
    series.forEach(function (s, si) {
      var color = SERIES[si % SERIES.length];
      axes.forEach(function (a, i) {
        var v = s.values[a.id] || 0;
        var q = pt(i, v);
        out.push('<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="4.5" fill="' + color +
          '" stroke="var(--surface)" stroke-width="2"/>');
        out.push('<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="12" fill="transparent" tabindex="-1" data-tip="' +
          esc('<strong>' + esc(s.name) + '</strong><br>' + esc(a.label) + ': ' + v + ' von ' + max) + '"/>');
      });
    });
    out.push('</svg>');

    var legend = '';
    if (series.length > 1) {
      legend = '<div class="chart-legend">' + series.map(function (s, si) {
        return '<span><i class="sw" style="background:' + SERIES[si] + '"></i>' + esc(s.name) + '</span>';
      }).join('') + '</div>';
    }
    return '<div class="radar-wrap">' + out.join('') + legend + '</div>';
  }

  /** Euro-Formatierung (z. B. 52.000 €) */
  var nf = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
  function eur(v) { return nf.format(Math.round(v)) + ' €'; }
  function keur(v) { return nf.format(Math.round(v / 1000)) + ' T€'; }

  window.MTHCharts = {
    radar: radar,
    bindTooltips: bindTooltips,
    hideTip: hideTip,
    eur: eur,
    keur: keur,
    esc: esc,
    SERIES: SERIES
  };
})();
