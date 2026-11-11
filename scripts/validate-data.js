#!/usr/bin/env node
/* Prüft die Datendateien des MedTech Career Hub auf Vollständigkeit und Konsistenz.
   Aufruf: node scripts/validate-data.js */
'use strict';
const path = require('path');
global.window = global;
const files = ['professions-a', 'professions-b', 'education', 'employers-a', 'employers-b', 'salaries', 'tools'];
const errors = [], warnings = [];
for (const f of files) {
  try { require(path.join(__dirname, '..', 'js', 'data', f + '.js')); }
  catch (e) { errors.push(`${f}.js: ${e.message}`); }
}
const M = global.MTH || {};
const PROF = ['medizintechniker', 'biomedizinischer-ingenieur', 'servicetechniker', 'medizintechnikingenieur', 'medizinphysiker',
  'technischer-leiter', 'geraetemanagement', 'produktspezialist', 'anwendungstechniker', 'qualitaetsmanager', 'regulatory-affairs', 'software-entwickler'];
const DIMS = ['technik', 'medizin', 'physik', 'software', 'kommunikation', 'mobilitaet', 'regulatorik', 'fuehrung', 'forschung'];
const ETYPES = ['hersteller', 'krankenhaus', 'service', 'pruefdienst', 'labor', 'forschung'];
const REGIONS = ['nord', 'ost', 'west', 'sued', 'international'];
const CATS = ['Technik & Service', 'Ingenieurwesen & Entwicklung', 'Physik & Strahlung', 'Management & Qualität', 'Vertrieb & Anwendung'];
const EDU_TYPES = ['Ausbildung', 'Studium', 'Duales Studium', 'Fachschule', 'Weiterbildung', 'Zertifikat'];

const profs = M.professions || [];
const progs = (M.education || {}).programs || [];
const emps = M.employers || [];
const progIds = new Set(progs.map(p => p.id));
const dup = (list, label) => { const s = new Set(); list.forEach(x => { if (s.has(x.id)) errors.push(`${label}: doppelte ID ${x.id}`); s.add(x.id); }); };
dup(profs, 'professions'); dup(progs, 'programs'); dup(emps, 'employers');

for (const id of PROF) if (!profs.find(p => p.id === id)) errors.push(`Beruf fehlt: ${id}`);
for (const p of profs) {
  if (!PROF.includes(p.id)) warnings.push(`Unbekannte Berufs-ID: ${p.id}`);
  for (const k of ['title', 'icon', 'category', 'summary', 'description', 'tasks', 'workplaces', 'employerTypes', 'skills', 'requirements', 'entryPaths', 'educationIds', 'profile', 'careerPath', 'dayInLife', 'outlook', 'outlookText', 'related', 'facts'])
    if (p[k] == null) errors.push(`${p.id}: Feld fehlt: ${k}`);
  if (p.category && !CATS.includes(p.category)) errors.push(`${p.id}: ungültige Kategorie ${p.category}`);
  for (const d of DIMS) { const v = (p.profile || {})[d]; if (!(v >= 1 && v <= 5)) errors.push(`${p.id}: profile.${d} ungültig (${v})`); }
  (p.educationIds || []).forEach(e => { if (!progIds.has(e)) errors.push(`${p.id}: educationId unbekannt: ${e}`); });
  (p.related || []).forEach(r => { if (!PROF.includes(r)) errors.push(`${p.id}: related unbekannt: ${r}`); });
  (p.employerTypes || []).forEach(t => { if (!ETYPES.includes(t)) errors.push(`${p.id}: employerType unbekannt: ${t}`); });
  if (!['sehr gut', 'gut', 'stabil'].includes(p.outlook)) errors.push(`${p.id}: outlook ungültig: ${p.outlook}`);
}
for (const p of progs) {
  if (!EDU_TYPES.includes(p.type)) errors.push(`program ${p.id}: type ungültig: ${p.type}`);
  for (const k of ['title', 'duration', 'description', 'requirements', 'contents', 'professionIds'])
    if (p[k] == null) errors.push(`program ${p.id}: Feld fehlt: ${k}`);
  (p.professionIds || []).forEach(r => { if (!PROF.includes(r)) errors.push(`program ${p.id}: professionId unbekannt: ${r}`); });
}
for (const e of emps) {
  if (!ETYPES.includes(e.type)) errors.push(`employer ${e.id}: type ungültig: ${e.type}`);
  if (!REGIONS.includes(e.region)) errors.push(`employer ${e.id}: region ungültig: ${e.region}`);
  for (const k of ['name', 'hq', 'focus', 'description', 'professionIds']) if (e[k] == null) errors.push(`employer ${e.id}: Feld fehlt: ${k}`);
  (e.professionIds || []).forEach(r => { if (!PROF.includes(r)) errors.push(`employer ${e.id}: professionId unbekannt: ${r}`); });
  for (const u of ['careerUrl', 'website']) if (e[u] && !/^https:\/\//.test(e[u])) warnings.push(`employer ${e.id}: ${u} nicht https: ${e[u]}`);
}
const S = M.salaries || {};
for (const id of PROF) {
  const s = (S.byProfession || {})[id];
  if (!s) { errors.push(`Gehalt fehlt: ${id}`); continue; }
  for (const k of ['entry', 'mid', 'senior']) if (!Array.isArray(s[k]) || s[k][0] >= s[k][1]) errors.push(`Gehalt ${id}.${k} ungültig`);
  if (!s.median) errors.push(`Gehalt ${id}: median fehlt`);
  if (s.entry && s.senior && s.median && (s.median < s.entry[0] || s.median > s.senior[1])) warnings.push(`Gehalt ${id}: median außerhalb der Spanne`);
}
if ((S.states || []).length !== 16) errors.push(`salaries.states: ${(S.states || []).length} statt 16 Länder`);
for (const r of REGIONS) if (!(S.regions || []).find(x => x.id === r)) errors.push(`salaries.regions fehlt: ${r}`);
for (const t of ETYPES) if (!(S.employerTypes || []).find(x => x.type === t)) errors.push(`salaries.employerTypes fehlt: ${t}`);
if (!(S.experience || []).length) errors.push('salaries.experience leer');
if (!(S.sources || []).length) errors.push('salaries.sources leer');

const T = M.tools || {};
for (const d of DIMS) if (!(T.dimensions || []).find(x => x.id === d)) errors.push(`tools.dimensions fehlt: ${d}`);
for (const id of PROF) {
  const lp = (T.learningPaths || {})[id];
  if (!lp || !lp.length) errors.push(`Lernpfad fehlt: ${id}`);
  else lp.forEach(s => (s.educationIds || []).forEach(e => { if (!progIds.has(e)) errors.push(`Lernpfad ${id}: educationId unbekannt: ${e}`); }));
}
for (const k of ['application', 'documentsChecklist', 'interview', 'jobPortals', 'associations']) if (!T[k]) errors.push(`tools.${k} fehlt`);
((M.salaries || {}).market || {}).demand && S.market.demand.forEach(d => { if (!PROF.includes(d.professionId)) errors.push(`market.demand: unbekannte ID ${d.professionId}`); });

console.log(`Berufe: ${profs.length} · Bildungsangebote: ${progs.length} · Arbeitgeber: ${emps.length} (` +
  ETYPES.map(t => `${t} ${emps.filter(e => e.type === t).length}`).join(', ') + ')');
warnings.forEach(w => console.log('WARNUNG ' + w));
errors.forEach(e => console.log('FEHLER  ' + e));
console.log(errors.length ? `\n${errors.length} Fehler` : '\nAlle Prüfungen bestanden.');
process.exit(errors.length ? 1 : 0);
