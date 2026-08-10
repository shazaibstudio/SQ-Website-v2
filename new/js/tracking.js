// Universal SQ Interactive tracking and fixes
document.addEventListener('DOMContentLoaded', function() {
  
  // Track WhatsApp/Phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
          'event_category': 'Contact',
          'event_label': 'Phone Click',
          'value': 1
        });
      }
    });
  });
  
  // Mobile menu fix
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Mobile services dropdown fix
  const mobileServicesToggle = document.getElementById('mobile-services-toggle');
  const mobileServices = document.getElementById('mobile-services');
  
  if (mobileServicesToggle && mobileServices) {
    mobileServicesToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mobileServices.classList.toggle('hidden');
    });
  }
  
  // Form submission tracking
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'Contact',
          'event_label': 'Form Submission',
          'value': 1
        });
      }
    });
  });
  
  // ROI Calculator tracking
  const roiInputs = document.querySelectorAll('#propertyPrice, #propertiesPerMonth, #vrInvestment');
  roiInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'roi_interaction', {
          'event_category': 'Engagement',
          'event_label': 'ROI Calculator',
          'value': 1
        });
      }
    });
  });
  
  // Service link tracking
  document.querySelectorAll('a[href*="vr-real-estate"], a[href*="360-content"], a[href*="interactive-walkthroughs"]').forEach(link => {
    link.addEventListener('click', function() {
      const service = this.href.includes('vr-real-estate') ? 'VR Real Estate' : 
                     this.href.includes('360-content') ? '360 Tours' : 'Interactive Walkthroughs';
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'service_interest', {
          'event_category': 'Services',
          'event_label': service,
          'value': 1
        });
      }
    });
  });
  
  // Demo button tracking
  document.querySelectorAll('.demo-btn, [onclick*="contact.html"]').forEach(button => {
    button.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'demo_request', {
          'event_category': 'Conversion',
          'event_label': 'Demo Button Click',
          'value': 1
        });
      }
    });
  });
  
});

// 24-hour response guarantee visibility
function showResponseGuarantee() {
  const guaranteeElements = document.querySelectorAll('.response-guarantee');
  guaranteeElements.forEach(el => {
    el.style.display = 'block';
    el.style.animation = 'fadeIn 0.5s ease-in';
  });
}

// Initialize after page load
window.addEventListener('load', showResponseGuarantee);