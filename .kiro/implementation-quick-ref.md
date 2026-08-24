# Quick Implementation Reference — Digital & Services Fix

## TL;DR — What to Fix

### 1. Why Content Hidden
- Hero overlay too opaque (reduce opacity from 0.65→0.55 and 0.92→0.82)
- Hero video opacity too high (reduce from 0.45→0.35)
- No image styling in service cards CSS

### 2. Add Missing CSS
- `.sq-service-card__img` with `aspect-ratio: 4/3`
- `.sq-service-card__link` styling
- Breakpoint rules at 480px, 1440px

### 3. Add Images to Services Page
- Wrap existing Digital/AI/Immersive service cards with `<div class="sq-service-card__img">`
- Add `<img src="..." alt="..." loading="lazy">` to each card
- Use images from `/images/` and `/images/ui ux and web/` directories

### 4. Fix Responsive Breakpoints
- 320px: Single column
- 480px: 2 columns (NEW)
- 768px: 3 columns
- 1024px: 3-4 columns based on card type
- 1440px: 4 columns (NEW)

---

## File Changes — Exact Line References

### File 1: `css/digital.css`

**Line 48**: Reduce video opacity
```css
/* BEFORE */
.dg-hero__video {
  opacity: 0.45;
}

/* AFTER */
.dg-hero__video {
  opacity: 0.35;
}
```

**Lines 88-94**: Reduce overlay opacity
```css
/* BEFORE */
.dg-hero__overlay {
  background: linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.65) 60%, rgba(10,10,10,0.92) 100%);
}

/* AFTER */
.dg-hero__overlay {
  background: linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.82) 100%);
}
```

**After Line 470** (end of existing @media rules): Add new breakpoints
```css
@media (min-width: 480px) {
  .dg-capabilities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sq-space-4);
  }
}

@media (min-width: 1440px) {
  .dg-capabilities-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--sq-space-8);
  }
}
```

---

### File 2: `css/services.css`

**After Line 265** (after `.sq-services__world[data-reveal]` rule, before closing): Add new styles
```css
/* ══════════════════════════════════════════
   SERVICE CARD IMAGE CONTAINER
══════════════════════════════════════════ */

.sq-service-card__img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--sq-radius-md);
  overflow: hidden;
  margin-bottom: var(--sq-space-4);
  background: var(--sq-bg-deep);
  flex-shrink: 0;
}

.sq-service-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--sq-duration-slow) var(--sq-ease);
}

.sq-service-card:hover .sq-service-card__img img {
  transform: scale(1.05);
}

/* ══════════════════════════════════════════
   SERVICE CARD LINK / CTA
══════════════════════════════════════════ */

.sq-service-card__link {
  font-family: var(--sq-font-sans);
  font-size: var(--sq-text-sm);
  font-weight: 600;
  color: var(--sq-gold);
  margin-top: auto;
  transition: color var(--sq-duration-fast) var(--sq-ease);
  text-decoration: none;
  display: inline-block;
}

.sq-service-card:hover .sq-service-card__link {
  color: var(--sq-gold-light);
}

/* ══════════════════════════════════════════
   RESPONSIVE FIXES - BREAKPOINTS
══════════════════════════════════════════ */

@media (min-width: 480px) {
  .sq-services__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1440px) {
  .sq-services__world:nth-of-type(1) .sq-services__cards {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .sq-services__world:nth-of-type(2) .sq-services__cards {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .sq-services__world:nth-of-type(3) .sq-services__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

### File 3: `services/index.html`

**Find each service card** and wrap with image container. 

**Example for Digital Website Development** (around line 135):

**BEFORE:**
```html
<a href="../digital/website-development/" class="sq-service-card" data-cta="services_digital_web">
  <h3 class="sq-service-card__title">Website Development</h3>
  <p class="sq-service-card__desc">Fast, responsive websites built for conversion...</p>
```

**AFTER:**
```html
<a href="../digital/website-development/" class="sq-service-card" data-cta="services_digital_web">
  <div class="sq-service-card__img">
    <img src="../images/ui ux and web/jpj.png" alt="Responsive website design" loading="lazy" width="600" height="400">
  </div>
  <h3 class="sq-service-card__title">Website Development</h3>
  <p class="sq-service-card__desc">Fast, responsive websites built for conversion...</p>
```

**Repeat for all 6 cards**:
1. Website Development → `../images/ui ux and web/jpj.png`
2. E-Commerce Solutions → `../images/ui ux and web/it.png`
3. Custom Software & Systems → `../images/ui ux and web/it 2.png`
4. AI Interior Design → `../images/ai/ai interior design.png`
5. VR Real Estate Tours → `../images/VR-2.png`
6. 360° Virtual Tours → `../images/brosure/2.png`

---

## Expected Results After Fix

### 320px Mobile
- Single column cards
- Images visible with 4:3 aspect ratio
- Text readable, no overflow
- One service card per row

### 480px Large Phone
- Two column grid
- Cards slightly wider
- Images scale properly
- Better use of screen

### 768px Tablet
- Three column grid (Digital), two columns (Immersive)
- Professional spacing
- Images look sharp
- Proper content grouping

### 1440px Desktop
- Four columns (Digital world)
- Two columns (Immersive world, side-by-side)
- Full width utilization
- Premium presentation

---

## Verification Checklist

- [ ] All service cards show images
- [ ] Images have 4:3 aspect ratio (no stretching)
- [ ] Images have alt text
- [ ] Images use lazy loading
- [ ] Digital page content visible (not obscured by overlay)
- [ ] Responsive at 320px, 480px, 768px, 1024px, 1440px
- [ ] Hover states work (image zoom, link color change)
- [ ] Touch targets >44px on mobile
- [ ] No color contrast issues
- [ ] Keyboard navigation works (Tab through all cards)
- [ ] No console errors
- [ ] Page performance good (Lighthouse >80)

---

## Testing Commands

```bash
# Visual at different breakpoints
# In DevTools, set viewport to:
- 320×568 (iPhone SE)
- 480×800 (Android mobile)
- 768×1024 (iPad)
- 1440×900 (Desktop)

# Keyboard test:
1. Open page
2. Press Tab repeatedly
3. Verify focus outline visible on all interactive elements
4. Press Enter on cards — should navigate

# Accessibility test:
1. Right-click → Inspect
2. Search for <img> tags
3. Verify all have alt=""
4. Verify alt text is descriptive
```

---

## Common Issues & Solutions

| Issue | Cause | Fix |
|-------|-------|-----|
| Images don't appear | Wrong path or missing file | Check `images/` and `images/ui ux and web/` directories exist |
| Images stretched | Missing `aspect-ratio` or `object-fit` | Verify CSS has both rules |
| Content still hidden | Overlay still too opaque | Double-check opacity values changed correctly |
| Breakpoint not working | Wrong media query syntax | Use `@media (min-width: Xpx)` format |
| Cards too narrow on mobile | Grid columns wrong | Ensure 480px rule has `grid-template-columns: repeat(2, 1fr)` |
| Hover zoom too fast/slow | Wrong duration | Use `var(--sq-duration-slow)` for images |

