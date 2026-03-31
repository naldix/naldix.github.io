const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
  pages.forEach(page => page.classList.remove('active'));
  navItems.forEach(item => item.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
}

navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const pageId = this.getAttribute('data-page');
    showPage(pageId);
  });
});

let currentLang = 'pt';
let translations = {};

fetch('translations.json')
  .then(res => res.json())
  .then(data => {
    translations = data;
    applyTranslation('pt');
    showPage('skills'); 
  })
  .catch(err => {
    console.error('Erro ao carregar traduções:', err);
    showPage('skills'); 
  });

function applyTranslation(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyTranslation(currentLang);
  const btn = document.getElementById('lang-btn');
  btn.textContent = currentLang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT';
  showPage(document.querySelector('.nav-item.active').getAttribute('data-page'));
}