/**
 * SQ Interactive — Dynamic Navigation Renderer
 * 
 * This file renders the navigation across all pages.
 * Update nav structure here once, changes apply everywhere.
 * 
 * Usage: Add to any page after <body>:
 * <script src="/js/nav-renderer.js" defer></script>
 */

(function() {
  'use strict';

  // Determine the root path based on page depth
  // For GitHub Pages deployed at domain root, use absolute paths
  // For local dev, use relative paths
  const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  let rootPath = './';
  
  if (!isLocalDev) {
    // GitHub Pages: use absolute paths from root
    rootPath = '/';
  } else {
    // Local dev: calculate relative paths based on depth
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const depth = pathSegments.length - 1;
    rootPath = depth > 0 ? '../'.repeat(depth) : './';
  }

  // Get current page for active link styling
  const currentPath = window.location.pathname;

  // Navigation configuration
  const navConfig = {
    logo: {
      href: `${rootPath}`,
      image: `${rootPath}images/no-background.png`,
    },
    links: [
      { label: 'Home', href: `${rootPath}` },
      { label: 'Services', href: '#', isDropdown: true },
      { label: 'Work', href: `${rootPath}work/` },
      { label: 'How We Work', href: `${rootPath}how-we-work/` },
      { label: 'About', href: `${rootPath}about/` },
      { label: 'Contact', href: `${rootPath}contact/` },
    ],
    services: {
      all: `${rootPath}services/`,
      digital: [
        { label: 'Website Development', href: `${rootPath}digital/website-development/` },
        { label: 'E-Commerce', href: `${rootPath}digital/e-commerce/` },
        { label: 'Custom Software', href: `${rootPath}digital/custom-software/` },
        { label: 'UI/UX Experiences', href: `${rootPath}digital/ui-ux-experiences/` },
        { label: 'SEO & Digital Growth', href: `${rootPath}digital/seo-digital-growth/` },
        { label: 'Automation & Integration', href: `${rootPath}digital/automation-integration/` },
      ],
      ai: [
        { label: 'AI Systems & Models', href: `${rootPath}ai/ai-systems-models/` },
        { label: 'Intelligent Automation', href: `${rootPath}ai/intelligent-automation/` },
        { label: 'Data Intelligence', href: `${rootPath}ai/data-intelligence/` },
        { label: 'AI Integration', href: `${rootPath}ai/ai-integration/` },
        { label: 'AI Content', href: `${rootPath}ai/ai-content/` },
        { label: 'Process Optimization', href: `${rootPath}ai/process-optimization/` },
      ],
      immersive: [
        { label: 'Virtual Reality', href: `${rootPath}immersive/virtual-reality/` },
        { label: 'Augmented Reality', href: `${rootPath}immersive/augmented-reality/` },
        { label: '3D Visualization', href: `${rootPath}immersive/3d-visualization/` },
        { label: '360° Experiences', href: `${rootPath}immersive/360-experiences/` },
        { label: 'Interactive Installation', href: `${rootPath}immersive/interactive-installation/` },
        { label: 'Web Immersion', href: `${rootPath}immersive/web-immersion/` },
        { label: 'VR Staging', href: `${rootPath}immersive/vr-staging/` },
        { label: 'Furniture Scanning', href: `${rootPath}immersive/furniture-scanning/` },
      ],
      lab: [
        { label: 'AI Research', href: `${rootPath}lab/ai-research/` },
        { label: '3D Technology', href: `${rootPath}lab/3d-tech/` },
        { label: 'No-Code Platforms', href: `${rootPath}lab/no-code-platforms/` },
        { label: 'Web Performance', href: `${rootPath}lab/web-performance/` },
        { label: 'AR/VR Innovation', href: `${rootPath}lab/ar-vr-innovation/` },
        { label: 'Design Systems', href: `${rootPath}lab/design-systems/` },
      ],
    },
  };

  /**
   * Generate desktop services dropdown HTML
   */
  function renderServicesDropdown() {
    let html = '<div id="sq-services-popup" class="hidden" role="menu" aria-label="Services menu">';
    html += `<a href="${navConfig.services.all}" class="sq-services-popup__all" role="menuitem">All Services</a>`;
    html += '<div class="sq-services-popup__divider"></div>';

    // Digital
    html += '<button class="sq-services-popup__world-btn" aria-expanded="false">Digital <span class="sq-popup-arrow">▾</span></button>';
    html += '<div class="sq-services-popup__world-links">';
    navConfig.services.digital.forEach(service => {
      html += `<a href="${service.href}" class="sq-services-popup__link" role="menuitem">${service.label}</a>`;
    });
    html += '</div>';

    // AI
    html += '<button class="sq-services-popup__world-btn" aria-expanded="false">AI <span class="sq-popup-arrow">▾</span></button>';
    html += '<div class="sq-services-popup__world-links">';
    navConfig.services.ai.forEach(service => {
      html += `<a href="${service.href}" class="sq-services-popup__link" role="menuitem">${service.label}</a>`;
    });
    html += '</div>';

    // Immersive
    html += '<button class="sq-services-popup__world-btn" aria-expanded="false">Immersive <span class="sq-popup-arrow">▾</span></button>';
    html += '<div class="sq-services-popup__world-links">';
    navConfig.services.immersive.forEach(service => {
      html += `<a href="${service.href}" class="sq-services-popup__link" role="menuitem">${service.label}</a>`;
    });
    html += '</div>';

    // Lab
    html += '<button class="sq-services-popup__world-btn" aria-expanded="false">Lab <span class="sq-popup-arrow">▾</span></button>';
    html += '<div class="sq-services-popup__world-links">';
    navConfig.services.lab.forEach(service => {
      html += `<a href="${service.href}" class="sq-services-popup__link" role="menuitem">${service.label}</a>`;
    });
    html += '</div>';

    html += '</div>';
    return html;
  }

  /**
   * Generate mobile services menu HTML
   */
  function renderMobileServicesMenu() {
    let html = '<div id="sq-mobile-services" role="menu">';
    html += `<a href="${navConfig.services.all}" class="sq-mobile-services__link">All Services</a>`;

    // Digital
    html += '<button data-world-toggle="sq-mobile-digital" class="sq-mobile-services__world-toggle" aria-expanded="false"><span>01 — Digital</span><span>+</span></button>';
    html += '<div id="sq-mobile-digital" data-world-menu class="sq-mobile-services__world-menu">';
    navConfig.services.digital.forEach(service => {
      html += `<a href="${service.href}" class="sq-mobile-services__world-link">${service.label}</a>`;
    });
    html += '</div>';

    // AI
    html += '<button data-world-toggle="sq-mobile-ai" class="sq-mobile-services__world-toggle" aria-expanded="false"><span>02 — AI</span><span>+</span></button>';
    html += '<div id="sq-mobile-ai" data-world-menu class="sq-mobile-services__world-menu">';
    navConfig.services.ai.forEach(service => {
      html += `<a href="${service.href}" class="sq-mobile-services__world-link">${service.label}</a>`;
    });
    html += '</div>';

    // Immersive
    html += '<button data-world-toggle="sq-mobile-immersive" class="sq-mobile-services__world-toggle" aria-expanded="false"><span>03 — Immersive</span><span>+</span></button>';
    html += '<div id="sq-mobile-immersive" data-world-menu class="sq-mobile-services__world-menu">';
    navConfig.services.immersive.forEach(service => {
      html += `<a href="${service.href}" class="sq-mobile-services__world-link">${service.label}</a>`;
    });
    html += '</div>';

    // Lab
    html += '<button data-world-toggle="sq-mobile-lab" class="sq-mobile-services__world-toggle" aria-expanded="false"><span>04 — Lab</span><span>+</span></button>';
    html += '<div id="sq-mobile-lab" data-world-menu class="sq-mobile-services__world-menu">';
    navConfig.services.lab.forEach(service => {
      html += `<a href="${service.href}" class="sq-mobile-services__world-link">${service.label}</a>`;
    });
    html += '</div>';

    html += '</div>';
    return html;
  }

  /**
   * Generate full navigation HTML
   */
  function renderNav() {
    let html = '<nav class="sq-nav" aria-label="Main navigation">';
    html += '<div class="sq-nav__inner">';

    // Logo
    html += `<a href="${navConfig.logo.href}" class="sq-nav__logo" aria-label="SQ Interactive — home">`;
    html += '<div class="sq-nav__logo-mark">';
    html += `<img src="${navConfig.logo.image}" alt="" width="auto" height="36" aria-hidden="true">`;
    html += '</div>';
    html += '<span class="sq-nav__logo-text">SQ <span>Interactive</span></span>';
    html += '</a>';

    // Desktop Links
    html += '<div class="sq-nav__links">';
    navConfig.links.forEach(link => {
      if (link.isDropdown) {
        html += '<div class="sq-nav__link" style="position: relative;">';
        html += '<button id="sq-services-btn" class="sq-nav__link" aria-expanded="false" aria-haspopup="menu" style="background: none; border: none; padding: 0; cursor: pointer; display: flex; align-items: center; gap: var(--sq-space-2); font-family: inherit;">';
        html += `${link.label}`;
        html += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style="width: 16px; height: 16px; color: var(--sq-brand-gold);">';
        html += '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>';
        html += '</svg>';
        html += '</button>';
        html += renderServicesDropdown();
        html += '</div>';
      } else {
        const isActive = currentPath === link.href || currentPath === link.href.replace(/\/$/, '');
        html += `<a href="${link.href}" class="sq-nav__link${isActive ? ' sq-nav__link--active' : ''}" data-sq-nav-link>${link.label}</a>`;
      }
    });

    // Language buttons
    html += '<div class="sq-nav__lang-buttons">';
    html += '<button id="sq-lang-en" class="sq-lang-btn sq-lang-btn--active" aria-label="English">EN</button>';
    html += '<button id="sq-lang-ur" class="sq-lang-btn" aria-label="Urdu">UR</button>';
    html += '</div>';

    html += '</div>';

    // Mobile Toggle
    html += '<button id="sq-mobile-menu-toggle" class="sq-nav__mobile-toggle" aria-expanded="false" aria-controls="sq-mobile-menu" aria-label="Open menu">';
    html += '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">';
    html += '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    html += '</svg>';
    html += '</button>';

    html += '</div>';

    // Mobile Menu
    html += '<div id="sq-mobile-menu" class="sq-nav__mobile" role="navigation" aria-label="Mobile navigation">';
    navConfig.links.forEach(link => {
      if (!link.isDropdown) {
        html += `<a href="${link.href}" class="sq-nav__mobile-link" data-sq-nav-link>${link.label}</a>`;
      }
    });

    html += '<button id="sq-mobile-services-toggle" aria-expanded="false" aria-controls="sq-mobile-services" style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: var(--sq-space-3) var(--sq-space-5); background: none; border: none; border-bottom: 1px solid rgba(255, 255, 255, 0.02); color: var(--sq-text-secondary); font-size: var(--sq-text-sm); font-weight: 500; cursor: pointer; font-family: inherit;">';
    html += 'Services';
    html += '<span style="color: var(--sq-brand-gold); font-weight: 600;">+</span>';
    html += '</button>';

    html += renderMobileServicesMenu();

    // Mobile Language buttons
    html += '<div class="sq-nav__mobile-lang">';
    html += '<button id="sq-mobile-lang-en" class="sq-lang-btn sq-lang-btn--active" aria-label="English">EN</button>';
    html += '<button id="sq-mobile-lang-ur" class="sq-lang-btn" aria-label="Urdu">UR</button>';
    html += '</div>';

    html += '</div>';
    html += '</nav>';

    return html;
  }

  /**
   * Replace existing nav or insert before main
   */
  function injectNav() {
    const renderedNav = renderNav();
    const existingNav = document.querySelector('nav.sq-nav');
    
    if (existingNav) {
      // Replace existing nav
      existingNav.outerHTML = renderedNav;
    } else {
      // Insert before main
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('beforebegin', renderedNav);
      }
    }
  }

  // Inject nav when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }
})();
