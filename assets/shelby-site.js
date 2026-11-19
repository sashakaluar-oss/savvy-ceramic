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
  const pageHero = document.querySelector('.phero');
  if (pageHero && !document.querySelector('.vehicle-trail')) {
    const trail = document.createElement('section');
    trail.className = 'vehicle-trail';
    trail.setAttribute('aria-labelledby', 'vehicle-trail-title');
    trail.innerHTML = '<div class="wrap"><p class="ey">Paint protection for every kind of drive</p><h2 id="vehicle-trail-title">Your car, cared for at your place</h2><p>From electric cars and everyday SUVs to performance models, we discuss the vehicle’s paint and your goals before recommending a service.</p><div class="vehicle-cards"><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_Model_3_%28Facelift%29_%E2%80%93_f_30082026.jpg?width=1600" alt="Tesla Model 3, example vehicle" loading="lazy"><figcaption>Tesla Model 3 · <a href="/image-credits.html#tesla">Image credit</a></figcaption></figure><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Jaecoo_J7.jpg?width=1600" alt="Jaecoo J7, example vehicle" loading="lazy"><figcaption>Jaecoo J7 · <a href="/image-credits.html#jaecoo">Image credit</a></figcaption></figure><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Range_Rover_D300_%282023%29_%2853332484795%29.jpg?width=1600" alt="Range Rover D300, example vehicle" loading="lazy"><figcaption>Range Rover D300 · <a href="/image-credits.html#range-rover">Image credit</a></figcaption></figure><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Porsche_Taycan_%282024%29_%2854731488492%29.jpg?width=1600" alt="Porsche Taycan, example vehicle" loading="lazy"><figcaption>Porsche Taycan · <a href="/image-credits.html#porsche">Image credit</a></figcaption></figure><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Huracan_11.jpg?width=1600" alt="Lamborghini Huracán, example vehicle" loading="lazy"><figcaption>Lamborghini Huracán · <a href="/image-credits.html#lamborghini">Image credit</a></figcaption></figure></div><p class="vehicle-disclaimer">Example vehicles only. Photos are not Shelby customer jobs. <a href="/image-credits.html">View image credits</a>.</p></div>';
    pageHero.after(trail);
  }
  const footerLinks = document.querySelector('.shelby-footer .footer-links');
  if (footerLinks && !footerLinks.querySelector('a[href="/image-credits.html"]')) {
    const creditLink = document.createElement('a');
    creditLink.href = '/image-credits.html';
    creditLink.textContent = 'Image credits';
    footerLinks.appendChild(creditLink);
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