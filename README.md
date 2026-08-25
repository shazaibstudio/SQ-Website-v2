# SQ Interactive — Website v2

A premium digital innovation studio website built with semantic HTML, responsive CSS, and vanilla JavaScript. Dark theme with gold accents, optimized for all devices.

**Status:** ✅ Production Ready | 39 Pages | Single-Source-of-Truth Navbar

## Overview

SQ Interactive is a complete digital presence showcasing four capability worlds: **Digital**, **AI**, **Immersive**, and **Lab**. The site emphasizes clarity, premium aesthetics, mobile-first design, and maintainable architecture.

## Key Highlights

- **39 Complete Pages** — Homepage, 4 world pages, 26 service pages, portfolio, company pages
- **Single-Source Navbar** — Master `_navbar.html` injected into all pages; one change updates everything
- **No Code Duplication** — Navbar system eliminates 1000+ lines of redundant code
- **Production Ready** — Fully responsive, accessible, optimized, and deployed
- **Zero Dependencies** — Vanilla HTML, CSS, and JavaScript; GitHub Pages compatible

## Project Structure

```
├── _navbar.html              # Master navbar (single-source-of-truth)
├── index.html                # Homepage
├── css/
│   ├── tokens.css           # Design system (colors, typography, spacing)
│   ├── base.css             # Global styles and reset
│   ├── components.css       # Reusable components (nav, buttons, cards)
│   └── unified-nav.css      # Navbar styling (all pages)
├── js/
│   ├── main.js              # Reveal animations, scroll progress
│   ├── unified-nav.js       # Navbar behavior (all pages)
│   ├── analytics.js         # GA4 tracking
│   └── [page-specific JS]   # Other utilities
├── digital/                 # Digital world (6 service pages)
├── ai/                      # AI world (6 service pages)
├── immersive/               # Immersive world (8 service pages)
├── lab/                     # Lab world (6 service pages)
├── work/                    # Portfolio (18 projects)
├── about/                   # Company info
├── contact/                 # Contact page
└── [other pages]            # How We Work, Services, etc.
```

## Architecture

### Core Structure
- **`_navbar.html`** — Master navbar injected into all 39 pages (replaces duplicate code)
- **`index.html`** — Homepage with hero, hub (4 worlds), live proof, philosophy, CTA, footer
- **`css/tokens.css`** — Design system (colors, typography, spacing, shadows)
- **`css/base.css`** — Global styles, reset, typography scale, accessibility
- **`css/components.css`** — Reusable UI (buttons, cards, footer, floating CTAs)
- **`css/unified-nav.css`** — Navbar styling (applied to all pages)
- **`js/unified-nav.js`** — Navbar behavior (applied to all pages)
- **`js/main.js`** — Reveal animations and scroll progress
- **`js/analytics.js`** — GA4 tracking
- **`js/hub.js`** — Hub card interactions

### Navbar System (Single-Source-of-Truth)

**Problem Solved:** Eliminated 1000+ lines of duplicated navbar code across 39 pages.

**Solution:** Master `_navbar.html` file injected into all pages using automation scripts.

**How It Works:**
1. Edit `_navbar.html` (one place)
2. Run: `node inject-navbar-batch.js`
3. All 39 pages updated automatically ✅

**Files Involved:**
- `_navbar.html` — Master navbar markup
- `css/unified-nav.css` — Navbar styling (linked on all pages)
- `js/unified-nav.js` — Navbar behavior (loaded on all pages)
- Automation scripts: `inject-navbar-batch.js`, `inject-nav-css.js`, `inject-nav-js.js`

**Navbar Features:**
- Desktop nav: Home, Services (dropdown with 4 worlds + 26 services), Work, How We Work, About, Contact
- Mobile nav: All links + expandable Services menu
- Language toggles: EN/UR
- All links use absolute paths (`/`) for GitHub Pages compatibility

**See:** `NAVBAR-MAINTENANCE.md` for detailed maintenance workflow.

### Design System

**Colors**
- Background: `#0A0A0A` (deep), `#0D0D0D` (surface)
- Brand Gold: `#D4AF37` (primary), `#F1C40F` (light)
- Text: `#FFFFFF` (strong), `#F5F5F5` (default), `#A0A0A0` (secondary)

**Typography**
- Serif: Playfair Display (headings, numbers)
- Sans: Plus Jakarta Sans (body, UI)
- Scale: 12px–60px with fluid sizing via `clamp()`

**Spacing**
- 8px increments: `--sq-space-1` through `--sq-space-32`
- Responsive padding/margins using tokens

**Breakpoints**
- Mobile: 320px–479px
- Tablet: 480px–767px
- Desktop: 768px–1023px
- Wide: 1024px–1919px
- Ultra-wide: 1920px+

## Key Features

### Homepage Sections

**Hero**
- Full-viewport video background with overlay
- Responsive heading (1.75rem–5rem)
- Dual CTA buttons (stack on mobile)
- Location badge
- Scroll hint (hidden on mobile)

**Hub — Four Worlds**
- 4 navigation cards (Digital, AI, Immersive, Lab)
- Primary identifier: "01 — Digital" (gold, serif, prominent)
- Card image, subtitle, title (hidden on mobile), description (hidden on mobile)
- Action bar with arrow (hidden on mobile)
- Grid: 1 col mobile → 2 col tablet/desktop → 4 col ultra-wide
- Responsive padding: `var(--sq-space-5)` mobile → `var(--sq-space-8)` desktop

**Live Proof**
- 3 real websites (DesignLine Construction, Heaven Hotel, SQ Interactive)
- Live indicator (green dot), domain, category tags
- Grid: 1 col mobile → 2 col at 480px → 3 col at 768px

**Philosophy**
- Centered statement with gold emphasis
- Responsive font: 1rem mobile → 1.875rem desktop

**Final CTA**
- "Have a problem worth solving?" heading
- Dual action buttons
- Disclaimer text

**Footer**
- Brand info + contact links (phone, email, WhatsApp)
- Navigation (Explore, Company)
- Social icons with brand colors (Instagram, LinkedIn, Facebook, YouTube)
- Copyright

### Navigation
- Fixed header with logo, desktop links, mobile toggle
- Mobile menu slides down from nav
- Scroll-triggered background opacity increase
- Logo text hidden on screens ≤480px

### Floating Elements
- WhatsApp sticky button (bottom-left, green)
- Contact CTA button (bottom-right, gold)
- Both 44px touch targets on mobile, icon-only at ≤479px

### Accessibility
- Skip-to-content link
- ARIA labels on all interactive elements
- Focus states (2px gold outline)
- Semantic HTML (nav, main, section, h1–h6)
- Reduced motion support
- Color contrast meets WCAG AA

### Analytics & SEO
- GA4 tracking with event labels
- JSON-LD schemas (Organization, LocalBusiness)
- Open Graph meta tags
- Twitter Card meta tags
- Canonical URL
- Geo-targeting (Lahore, Pakistan)
- Favicon pack (16px–512px)

## Mobile Optimization

### Hero Section
- Height: 70vh max-height 600px (mobile) vs 85vh/900px (desktop)
- Heading: `clamp(1.75rem, 4.5vw, 2.5rem)` (mobile)
- Subheading: 0.9rem (mobile)
- CTA buttons: Stack vertically, full width on mobile
- Scroll hint: Hidden at 640px

### Hub Cards
- Padding: `var(--sq-space-5)` mobile → `var(--sq-space-6)` at 640px → `var(--sq-space-8)` at 1024px
- Number: `1.375rem–1.875rem` mobile → `1.75rem–2.25rem` desktop
- Title/description/action-label: Hidden on mobile, shown at 768px+
- Subtitle: `var(--sq-text-xs)` mobile → `var(--sq-text-sm)` at 768px+

### Live Proof Grid
- 1 column mobile → 2 columns at 480px → 3 columns at 768px

### Footer
- 1 column mobile → 2fr 1fr 1fr at 640px
- Social icons: 44px touch targets on mobile, 36px on desktop

### Navigation
- Padding: `var(--sq-space-4)` mobile → `var(--sq-space-6)` desktop
- Logo text "Interactive" hidden at ≤480px

### Floating Buttons
- Position: `var(--sq-space-4)` mobile → `var(--sq-space-6)` desktop
- 44px minimum touch targets

## Links & Navigation

**Hub Cards**
- Digital → `/digital/`
- AI → `/ai/`
- Immersive → `/immersive/`
- Lab → `/lab/`

**CTAs**
- Contact → `/contact/`
- Work → `/work/`

**Social**
- Instagram → https://www.instagram.com/sqinteractive
- LinkedIn → https://www.linkedin.com/company/sqinteractive
- Facebook → https://www.facebook.com/share/1A619NgVwh/
- YouTube → https://www.youtube.com/@SQINTERACTIVE

**Live Work**
- DesignLine Construction → https://designlineconstruction.com/
- Heaven Hotel → https://www.heavenhotel.com.pk/
- SQ Interactive → https://sqinteractive.com/

## Performance

- No external dependencies (vanilla JS)
- Optimized images with lazy loading
- CSS-only animations (no JS libraries)
- Preconnect to Google Fonts and Analytics
- DNS prefetch for third-party services
- Scroll progress bar (CSS-driven)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## File Size

- HTML: ~15KB
- CSS (combined): ~45KB
- JS (combined): ~8KB
- Total: ~68KB (before compression)

## Deployment

Hosted on GitHub Pages. All links are relative or absolute URLs. No build process required.

## Maintenance

### Updating the Navbar
To update navbar across all 39 pages:
```bash
# 1. Edit _navbar.html
# 2. Run injection script
node inject-navbar-batch.js

# 3. Commit changes
git add _navbar.html
git commit -m "Update navbar: [description]"
git push
```

See `NAVBAR-MAINTENANCE.md` for detailed workflows and troubleshooting.

### Updating Content
- Homepage sections: Edit `index.html` directly
- Service pages: Edit service-specific HTML files
- Styling: Update `css/tokens.css` for design tokens or page-specific CSS files
- Analytics: GA4 tracking configured in `js/analytics.js`

## Phase 2 Completion

**Status**: ✅ COMPLETE — Production Ready

### Completed Features

- ✅ **Navbar System** — Single-source-of-truth `_navbar.html` injected into all 39 pages
- ✅ **Portfolio Grid** (`/work/`) — 18 projects with filtering by world (Digital, Immersive, AI, Lab)
- ✅ **Service Pages** — 6 full-featured pages: Website Development, E-Commerce, Custom Software, VR Real Estate, 360° Tours, AI Interior Design
- ✅ **World Pages** — Enhanced `/digital/`, `/immersive/`, `/ai/`, `/lab/` with service cards and cross-linking
- ✅ **Core Pages** — `/about/` (founder story, vision), `/how-we-work/` (5-step process), `/contact/` (form & CTA)
- ✅ **Internal Linking** — Breadcrumbs, related projects, related services; World → Service → Project → Contact flow
- ✅ **SEO & Metadata** — Title, description, canonical, Open Graph, Twitter Card, JSON-LD structured data on all pages
- ✅ **GA4 Analytics** — Property ID `G-GYP19H93BR` configured site-wide with event tracking
- ✅ **Responsive Design** — 320px–1920px tested; all pages render correctly on mobile, tablet, desktop, wide
- ✅ **Accessibility** — WCAG AA: semantic HTML, focus states, alt text, keyboard navigation, skip link, reduced motion
- ✅ **Performance** — No external dependencies, CSS-only animations, image lazy loading, minimal JS

### Architecture

**Routes Working**
- `/` — Homepage (hero, hub, proof, philosophy, CTA, footer)
- `/work/` — Portfolio grid with filters
- `/services/` — Services overview
- `/digital/`, `/ai/`, `/immersive/`, `/lab/` — World pages
- `/digital/website-development/`, `/digital/e-commerce/`, `/digital/custom-software/` — Service detail pages
- `/immersive/vr-real-estate/`, `/immersive/360-tours/` — Service detail pages
- `/ai/ai-interior-design/` — Service detail page
- `/about/` — Company info and founder story
- `/how-we-work/` — Process and principles
- `/contact/` — Contact page

**Data Structure**
- `js/projects-data.js` — 18 verified projects (5 digital, 9 immersive, 2 AI, 1 lab, 1 experimental)
- `js/portfolio-grid.js` — Dynamic rendering and filtering
- `css/pages.css` — Consolidated component styles (breadcrumbs, service cards, process grids, related items)
