(function () {
  'use strict';

  /* ── Hub card tracking ── */
  document.addEventListener('click', function (e) {
    var card = e.target.closest('[data-hub-world]');
    if (card) {
      var world = card.getAttribute('data-hub-world');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'sq_hub_select', { world: world });
      }
    }

    var cta = e.target.closest('[data-cta]');
    if (cta) {
      var label = cta.getAttribute('data-cta');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'sq_cta_click', { label: label });
      }
    }
  });

})();
