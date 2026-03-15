// ============================================
// SHELBY CERAMIC COATING — MAIN JS
// ============================================

// Mobile Nav Toggle
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu && mobileMenu.classList.remove('open');
    hamburger && hamburger.classList.remove('active');
  });
});

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Formspree AJAX Submit — Quote Form
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Honeypot check
    if (quoteForm.querySelector('[name="_gotcha"]').value) return;

    const btn = quoteForm.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('quote-success');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(quoteForm);
      const response = await fetch('https://formspree.io/f/xgonlvwy', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        quoteForm.reset();
        if (successMsg) {
          successMsg.classList.add('show');
          successMsg.textContent = '✓ Thanks! We\'ll call you back shortly to confirm your booking.';
        }
        btn.textContent = 'Quote Sent!';
      } else {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
        setTimeout(() => { btn.textContent = originalText; }, 3000);
      }
    } catch (err) {
      btn.textContent = 'Error — Try Again';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = originalText; }, 3000);
    }
  });
}

// Formspree AJAX Submit — Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (contactForm.querySelector('[name="_gotcha"]').value) return;

    const btn = contactForm.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('contact-success');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://formspree.io/f/xnjgbnar', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.reset();
        if (successMsg) {
          successMsg.classList.add('show');
          successMsg.textContent = '✓ Message received! Savvy will be in touch very soon.';
        }
        btn.textContent = 'Sent!';
      } else {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
        setTimeout(() => { btn.textContent = originalText; }, 3000);
      }
    } catch (err) {
      btn.textContent = 'Error — Try Again';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = originalText; }, 3000);
    }
  });
}

// Scroll-triggered animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.08}s`;
      entry.target.classList.add('animate-fade-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .service-card, .review-card, .step, .pricing-card').forEach(el => {
  observer.observe(el);
});

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }
});
