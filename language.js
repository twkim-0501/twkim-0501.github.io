(() => {
  const root = document.documentElement;
  const languageButtons = document.querySelectorAll('[data-set-lang]');
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const setLanguage = language => {
    root.lang = language;
    root.dataset.language = language;
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLang === language)));
  };
  languageButtons.forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.setLang);
    save('taewoo-language', button.dataset.setLang);
  }));
  const savedLanguage = read('taewoo-language');
  if (savedLanguage === 'ko' || savedLanguage === 'en') setLanguage(savedLanguage);
  const themeButton = document.querySelector('.theme-toggle');
  const setTheme = theme => {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#19181d' : '#ffffff';
  };
  if (read('taewoo-theme') === 'dark') setTheme('dark');
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    save('taewoo-theme', theme);
  });
  const dialog = document.querySelector('.figure-dialog');
  document.querySelectorAll('[data-figure]').forEach(button => button.addEventListener('click', () => {
    const image = dialog.querySelector('.expanded-figure');
    image.src = button.dataset.figure;
    image.alt = button.querySelector('img').alt;
    dialog.querySelector('#figure-caption').textContent = button.dataset.caption;
    dialog.querySelector('.figure-download').href = button.dataset.figure;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  const links = document.querySelectorAll('[data-section]');
  const sections = [...links].map(link => document.getElementById(link.dataset.section));
  let queued = false;
  const updateCurrentSection = () => {
    let active = sections[0].id;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 150) active = section.id; });
    links.forEach(link => {
      if (link.dataset.section === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(updateCurrentSection); }
  }, { passive: true });
})();
