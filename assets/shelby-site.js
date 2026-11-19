(() => {
  const button = document.querySelector('.menu-toggle');
  const links = document.querySelector('.site-nav .nav-links');
  const cta = document.querySelector('.site-nav .nav-cta');
  if (cta && !document.querySelector('.site-nav .nav-phone')) {
    const phone = document.createElement('a');
    phone.className = 'nav-phone';
    phone.href = 'tel:0490699614';
    phone.innerHTML = 'Call Savvy<strong>0490 699 614</strong>';
    cta.before(phone);
  }
  if (button && links) {
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
  }
})();