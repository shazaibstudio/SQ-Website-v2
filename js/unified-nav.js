/**
 * SQ Interactive - Unified Navigation System
 * V1-style navigation with Services dropdown across all pages
 * Handles desktop dropdown, mobile menu, and active link detection
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════════

  document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
  });

  function initializeNavigation() {
    setupDesktopDropdown();
    setupMobileMenu();
    setupMobileServicesSubmenu();
    setActiveNavLink();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DESKTOP SERVICES DROPDOWN
  // ═══════════════════════════════════════════════════════════════════════════

  function setupDesktopDropdown() {
    const servicesBtn = document.getElementById('sq-services-btn');
    const servicesPopup = document.getElementById('sq-services-popup');

    if (!servicesBtn || !servicesPopup) return;

    let closeTimer;

    function openPopup() {
      clearTimeout(closeTimer);
      servicesPopup.classList.remove('hidden');
      servicesBtn.setAttribute('aria-expanded', 'true');
    }

    function closePopup() {
      servicesPopup.classList.add('hidden');
      servicesBtn.setAttribute('aria-expanded', 'false');
    }

    servicesBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      servicesPopup.classList.contains('hidden') ? openPopup() : closePopup();
    });

    servicesBtn.addEventListener('mouseenter', function() { clearTimeout(closeTimer); openPopup(); });
    servicesBtn.addEventListener('mouseleave', function() { closeTimer = setTimeout(closePopup, 200); });
    servicesPopup.addEventListener('mouseenter', function() { clearTimeout(closeTimer); });
    servicesPopup.addEventListener('mouseleave', function() { closeTimer = setTimeout(closePopup, 200); });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closePopup();
    });
    document.addEventListener('click', function(e) {
      if (!servicesBtn.contains(e.target) && !servicesPopup.contains(e.target)) closePopup();
    });

    // Desktop world accordion toggles
    servicesPopup.querySelectorAll('.sq-services-popup__world-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const links = btn.nextElementSibling;
        const isOpen = links.classList.contains('open');
        // Close all others
        servicesPopup.querySelectorAll('.sq-services-popup__world-links').forEach(function(el) {
          el.classList.remove('open');
        });
        servicesPopup.querySelectorAll('.sq-services-popup__world-btn').forEach(function(b) {
          b.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          links.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // MOBILE MENU TOGGLE
  // ═══════════════════════════════════════════════════════════════════════════

  function setupMobileMenu() {
    const menuToggle = document.getElementById('sq-mobile-menu-toggle');
    const mobileMenu = document.getElementById('sq-mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains('is-open');
      if (isOpen) {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // MOBILE SERVICES SUBMENU
  // ═══════════════════════════════════════════════════════════════════════════

  function setupMobileServicesSubmenu() {
    const servicesToggle = document.getElementById('sq-mobile-services-toggle');
    const servicesMenu = document.getElementById('sq-mobile-services');

    if (!servicesToggle || !servicesMenu) return;

    servicesToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = servicesMenu.classList.contains('is-open');
      servicesMenu.classList.toggle('is-open', !isOpen);
      servicesToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    servicesMenu.querySelectorAll('[data-world-toggle]').forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const worldMenu = document.getElementById(toggle.getAttribute('data-world-toggle'));
        if (!worldMenu) return;
        const isOpen = worldMenu.classList.contains('is-open');
        worldMenu.classList.toggle('is-open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ACTIVE LINK DETECTION
  // ═══════════════════════════════════════════════════════════════════════════

  function setActiveNavLink() {
    const currentPath = window.location.pathname
      .replace(/\/$/, '')  // Remove trailing slash
      .split('/')
      .filter(Boolean);    // ['work'] or ['digital'] or [] for root

    const navLinks = document.querySelectorAll('[data-sq-nav-link]');

    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (!href) return;

      // Normalize href
      const hrefSegments = href
        .replace(/\/$/, '')
        .split('/')
        .filter(function(s) { return s && s !== '..' && s !== '.'; });

      const hrefLast = hrefSegments[hrefSegments.length - 1] || '';
      const currentLast = currentPath[currentPath.length - 1] || '';

      // Root check
      const isRoot = hrefLast === '' && currentLast === '';

      if (isRoot || (hrefLast && hrefLast === currentLast)) {
        link.classList.add('sq-nav__link--active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('sq-nav__link--active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SCROLL STATE
  // ═══════════════════════════════════════════════════════════════════════════

  function setupScrollState() {
    const nav = document.querySelector('.sq-nav');
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle('sq-nav--scrolled', window.scrollY > 20);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Initialize scroll state
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollState);
  } else {
    setupScrollState();
  }

})();
