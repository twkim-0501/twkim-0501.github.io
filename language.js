(() => {
  const buttons = document.querySelectorAll('[data-set-lang]');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const lang = button.dataset.setLang;
      document.documentElement.lang = lang;
      document.documentElement.dataset.language = lang;
      for (const choice of buttons) {
        choice.setAttribute('aria-pressed', String(choice.dataset.setLang === lang));
      }
    });
  }
})();
