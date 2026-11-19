(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  const nav = document.querySelector('.site-nav');
  const updateNav = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  const setupForm = (formId, endpoint, successId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const button = form.querySelector('button[type="submit"]');
      const success = document.getElementById(successId);
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending…';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) throw new Error('Form submission failed');
        form.reset();
        if (success) {
          success.textContent = 'Thanks. Your enquiry has been sent.';
          success.classList.add('show');
          success.focus();
        }
        button.textContent = 'Sent';
      } catch (error) {
        button.disabled = false;
        button.textContent = 'Try again';
        if (success) {
          success.textContent = 'We couldn’t send that just now. Please call 0490 699 614.';
          success.classList.add('show');
          success.focus();
        }
        window.setTimeout(() => { button.textContent = originalText; }, 3500);
      }
    });
  };

  setupForm('qform', 'https://formspree.io/f/xgonlvwy', 'qsuc');
  setupForm('cform', 'https://formspree.io/f/xnjgbnar', 'csuc');

  const storySteps = [...document.querySelectorAll('[data-story-step]')];
  const storyVisuals = [...document.querySelectorAll('[data-story-visual]')];
  if (storySteps.length && storyVisuals.length && 'IntersectionObserver' in window) {
    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = entry.target.dataset.storyStep;
        storySteps.forEach((step) => step.classList.toggle('is-active', step === entry.target));
        storyVisuals.forEach((visual) => {
          const active = visual.dataset.storyVisual === index;
          visual.classList.toggle('is-active', active);
          visual.setAttribute('aria-hidden', String(!active));
        });
      });
    }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
    storySteps.forEach((step) => storyObserver.observe(step));
  }

  const footerLinks = document.querySelector('.footer-links');
  if (footerLinks && !footerLinks.querySelector('a[href="/image-credits.html"]')) {
    const creditLink = document.createElement('a');
    creditLink.href = '/image-credits.html';
    creditLink.textContent = 'Image credits';
    footerLinks.appendChild(creditLink);
  }

  const tiktok = document.querySelector('.tiktok-embed');
  const loadTikTok = () => {
    if (!tiktok || document.querySelector('script[data-tiktok-embed]')) return;
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.dataset.tiktokEmbed = 'true';
    document.body.appendChild(script);
  };

  if (tiktok && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadTikTok();
        observer.disconnect();
      }
    }, { rootMargin: '250px' });
    observer.observe(tiktok);
  } else {
    loadTikTok();
  }
})();
