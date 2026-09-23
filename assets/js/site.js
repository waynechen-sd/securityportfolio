(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-set-lang]');

  function setLanguage(language) {
    root.dataset.lang = language;
    root.lang = language === 'zh' ? 'zh-Hant' : 'en';
    buttons.forEach((button) => {
      const active = button.dataset.setLang === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('portfolio-language', language); } catch (_) {}
  }

  buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));
  try { setLanguage(localStorage.getItem('portfolio-language') || 'en'); } catch (_) { setLanguage('en'); }
})();
