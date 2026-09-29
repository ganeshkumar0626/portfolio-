document.getElementById('year').textContent = new Date().getFullYear();
 
// Count-up for the hero stats
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-n]').forEach((el) => {
  const end = +el.dataset.n;
  if (reduce) { el.textContent = end; return; }
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    let n = 0;
    const t = setInterval(() => { el.textContent = ++n; if (n >= end) clearInterval(t); }, 220);
  }).observe(el);
});
 
// Click to copy email
const copyBtn = document.getElementById('copyMail');
copyBtn.addEventListener('click', async () => {
  const hint = document.getElementById('copyHint');
  try { await navigator.clipboard.writeText(document.getElementById('mailTxt').textContent); hint.textContent = 'Copied'; }
  catch { hint.textContent = 'Press Ctrl+C to copy'; }
  setTimeout(() => (hint.textContent = 'Click to copy'), 2000);
});
 
// Project brief opens the visitor's email app, filled in
document.getElementById('brief').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('bn').value, mail = document.getElementById('be').value, brief = document.getElementById('bb').value;
  const body = `Name: ${name}\nEmail: ${mail}\n\n${brief}`;
  location.href = 'mailto:ganeshkumar.designer25@gmail.com?subject=' + encodeURIComponent('Project brief from ' + name) + '&body=' + encodeURIComponent(body);
});
 
// Close mobile menu after tapping a link
const menu = document.getElementById('menu');
document.querySelectorAll('#menu a').forEach((a) => a.addEventListener('click', () => {
  if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));
 