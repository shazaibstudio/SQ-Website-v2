# SQ Interactive — Project Structure & File Organization

## Directory Tree

```
SQ-Website-v2/
├── .git/                          # Git repository
├── .gitattributes                 # Git line ending configuration
├── .kiro/
│   └── steering/                  # Steering guides (this context)
│       ├── product.md            # Product overview
│       ├── tech.md               # Tech stack & build system
│       └── structure.md          # This file
├── .vscode/                       # VS Code settings
│
├── index.html                     # HOMEPAGE (main entry point)
├── index v1.html                  # Archive version (old)
│
├── css/                           # Stylesheets
│   ├── tokens.css                # Design system (colors, typography, spacing) — MASTER
│   ├── base.css                  # Global reset, typography, accessibility
│   ├── components.css            # Reusable UI components
│   ├── home.css                  # Homepage styles
│   ├── digital.css               # Digital world page styles
│   ├── pages.css                 # Other page styles (about, contact, etc.)
│   ├── mobile-fixes.css          # Mobile-specific overrides
│   └── [other CSS files]         # Page-specific or utility styles
│
├── js/                           # JavaScript
│   ├── main.js                   # Reveal animations, scroll progress
│   ├── nav.js                    # Navigation toggle, scroll behavior
│   ├── hub.js                    # Hub card interactions
│   ├── analytics.js              # GA4 tracking
│   ├── tracking.js               # Additional event tracking
│   ├── redirects.js              # URL redirects/routing
│   └── sq-interactive.js         # Studio-specific interactions
│
├── images/                       # All images (~70+ files)
│   ├── 1.png, 2.png, etc.       # Product/portfolio images
│   ├── ai/                       # AI world images
│   │   ├── ai agent job seeker.png
│   │   └── ai interior design.png
│   ├── brosure/                 # Brochure images
│   │   ├── 1.png
│   │   └── 2.png
│   ├── AI.png, AI 2.png         # AI section images
│   ├── VR-2.png                 # Immersive/VR images
│   ├── no-background.png        # Logo/mark
│   ├── sq web.png               # Digital world image
│   ├── r&d sample.png           # Lab world image
│   ├── [portfolio images]       # Before/after, builds, renders, etc.
│   ├── [video thumbnails]       # Poster images for videos
│   └── favicon.ico              # Favicon
│
├── videos/                       # Video files
│   ├── 3.mp4                    # Hero section video (main)
│   └── [other videos]           # Background or featured videos
│
├── SQ_Interactive_Favicon_Pack/  # Favicon package
│   ├── favicon.ico              # Base favicon
│   ├── favicon-16x16.png        # 16×16
│   ├── favicon-32x32.png        # 32×32
│   ├── favicon-48x48.png        # 48×48
│   ├── favicon-96x96.png        # 96×96
│   ├── favicon-128x128.png      # 128×128
│   ├── favicon-180x180.png      # Apple touch icon
│   ├── favicon-192x192.png      # Android Chrome
│   ├── favicon-256x256.png      # 256×256
│   ├── favicon-512x512.png      # 512×512
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── apple-touch-icon.png
│
├── about/                        # ABOUT PAGE (future)
│   └── index.html               # About page (stub)
│
├── ai/                          # AI WORLD PAGE (future)
│   └── index.html               # AI world page (stub)
│
├── contact/                     # CONTACT PAGE (future)
│   └── index.html               # Contact page (stub)
│
├── digital/                     # DIGITAL WORLD PAGE
│   ├── index.html               # Digital world page
│   ├── digital-index.html       # Alternative/archive version
│
├── how-we-work/                 # HOW WE WORK PAGE (future)
│   └── index.html               # How we work page (stub)
│
├── immersive/                   # IMMERSIVE WORLD PAGE (future)
│   └── index.html               # Immersive world page (stub)
│
├── lab/                         # LAB WORLD PAGE (future)
│   └── index.html               # Lab world page (stub)
│
├── README.md                    # Project documentation
├── DESIGN_STANDARD.md           # Design standard & guidelines
├── CHANGELOG.md                 # Version history and changes
└── [config files]               # (if any: .gitignore, netlify.toml, etc.)
```

## Key Files & Purpose

### HTML Entry Points

| File | Purpose | Status |
|------|---------|--------|
| `index.html` | **Homepage** — Primary entry point, hero, hub, proof, philosophy, CTA | ✅ Live |
| `digital/index.html` | **Digital World** — Web, e-commerce, software | ✅ Live |
| `ai/index.html` | **AI World** — AI, automation, workflows | 🚧 Stub |
| `immersive/index.html` | **Immersive World** — VR, AR, 3D | 🚧 Stub |
| `lab/index.html` | **Lab World** — R&D, experiments | 🚧 Stub |
| `about/index.html` | **About Page** — Studio info, team, history | 🚧 Stub |
| `contact/index.html` | **Contact Page** — Contact form, info | 🚧 Stub |
| `how-we-work/index.html` | **How We Work** — Process, methodology | 🚧 Stub |

### CSS Files

| File | Purpose | Scope |
|------|---------|-------|
| `tokens.css` | **Master design system** — All colors, typography, spacing, shadows | Global |
| `base.css` | **Global baseline** — Reset, typography scale, accessibility, breakpoints | Global |
| `components.css` | **Reusable components** — Nav, buttons, cards, footer, floating buttons | Global |
| `home.css` | **Homepage styles** — Hero, hub, proof, philosophy, CTA sections | Homepage only |
| `digital.css` | **Digital world** — Styles for digital/index.html | Digital page only |
| `pages.css` | **Other pages** — About, contact, how-we-work, etc. | Multi-page |
| `mobile-fixes.css` | **Mobile overrides** — Mobile-specific tweaks and fixes | Global (mobile) |
| `steam-bg-fallback.css` | **Fallback styles** — For browsers without certain CSS support | Global |

### JavaScript Files

| File | Purpose | Scope |
|------|---------|-------|
| `main.js` | **Reveal animations** — Fade-in + slide-up, scroll progress bar | Homepage + others |
| `nav.js` | **Navigation control** — Mobile menu toggle, scroll-triggered nav | All pages |
| `hub.js` | **Hub interactions** — Hub card hover/click, world tracking | Homepage + hub pages |
| `analytics.js` | **GA4 tracking** — Google Analytics initialization | All pages |
| `tracking.js` | **Event tracking** — Custom event firing, data layer | All pages |
| `redirects.js` | **URL routing** — Redirect logic for old URLs | Global |
| `sq-interactive.js` | **Studio-specific** — Custom interactions, animations | All pages |

### Assets

| Folder | Content | Notes |
|--------|---------|-------|
| `images/` | ~70 image files | Portfolio, product, UI imagery |
| `videos/` | MP4 files | Hero video (3.mp4), background videos |
| `SQ_Interactive_Favicon_Pack/` | 15+ favicon files | All sizes from 16×16 to 512×512 |

### Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview, architecture, features, deployment |
| `DESIGN_STANDARD.md` | Visual & UX standard for all pages |
| `CHANGELOG.md` | Version history, features added/changed/fixed |
| `.kiro/steering/` | AI steering guides (product, tech, structure) |

## Naming Conventions

### CSS Classes (BEM)
- **Block**: `.sq-[component-name]`
  - Example: `.sq-hub`, `.sq-nav`, `.sq-button`
- **Element**: `.sq-[component]__[element]`
  - Example: `.sq-hub__grid`, `.sq-nav__logo`
- **Modifier**: `.sq-[component]--[modifier]`
  - Example: `.sq-btn--primary`, `.sq-btn--secondary`
- **Variant**: `.sq-[component]--[variant]`
  - Example: `.sq-hub-card--digital`, `.sq-hub-card--ai`

### HTML IDs
- Semantic: `#main`, `#hero-heading`, `#proof-heading`
- Functional: `#sq-mobile-nav`, `#contact`, `#sq-year`
- Avoid unless necessary for JavaScript or anchor links

### Data Attributes
- `data-reveal` — Elements that animate on scroll
- `data-cta` — CTA tracking identifier (e.g., `data-cta="hero_primary"`)
- `data-hub-world` — Which world the card belongs to (e.g., `data-hub-world="digital"`)

### Image Naming
- Descriptive, lowercase, hyphens: `hero-background.png`, `ai-agent-job-seeker.png`
- Portfolio images: `[client-name]-[page/section].png`
- Product screenshots: `sq-[product]-[state].png` (before.png, after.png)

### Variable Naming (CSS)
- Tokens: `--sq-[category]-[property]`
  - Example: `--sq-gold`, `--sq-text-strong`, `--sq-space-8`
- Local: `--[component]-[property]`
  - Example: `--hero-height`, `--nav-padding`

## Page Routing

### Internal Links
- Relative paths: `href="digital/"`, `href="contact/"`
- Absolute paths: `href="/"`, `href="/about/"`
- Anchors: `href="#contact"`, `href="#hero"`

### External Links
- Open in new tab: `target="_blank" rel="noopener noreferrer"`
- Examples: Client websites, social media, third-party services

### Nav Structure
```
Header
├── Logo (/)
├── Desktop Nav
│   ├── Work (/work/)
│   ├── How We Work (/how-we-work/)
│   └── About (/about/)
└── Mobile Menu (hamburger)
    ├── Work (/work/)
    ├── How We Work (/how-we-work/)
    └── About (/about/)

Hub Cards
├── 01 — Digital (/digital/)
├── 02 — AI (/ai/)
├── 03 — Immersive (/immersive/)
└── 04 — Lab (/lab/)

Floating Buttons
├── Contact (right-bottom, /contact/)
└── WhatsApp (right-bottom, messaging link)

Footer
├── Explore (world links)
│   ├── Digital (/digital/)
│   ├── AI (/ai/)
│   ├── Immersive (/immersive/)
│   └── Lab (/lab/)
├── Company (info links)
│   ├── Work (/work/)
│   ├── How We Work (/how-we-work/)
│   ├── About (/about/)
│   └── Contact (/contact/)
└── Social (external)
    ├── Instagram
    ├── LinkedIn
    ├── Facebook
    └── YouTube
```

## Future Pages

These pages are stubbed with basic structure but need full implementation:

- **`/work/`** — Portfolio page (all projects)
- **`/about/`** — About the studio, team, mission
- **`/contact/`** — Contact form and information
- **`/how-we-work/`** — Our process and methodology
- **`/ai/`** — AI world landing page
- **`/immersive/`** — Immersive world landing page
- **`/lab/`** — Lab world landing page

## Git & Versioning

### Branch Strategy
- `main` — Production-ready, deployed to GitHub Pages
- `feature/*` — Feature branches, reviewed before merge
- `bugfix/*` — Bug fixes, reviewed before merge

### File Tracking
- HTML/CSS/JS: Tracked (source code)
- Images: Tracked (essential to site)
- `/images/` folder: Should be optimized before commit
- `.gitignore`: Excludes node_modules, build artifacts, OS files

### Commit Message Format
- Reference CHANGELOG.md version
- Descriptive title (50 chars max)
- Explain what changed and why (if complex)
- Example: `v2.1.0: Add mobile optimization for 320px–430px screens`

## Performance Considerations

### What NOT to Add
- ❌ Large unoptimized images (use compression)
- ❌ Multiple large video files (use MP4, lazy load)
- ❌ Heavy JavaScript libraries (vanilla only)
- ❌ Render-blocking CSS (inline critical styles)
- ❌ Synchronous third-party scripts (async/defer)

### What TO Do
- ✅ Optimize images (PNG, JPG < 100KB each)
- ✅ Use lazy loading for images/videos
- ✅ Minimize CSS/JS files
- ✅ Preload critical fonts
- ✅ Use relative links (faster navigation)

## Common Edits & Where to Make Them

| Change | File(s) |
|--------|---------|
| Add/modify color | `css/tokens.css` (then propagate) |
| Change font size | `css/tokens.css` → `--sq-text-*` |
| Update hero text | `index.html` → `.sq-hero__heading` |
| Add hub card | `index.html` → `.sq-hub__grid` + new world page |
| Update navigation | `index.html` → `.sq-nav__links` |
| Change footer links | `index.html` → `.sq-footer__grid` |
| Add animation | `js/main.js` or page-specific CSS |
| Modify mobile breakpoint | `css/base.css` → media queries |
| Update GA4 tracking | `js/analytics.js` + `data-cta` attributes |
| Add new world page | Create `/world-name/index.html` + `css/world-name.css` |

## Accessibility Checklist

- [ ] All images have descriptive alt text (or alt="" + aria-hidden)
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states visible (gold outline)
- [ ] Color contrast ≥4.5:1
- [ ] Touch targets ≥44×44px
- [ ] Semantic HTML (nav, main, section, headings)
- [ ] ARIA labels on buttons and controls
- [ ] No automatic audio/video with sound
- [ ] Skip-to-content link present
- [ ] Reduced motion support (@prefers-reduced-motion)
