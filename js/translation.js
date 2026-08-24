/**
 * SQ Interactive - Dynamic Urdu Translation System
 * Uses Google Translate API for real-time translation
 * Persists language preference across pages
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'sq_language';
  const DEFAULT_LANGUAGE = 'en';
  let currentLanguage = DEFAULT_LANGUAGE;

  // ═══════════════════════════════════════════════════════════════════════════
  // INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════════

  document.addEventListener('DOMContentLoaded', function() {
    initializeTranslation();
  });

  function initializeTranslation() {
    // Load saved language preference
    currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

    // Setup language buttons
    setupLanguageButtons();

    // Apply saved language
    if (currentLanguage === 'ur') {
      translatePageToUrdu();
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // LANGUAGE BUTTON SETUP
  // ═══════════════════════════════════════════════════════════════════════════

  function setupLanguageButtons() {
    // Desktop EN button
    const desktopEnBtn = document.getElementById('sq-lang-en');
    if (desktopEnBtn) {
      desktopEnBtn.addEventListener('click', function() {
        setLanguage('en');
      });
    }

    // Desktop UR button
    const desktopUrBtn = document.getElementById('sq-lang-ur');
    if (desktopUrBtn) {
      desktopUrBtn.addEventListener('click', function() {
        setLanguage('ur');
      });
    }

    // Mobile EN button
    const mobileEnBtn = document.getElementById('sq-mobile-lang-en');
    if (mobileEnBtn) {
      mobileEnBtn.addEventListener('click', function() {
        setLanguage('en');
      });
    }

    // Mobile UR button
    const mobileUrBtn = document.getElementById('sq-mobile-lang-ur');
    if (mobileUrBtn) {
      mobileUrBtn.addEventListener('click', function() {
        setLanguage('ur');
      });
    }

    updateLanguageButtonStates();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SET LANGUAGE
  // ═══════════════════════════════════════════════════════════════════════════

  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    if (lang === 'ur') {
      translatePageToUrdu();
    } else {
      restorePageToEnglish();
    }

    updateLanguageButtonStates();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // UPDATE BUTTON STATES
  // ═══════════════════════════════════════════════════════════════════════════

  function updateLanguageButtonStates() {
    const buttons = {
      desktopEn: document.getElementById('sq-lang-en'),
      desktopUr: document.getElementById('sq-lang-ur'),
      mobileEn: document.getElementById('sq-mobile-lang-en'),
      mobileUr: document.getElementById('sq-mobile-lang-ur')
    };

    Object.values(buttons).forEach(function(btn) {
      if (!btn) return;
      btn.classList.remove('sq-lang-btn--active');
    });

    if (currentLanguage === 'en') {
      if (buttons.desktopEn) buttons.desktopEn.classList.add('sq-lang-btn--active');
      if (buttons.mobileEn) buttons.mobileEn.classList.add('sq-lang-btn--active');
    } else {
      if (buttons.desktopUr) buttons.desktopUr.classList.add('sq-lang-btn--active');
      if (buttons.mobileUr) buttons.mobileUr.classList.add('sq-lang-btn--active');
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSLATE TO URDU
  // ═══════════════════════════════════════════════════════════════════════════

  function translatePageToUrdu() {\n    // Load Google Translate script if not already loaded\n    if (!window.google || !window.google.translate) {\n      loadGoogleTranslate();\n    } else {\n      performTranslation('ur');\n    }\n  }\n\n  // ═══════════════════════════════════════════════════════════════════════════\n  // RESTORE TO ENGLISH\n  // ═══════════════════════════════════════════════════════════════════════════\n\n  function restorePageToEnglish() {\n    // Reload page to restore original English\n    // This is the cleanest approach for static sites\n    location.reload();\n  }\n\n  // ═══════════════════════════════════════════════════════════════════════════\n  // LOAD GOOGLE TRANSLATE\n  // ═══════════════════════════════════════════════════════════════════════════\n\n  function loadGoogleTranslate() {\n    // Add Google Translate script\n    const script = document.createElement('script');\n    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';\n    script.async = true;\n    document.head.appendChild(script);\n\n    // Initialize Google Translate\n    window.googleTranslateElementInit = function() {\n      new window.google.translate.TranslateElement(\n        {\n          pageLanguage: 'en',\n          includedLanguages: 'en,ur',\n          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,\n          autoDisplay: false\n        },\n        'sq-google-translate-element'\n      );\n      performTranslation('ur');\n    };\n  }\n\n  // ═══════════════════════════════════════════════════════════════════════════\n  // PERFORM TRANSLATION\n  // ═══════════════════════════════════════════════════════════════════════════\n\n  function performTranslation(lang) {\n    if (!window.google || !window.google.translate) {\n      // Fallback: reload page\n      setTimeout(function() {\n        performTranslation(lang);\n      }, 500);\n      return;\n    }\n\n    const select = document.querySelector('.goog-te-combo');\n    if (select) {\n      select.value = lang === 'ur' ? 'ur' : 'en';\n      select.dispatchEvent(new Event('change'));\n    }\n  }\n\n  // ═══════════════════════════════════════════════════════════════════════════\n  // HIDE GOOGLE TRANSLATE TOOLBAR\n  // ═══════════════════════════════════════════════════════════════════════════\n\n  function hideGoogleTranslateToolbar() {\n    const style = document.createElement('style');\n    style.textContent = `\n      .goog-te-banner-frame {\n        display: none !important;\n      }\n      .goog-te-gadget {\n        display: none !important;\n      }\n      body {\n        top: 0 !important;\n      }\n    `;\n    document.head.appendChild(style);\n  }\n\n  // Hide toolbar on load\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', hideGoogleTranslateToolbar);\n  } else {\n    hideGoogleTranslateToolbar();\n  }\n\n})();\n