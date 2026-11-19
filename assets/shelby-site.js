(() => {
  const button = document.querySelector('.menu-toggle');
  const links = document.querySelector('.site-nav .nav-links');
  if (!button || !links) return;
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
  }));
})();
