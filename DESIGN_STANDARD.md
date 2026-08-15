# SQ Interactive — Design Standard

This document establishes the visual and UX standard for all pages. The homepage serves as the reference implementation.

## Core Principles

1. **Navigation-First**: Clear, intuitive navigation. No clutter.
2. **Hierarchy**: Visual hierarchy guides users naturally through content.
3. **Mobile-First**: Optimized for 320px–430px, scales up gracefully.
4. **Premium Dark Theme**: Dark backgrounds (#0A0A0A, #0D0D0D) with gold accents (#D4AF37).
5. **Minimal CTA**: One primary call-to-action per section (floating button on right side).
6. **Semantic HTML**: Proper heading hierarchy, ARIA labels, accessibility.
7. **No Bloat**: Remove anything that doesn't serve the user's goal.

## Navigation

### Fixed Header
- Logo + mark on left
- Desktop links (Work, How We Work, About) hidden on mobile
- Mobile hamburger menu (hidden on 1024px+)
- **NO CTA button in nav** — use floating button instead
- Scroll-triggered background opacity increase
- Logo text "Interactive" hidden at ≤480px

### Floating Buttons (Right Side, Stacked)
- **Contact CTA (Gold)**: Bottom-right, primary action
- **WhatsApp (Green)**: Above contact, secondary action
- Both 44px minimum touch targets
- Icon-only on mobile (≤479px)
- Proper spacing to prevent overlap

## Page Structure

### Standard Sections (in order)
1. **Hero** — Full-viewport, video background, clear value prop
2. **Main Content** — Page-specific content (hub, services, etc.)
3. **Philosophy/Proof** — Social proof or company philosophy
4. **Final CTA** — "Have a problem worth solving?" section
5. **Footer** — Contact info, navigation, social links

### What Should NOT Be There
- ❌ Multiple CTAs in navigation
- ❌ Unnecessary sections that don't serve user goals
- ❌ Redundant content
- ❌ External dependencies (vanilla JS only)
- ❌ Auto-playing videos with sound
- ❌ Pop-ups or modals
- ❌ Ads or tracking pixels (GA4 only)
- ❌ Fake testimonials or statistics
- ❌ Cluttered sidebars or widgets

## Typography

### Hierarchy
- **Headings**: Playfair Display (serif), gold accents for emphasis
- **Body**: Plus Jakarta Sans (sans-serif)
- **Scale**: Fluid sizing with `clamp()` for responsive scaling

### Sizing
- H1: `clamp(2rem, 5vw, 5rem)` (desktop) / `clamp(1.75rem, 4.5vw, 2.5rem)` (mobile)
- H2: `clamp(1.5rem, 3.5vw, 2.25rem)`
- Body: `var(--sq-text-base)` (16px)
- Labels: `var(--sq-text-xs)` (12px)

## Colors

### Primary Palette
- **Background Deep**: #0A0A0A
- **Background Surface**: #0D0D0D
- **Brand Gold**: #D4AF37
- **Gold Light**: #F1C40F
- **Text Strong**: #FFFFFF
- **Text Default**: #F5F5F5
- **Text Secondary**: #A0A0A0
- **Text Muted**: #666666

### Social Brand Colors
- **Instagram**: #E4405F (pink)
- **LinkedIn**: #0A66C2 (blue)
- **Facebook**: #1877F2 (blue)
- **YouTube**: #FF0000 (red)
- **WhatsApp**: #25D366 (green)

## Spacing

### Responsive Padding
- **Mobile (320px–479px)**: `var(--sq-space-4)` to `var(--sq-space-6)`
- **Tablet (480px–767px)**: `var(--sq-space-6)` to `var(--sq-space-8)`
- **Desktop (768px+)**: `var(--sq-space-8)` to `var(--sq-space-12)`

### Gap Between Elements
- **Mobile**: `var(--sq-space-3)` to `var(--sq-space-4)`
- **Desktop**: `var(--sq-space-4)` to `var(--sq-space-6)`

## Breakpoints

- **Mobile**: 320px–479px
- **Tablet**: 480px–767px
- **Desktop**: 768px–1023px
- **Wide**: 1024px–1919px
- **Ultra-wide**: 1920px+

## Cards & Components

### Hub Cards (Navigation Portals)
- **Grid**: 1 col mobile → 2 col tablet → 2 col desktop → 4 col ultra-wide
- **Image Aspect Ratio**: 4:3 mobile, 16:9 desktop
- **Padding**: `var(--sq-space-4)` mobile → `var(--sq-space-8)` desktop
- **Number**: Serif, gold, prominent (primary identifier)
- **Title/Description**: Hidden on mobile, shown at 768px+
- **Action Bar**: Hidden on mobile, shown at 768px+

### Proof Cards (Social Proof)
- **Grid**: 1 col mobile → 2 col at 480px → 3 col at 768px
- **Content**: Live indicator, name, domain, category tags
- **Hover**: Border color change, slight lift, arrow animation

### Buttons
- **Primary (Gold)**: `background: var(--sq-gold)`, hover: lighter gold
- **Secondary (Outlined)**: `border: 1px solid var(--sq-border)`, hover: gold subtle background
- **Min Height**: 44px (touch target)
- **Padding**: `var(--sq-space-3) var(--sq-space-6)` (sm), `var(--sq-space-4) var(--sq-space-8)` (lg)

## Mobile Optimization

### Touch Targets
- Minimum 44px × 44px for all interactive elements
- Buttons, links, icons must be easily tappable

### Text Sizing
- No text smaller than 12px (var(--sq-text-xs))
- Headings scale with viewport using `clamp()`
- Line-height ≥ 1.2 for readability

### Layout
- No horizontal overflow at any breakpoint
- Padding prevents text from touching screen edges
- Images scale responsively without distortion
- Aspect ratios maintained across devices

## Accessibility

### Required
- Skip-to-content link
- ARIA labels on all interactive elements
- Focus states (2px gold outline)
- Semantic HTML (nav, main, section, h1–h6)
- Color contrast meets WCAG AA
- Reduced motion support

### Keyboard Navigation
- All interactive elements accessible via Tab
- Focus order logical and intuitive
- No keyboard traps

## Performance

### Standards
- No external dependencies (vanilla JS only)
- Lazy loading for images
- CSS-only animations (no JS libraries)
- Preconnect to Google Fonts and Analytics
- DNS prefetch for third-party services
- Total file size: ~68KB (before compression)

### Optimization
- Images optimized and compressed
- CSS minified in production
- JS minified in production
- No render-blocking resources

## Analytics & SEO

### Required on All Pages
- GA4 tracking with event labels
- JSON-LD schemas (Organization, LocalBusiness, BreadcrumbList)
- Open Graph meta tags
- Twitter Card meta tags
- Canonical URL
- Meta description (120–160 characters)
- Favicon pack references

### Links
- All internal links use relative paths
- External links open in new tab (`target="_blank"`)
- No broken links
- Proper link text (not "click here")

## Footer

### Standard Footer Structure
- **Brand Section**: Logo, description, contact info (phone, email, WhatsApp)
- **Explore**: Digital, AI, Immersive, Lab
- **Company**: Work, How We Work, About, Contact
- **Social Icons**: Instagram, LinkedIn, Facebook, YouTube (brand colors)
- **Copyright**: Year auto-updated, rights reserved

### Mobile Footer
- 1 column layout
- Stacked sections
- Social icons: 44px touch targets
- Proper spacing between sections

## Page-Specific Standards

### Homepage
- Navigation portal to four worlds
- Hero + Hub + Proof + Philosophy + CTA
- No redundant content
- Clear visual hierarchy

### World Pages (Digital, AI, Immersive, Lab)
- Hero specific to world
- World-specific content
- Cross-world navigation (links to other worlds)
- Same footer and floating buttons
- Consistent styling with homepage

### Other Pages (Work, About, Contact, etc.)
- Follow same structure and styling
- Maintain navigation consistency
- Use same color palette and typography
- Responsive design required
- Accessibility standards required

## Checklist for New Pages

- [ ] Navigation matches homepage
- [ ] Floating buttons on right side (contact + WhatsApp)
- [ ] No CTA in nav
- [ ] Hero section with clear value prop
- [ ] Mobile-first responsive design
- [ ] Touch targets 44px minimum
- [ ] No horizontal overflow
- [ ] Semantic HTML
- [ ] ARIA labels on interactive elements
- [ ] Focus states visible
- [ ] GA4 tracking
- [ ] JSON-LD schemas
- [ ] Meta tags (OG, Twitter, description)
- [ ] Favicon references
- [ ] Footer with contact info and social links
- [ ] No external dependencies
- [ ] No unnecessary sections
- [ ] No broken links
- [ ] Tested on mobile (320px, 375px, 390px, 430px)
- [ ] Tested on desktop (768px, 1024px, 1920px)
- [ ] Accessibility tested (keyboard nav, screen reader)

## Future Enhancements

- Dark/light mode toggle
- Internationalization (Urdu support)
- Advanced analytics (heatmaps, session recording)
- Blog/resources section
- Search functionality
- Contact form with validation
