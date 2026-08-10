/* ============================================================
   SQ INTERACTIVE — NAV
   Scroll state, mobile toggle, active link detection.
   ============================================================ */

(function () {
  'use strict';

  var nav    = document.querySelector('.sq-nav');
  var toggle = document.querySelector('.sq-nav__toggle');
  var mobile = document.querySelector('.sq-nav__mobile');

  if (!nav) return;

  /* ── Scroll state ── */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile toggle ── */
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var isOpen = mobile.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && mobile.classList.contains('is-open')) {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Active link detection ──
     Normalise both the current path and each link href to
     a clean segment list so /work/ and ../work/ both match. */
  var currentPath = window.location.pathname
    .replace(/\/+$/, '')   /* strip trailing slash */
    .split('/')
    .filter(Boolean);      /* ['work'] or ['digital'] or [] for root */

  document.querySelectorAll('.sq-nav__link, .sq-nav__mobile-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;

    /* Resolve the href segments, ignoring ../ and ./ */
    var hrefSegments = href
      .replace(/\/+$/, '')
      .split('/')
      .filter(function (s) { return s && s !== '..' && s !== '.'; });

    /* Match: the last segment of the href matches the last segment of current path */
    var hrefLast    = hrefSegments[hrefSegments.length - 1] || '';
    var currentLast = currentPath[currentPath.length - 1]   || '';

    /* Root: both empty = homepage */
    var isRoot = hrefLast === '' && currentLast === '';

    if (isRoot || (hrefLast && hrefLast === currentLast)) {
      link.classList.add('sq-nav__link--active');
      link.setAttribute('aria-current', 'page');
    }
  });

})();
