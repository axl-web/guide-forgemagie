'use strict';
const $ = id => document.getElementById(id);
const format = value => new Intl.NumberFormat('fr-FR', {maximumFractionDigits: 4}).format(value);
const results = {
  sc: ['Succès critique', '43 <small>+3</small>', '30 <small>inchangée</small>', 'La force augmente, aucune autre ligne ne baisse. Un succès critique ne consomme pas de puits.'],
  sn: ['Succès neutre', '43 <small>+3</small>', '27 <small>−3</small>', 'La force augmente de 3. Ici, 3 intelligence sont perdues pour compenser les 3 de poids de la rune.'],
  ec: ['Échec critique', '40 <small>inchangée</small>', '27 <small>−3</small>', 'La force ne monte pas. Ici, 3 intelligence sont quand même perdues. La rune utilisée est consommée.']
};
document.querySelectorAll('[data-result]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-result]').forEach(other => { const active = other === button; other.classList.toggle('selected', active); other.setAttribute('aria-pressed', String(active)); });
  document.querySelector('.item-panel.after').dataset.state = button.dataset.result;
  const [title, force, intelligence, note] = results[button.dataset.result];
  $('result-title').textContent = title; $('force-value').innerHTML = force; $('int-value').innerHTML = intelligence; $('result-note').textContent = note;
}));
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
$('rune-search').addEventListener('input', event => {let visible = 0; document.querySelectorAll('#rune-table tbody tr').forEach(row => {row.hidden = !normalize(row.textContent).includes(normalize(event.target.value.trim())); if (!row.hidden) visible++;}); $('no-runes').hidden = visible !== 0;});
function number(id) { return Number($(id).value); }
$('well-form').addEventListener('submit', event => {
  event.preventDefault(); const before = number('old-well'), cost = number('rune-weight'), loss = number('lost-weight');
  if (![before,cost,loss].every(n => Number.isFinite(n) && n >= 0)) { $('well-output').textContent = 'Saisis des nombres positifs ou nuls.'; return; }
  if ($('outcome').value === 'sc') { $('well-output').textContent = `${format(before)} de puits · inchangé en SC`; return; }
  const raw = before + loss - cost;
  $('well-output').textContent = raw < -0.000001 ? 'Données à vérifier : le puits et les pertes saisis ne couvrent pas le poids de la rune.' : `${format(Math.max(0,raw))} de puits · ${format(before)} + ${format(loss)} − ${format(cost)}`;
});
$('outcome').addEventListener('change', () => { const critical = $('outcome').value === 'sc'; $('lost-weight').disabled = critical; $('rune-weight').disabled = critical; });
$('weight-form').addEventListener('submit', event => {event.preventDefault(); const quantity = number('quantity'), weight = number('stat'); if (!Number.isInteger(quantity) || quantity < 0 || !Number.isFinite(quantity)) { $('weight-output').textContent = 'Saisis un nombre entier positif ou nul.'; return; } $('weight-output').textContent = `${format(quantity*weight)} de poids · ${format(quantity)} × ${format(weight)}`;});
if ('IntersectionObserver' in window) {const observer = new IntersectionObserver(entries => {entries.forEach(entry => {if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(link => {const active = link.hash === '#' + entry.target.id;link.classList.toggle('active',active); if(active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');});});}, {rootMargin:'-12% 0px -65% 0px'});document.querySelectorAll('main section').forEach(section => observer.observe(section));}

