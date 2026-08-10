// SQ Interactive - Modular Client System
class SQInteractive {
  constructor() {
    this.init();
  }

  init() {
    this.analytics = new Analytics();
    this.chatbot = new Chatbot();
    this.leadManager = new LeadManager();
    this.roiCalculator = new ROICalculator();
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize components
      AOS.init({ duration: 700, once: true });
      feather.replace();
      
      // Setup navigation
      this.setupNavigation();
      
      // Track interactions
      this.analytics.trackPageEngagement();
      this.setupClickTracking();
    });
  }

  setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const servicesBtn = document.getElementById('services-btn');
    const servicesPopup = document.getElementById('services-popup');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    if (servicesBtn && servicesPopup) {
      servicesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        servicesPopup.classList.toggle('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!servicesPopup.contains(e.target) && !servicesBtn.contains(e.target)) {
          servicesPopup.classList.add('hidden');
        }
      });
    }
  }

  setupClickTracking() {
    // Track phone clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', () => {
        this.analytics.track('whatsapp_click', { category: 'Contact', label: 'Phone Click' });
      });
    });

    // Track service links
    document.querySelectorAll('a[href*="vr-real-estate"], a[href*="360-content"], a[href*="interactive-walkthroughs"]').forEach(link => {
      link.addEventListener('click', () => {
        const service = this.getServiceFromUrl(link.href);
        this.analytics.track('service_interest', { category: 'Services', label: service });
      });
    });
  }

  getServiceFromUrl(url) {
    if (url.includes('vr-real-estate')) return 'VR Real Estate';
    if (url.includes('360-content')) return '360 Tours';
    if (url.includes('interactive-walkthroughs')) return 'Interactive Walkthroughs';
    return 'Unknown Service';
  }
}

class Analytics {
  track(event, data = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', event, {
        event_category: data.category || 'Engagement',
        event_label: data.label || '',
        value: data.value || 1
      });
    }
  }

  trackPageEngagement() {
    let startTime = Date.now();
    let maxScroll = 0;

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      maxScroll = Math.max(maxScroll, scrollPercent);
    });

    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.track('page_engagement', {
        category: 'Engagement',
        label: 'homepage',
        value: timeSpent
      });
    });
  }
}

class Chatbot {
  constructor() {
    this.responses = {
      services: {
        '360': { price: '35K-70K PKR', timeline: '1 week', emoji: '🎥' },
        'vr': { price: '250K-400K PKR', timeline: '4-6 weeks', emoji: '🥽' },
        'interactive': { price: '100K-180K PKR', timeline: '2-3 weeks', emoji: '🚶' }
      },
      greetings: [
        'Hello! 👋 Welcome to SQ Interactive.',
        'Hi there! 😊 Great to meet you.',
        'Hey! 🌟 Thanks for visiting SQ Interactive.'
      ]
    };
  }

  getResponse(message) {
    const msg = message.toLowerCase();
    
    if (this.isGreeting(msg)) return this.getGreeting();
    if (this.isPricing(msg)) return this.getPricingResponse();
    if (this.isService(msg)) return this.getServiceResponse(msg);
    if (this.isScheduling(msg)) return this.getSchedulingResponse();
    
    return this.getDefaultResponse();
  }

  isGreeting(msg) {
    return ['hello', 'hi', 'hey'].some(word => msg.includes(word));
  }

  isPricing(msg) {
    return ['price', 'cost', 'budget'].some(word => msg.includes(word));
  }

  isService(msg) {
    return ['service', 'offer', '360', 'vr', 'tour'].some(word => msg.includes(word));
  }

  isScheduling(msg) {
    return ['schedule', 'book', 'appointment'].some(word => msg.includes(word));
  }

  getGreeting() {
    const greeting = this.responses.greetings[Math.floor(Math.random() * this.responses.greetings.length)];
    return `${greeting}<br><br>Quick options:<br>• Ask about services<br>• Get pricing<br>• Schedule demo`;
  }

  getPricingResponse() {
    return `💰 <strong>Transparent Pricing</strong><br><br>• 360° Tours: 35K-70K PKR<br>• Interactive Walkthroughs: 100K-180K PKR<br>• VR Real Estate: 250K-400K PKR<br><br>Want a custom quote?`;
  }

  getServiceResponse(msg) {
    if (msg.includes('360')) {
      return `🎥 <strong>360° Tours</strong><br><br>High-resolution photography with interactive hotspots.<br><br><strong>Price:</strong> 35K-70K PKR<br><strong>Timeline:</strong> 1 week`;
    }
    if (msg.includes('vr')) {
      return `🥽 <strong>VR Real Estate</strong><br><br>Photorealistic VR environments for luxury properties.<br><br><strong>Price:</strong> 250K-400K PKR<br><strong>Timeline:</strong> 4-6 weeks`;
    }
    return `🏠 <strong>Our VR Solutions</strong><br><br>• 360° Tours: 35K-70K PKR<br>• Interactive Walkthroughs: 100K-180K PKR<br>• VR Real Estate: 250K-400K PKR`;
  }

  getSchedulingResponse() {
    return `📅 <strong>Schedule Free Consultation</strong><br><br>Perfect! Let's set up a demo.<br><br><button onclick="sq.leadManager.scheduleDemo('consultation')" class="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Book Demo</button>`;
  }

  getDefaultResponse() {
    return `I'd be happy to help! 😊<br><br>I can assist with:<br>• VR services & pricing<br>• Project timelines<br>• Demo scheduling`;
  }
}

class LeadManager {
  constructor() {
    this.leads = JSON.parse(localStorage.getItem('sq_leads') || '[]');
    this.currentLead = this.initializeSession();
  }

  initializeSession() {
    return {
      id: 'lead_' + Date.now(),
      timestamp: new Date().toISOString(),
      interactions: [],
      score: 0,
      status: 'active'
    };
  }

  trackInteraction(type, data = {}) {
    this.currentLead.interactions.push({
      type,
      data,
      timestamp: new Date().toISOString()
    });
    this.updateScore(type);
    this.saveLead();
  }

  updateScore(type) {
    const scoring = {
      'service_inquiry': 10,
      'pricing_request': 15,
      'demo_request': 25,
      'contact_provided': 30
    };
    this.currentLead.score += scoring[type] || 5;
  }

  saveLead() {
    const existingIndex = this.leads.findIndex(lead => lead.id === this.currentLead.id);
    if (existingIndex >= 0) {
      this.leads[existingIndex] = this.currentLead;
    } else {
      this.leads.push(this.currentLead);
    }
    localStorage.setItem('sq_leads', JSON.stringify(this.leads));
  }

  scheduleDemo(serviceType) {
    this.trackInteraction('demo_request', { service: serviceType });
    this.showDemoForm(serviceType);
  }

  showDemoForm(serviceType) {
    const form = `
      <div class="mt-2">
        <input type="email" id="demo-email" placeholder="Your email" class="w-full p-2 border rounded mb-2 text-black text-sm">
        <input type="tel" id="demo-phone" placeholder="Phone number" class="w-full p-2 border rounded mb-2 text-black text-sm">
        <button onclick="sq.leadManager.confirmDemo('${serviceType}')" class="bg-yellow-400 text-black px-4 py-2 rounded w-full hover:bg-yellow-500 font-semibold">Schedule Demo →</button>
      </div>
    `;
    
    if (window.addMessage) {
      addMessage(`🎯 <strong>Perfect! Let's schedule your ${serviceType} demo.</strong><br><br>${form}`);
    }
  }

  confirmDemo(serviceType) {
    const email = document.getElementById('demo-email')?.value;
    if (email) {
      this.trackInteraction('demo_confirmed', { service: serviceType, email });
      if (window.addMessage) {
        addMessage(`🎉 <strong>Demo Confirmed!</strong><br><br>We'll contact you within 2 hours at ${email}`);
      }
    }
  }

  captureContact() {
    const email = document.getElementById('lead-email')?.value;
    if (email) {
      this.trackInteraction('contact_provided', { email });
      if (window.addMessage) {
        addMessage(`✅ <strong>Portfolio sent to ${email}!</strong><br><br>Check your inbox for VR examples and pricing.`);
      }
      document.getElementById('lead-email').value = '';
    }
  }
}

class ROICalculator {
  constructor() {
    if (window.location.pathname.includes('roi-calculator')) {
      this.init();
    }
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const inputs = ['propertyPrice', 'propertiesPerMonth', 'vrInvestment'];
      inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
          input.addEventListener('input', () => this.calculate());
        }
      });
      this.calculate();
    });
  }

  calculate() {
    const propertyPrice = parseFloat(document.getElementById('propertyPrice')?.value) || 5000000;
    const propertiesPerMonth = parseFloat(document.getElementById('propertiesPerMonth')?.value) || 3;
    const vrInvestment = parseFloat(document.getElementById('vrInvestment')?.value) || 200000;

    const monthlyRevenue = propertyPrice * propertiesPerMonth;
    const additionalProperties = propertiesPerMonth * 0.4;
    const additionalRevenue = propertyPrice * additionalProperties;
    const roi = ((additionalRevenue - vrInvestment) / vrInvestment) * 100;

    this.updateDisplay({
      monthlyRevenue,
      additionalProperties,
      additionalRevenue,
      roi: Math.round(roi)
    });

    // Track usage
    if (window.sq && sq.analytics) {
      sq.analytics.track('roi_calculation', { category: 'Engagement', value: Math.round(roi) });
    }
  }

  updateDisplay(data) {
    const elements = {
      'monthlyRevenue': `PKR ${data.monthlyRevenue.toLocaleString()}`,
      'fasterSales': `+${data.additionalProperties.toFixed(1)} properties/month`,
      'additionalRevenue': `PKR ${data.additionalRevenue.toLocaleString()}`,
      'roi': `${data.roi}%`
    };

    Object.entries(elements).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });
  }
}

// Chat functions (global for onclick handlers)
function addMessage(message, isUser = false) {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `mb-3 ${isUser ? 'text-right' : ''}`;
  div.innerHTML = `<div class="inline-block p-3 rounded-lg max-w-xs text-sm ${isUser ? 'bg-yellow-400 text-black' : 'bg-yellow-100 text-black'}">${message}</div>`;
  
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;

  const message = input.value.trim();
  if (message) {
    addMessage(message, true);
    input.value = '';
    
    setTimeout(() => {
      const response = window.sq.chatbot.getResponse(message);
      addMessage(response);
    }, 500);
  }
}

function startVRDemo() {
  window.open('https://play.unity.com/en/games/a8f724c8-91a7-4882-a127-87ad9bbc4840/webgl-builds', '_blank');
  if (window.sq) {
    sq.analytics.track('vr_demo_launch', { category: 'Engagement', label: 'Homepage VR Demo' });
  }
}

// Initialize SQ Interactive system
window.sq = new SQInteractive();