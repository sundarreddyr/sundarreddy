const projects = window.portfolioProjects;
const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
let projectTrigger;
let dialogCloseTimer;
function closeDetails() {
  if (!dialog.open || dialog.classList.contains('is-closing')) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { dialog.close(); return; }
  dialog.classList.add('is-closing');
  dialogCloseTimer = setTimeout(() => dialog.close(), 160);
}
function resumeLink(text, url) {
  return url ? `<a class="resume-link" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>` : text;
}
function linkedProjectText(text, links = []) {
  return links.reduce((result, link) => result.replace(link.text, resumeLink(link.text, link.url)), text);
}
function openProject(id, trigger) {
  const p = projects.find(project => project.id === id);
  if (!p) return;
  clearTimeout(dialogCloseTimer);
  dialog.classList.remove('stack-dialog', 'is-closing');
  document.getElementById('dialog-category').textContent = 'SELECTED WORK';
  projectTrigger = trigger || document.querySelector(`[data-project="${id}"]`);
  dialogContent.innerHTML = `<header class="project-dialog-header"><div class="detail-head"><div><h2 id="project-dialog-title">${resumeLink(p.name, p.projectUrl)}</h2><p class="company">${resumeLink(p.company, p.companyUrl)}</p></div></div><p class="dialog-summary">${p.summary}</p>${p.draft || p.story ? '' : `<div class="dialog-meta"><span>${p.role}</span><span>${p.period}: ${p.dates}</span></div>`}${p.liveUrl ? `<a class="dialog-live-link" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">${p.liveLabel} <span aria-hidden="true">↗</span></a>` : ''}${p.videoUrl ? `<a class="dialog-live-link secondary-live-link" href="${p.videoUrl}" target="_blank" rel="noopener noreferrer">${p.videoLabel} <span aria-hidden="true">↗</span></a>` : ''}</header>${p.story ? `<article class="analytics-story" aria-label="The Livine Analytics story"><div class="analytics-highlights"><div><strong><em>300+</em></strong><span>analytics touchpoints</span></div><div><strong><em>&gt;1 min → 2–3 sec</em></strong><span>analytical report loads</span></div></div>${p.story.map(text => `<p>${text}</p>`).join('')}<details class="analytics-technical"><summary>Under the hood · replication</summary><p>${p.technicalNote}</p></details></article>` : ''}${p.bullets.length ? `<ul class="project-bullets">${p.bullets.map(([label,text])=>`<li><strong>${label}.</strong> ${linkedProjectText(text, p.inlineLinks)}</li>`).join('')}</ul>` : ''}${p.stack.length ? `<section class="dialog-stack" aria-label="Technology stack"><h3>Stack</h3><div class="tags">${p.stack.map(t=>`<span>${t}</span>`).join('')}</div></section>` : ''}`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('project-open');
  dialog.scrollTop = 0;
  document.getElementById('close-project').focus();
}
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', event => {event.preventDefault();openProject(card.dataset.project, card);});
  card.addEventListener('keydown', event => {if(event.key === ' '){event.preventDefault();card.click();}});
});
document.getElementById('close-project').addEventListener('click', closeDetails);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeDetails(); });
dialog.addEventListener('click', event => {if(event.target === dialog){const r=dialog.getBoundingClientRect();if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDetails();}});
dialog.addEventListener('close', () => {clearTimeout(dialogCloseTimer);dialog.classList.remove('is-closing');document.body.classList.remove('project-open');projectTrigger?.focus({preventScroll:true});});
// Keep existing shared project anchors useful without adding bottom detail sections.
function openLinkedProject(){const id=location.hash.slice(1);if(projects.some(p=>p.id===id))openProject(id);}
window.addEventListener('hashchange',openLinkedProject);
openLinkedProject();
function updateNavigation(){let current='home';for(const id of ['work','career','contact']){if(document.getElementById(id).getBoundingClientRect().top<=180)current=id;}if(window.scrollY>100&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2)current='contact';document.querySelectorAll('.navlink').forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}let navFrame=false;window.addEventListener('scroll',()=>{if(!navFrame){navFrame=true;requestAnimationFrame(()=>{updateNavigation();navFrame=false;});}},{passive:true});updateNavigation();
window.addEventListener('hashchange',updateNavigation);
const theme = document.getElementById('theme');
function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  theme.setAttribute('aria-checked', String(mode === 'dark'));
}
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
theme.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('portfolio-theme', next); } catch {}
});
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('full-stack').addEventListener('click', event => {
  clearTimeout(dialogCloseTimer);
  dialog.classList.remove('is-closing');
  dialog.classList.add('stack-dialog');
  projectTrigger = event.currentTarget;
  document.getElementById('dialog-category').textContent = 'TOOLS & PRACTICE';
  dialogContent.innerHTML = `<header class="project-dialog-header"><h2 id="project-dialog-title">The full stack.</h2><p class="dialog-summary">Languages, infrastructure, and engineering practices I work with.</p></header><div class="stack-dialog-body">${document.getElementById('full-stack-content').innerHTML}</div>`;
  dialog.showModal();
  document.body.classList.add('project-open');
  dialog.scrollTop = 0;
  document.getElementById('close-project').focus();
});
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }), {threshold: 0.2});
  document.querySelectorAll('.section-divider, .company-group').forEach(el => observer.observe(el));
}
theme.addEventListener('click', () => {
  if (reducedMotion.matches) return;
  theme.classList.remove('theme-animate');
  void theme.offsetWidth;
  theme.classList.add('theme-animate');
});
theme.addEventListener('animationend', () => theme.classList.remove('theme-animate'));

// A visual search preview; live search remains on the linked HCG website.
const searchPreviewWord = document.getElementById('search-preview-word');
if (searchPreviewWord) {
  const searchWords = ['hospitals', 'doctors', 'cancer care'];
  let searchWordIndex = 0;
  let searchPreviewVisible = true;
  let searchWordDelay;
  const previewObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    searchPreviewVisible = entries[0].isIntersecting;
  }) : null;
  previewObserver?.observe(searchPreviewWord.closest('.search'));
  function showStaticSearchPreview() {
    if (reducedMotion.matches) searchPreviewWord.textContent = 'hospitals & doctors';
    else searchPreviewWord.textContent = searchWords[searchWordIndex];
  }
  showStaticSearchPreview();
  reducedMotion.addEventListener('change', showStaticSearchPreview);
  const searchPreviewTimer = setInterval(() => {
    if (reducedMotion.matches || document.hidden || !searchPreviewVisible || dialog.open) return;
    searchPreviewWord.classList.add('word-changing');
    searchWordDelay = setTimeout(() => {
      searchWordIndex = (searchWordIndex + 1) % searchWords.length;
      searchPreviewWord.textContent = searchWords[searchWordIndex];
      searchPreviewWord.classList.remove('word-changing');
    }, 180);
  }, 3000);
  window.addEventListener('pagehide', () => {clearInterval(searchPreviewTimer);clearTimeout(searchWordDelay);previewObserver?.disconnect();}, {once:true});
}

// The phone illustration cycles through the reference's three app workflows.
const growerPhone = document.querySelector('.grower-phone');
if (growerPhone) {
  const scenes = [...growerPhone.querySelectorAll('.grower-screen')];
  const labels = [...growerPhone.querySelectorAll('.grower-screen-tabs span')];
  let sceneIndex = 0;
  let phoneVisible = false;
  let sceneTimer;
  const phoneObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    phoneVisible = entries[0].isIntersecting;
  }, {threshold:0.4}) : null;
  phoneObserver?.observe(growerPhone);
  function showGrowerScene(index) {
    sceneIndex = index;
    scenes.forEach((scene, i) => scene.classList.toggle('is-active', i === index));
    labels.forEach((label, i) => label.classList.toggle('is-active', i === index));
  }
  function startGrowerPreview() {
    clearInterval(sceneTimer);
    if (reducedMotion.matches) { showGrowerScene(0); return; }
    sceneTimer = setInterval(() => {
      if (document.hidden || !phoneVisible || dialog.open) return;
      showGrowerScene((sceneIndex + 1) % scenes.length);
    }, 2800);
  }
  reducedMotion.addEventListener('change', startGrowerPreview);
  window.addEventListener('pageshow', startGrowerPreview);
  window.addEventListener('pagehide', () => clearInterval(sceneTimer));
  startGrowerPreview();
}
