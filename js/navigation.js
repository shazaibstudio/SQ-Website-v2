/**
 * SQ Interactive - Unified Navigation System
 * This file handles all navigation functionality across the site
 * Include this in every page: <script src="js/navigation.js" defer></script>
 */

document.addEventListener('DOMContentLoaded', function() {
  // Desktop Services Dropdown
  const servicesBtn = document.getElementById('services-btn');
  const servicesPopup = document.getElementById('services-popup');
  
  if (servicesBtn && servicesPopup) {
    servicesBtn.addEventListener('mouseenter', () => {
      servicesPopup.classList.remove('hidden');
    });
    
    servicesBtn.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!servicesPopup.matches(':hover')) {
          servicesPopup.classList.add('hidden');
        }
      }, 200);
    });
    
    servicesPopup.addEventListener('mouseleave', () => {
      servicesPopup.classList.add('hidden');
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Mobile Services Submenu Toggle
  const mobileServicesToggle = document.querySelector('[data-mobile-services-toggle]');
  const mobileServices = document.getElementById('mobile-services');
  
  if (mobileServicesToggle && mobileServices) {
    mobileServicesToggle.addEventListener('click', () => {
      mobileServices.classList.toggle('hidden');
      const icon = mobileServicesToggle.querySelector('svg');
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  }

  // Set active nav link based on current page
  setActiveNavLink();
});

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('[data-nav-link]');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href) || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('text-yellow-400');
      link.classList.remove('text-gray-200');
    } else {
      link.classList.remove('text-yellow-400');
      link.classList.add('text-gray-200');
    }
  });
}
