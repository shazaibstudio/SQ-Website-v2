# Navbar Maintenance Guide

## Overview

The navbar is now managed as a **single-source-of-truth** file that is automatically injected into all 39 pages across the site. This eliminates code duplication and ensures that navbar changes propagate everywhere automatically.

## Files

### Single Source of Truth
- **`_navbar.html`** — Master navbar markup (complete header, nav, desktop/mobile menus, Services dropdown, language toggles)
  - Contains absolute paths (`/`) for GitHub Pages compatibility
  - All links work across all page depths (1 level deep, 2 levels deep, 3 levels deep, etc.)

### CSS & JS
- **`css/unified-nav.css`** — Complete navbar styling (desktop, mobile, dropdown, transitions)
- **`js/unified-nav.js`** — Navbar behavior (Services dropdown toggle, mobile menu toggle, scroll behavior)

### Injection Scripts
- **`inject-navbar-batch.js`** — Batch injects `_navbar.html` into all 39 pages
- **`inject-nav-css.js`** — Adds `unified-nav.css` link to all pages
- **`inject-nav-js.js`** — Adds `unified-nav.js` script to all pages

## How It Works

1. **Edit `_navbar.html`** to change the navbar (logo, links, dropdowns, etc.)
2. **Run injection scripts** to update all 39 pages:
   ```bash
   node inject-navbar-batch.js
   node inject-nav-css.js
   node inject-nav-js.js
   ```
3. **All pages automatically get the new navbar** without manual editing

## What Changed in Each Page

Every `index.html` file now contains:

### 1. Navbar Markup
```html
<header>
  <nav class="sq-nav">
    <!-- Logo, links, Services dropdown, mobile menu, language toggles -->
  </nav>
</header>
```

### 2. CSS Link (after `components.css`)
```html
<link rel="stylesheet" href="[path]/css/unified-nav.css">
```

### 3. JavaScript (before `</body>`)
```html
<script src="[path]/js/unified-nav.js" defer></script>
```

**Note:** Paths are automatically adjusted based on page depth:
- Root level (`index.html`): `/css/unified-nav.css`, `/js/unified-nav.js`
- 1 level deep (`digital/index.html`): `../css/unified-nav.css`, `../js/unified-nav.js`
- 2 levels deep (`digital/website-development/index.html`): `../../css/unified-nav.css`, `../../js/unified-nav.js`

## Pages Updated (39 Total)

### Root & Main Pages (2)
- `index.html` (homepage)
- `services/index.html`

### Primary World Pages (4)
- `digital/index.html`
- `ai/index.html`
- `immersive/index.html`
- `lab/index.html`

### Company Pages (4)
- `work/index.html`
- `how-we-work/index.html`
- `about/index.html`
- `contact/index.html`

### Digital Sub-Pages (7)
- `digital/website-development/index.html`
- `digital/e-commerce/index.html`
- `digital/custom-software/index.html`
- `digital/ui-ux-experiences/index.html`
- `digital/seo-digital-growth/index.html`
- `digital/automation-integration/index.html`

### AI Sub-Pages (8)
- `ai/ai-systems-models/index.html`
- `ai/intelligent-automation/index.html`
- `ai/data-intelligence/index.html`
- `ai/ai-integration/index.html`
- `ai/ai-content/index.html`
- `ai/process-optimization/index.html`
- `ai/ai-interior-design/index.html`

### Immersive Sub-Pages (10)
- `immersive/virtual-reality/index.html`
- `immersive/augmented-reality/index.html`
- `immersive/3d-visualization/index.html`
- `immersive/360-experiences/index.html`
- `immersive/interactive-installation/index.html`
- `immersive/web-immersion/index.html`
- `immersive/vr-staging/index.html`
- `immersive/furniture-scanning/index.html`
- `immersive/360-tours/index.html`
- `immersive/vr-real-estate/index.html`

### Lab Sub-Pages (6)
- `lab/ai-research/index.html`
- `lab/3d-tech/index.html`
- `lab/no-code-platforms/index.html`
- `lab/web-performance/index.html`
- `lab/ar-vr-innovation/index.html`
- `lab/design-systems/index.html`

## Workflow

### To Update the Navbar

1. Open `_navbar.html`
2. Make changes (add links, modify structure, update text, etc.)
3. Run the injection scripts:
   ```bash
   node inject-navbar-batch.js
   ```
4. Commit changes to git:
   ```bash
   git add _navbar.html
   git commit -m "Update navbar: [description]"
   ```

### Examples of Common Changes

**Add a new navigation link:**
```html
<!-- In _navbar.html, add to sq-nav__links div -->
<a href="/new-page/" class="sq-nav__link" data-sq-nav-link>New Page</a>

<!-- Also add to sq-nav__mobile div for mobile menu -->
<a href="/new-page/" class="sq-nav__mobile-link" data-sq-nav-link>New Page</a>
```

**Update a service link:**
```html
<!-- Find the link in the Services dropdown and update href -->
<a href="/digital/new-service/" class="sq-services-popup__link" role="menuitem">New Service</a>
```

**Change logo text:**
```html
<span class="sq-nav__logo-text">
  New <span>Text</span>
</span>
```

Then run: `node inject-navbar-batch.js`

## No More Manual Updates

✅ **Before:** Edit navbar in 39 different files  
❌ **After:** Edit navbar in _one_ file, run injection script

## Technical Details

### Why Absolute Paths?
- GitHub Pages serves from the root (`/`)
- Absolute paths work on all page depths
- No relative path calculation needed
- Consistent across all pages

### Why Separate CSS/JS Files?
- Keeps navbar styling isolated and maintainable
- Navbar behavior is independent of page-specific JS
- Loads only once even with 39 pages
- Easier to debug and update

### Why `defer` on Scripts?
- Prevents blocking page load
- Navbar JS executes after DOM is ready
- Improves page performance

## Troubleshooting

### Navbar doesn't appear on a page
- Check that `unified-nav.css` is linked in the `<head>`
- Check that `unified-nav.js` is loaded before `</body>`
- Check browser console for errors

### Links point to wrong location
- Verify `_navbar.html` has correct href values
- Ensure absolute paths start with `/`
- Run injection scripts again

### Mobile menu doesn't work
- Check that `unified-nav.js` is loaded
- Verify `sq-nav__mobile-toggle` button exists
- Check browser console for JS errors

### Dropdown doesn't open
- Verify `sq-services-btn` and `sq-services-popup` IDs exist
- Check that `unified-nav.js` is loaded
- Verify CSS has `sq-services-popup` styling

## Next Steps

- Monitor the navbar across different browsers
- Test mobile menu on actual devices
- Update Services dropdown as new offerings are added
- Consider adding analytics tracking for navbar clicks

