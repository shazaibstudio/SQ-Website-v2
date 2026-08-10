// Performance Monitoring for SQ Interactive
(function() {
  'use strict';

  // Core Web Vitals tracking
  function trackWebVitals() {
    if ('web-vital' in window) {
      // Track Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(lastEntry.startTime),
            non_interaction: true,
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const firstInput = entryList.getEntries()[0];
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'FID', {
            event_category: 'Web Vitals',
            value: Math.round(firstInput.processingStart - firstInput.startTime),
            non_interaction: true,
          });
        }
      }).observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Page load performance
  function trackPageLoad() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation && typeof gtag !== 'undefined') {
        // Page Load Time
        gtag('event', 'page_load_time', {
          event_category: 'Performance',
          value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          non_interaction: true,
        });

        // DOM Content Loaded
        gtag('event', 'dom_content_loaded', {
          event_category: 'Performance',
          value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          non_interaction: true,
        });

        // Time to First Byte
        gtag('event', 'ttfb', {
          event_category: 'Performance',
          value: Math.round(navigation.responseStart - navigation.fetchStart),
          non_interaction: true,
        });
      }
    });
  }

  // Error tracking
  function trackErrors() {
    window.addEventListener('error', (e) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
          event_category: 'Error',
          event_label: e.message,
          value: 1,
          non_interaction: true,
        });
      }
    });

    window.addEventListener('unhandledrejection', (e) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'promise_rejection', {
          event_category: 'Error',
          event_label: e.reason,
          value: 1,
          non_interaction: true,
        });
      }
    });
  }

  // User engagement tracking
  function trackEngagement() {
    let startTime = Date.now();
    let isActive = true;
    
    // Track time on page
    window.addEventListener('beforeunload', () => {
      if (isActive && typeof gtag !== 'undefined') {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          value: timeOnPage,
          non_interaction: true,
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scrolls
        if ([25, 50, 75, 90].includes(scrollPercent) && typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent,
            non_interaction: true,
          });
        }
      }
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      isActive = !document.hidden;
    });
  }

  // Video engagement tracking
  function trackVideoEngagement() {
    document.querySelectorAll('video').forEach((video, index) => {
      video.addEventListener('play', () => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'video_play', {
            event_category: 'Video',
            event_label: `Video ${index + 1}`,
            non_interaction: true,
          });
        }
      });

      video.addEventListener('ended', () => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'video_complete', {
            event_category: 'Video',
            event_label: `Video ${index + 1}`,
            non_interaction: true,
          });
        }
      });
    });
  }

  // Form tracking
  function trackForms() {
    document.querySelectorAll('form').forEach((form, index) => {
      form.addEventListener('submit', () => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'Form',
            event_label: `Form ${index + 1}`,
            non_interaction: false,
          });
        }
      });

      // Track form abandonment
      const inputs = form.querySelectorAll('input, textarea, select');
      let hasInteracted = false;
      
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          if (!hasInteracted) {
            hasInteracted = true;
            if (typeof gtag !== 'undefined') {
              gtag('event', 'form_start', {
                event_category: 'Form',
                event_label: `Form ${index + 1}`,
                non_interaction: true,
              });
            }
          }
        });
      });
    });
  }

  // Initialize all tracking
  function init() {
    trackWebVitals();
    trackPageLoad();
    trackErrors();
    trackEngagement();
    trackVideoEngagement();
    trackForms();
  }

  // Start tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();