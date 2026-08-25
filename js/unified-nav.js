/**
 * SQ Interactive
 * Unified Navigation System
 *
 * IMPORTANT:
 * The navigation HTML lives directly inside every page.
 * This file controls BEHAVIOR ONLY.
 *
 * Handles:
 * - Desktop Services dropdown
 * - Desktop Services world accordions
 * - Mobile menu
 * - Mobile Services submenu
 * - Mobile world accordions
 * - Active page detection
 * - Services parent active state
 * - Scroll state
 * - Escape key
 * - Outside click
 * - Resize cleanup
 * - Accessibility state synchronization
 *
 * It DOES NOT generate navigation HTML.
 */

(function () {
  'use strict';


  /* ================================================================
     CONSTANTS
     ================================================================ */

  const MOBILE_BREAKPOINT = 768;

  const SERVICE_ROOTS = [
    '/services/',
    '/digital/',
    '/ai/',
    '/immersive/',
    '/lab/'
  ];


  /* ================================================================
     INITIALIZATION
     ================================================================ */

  function initializeNavigation() {
    const nav = document.querySelector('.sq-nav');

    if (!nav) {
      return;
    }

    setupDesktopServices(nav);
    setupMobileMenu(nav);
    setupMobileServices(nav);
    setupActiveNavigation(nav);
    setupScrollState(nav);
    setupNavigationLinks(nav);
  }


  /* ================================================================
     DESKTOP SERVICES DROPDOWN
     ================================================================ */

  function setupDesktopServices(nav) {
    const servicesButton =
      nav.querySelector('#sq-services-btn');

    const servicesPopup =
      nav.querySelector('#sq-services-popup');

    if (!servicesButton || !servicesPopup) {
      return;
    }

    let closeTimer = null;


    function openServices() {
      clearTimeout(closeTimer);

      servicesPopup.classList.remove('hidden');

      servicesButton.setAttribute(
        'aria-expanded',
        'true'
      );
    }


    function closeServices() {
      clearTimeout(closeTimer);

      servicesPopup.classList.add('hidden');

      servicesButton.setAttribute(
        'aria-expanded',
        'false'
      );

      closeDesktopWorlds();
    }


    function scheduleClose() {
      clearTimeout(closeTimer);

      closeTimer = setTimeout(
        closeServices,
        200
      );
    }


    function closeDesktopWorlds() {
      servicesPopup
        .querySelectorAll(
          '.sq-services-popup__world-links'
        )
        .forEach(function (links) {
          links.classList.remove('open');

          links.style.maxHeight = '';
        });

      servicesPopup
        .querySelectorAll(
          '.sq-services-popup__world-btn'
        )
        .forEach(function (button) {
          button.setAttribute(
            'aria-expanded',
            'false'
          );
        });
    }


    function openDesktopWorld(button) {
      const links = button.nextElementSibling;

      if (!links) {
        return;
      }

      closeDesktopWorlds();

      links.classList.add('open');

      button.setAttribute(
        'aria-expanded',
        'true'
      );

      /*
       * Set an explicit height so the CSS transition works
       * reliably even if the content changes later.
       */
      links.style.maxHeight =
        links.scrollHeight + 'px';
    }


    /*
     * Click
     */

    servicesButton.addEventListener(
      'click',
      function (event) {
        event.stopPropagation();

        const isOpen =
          servicesButton.getAttribute(
            'aria-expanded'
          ) === 'true';

        if (isOpen) {
          closeServices();
        } else {
          openServices();
        }
      }
    );


    /*
     * Desktop hover behavior.
     */

    servicesButton.addEventListener(
      'mouseenter',
      openServices
    );

    servicesButton.addEventListener(
      'mouseleave',
      scheduleClose
    );

    servicesPopup.addEventListener(
      'mouseenter',
      function () {
        clearTimeout(closeTimer);
      }
    );

    servicesPopup.addEventListener(
      'mouseleave',
      scheduleClose
    );


    /*
     * World accordions.
     */

    servicesPopup
      .querySelectorAll(
        '.sq-services-popup__world-btn'
      )
      .forEach(function (button) {

        button.addEventListener(
          'click',
          function (event) {
            event.stopPropagation();

            const links =
              button.nextElementSibling;

            if (!links) {
              return;
            }

            const isOpen =
              button.getAttribute(
                'aria-expanded'
              ) === 'true';

            if (isOpen) {

              links.classList.remove(
                'open'
              );

              links.style.maxHeight = '';

              button.setAttribute(
                'aria-expanded',
                'false'
              );

              return;
            }

            openDesktopWorld(button);
          }
        );

      });


    /*
     * Escape key.
     */

    document.addEventListener(
      'keydown',
      function (event) {

        if (event.key !== 'Escape') {
          return;
        }

        closeServices();

      }
    );


    /*
     * Outside click.
     */

    document.addEventListener(
      'click',
      function (event) {

        if (
          !servicesButton.contains(
            event.target
          ) &&
          !servicesPopup.contains(
            event.target
          )
        ) {
          closeServices();
        }

      }
    );


    /*
     * Reset desktop accordions after viewport changes.
     */

    window.addEventListener(
      'resize',
      function () {

        if (
          window.innerWidth < MOBILE_BREAKPOINT
        ) {
          closeServices();
        }

      }
    );
  }


  /* ================================================================
     MOBILE MENU
     ================================================================ */

  function setupMobileMenu(nav) {
    const toggle =
      nav.querySelector(
        '#sq-mobile-menu-toggle'
      );

    const mobileMenu =
      nav.querySelector(
        '#sq-mobile-menu'
      );

    if (!toggle || !mobileMenu) {
      return;
    }


    function openMenu() {
      mobileMenu.classList.add(
        'is-open'
      );

      toggle.setAttribute(
        'aria-expanded',
        'true'
      );

      toggle.setAttribute(
        'aria-label',
        'Close menu'
      );

      mobileMenu.setAttribute(
        'aria-hidden',
        'false'
      );

      document.body.classList.add(
        'sq-nav-menu-open'
      );
    }


    function closeMenu() {
      mobileMenu.classList.remove(
        'is-open'
      );

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      toggle.setAttribute(
        'aria-label',
        'Open menu'
      );

      mobileMenu.setAttribute(
        'aria-hidden',
        'true'
      );

      document.body.classList.remove(
        'sq-nav-menu-open'
      );

      closeMobileServices();
    }


    function closeMobileServices() {
      const servicesToggle =
        nav.querySelector(
          '#sq-mobile-services-toggle'
        );

      const servicesMenu =
        nav.querySelector(
          '#sq-mobile-services'
        );

      if (servicesMenu) {
        servicesMenu.classList.remove(
          'is-open'
        );
      }

      if (servicesToggle) {
        servicesToggle.setAttribute(
          'aria-expanded',
          'false'
        );

        const icon =
          servicesToggle.querySelector(
            '.sq-mobile-services__toggle-icon'
          );

        if (icon) {
          icon.textContent = '+';
        }
      }

      nav
        .querySelectorAll(
          '.sq-mobile-services__world-menu'
        )
        .forEach(function (menu) {

          menu.classList.remove(
            'is-open'
          );

        });

      nav
        .querySelectorAll(
          '.sq-mobile-services__world-toggle'
        )
        .forEach(function (button) {

          button.setAttribute(
            'aria-expanded',
            'false'
          );

          const icon =
            button.querySelector(
              '.sq-mobile-services__world-icon'
            );

          if (icon) {
            icon.textContent = '+';
          }

        });
    }


    /*
     * Toggle.
     */

    toggle.addEventListener(
      'click',
      function (event) {

        event.stopPropagation();

        const isOpen =
          toggle.getAttribute(
            'aria-expanded'
          ) === 'true';

        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }

      }
    );


    /*
     * Don't allow clicks inside mobile nav
     * to trigger the document outside-click handler.
     */

    mobileMenu.addEventListener(
      'click',
      function (event) {
        event.stopPropagation();
      }
    );


    /*
     * Close when clicking outside.
     */

    document.addEventListener(
      'click',
      function (event) {

        if (
          !toggle.contains(
            event.target
          ) &&
          !mobileMenu.contains(
            event.target
          )
        ) {
          closeMenu();
        }

      }
    );


    /*
     * Escape key.
     */

    document.addEventListener(
      'keydown',
      function (event) {

        if (event.key === 'Escape') {
          closeMenu();
        }

      }
    );


    /*
     * Close menu after selecting a page.
     */

    mobileMenu
      .querySelectorAll(
        'a[href]'
      )
      .forEach(function (link) {

        link.addEventListener(
          'click',
          closeMenu
        );

      });


    /*
     * Switch back to desktop.
     */

    window.addEventListener(
      'resize',
      function () {

        if (
          window.innerWidth >=
          MOBILE_BREAKPOINT
        ) {
          closeMenu();
        }

      }
    );
  }


  /* ================================================================
     MOBILE SERVICES
     ================================================================ */

  function setupMobileServices(nav) {
    const servicesToggle =
      nav.querySelector(
        '#sq-mobile-services-toggle'
      );

    const servicesMenu =
      nav.querySelector(
        '#sq-mobile-services'
      );

    if (!servicesToggle || !servicesMenu) {
      return;
    }


    /*
     * Services open / close.
     */

    servicesToggle.addEventListener(
      'click',
      function (event) {

        event.stopPropagation();

        const isOpen =
          servicesToggle.getAttribute(
            'aria-expanded'
          ) === 'true';

        servicesMenu.classList.toggle(
          'is-open',
          !isOpen
        );

        servicesToggle.setAttribute(
          'aria-expanded',
          String(!isOpen)
        );

        const icon =
          servicesToggle.querySelector(
            '.sq-mobile-services__toggle-icon'
          );

        if (icon) {
          icon.textContent =
            isOpen ? '+' : '−';
        }

        /*
         * If closing Services, close every world.
         */

        if (isOpen) {
          servicesMenu
            .querySelectorAll(
              '.sq-mobile-services__world-menu'
            )
            .forEach(function (menu) {

              menu.classList.remove(
                'is-open'
              );

            });

          servicesMenu
            .querySelectorAll(
              '.sq-mobile-services__world-toggle'
            )
            .forEach(function (button) {

              button.setAttribute(
                'aria-expanded',
                'false'
              );

              const worldIcon =
                button.querySelector(
                  '.sq-mobile-services__world-icon'
                );

              if (worldIcon) {
                worldIcon.textContent = '+';
              }

            });
        }

      }
    );


    /*
     * World accordions.
     */

    servicesMenu
      .querySelectorAll(
        '[data-world-toggle]'
      )
      .forEach(function (toggle) {

        toggle.addEventListener(
          'click',
          function (event) {

            event.stopPropagation();

            const menuId =
              toggle.getAttribute(
                'data-world-toggle'
              );

            if (!menuId) {
              return;
            }

            const worldMenu =
              nav.querySelector(
                '#' + CSS.escape(menuId)
              );

            if (!worldMenu) {
              return;
            }

            const isOpen =
              toggle.getAttribute(
                'aria-expanded'
              ) === 'true';

            /*
             * Close the other world menus.
             */

            servicesMenu
              .querySelectorAll(
                '.sq-mobile-services__world-menu'
              )
              .forEach(function (menu) {

                if (menu !== worldMenu) {
                  menu.classList.remove(
                    'is-open'
                  );
                }

              });

            servicesMenu
              .querySelectorAll(
                '.sq-mobile-services__world-toggle'
              )
              .forEach(function (button) {

                if (button !== toggle) {

                  button.setAttribute(
                    'aria-expanded',
                    'false'
                  );

                  const otherIcon =
                    button.querySelector(
                      '.sq-mobile-services__world-icon'
                    );

                  if (otherIcon) {
                    otherIcon.textContent = '+';
                  }

                }

              });


            /*
             * Toggle selected world.
             */

            worldMenu.classList.toggle(
              'is-open',
              !isOpen
            );

            toggle.setAttribute(
              'aria-expanded',
              String(!isOpen)
            );

            const icon =
              toggle.querySelector(
                '.sq-mobile-services__world-icon'
              );

            if (icon) {
              icon.textContent =
                isOpen ? '+' : '−';
            }

          }
        );

      });
  }


  /* ================================================================
     ACTIVE PAGE NAVIGATION
     ================================================================ */

  function setupActiveNavigation(nav) {

    const currentPath =
      normalizePath(
        window.location.pathname
      );


    /*
     * Clear existing active states.
     */

    nav
      .querySelectorAll(
        '[data-sq-nav-link], .sq-nav__mobile-link'
      )
      .forEach(function (link) {

        link.classList.remove(
          'sq-nav__link--active'
        );

        link.classList.remove(
          'sq-nav__mobile-link--active'
        );

        link.removeAttribute(
          'aria-current'
        );

      });


    /*
     * Evaluate every navigation link.
     *
     * We intentionally include ALL navigation anchors,
     * including nested service links, so the active state
     * can still work on deep pages.
     */

    nav
      .querySelectorAll(
        'a[href]'
      )
      .forEach(function (link) {

        const href =
          link.getAttribute(
            'href'
          );

        if (
          !href ||
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:')
        ) {
          return;
        }

        const linkPath =
          getPathFromHref(href);

        if (!linkPath) {
          return;
        }


        const isHome =
          linkPath === '/' &&
          currentPath === '/';

        const isExact =
          linkPath !== '/' &&
          currentPath === linkPath;


        /*
         * A service directory should be active
         * for pages below that directory.
         */

        const isParent =
          linkPath !== '/' &&
          currentPath.startsWith(
            linkPath.endsWith('/')
              ? linkPath
              : linkPath + '/'
          );


        if (
          isHome ||
          isExact ||
          isParent
        ) {

          if (
            link.classList.contains(
              'sq-nav__mobile-link'
            )
          ) {
            link.classList.add(
              'sq-nav__mobile-link--active'
            );
          } else {
            link.classList.add(
              'sq-nav__link--active'
            );
          }

          link.setAttribute(
            'aria-current',
            'page'
          );

        }

      });


    /*
     * Services parent state.
     */

    const servicesButton =
      nav.querySelector(
        '#sq-services-btn'
      );

    const mobileServices =
      nav.querySelector(
        '#sq-mobile-services-toggle'
      );


    const insideServices =
      SERVICE_ROOTS.some(
        function (root) {

          const normalizedRoot =
            normalizePath(root);

          return (
            currentPath ===
              normalizedRoot ||
            currentPath.startsWith(
              normalizedRoot + '/'
            )
          );

        }
      );


    if (insideServices) {

      if (servicesButton) {
        servicesButton.classList.add(
          'sq-nav__link--active'
        );
      }

      if (mobileServices) {
        mobileServices.classList.add(
          'sq-nav__mobile-link--active'
        );
      }

    }

  }


  /* ================================================================
     ACTIVE LINK HELPERS
     ================================================================ */

  function setupNavigationLinks(nav) {

    /*
     * Nothing is injected here.
     *
     * This function exists so future navigation-wide
     * interactions can live in one place without changing
     * the HTML-generation architecture.
     */

    void nav;
  }


  function getPathFromHref(href) {

    try {

      const url =
        new URL(
          href,
          window.location.origin
        );

      return normalizePath(
        url.pathname
      );

    } catch (error) {

      return null;

    }

  }


  function normalizePath(path) {

    if (!path) {
      return '/';
    }


    let normalized =
      path.trim();


    /*
     * Remove duplicate slashes.
     */

    normalized =
      normalized.replace(
        /\/+/g,
        '/'
      );


    /*
     * Ensure leading slash.
     */

    if (
      !normalized.startsWith('/')
    ) {
      normalized =
        '/' + normalized;
    }


    /*
     * Remove trailing slash
     * except for root.
     */

    if (
      normalized.length > 1 &&
      normalized.endsWith('/')
    ) {
      normalized =
        normalized.slice(0, -1);
    }


    return normalized;
  }


  /* ================================================================
     SCROLL STATE
     ================================================================ */

  function setupScrollState(nav) {

    function updateScrollState() {

      nav.classList.toggle(
        'sq-nav--scrolled',
        window.scrollY > 20
      );

    }


    window.addEventListener(
      'scroll',
      updateScrollState,
      {
        passive: true
      }
    );


    updateScrollState();
  }


  /* ================================================================
     INITIALIZE
     ================================================================ */

  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      initializeNavigation
    );

  } else {

    initializeNavigation();

  }

})();