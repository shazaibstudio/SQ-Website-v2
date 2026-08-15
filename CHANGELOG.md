# Changelog

All notable changes to SQ Interactive website are documented here.

## [2.0.0] — Final Homepage Refinement & Mobile Optimization

### Added
- Comprehensive mobile optimization for 320px–430px screens
- Responsive breakpoints at 480px, 640px, 768px, 1024px, 1280px, 1920px
- Hub card hierarchy improvements with prominent number/name identifiers
- Instagram icon redesign (camera circle mark instead of square)
- Enhanced section heading hierarchy ("Choose your world" / "Four capabilities. One studio.")
- 44px minimum touch targets for all interactive elements
- Floating button positioning optimization for mobile
- Social icon touch target enhancement (44px on mobile)

### Changed
- **Hero Section**
  - Reduced height on mobile: 70vh max-height 600px (vs 85vh/900px desktop)
  - Heading: `clamp(1.75rem, 4.5vw, 2.5rem)` on mobile (was 2.75rem–5rem)
  - Subheading: 0.9rem on mobile (was 1rem–1.125rem)
  - CTA buttons: Stack vertically on mobile with full width
  - Scroll hint: Hidden at 640px

- **Hub Cards**
  - Reordered content: Number/name now appears first (primary identifier)
  - Padding: `var(--sq-space-5)` mobile → `var(--sq-space-6)` at 640px → `var(--sq-space-8)` at 1024px
  - Number sizing: `1.375rem–1.875rem` mobile → `1.5rem–2rem` at 640px → `1.75rem–2.25rem` at 1024px
  - Title: Hidden on mobile, shown at 768px+
  - Description: Hidden on mobile, shown at 768px+
  - Action label: Hidden on mobile, shown at 768px+
  - Subtitle: `var(--sq-text-xs)` mobile → `var(--sq-text-sm)` at 768px+
  - Grid: 1 col mobile → 2 col at 480px → 2 col desktop → 4 col at 1920px

- **Hub Section Heading**
  - Label color: Changed from `--sq-text-muted` to `--sq-gold`
  - Sublabel font-weight: 500 → 600 (bolder)
  - Sublabel sizing: `clamp(1.25rem, 2.2vw, 1.75rem)` with mobile optimization
  - Sublabel color: `--sq-text-secondary` → `--sq-text-strong`
  - Sublabel line-height: 1.2 (improved readability)

- **Live Proof Grid**
  - 1 column mobile → 2 columns at 480px → 3 columns at 768px

- **Philosophy Section**
  - Statement: `1rem` on mobile (was 1.25rem–1.875rem)

- **Final CTA**
  - Heading: `1.375rem` on mobile (was 1.75rem–2.25rem)
  - Subheading: `var(--sq-text-base)` on mobile (was var(--sq-text-lg))

- **Navigation**
  - Padding: `var(--sq-space-4)` mobile → `var(--sq-space-6)` desktop
  - Logo text "Interactive": Hidden at ≤480px

- **Footer**
  - Grid: 1 column mobile → 2fr 1fr 1fr at 640px
  - Social icons: 44px touch targets on mobile, 36px on desktop
  - Social icon gap: `var(--sq-space-3)` mobile → `var(--sq-space-4)` desktop

- **Floating Buttons**
  - Position: `var(--sq-space-4)` mobile → `var(--sq-space-6)` desktop
  - WhatsApp & Contact: 44px minimum touch targets

- **Social Icons**
  - Instagram: Redesigned from square outline to camera circle mark
  - All icons: Brand colors visible at rest (not just on hover)
  - Instagram: #E4405F (pink)
  - LinkedIn: #0A66C2 (blue)
  - Facebook: #1877F2 (blue)
  - YouTube: #FF0000 (red)

### Fixed
- No horizontal overflow on any screen size
- Text wrapping issues on mobile
- CTA button stacking on small screens
- Touch target sizes below 44px
- Logo text overflow on very small screens
- Social icon sizing inconsistency

### Preserved
- Four-world hub architecture
- All navigation links (digital/, ai/, immersive/, lab/, contact/, work/)
- Live work section with 3 real websites
- Gradient atmospheres and visual effects
- GA4 analytics and tracking
- SEO meta tags, JSON-LD schemas, OG tags
- Favicon pack references
- Accessibility features (skip link, ARIA labels, focus states)
- GitHub Pages compatibility
- Design system tokens (colors, typography, spacing)

---

## [1.5.0] — Social Icons Brand Colors & Hub Card Visual Upgrade

### Added
- Brand color social icons in footer (Instagram, LinkedIn, Facebook, YouTube)
- Hover states with gradient (Instagram) and solid colors (others)

### Changed
- Hub card numbers: Increased prominence with larger sizing and gold color
- Hub card numbers: Changed from sans-serif to serif font (Playfair Display)
- Hub card numbers: Font size `clamp(2.5rem, 5vw, 3.5rem)` → `clamp(1.75rem, 3vw, 2.25rem)` (adjusted for better proportions)
- Hub card numbers: Color changed to `--sq-gold`
- Hub card numbers: Hover state to `--sq-gold-light`

### Fixed
- Social icon visibility (brand colors now visible at rest, not just hover)
- Hub card number proportionality

---

## [1.4.0] — Hub Section Heading Hierarchy Improvement

### Changed
- "Choose your world" label: Improved visual prominence
- "Four capabilities. One studio." sublabel: Enhanced typography and spacing
- Better visual hierarchy between label and sublabel

---

## [1.3.0] — Live Proof Section Enhancement

### Added
- Live work section with 3 real websites
- Green live indicator (dot with glow)
- Project name, domain, and category tags
- External links to live sites

### Changed
- Proof cards: Richer layout with metadata
- Grid: 1 column mobile → 3 columns desktop

---

## [1.2.0] — Homepage Content Streamlining

### Removed
- Selected Work section
- Demo Video section
- Before/After slider
- World Nav Strip

### Changed
- Homepage repositioned as pure navigation/orientation portal
- Focus on Hero → Hub → Proof → Philosophy → CTA flow

---

## [1.1.0] — Hub Cards Grid Layout Optimization

### Changed
- Hub grid: 4 columns desktop → 2 columns (1024px–1920px) for prominence
- Hub grid: 4 columns only on ultra-wide (1920px+)
- Cards made wider and more readable

---

## [1.0.0] — Initial Homepage Launch

### Added
- Hero section with video background
- Four-world hub navigation (Digital, AI, Immersive, Lab)
- Philosophy statement
- Final CTA section
- Footer with contact info and social links
- Navigation with mobile menu
- Floating WhatsApp and contact buttons
- GA4 analytics
- SEO meta tags and JSON-LD schemas
- Favicon pack
- Accessibility features
- Responsive design (mobile-first)
- Dark theme with gold accents
- Design system (tokens, base styles, components)

---

## Version History

| Version | Date | Status |
|---------|------|--------|
| 2.0.0 | 2025 | Current |
| 1.5.0 | 2025 | Released |
| 1.4.0 | 2025 | Released |
| 1.3.0 | 2025 | Released |
| 1.2.0 | 2025 | Released |
| 1.1.0 | 2025 | Released |
| 1.0.0 | 2025 | Released |

---

## Breaking Changes

None. All changes are backward compatible.

---

## Known Issues

None currently.

---

## Future Roadmap

- [ ] World-specific pages (digital/, ai/, immersive/, lab/)
- [ ] Work/portfolio page (/work/)
- [ ] How We Work page (/how-we-work/)
- [ ] About page (/about/)
- [ ] Contact form page (/contact/)
- [ ] Blog/resources section
- [ ] Dark/light mode toggle
- [ ] Internationalization (Urdu support)
- [ ] Performance optimization (image optimization, lazy loading)
- [ ] Advanced analytics (heatmaps, session recording)
