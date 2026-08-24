# Responsive Layout Reference — Digital & Services Pages

## Service Card Structure

### Current HTML Structure
```html
<a href="..." class="sq-service-card" data-cta="...">
  <!-- Image container — MISSING! -->
  <div class="sq-service-card__img">  <!-- ADD THIS -->
    <img src="..." alt="..." loading="lazy">  <!-- ADD THIS -->
  </div>
  
  <h3 class="sq-service-card__title">Title</h3>
  <p class="sq-service-card__desc">Description</p>
  
  <ul class="sq-service-card__features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  
  <span class="sq-service-card__link">Explore Service →</span>
</a>
```

### Fixed Structure (with image)
```
┌─────────────────────────────┐
│   IMAGE (4:3 aspect)        │
│   (Hover: zoom 1.05x)       │
├─────────────────────────────┤
│ Website Development         │  ← Title
│                             │
│ Fast, responsive websites   │  ← Description
│ built for conversion...     │
│                             │
│ ▪ Responsive design         │  ← Features (bullets)
│ ▪ UI/UX implementation      │
│ ▪ Performance optimization  │
│ ▪ SEO-ready structure       │
│ ▪ Deployment & support      │
│                             │
│ Explore Service →           │  ← Link (gold, hover lighter)
└─────────────────────────────┘
```

---

## Layout at Each Breakpoint

### 320px (Mobile — Small Phones)

```
┌─────────────────────┐
│   CARD 1            │
│  [Image 4:3]        │
│   Title             │
│   Description       │
│   • Feature 1       │
│   • Feature 2       │
│   • Feature 3       │
│   Link →            │
└─────────────────────┘

┌─────────────────────┐
│   CARD 2            │
│  [Image 4:3]        │
│   Title             │
│   ...               │
└─────────────────────┘

Columns: 1
Gap: 12px (var(--sq-space-3))
Width: 100% - 24px padding
```

**Grid CSS:**
```css
@media (max-width: 320px) {
  .sq-services__cards {
    grid-template-columns: 1fr;
    gap: var(--sq-space-3);
  }
}
```

---

### 480px (Large Phones)

```
┌──────────────┐  ┌──────────────┐
│   CARD 1     │  │   CARD 2     │
│ [Image 4:3]  │  │ [Image 4:3]  │
│   Title      │  │   Title      │
│   Desc       │  │   Desc       │
│   • Feature  │  │   • Feature  │
│   • Feature  │  │   • Feature  │
│   Link →     │  │   Link →     │
└──────────────┘  └──────────────┘

┌──────────────┐
│   CARD 3     │
│ [Image 4:3]  │
│   Title      │
│   ...        │
└──────────────┘

Columns: 2
Gap: 16px (var(--sq-space-4))
Card width: calc(50% - 8px)
```

**Grid CSS:**
```css
@media (min-width: 480px) {
  .sq-services__cards {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sq-space-4);
  }
}
```

---

### 768px (Tablets)

**Digital Services (3 cards):**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Website    │  │  E-Commerce  │  │   Custom     │
│ Development  │  │  Solutions   │  │   Software   │
│              │  │              │  │              │
│ [Image 4:3]  │  │ [Image 4:3]  │  │ [Image 4:3]  │
│              │  │              │  │              │
│   Title      │  │   Title      │  │   Title      │
│   Desc       │  │   Desc       │  │   Desc       │
│   Features   │  │   Features   │  │   Features   │
│   Link →     │  │   Link →     │  │   Link →     │
└──────────────┘  └──────────────┘  └──────────────┘

Columns: 3
Gap: 20px (var(--sq-space-5))
Card width: calc(33.33% - 13.33px)
```

**Immersive Services (2 cards):**
```
┌──────────────┐  ┌──────────────┐
│   VR Real    │  │   360° Tours │
│   Estate     │  │              │
│              │  │              │
│ [Image 4:3]  │  │ [Image 4:3]  │
│              │  │              │
│   Title      │  │   Title      │
│   Desc       │  │   Desc       │
│   Features   │  │   Features   │
│   Link →     │  │   Link →     │
└──────────────┘  └──────────────┘

Columns: 2
Gap: 20px (var(--sq-space-5))
Card width: calc(50% - 10px)
```

**Grid CSS:**
```css
@media (min-width: 768px) {
  .sq-services__cards {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .sq-services__world:nth-of-type(3) .sq-services__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

### 1024px (Large Tablets / Small Desktops)

Same as 768px (no change) — layout maintained

```
Digital: [3-column]
AI: [1-column or 2-column]
Immersive: [2-column]
Lab: [1-column text]
```

---

### 1440px (Desktops / Wide Screens)

**Digital Services (4 cards — MAXIMUM):**
```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ Website  │  │E-Commerce│  │ Custom   │  │   UI/UX  │
│ Develop. │  │Solutions │  │ Software │  │ & Digital│
│          │  │          │  │          │  │          │
│[Image 4:3│  │[Image 4:3│  │[Image 4:3│  │[Image 4:3│
│          │  │          │  │          │  │          │
│ Title    │  │ Title    │  │ Title    │  │ Title    │
│ Desc     │  │ Desc     │  │ Desc     │  │ Desc     │
│ Features │  │ Features │  │ Features │  │ Features │
│ Link →   │  │ Link →   │  │ Link →   │  │ Link →   │
└──────────┘  └──────────┘  └──────────┘  └──────────┘

Columns: 4
Gap: 24px (var(--sq-space-6))
Card width: calc(25% - 18px)
```

**Immersive Services (2 cards — SIDE BY SIDE):**
```
┌─────────────────────────┐  ┌─────────────────────────┐
│   VR Real Estate Tours  │  │   360° Virtual Tours    │
│                         │  │                         │
│       [Image 4:3]       │  │       [Image 4:3]       │
│                         │  │                         │
│   Title                 │  │   Title                 │
│   Description...        │  │   Description...        │
│   • Feature 1           │  │   • Feature 1           │
│   • Feature 2           │  │   • Feature 2           │
│   Link →                │  │   Link →                │
└─────────────────────────┘  └─────────────────────────┘

Columns: 2
Gap: 24px (var(--sq-space-6))
Card width: calc(50% - 12px)
```

**Grid CSS:**
```css
@media (min-width: 1440px) {
  .sq-services__world:nth-of-type(1) .sq-services__cards {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .sq-services__world:nth-of-type(3) .sq-services__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Digital Page — Capability Tiles Layout

### Current Issue
- 4 tiles in a row but overlay may obscure them
- Hero section overlap affects visibility below the fold

### Fixed Layout

#### 320px
```
┌────────────┐
│ Websites   │
│ [Image]    │
│ Title      │
│ Desc       │
└────────────┘

┌────────────┐
│ E-Commerce │
│ [Image]    │
│ Title      │
│ Desc       │
└────────────┘

Columns: 1
```

#### 480px
```
┌──────────┐  ┌──────────┐
│ Websites │  │E-Commerce│
│ [Image]  │  │ [Image]  │
│ Title    │  │ Title    │
│ Desc     │  │ Desc     │
└──────────┘  └──────────┘

┌──────────┐  ┌──────────┐
│ Software │  │  UI/UX   │
│ [Image]  │  │ [Image]  │
│ Title    │  │ Title    │
│ Desc     │  │ Desc     │
└──────────┘  └──────────┘

Columns: 2
```

#### 768px
```
┌────────┐  ┌────────┐  ┌────────┐
│Website │  │E-Comm. │  │Software│
│[Image] │  │[Image] │  │[Image] │
│Title   │  │Title   │  │Title   │
│Desc    │  │Desc    │  │Desc    │
└────────┘  └────────┘  └────────┘

┌────────┐
│ UI/UX  │
│[Image] │
│Title   │
│Desc    │
└────────┘

Columns: 3 (1st 3 items), then wraps
```

#### 1440px
```
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│Website │  │E-Comm. │  │Software│  │ UI/UX  │
│[Image] │  │[Image] │  │[Image] │  │[Image] │
│Title   │  │Title   │  │Title   │  │Title   │
│Desc    │  │Desc    │  │Desc    │  │Desc    │
└────────┘  └────────┘  └────────┘  └────────┘

Columns: 4
```

---

## Image Sizing — Aspect Ratios

### Service Cards
```
Aspect Ratio: 4:3 (1.333)

Breakpoint  Card Width    Image Width   Image Height
320px       280px         280px         210px
480px       224px         224px         168px
768px       251px         251px         188px
1024px      251px         251px         188px
1440px      330px         330px         248px
```

### Digital Capability Tiles
```
Aspect Ratio: 4:3 (1.333)

Breakpoint  Tile Width    Image Width   Image Height
320px       288px         288px         216px
480px       200px         200px         150px
768px       217px         217px         163px
1440px       328px         328px         246px
```

---

## Hover & Interactive States

### Service Card Hover (Desktop Only)

```
NORMAL STATE:
┌────────────────────────┐
│  Image (opacity 1)     │
│  Link (gold color)     │
└────────────────────────┘

HOVER STATE:
┌────────────────────────┐
│  Image (zoom 1.05x)    │ ← transform: scale(1.05)
│  Link (gold-light)     │ ← color: var(--sq-gold-light)
│  Card (lifted -4px)    │ ← transform: translateY(-4px)
│  Border (gold border)  │ ← border-color: var(--sq-gold-border)
│  Background (lighter)  │ ← background: rgba(212,175,55,0.05)
└────────────────────────┘

Duration: var(--sq-duration-base) = 0.3s
Easing: var(--sq-ease) = cubic-bezier(0.4, 0, 0.2, 1)
```

### Mobile / Touch (No Hover)
```
- No image zoom
- No transform lift
- Cards still have full styling
- Links still clickable/tappable
- Touch target: 44×44px minimum ✓
```

---

## Fixed Digital Page Issues

### Hero Overlay Before/After

**BEFORE (Too Opaque):**
```
Gradient: rgba(10,10,10,0.45) → 0.65 → 0.92
Result: Hero content darkened, content below obscured
```

**AFTER (Proper Opacity):**
```
Gradient: rgba(10,10,10,0.35) → 0.55 → 0.82
Result: Hero readable, content below visible
```

### Hero Video Before/After

**BEFORE:**
```
.dg-hero__video opacity: 0.45
Result: Video too dominant, background visible but muted
```

**AFTER:**
```
.dg-hero__video opacity: 0.35
Result: Subtle video background, content stands out
```

---

## Grid Auto-Fit vs Explicit Columns

### Current (services.css line ~90):
```css
.sq-services__cards {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```
**Issue**: Responsive but unpredictable layout

### Fixed (with explicit breakpoints):
```css
.sq-services__cards {
  grid-template-columns: 1fr; /* 320px default */
}

@media (min-width: 480px) {
  .sq-services__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .sq-services__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .sq-services__world:nth-of-type(1) .sq-services__cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
```
**Benefit**: Predictable layout, full control, better UX

---

## Summary of Responsive Strategy

| Breakpoint | Digital Cards | AI Cards | Immersive Cards | Philosophy |
|------------|---------------|----------|-----------------|------------|
| 320px      | 1 column      | 1 column | 1 column        | Mobile first, full width |
| 480px      | 2 columns     | 1 column | 2 columns       | Better phone utilization |
| 768px      | 3 columns     | 1 column | 2 columns       | Tablet optimization |
| 1024px     | 3 columns     | 2 columns| 2 columns       | Small desktop |
| 1440px     | 4 columns     | 3 columns| 2 columns       | Wide desktop, max utilization |

**Key Principle**: Show more columns only when viewport allows comfortable card sizes (never cramped).

