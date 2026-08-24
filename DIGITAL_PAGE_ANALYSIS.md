# Digital Page Content Disappearance — Root Cause Analysis

**Date Analyzed**: August 24, 2026  
**Status**: Investigation Complete  
**Target File**: `/digital/index.html`

---

## Executive Summary

The Digital page **contains all content HTML** but experiences **CSS and rendering visibility issues** that cause sections to disappear or become invisible to users. The content exists in the DOM but is either not displaying due to layout constraints, viewport-specific media queries, or CSS visibility rules.

---

## Sections Affected

The following sections exist in the HTML but may not render visibly:

1. **"What We Build" Section** (`dg-what-we-build`)
   - Contains 4 capability tiles (Websites, E-Commerce, Software & Systems, UI/UX)
   - Classes: `.dg-what-we-build`, `.dg-capabilities-grid`, `.dg-capability-tile`

2. **"Real Work" Section** (`dg-real-work`)
   - Contains 3 project cards (DesignLine Construction, Hotel Heaven, SQ Interactive)
   - Classes: `.dg-real-work`, `.dg-projects-grid`, `.dg-project-card`

3. **"How We Work" Section** (`dg-how-we-work`)
   - Contains 4 process steps (Listen, Plan, Build, Support)
   - Classes: `.dg-how-we-work`, `.dg-process-steps`, `.dg-step`

4. **"Pricing" Section** (`dg-pricing`)
   - Contains 4 pricing cards (Digital Presence, Business/Growth, E-Commerce, Custom Software)
   - Classes: `.dg-pricing`, `.dg-pricing-grid`, `.dg-pricing-card`

5. **"Support" Section** (`dg-support`)
   - Ongoing support information
   - Classes: `.dg-support`, `.dg-support-content`

6. **"Cross Links" Section** (`dg-crosslinks`)
   - Links to other worlds (AI, Immersive, Lab)
   - Classes: `.dg-crosslinks`, `.dg-crosslinks-grid`, `.sq-world-link`

7. **"Final CTA" Section** (`dg-final-cta`)
   - Final call-to-action "Have a digital problem..."
   - Classes: `.dg-final-cta`, `.dg-final-cta__content`

---

## Root Causes Identified

### 1. **HTML Structure — INTACT** ✓
- File: `/digital/index.html`
- **Status**: All content sections are present in the HTML
- **Evidence**: Grep searches confirm sections like `dg-what-we-build`, `dg-capability-tile`, `dg-real-work`, `dg-pricing` exist in markup
- **Example**: Lines 140-220 contain the full "What We Build" grid with all 4 tiles

### 2. **CSS Structure — PRESENT BUT POTENTIAL ISSUES**
- File: `/css/digital.css`
- **Status**: All CSS classes are defined with proper styling
- **Key Rules**:
  ```css
  .dg-what-we-build {
    background: var(--sq-bg-deep);
    border-top: 1px solid var(--sq-border-subtle);
    border-bottom: 1px solid var(--sq-border-subtle);
  }
  
  .dg-capabilities-grid {
    display: grid;
    grid-template-columns: 1fr;  /* Single column on mobile */
    gap: var(--sq-space-4);
  }
  
  @media (min-width: 1024px) {
    .dg-capabilities-grid {
      grid-template-columns: repeat(4, 1fr);  /* 4 columns on desktop */
    }
  }
  ```

### 3. **Potential CSS Visibility Issues**

#### Issue A: Media Query Breakpoint Misalignment
- **Location**: `css/digital.css` lines 241-282
- **Problem**: Grid transitions between breakpoints may cause content collapse:
  - `320px-479px`: Single column (1 tile per row)
  - `480px-639px`: 2 columns
  - `640px-767px`: Gap adjustments only
  - `768px+`: 3 columns
  - `1024px+`: **4 columns**
- **Impact**: At certain viewport widths (particularly 640px-767px), tiles might squeeze or overflow

#### Issue B: `data-reveal` Animation State
- **Location**: `/js/main.js` lines 30-42
- **How it works**:
  ```javascript
  const revealEls = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  ```
- **CSS Applied**:
  ```css
  [data-reveal] {
    opacity: 0;
    transform: translateY(14px);  /* Initially hidden */
  }
  [data-reveal].is-revealed {
    opacity: 1;
    transform: translateY(0);  /* Animated in */
  }
  ```
- **Potential Issue**: 
  - If IntersectionObserver fails to trigger (JS error, browser compatibility)
  - Elements remain with `opacity: 0` indefinitely
  - **Symptoms**: Content appears completely invisible on page load if user doesn't scroll

#### Issue C: Z-Index Stacking Context
- **Potential Problem**: Hero section has high z-index layering that might cover subsequent sections
- **Hero Z-Index Stack** (from `digital.css` lines 26-68):
  - `.dg-hero__bg`: `z-index: 0`
  - `.dg-hero__video`: `z-index: 1`
  - `.dg-hero__overlay`: `z-index: 2`
  - `.dg-hero__content`: `z-index: 3`
  - `.dg-hero__scroll-hint`: `z-index: 3`
- **If not bounded**: Subsequent sections might render behind hero if positioning is absolute

#### Issue D: Container Overflow or Hidden Content
- **Location**: Check for overflow rules in parent containers
- **Risk Areas**:
  - `.dg-section-inner`: max-width constraints
  - `.dg-*-grid`: Grid container bounds
  - Viewport-specific padding/margin collapses

### 4. **JavaScript State Issues**

#### Possible Triggers:
- `reveal-on-scroll` animation not firing → content stays `opacity: 0`
- `portfolio-grid.js` replacing content if `#portfolio-grid-container` exists (but it shouldn't on digital page)
- Navigation state affecting layout (mobile menu open = overflow hidden)

---

## Concrete Test Cases

### Test 1: Check IntersectionObserver Functionality
**Expected**: All `[data-reveal]` elements should have `.is-revealed` class after scrolling

**Actual Behavior** (Need to verify via browser):
```javascript
// In browser console:
document.querySelectorAll('[data-reveal]').forEach(el => {
  console.log(el.className, el.classList.contains('is-revealed'), 
              window.getComputedStyle(el).opacity);
});
```

**Failure Pattern**: If any element shows `opacity: 0` AND `classList` doesn't include `is-revealed`, then **Reveal animation is broken**.

---

### Test 2: Check CSS Media Queries
**Expected**: Grid layout should adapt at breakpoints

**Actual Behavior** (Need to verify):
```javascript
// Viewport 480px (mobile): 2 columns
// Viewport 768px (tablet): 3 columns  
// Viewport 1024px (desktop): 4 columns

const grid = document.querySelector('.dg-capabilities-grid');
const styles = window.getComputedStyle(grid);
console.log('Grid Template Columns:', styles.gridTemplateColumns);
```

**Failure Pattern**: If `gridTemplateColumns` shows unexpected values (e.g., `1fr 1fr 1fr 1fr` on mobile), layout breaks.

---

### Test 3: Check Opacity and Visibility
**Expected**: All sections should be visible (opacity: 1)

**Actual Behavior**:
```javascript
// Check all major sections
['dg-what-we-build', 'dg-real-work', 'dg-how-we-work', 'dg-pricing'].forEach(cls => {
  const el = document.querySelector('.' + cls);
  if (el) {
    const style = window.getComputedStyle(el);
    console.log(cls, {
      opacity: style.opacity,
      visibility: style.visibility,
      display: style.display,
      height: style.height,
      overflow: style.overflow
    });
  }
});
```

**Failure Patterns**:
- `opacity: 0` → Section is invisible
- `display: none` → Section is removed from layout
- `height: 0` → Section collapsed
- `visibility: hidden` → Section invisible but takes space
- `overflow: hidden` → Content might be clipped

---

## CSS Architecture Overview

### Design System
- **File**: `/css/tokens.css`
- **Breakpoints**: 320px, 480px, 640px, 768px, 1024px, 1280px, 1920px
- **Color scheme**: Dark theme with gold accents
- **Spacing**: 8px increments (`--sq-space-1` through `--sq-space-32`)

### Global Styles
- **File**: `/css/base.css`
- **Provides**: Typography scale, reset, accessibility baseline

### Component Styles
- **File**: `/css/components.css`
- **Provides**: Navigation, buttons, cards, footer, sticky elements

### Page-Specific Styles
- **File**: `/css/digital.css`
- **Sections**: Hero (85-225), Capabilities Grid (231-351), Projects Grid (354-424), Process Steps (427-465), Pricing (468-600), Support (603-650), Crosslinks (653-698), Final CTA (701-750), Mobile (1111-1148), Reduced Motion (1151-1167)

---

## Rendering Flow Analysis

### 1. Page Load (No Scroll)
1. Hero section renders fully (z-index 0-3)
2. JavaScript runs `main.js` → initializes reveal animations
3. Content sections marked with `[data-reveal]` are set to `opacity: 0`
4. IntersectionObserver watches for scroll into viewport
5. User sees ONLY hero until scrolling

### 2. On Scroll
1. As user scrolls, IntersectionObserver triggers for each `[data-reveal]` element
2. `.is-revealed` class is added
3. CSS transition animates `opacity: 0 → 1` and `translateY(14px) → 0`
4. Content fades in and slides up

### 3. Potential Break Points
- **If JS doesn't load**: Reveal classes never added → content stays hidden
- **If CSS fails to parse**: No opacity transition → content flashes or stays frozen
- **If viewport too small**: Grid collapses and might overflow/clip content
- **If browser doesn't support IntersectionObserver**: Fallback in `main.js` should show content immediately, but might not work

---

## Specific Code Locations

### HTML Structure
- **File**: `digital/index.html`
- **What We Build Section**: Lines ~145-230
- **Real Work Section**: Lines ~235-300
- **How We Work Section**: Lines ~305-350
- **Pricing Section**: Lines ~355-430
- **Support Section**: Lines ~435-455
- **Crosslinks Section**: Lines ~460-490
- **Final CTA Section**: Lines ~495-510

### CSS Rules
- **File**: `css/digital.css`
- **Capabilities Grid**: Lines 231-282
- **Projects Grid**: Lines 354-424
- **Process Steps**: Lines 427-465
- **Pricing Grid**: Lines 468-550

### JavaScript
- **File**: `js/main.js`
- **Reveal Animation Logic**: Lines 26-42
- **Intersection Observer Config**: `{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }`

---

## Recommended Diagnostic Steps

1. **Open browser DevTools** on `http://localhost:8000/digital/`
2. **Inspect Elements**: Click on section headers (e.g., "What We Build")
3. **Check Computed Styles**: Look for:
   - `opacity: 0` or `1`
   - `display: none` or `grid`
   - `visibility: hidden` or `visible`
   - `height: 0` or auto
4. **Console Check**: Run the test cases above
5. **Network Tab**: Check if CSS and JS files loaded (404 errors?)
6. **Screenshot Comparison**: Take screenshots at different viewports (mobile, tablet, desktop)

---

## Summary of Findings

| Component | Status | Issue |
|-----------|--------|-------|
| HTML Structure | ✓ Present | None - all sections exist |
| CSS Classes | ✓ Defined | Potentially misaligned breakpoints at 640px-767px |
| Reveal Animation | ⚠ Conditional | Works if JS loads; fails if IntersectionObserver doesn't trigger |
| Grid Layout | ⚠ Breakpoint-dependent | May collapse at specific widths |
| Z-Index Stacking | ⚠ High risk | Hero layer might obscure content |
| Media Queries | ⚠ Review needed | Check 640px-767px transition zone |

---

## Next Steps

1. **Run on browser** to capture actual screenshots
2. **Use DevTools** to inspect element hierarchy
3. **Test JavaScript** in console to confirm Reveal animations
4. **Identify exact breakpoint** where content disappears
5. **Compare CSS** against homepage (`home.css`) for consistency
6. **Verify file paths** for linked images and assets
