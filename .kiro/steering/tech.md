# SQ Interactive — Tech Stack & Build System

## Stack Overview

This is a **static HTML/CSS/JS website** with no build process, framework, or dependencies. Optimized for GitHub Pages hosting.

| Layer | Technology |
|-------|-----------|
| **HTML** | Semantic HTML5, no templating |
| **CSS** | Vanilla CSS3 with CSS variables (tokens), responsive design |
| **JS** | Vanilla JavaScript (ES6+), no libraries or frameworks |
| **Fonts** | Google Fonts (Playfair Display, Plus Jakarta Sans) |
| **Analytics** | Google Analytics 4 (GA4) |
| **Hosting** | GitHub Pages |

## Project Structure

```
├── index.html              # Homepage (main entry point)
├── css/
│   ├── tokens.css         # Design system (colors, typography, spacing)
│   ├── base.css           # Global reset, base styles, typography scale
│   ├── components.css     # Reusable UI components (nav, buttons, footer)
│   ├── home.css           # Homepage-specific styles
│   ├── digital.css        # Digital world page styles
│   └── [other page styles]
├── js/
│   ├── main.js            # Reveal animations, scroll progress
│   ├── nav.js             # Mobile menu toggle, scroll behavior
│   ├── hub.js             # Hub card interactions
│   ├── analytics.js       # GA4 tracking
│   └── [other utilities]
├── images/                # All images (PNG, JPG, WebP)
├── videos/                # Video files (MP4)
├── SQ_Interactive_Favicon_Pack/  # Favicon files
└── [other world pages]    # digital/, ai/, immersive/, lab/, contact/, etc.
```

## CSS Architecture

### Design Tokens (tokens.css)
- **Colors**: Backgrounds, brand gold, text, borders, gradients
- **Typography**: Font families, size scale (12px–60px), line heights
- **Spacing**: 8px increments (--sq-space-1 through --sq-space-32)
- **Border Radius**: Small to full (4px–9999px)
- **Transitions**: Duration and easing functions
- **Shadows**: Subtle to gold glow

### Global Styles (base.css)
- CSS reset and normalization
- Typography scale and hierarchy
- Root breakpoints and responsive utilities
- Accessibility baseline (skip link, focus states, reduced motion)

### Components (components.css)
- Navigation (.sq-nav, .sq-nav__*)
- Buttons (.sq-btn with variants)
- Cards (.sq-hub-card, .sq-proof-card)
- Footer (.sq-footer and children)
- Floating buttons (.sq-wa-sticky, .sq-cta-sticky)

### Page Styles (home.css, digital.css, etc.)
- Hero section (.sq-hero)
- Hub section (.sq-hub, .sq-hub__grid)
- Proof section (.sq-proof)
- Philosophy section (.sq-philosophy)
- CTA section (.sq-cta)
- Page-specific overrides

## JavaScript Architecture

### main.js
- **Reveal animations**: Fade-in + slide-up on scroll
- **Scroll progress bar**: CSS-driven progress indicator
- **Intersection Observer**: Trigger reveal animations at viewport entry

### nav.js
- **Mobile menu toggle**: Open/close on hamburger click
- **Scroll behavior**: Add background opacity on scroll
- **Logo text hiding**: Hide "Interactive" text at ≤480px

### hub.js
- **Hub card interactions**: Hover effects, click handlers
- **Data attributes**: Track which world is selected (data-hub-world)
- **Event delegation**: Centralized card event handling

### analytics.js
- **GA4 initialization**: Google Tag Manager script
- **Event tracking**: CTA clicks, world navigation
- **Data layer**: Custom event attributes (data-cta)

## Breakpoints

Mobile-first approach with these key breakpoints:

```css
320px   /* Default (small phones) */
480px   /* Large phones */
640px   /* Small tablets */
768px   /* Tablets & desktops */
1024px  /* Wide desktops */
1280px  /* Wider desktops */
1920px  /* Ultra-wide (4 columns) */
```

Media queries use `min-width` (mobile-first) for progressive enhancement.

## Performance Optimization

### Strategy
- No external dependencies (vanilla JS only)
- CSS-only animations (no JS animation libraries)
- Lazy loading for images (`loading="lazy"`)
- Preconnect to Google Fonts and Analytics
- DNS prefetch for third-party services
- Asset preloading for critical resources

### File Sizes (Uncompressed)
- HTML: ~15KB
- CSS combined: ~45KB
- JS combined: ~8KB
- **Total: ~68KB** (before gzip compression)

### Best Practices
- Minimize reflow/repaint with CSS transforms
- Avoid animation jank with `transform` and `opacity`
- Batch DOM updates
- Throttle scroll listeners

## Deployment

### GitHub Pages
- No build step required
- Static files pushed directly to repo
- GitHub automatically serves from root
- All links are relative or absolute URLs

### DNS & Redirect
- Primary domain: sqinteractive.com
- Hosted via GitHub Pages with custom domain
- All routes are direct HTML files (no routing layer)

### Version Control
- Main branch: Production-ready code
- Feature branches: Development (before merge)
- Commit messages: Descriptive (reference CHANGELOG.md)
- No auto-deploy; manual push to main triggers GitHub Pages rebuild

## Development Workflow

### Local Testing
```bash
# Option 1: Live server extension (VS Code)
# Open index.html with Live Server

# Option 2: Python HTTP server (or similar)
python -m http.server 8000
# Visit http://localhost:8000

# Option 3: Node.js http-server (if available)
npx http-server
```

### No Build Step
- Edit HTML/CSS/JS directly
- Browser reload to see changes
- No compilation, bundling, or transpilation needed
- Use `.gitignore` for node_modules (if any tools added later)

### CSS Methodology
- **BEM naming**: `.sq-[component]__[element]--[modifier]`
- Example: `.sq-hub-card__top--active`
- Single responsibility: One class per purpose
- No nested selectors in global CSS

### JavaScript Style
- ES6+ (const/let, arrow functions, template literals)
- Vanilla DOM manipulation (no jQuery)
- Event delegation for dynamic content
- Data attributes for configuration (`data-reveal`, `data-cta`, `data-hub-world`)

## SEO & Meta Tags

### Required on All Pages
- Meta description (120–160 characters)
- Canonical URL
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- JSON-LD schemas (Organization, LocalBusiness, BreadcrumbList)
- Favicon pack references

### Analytics & Tracking
- Google Analytics 4 (GA4) tracking code
- Custom event labels (data-cta attributes)
- Event firing on CTA clicks and world navigation
- No cookie consent needed (GA4 is compliant by default in EU)

## Accessibility Standards

### WCAG AA Compliance
- Color contrast: ≥4.5:1 for text
- Touch targets: 44px minimum
- Semantic HTML: nav, main, section, h1–h6
- ARIA labels on interactive elements
- Skip-to-content link
- Focus states visible (2px gold outline)
- Keyboard navigation fully supported
- Reduced motion support (@prefers-reduced-motion)

### Screen Reader Testing
- All images have alt text (or alt="" if decorative + aria-hidden)
- Form labels and buttons are properly labeled
- Link text is descriptive (not "click here")
- Lists use semantic list markup

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)
- Graceful degradation for older browsers (no hard requirements)

## Future Considerations

- **Build Tool**: If complexity increases, consider Vite for bundling + minification
- **CMS**: Could add headless CMS for blog/content management
- **Form Backend**: Contact form would need backend service (Netlify Forms, Formspree, etc.)
- **Internationalization**: Could add Urdu language support with JSON translations
- **Dark/Light Mode**: Toggle could be added with CSS variables and localStorage

## Common Commands

### View Locally
```bash
# Start local server (choose one)
python -m http.server 8000
# or
npx http-server
# Visit http://localhost:8000
```

### Check HTML Validation
```bash
# Use W3C Markup Validator (online)
# https://validator.w3.org/
```

### Lint CSS
```bash
# Use online tools (no local linter installed)
# https://stylelint.io/
```

### Optimize Images
```bash
# Use ImageOptim, TinyPNG, or similar
# Keep images compressed before committing
```

### Test Accessibility
```bash
# Use WAVE, Axe DevTools, or Lighthouse in Chrome DevTools
# Test keyboard navigation manually
# Test with screen reader (NVDA or JAWS)
```
