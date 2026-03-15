// ============================================
// SHELBY CERAMIC COATING — NAV & FOOTER COMPONENTS
// ============================================

// Inject Nav
function injectNav(activePage) {
  const navHTML = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="/index.html" class="nav-logo">
        <img src="/assets/images/shelby-logo.png" alt="Shelby Ceramic Coating Logo">
      </a>
      <div class="nav-links">
        <a href="/index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-toggle">
            Services ▾
          </button>
          <div class="nav-dropdown-menu">
            <a href="/ceramic-coating-clayton.html">Ceramic Coating Clayton</a>
            <a href="/ceramic-coating-mount-waverley.html">Mount Waverley</a>
            <a href="/ceramic-coating-glen-waverley.html">Glen Waverley</a>
            <a href="/ceramic-coating-oakleigh.html">Oakleigh</a>
            <a href="/ceramic-coating-mulgrave.html">Mulgrave</a>
            <a href="/ceramic-coating-bentleigh.html">Bentleigh</a>
            <a href="/paint-protection-new-cars-melbourne.html">Paint Protection — New Cars</a>
            <a href="/ceramic-coating-black-cars.html">Black Car Specialists</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-toggle">
            Learn ▾
          </button>
          <div class="nav-dropdown-menu">
            <a href="/ceramic-coating-vs-wax.html">Ceramic Coating vs Wax</a>
            <a href="/how-long-ceramic-coating-last-melbourne.html">How Long Does It Last?</a>
          </div>
        </div>
        <a href="/index.html#contact">Contact</a>
      </div>
      <div class="nav-cta">
        <a href="tel:0490699614" class="nav-phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          0490 699 614
        </a>
        <a href="/index.html#quote" class="btn btn-primary">Get a Quote</a>
      </div>
      <div class="nav-hamburger" id="nav-hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="/index.html">Home</a>
    <a href="/ceramic-coating-clayton.html">Ceramic Coating Clayton</a>
    <a href="/ceramic-coating-mount-waverley.html">Mount Waverley</a>
    <a href="/ceramic-coating-glen-waverley.html">Glen Waverley</a>
    <a href="/ceramic-coating-oakleigh.html">Oakleigh</a>
    <a href="/ceramic-coating-mulgrave.html">Mulgrave</a>
    <a href="/ceramic-coating-bentleigh.html">Bentleigh</a>
    <a href="/paint-protection-new-cars-melbourne.html">Paint Protection — New Cars</a>
    <a href="/ceramic-coating-black-cars.html">Ceramic Coating Black Cars</a>
    <a href="/ceramic-coating-vs-wax.html">Ceramic Coating vs Wax</a>
    <a href="/how-long-ceramic-coating-last-melbourne.html">How Long Does It Last?</a>
    <a href="/index.html#contact">Contact</a>
    <div class="mobile-phone">
      <a href="tel:0490699614" class="btn btn-primary btn-full" style="margin-top:1rem">📞 Call 0490 699 614</a>
    </div>
  </div>
  `;
  const wrapper = document.getElementById('nav-wrapper');
  if (wrapper) wrapper.innerHTML = navHTML;
}

// Inject Footer
function injectFooter() {
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/assets/images/shelby-logo.png" alt="Shelby Ceramic Coating">
          <p>Professional ceramic coating and paint protection services in Clayton and across the City of Monash, Melbourne. Established 2021.</p>
          <p class="footer-abn">ABN 29 650 058 996</p>
        </div>
        <div class="footer-col">
          <h5>Local Areas</h5>
          <ul>
            <li><a href="/ceramic-coating-clayton.html">Clayton</a></li>
            <li><a href="/ceramic-coating-mount-waverley.html">Mount Waverley</a></li>
            <li><a href="/ceramic-coating-glen-waverley.html">Glen Waverley</a></li>
            <li><a href="/ceramic-coating-oakleigh.html">Oakleigh</a></li>
            <li><a href="/ceramic-coating-mulgrave.html">Mulgrave</a></li>
            <li><a href="/ceramic-coating-bentleigh.html">Bentleigh</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="/ceramic-coating-clayton.html">Ceramic Coating</a></li>
            <li><a href="/paint-protection-new-cars-melbourne.html">Paint Protection — New Cars</a></li>
            <li><a href="/ceramic-coating-black-cars.html">Black Car Specialists</a></li>
            <li><a href="/ceramic-coating-vs-wax.html">Ceramic Coating vs Wax</a></li>
            <li><a href="/how-long-ceramic-coating-last-melbourne.html">Durability Guide</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <a href="tel:0490699614" class="footer-phone">0490 699 614</a>
          <p style="color:rgba(255,255,255,0.5);font-size:0.85rem;margin-bottom:1.5rem;">Clayton VIC 3168<br>City of Monash, Melbourne</p>
          <ul>
            <li><a href="/index.html#quote">Get a Quote</a></li>
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/terms-of-use.html">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Shelby Ceramic Coating. ABN 29 650 058 996. All rights reserved. Clayton, City of Monash, VIC.</p>
        <div style="display:flex;gap:1.5rem;">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms-of-use.html">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
  `;
  const wrapper = document.getElementById('footer-wrapper');
  if (wrapper) wrapper.innerHTML = footerHTML;
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  injectNav(page);
  injectFooter();
});
