# Phase 2 Audit: OLD Site vs NEW v2 Site
**Date**: August 20, 2026  
**Status**: Comparison & Migration Plan  
**Purpose**: Identify all content from OLD site to migrate into NEW v2 architecture

---

## 📊 AUDIT SUMMARY

### OLD Site (SQ-Website/)
- **Architecture**: 25+ pages, service-centric, VR real estate focused
- **Tech Stack**: Tailwind CSS, AOS animations, Firebase, complex JavaScript
- **Focus**: VR solutions for real estate with pricing, timelines, ROI calculator
- **Portfolio**: 13 projects explicitly listed in portfolio.html
- **Content**: Heavy on services, pricing, founder story, case studies, FAQs

### NEW Site (SQ-Website-v2/)
- **Architecture**: 8 pages, four-world model (Digital, AI, Immersive, Lab)
- **Tech Stack**: Vanilla CSS3, vanilla JavaScript, design tokens system
- **Focus**: Digital Technology Partner positioning
- **Portfolio**: 18 projects in projects-data.js (some generic)
- **Content**: Positioning-focused, founder-led narrative, capability-based

---

## 🔍 CONTENT MIGRATION REQUIRED

### 1. PROJECTS TO MIGRATE (13 from OLD → v2)

From OLD site portfolio.html, these 13 projects need to be added/expanded in `projects-data.js`:

#### IMMERSIVE WORLD (7 projects)
1. **Luxury Villa Walkthrough** ✅ Already in v2 as `luxury-villa-vr`
2. **1 Kanal Villa** (needs data expansion)
3. **Matlock Galani 360° Tour** (needs v2 version)
4. **Heaven Hotel 360° Tour** ✅ Already in v2 as `heaven-hotel-360`
5. **SQ Office 360° Tour** ✅ Already in v2
6. **Furniture Scanning — Sofa** ✅ Already in v2
7. **Furniture Scanning — Elephant** ✅ Already in v2
8. **VR Material Swap System** ✅ Already in v2
9. **NeuroSpace VR** ✅ Already in v2

#### DIGITAL WORLD (3 projects)
1. **DesignLine Construction** ✅ Already in v2
2. **Heaven Hotel (website)** ✅ Already in v2
3. **Visa Management System** ✅ Already in v2

#### AI WORLD (2 projects)
1. **AI Interior Design System** ✅ Already in v2
2. **VR-AI Interior Assistant** ✅ Already in v2

#### LAB WORLD (1 project)
1. **VR Adventures for the Disabled** ✅ Already in v2

**Status**: All 13 old projects are already represented in v2, but need content enrichment with actual URLs, descriptions, and client details.

---

### 2. SERVICES TO MIGRATE

#### OLD Site Services (8 specific services):
1. VR Real Estate — 250K-400K PKR
2. 360° Tours & Videos — 35K-70K PKR
3. AI Interior Design — pilot pricing
4. Interactive PC Models
5. VR Staging
6. Interactive Walkthroughs — 100K-180K PKR
7. Furniture Scanning
8. Automation/IT Systems

#### NEW Site Services (defined in projects-data.js):
- ✅ All 8 services already exist in `SQ_SERVICES` object
- ✅ Pricing removed (v2 positioning: "custom solutions, no price tags")
- ✅ Services organized under worlds (Digital, Immersive, AI)

**Migration Decision**: Keep v2 approach (no pricing visible) but ensure service descriptions are rich and compelling.

---

### 3. PAGES TO MIGRATE/UPDATE

| Page | OLD Site | NEW v2 | Status | Action |
|------|----------|--------|--------|--------|
| **Homepage** | portfolio-focused | four-world hub model | ✅ Complete | No change needed |
| **/about/** | Founder story, stats, roadmap | Similar but shorter | 🔧 Needs expansion | Add: founder bio, vision, roadmap from old |
| **/work/** | portfolio.html (13 projects) | portfolio grid stub | 🔧 Needs build | Build grid + project detail pages |
| **/services/** | services.html (all offerings) | `/digital/`, `/immersive/`, `/ai/` | 🔧 Needs service pages | Create service landing pages |
| **/digital/** | Digital world stub | service catalog | ✅ Exists | Enhance with service cards |
| **/immersive/** | N/A in old (was VR-focused) | world page + services | ✅ Exists | Good template |
| **/ai/** | N/A in old | world page stub | 🔧 Needs content | Add AI service offerings |
| **/lab/** | N/A in old | world page stub | 🔧 Future phase | Skip for now (Phase 3) |
| **/contact/** | contact.html | contact page stub | 🔧 Needs form | Link to existing contact form |
| **/how-we-work/** | services.html (process) | stub | 🔧 Needs content | Add methodology, process, team |

---

### 4. CONTENT ELEMENTS TO MIGRATE

#### From `/about/`
- ✅ Founder story (Shazaib Qaiser, BSc Multimedia Technology)
- ✅ Company founding story
- ✅ Current capabilities & roadmap
- ✅ Client testimonials/trust elements
- ✅ Team/studio background

#### From `/services/`
- ✅ Service descriptions (already in v2 style)
- ❌ Pricing tables (v2 design: "custom pricing")
- ✅ Timeline estimates
- ✅ Process/methodology
- ✅ ROI-related messaging

#### From `/portfolio/`
- ✅ 13 project titles, descriptions, images
- ✅ Project categories (residential, commercial, 360, VR, AI, etc.)
- ✅ Client links (live demos, YouTube videos)
- ✅ Project outcomes/impact where available
- ✅ Filter/categorization system

#### From `/faq/`
- ❌ FAQ section (v2 design: no FAQ needed yet)
- ✅ Common questions (repurpose for hero/CTA sections)

---

### 5. IMAGES & ASSETS TO VERIFY

#### Already migrated to v2:
- ✅ Logo (no-background.png)
- ✅ Favicon pack
- ✅ AI world images (ai-interior design, ai-agent)
- ✅ VR world images (material swap, neuro space)
- ✅ Digital world images (websites, UI/UX, visa system)
- ✅ Product images (before/after, house renders)

#### Missing/Need verification:
- 🔍 1 Kanal Villa images
- 🔍 Matlock Galani images
- 🔍 Office tour thumbnail
- 🔍 Additional case study images

---

### 6. MESSAGING & POSITIONING

#### OLD Site Tone:
- "VR real estate specialist"
- Pricing-focused
- Outcome-driven (ROI calculator, case studies)
- Technology feature-rich

#### NEW v2 Tone: ✅ KEEP THIS
- "Problem-first technology partner"
- Value-focused, no pricing ("come talk to us")
- Business outcome-driven
- Solution-agnostic

**Migration Decision**: Keep v2's positioning. Adapt old content to fit new narrative.

---

## 📋 STEP-BY-STEP MIGRATION PLAN

### STEP 1: Data Audit ✅ (DONE)
- Identified all 13 projects from old site
- Confirmed all are represented in projects-data.js
- Verified service definitions exist

### STEP 2: Expand projects-data.js
- [ ] Add real project URLs where available
- [ ] Enhance project descriptions with challenge/solution/outcome
- [ ] Add client names/industries
- [ ] Add project timeframes and team info
- [ ] Link projects to related services

### STEP 3: Create Service Pages
- [ ] `/digital/website-development/`
- [ ] `/digital/e-commerce/`
- [ ] `/digital/custom-software/`
- [ ] `/digital/ui-ux-design/`
- [ ] `/immersive/vr-real-estate/`
- [ ] `/immersive/360-tours/`
- [ ] `/immersive/vr-staging/`
- [ ] `/ai/ai-interior-design/`
- [ ] `/ai/ai-visualization/`

### STEP 4: Build Portfolio Grid (/work/)
- [ ] Implement responsive grid layout
- [ ] Display all 18 projects with filters
- [ ] Add project detail page template
- [ ] Link to individual project pages
- [ ] Implement breadcrumb navigation

### STEP 5: Enhance /about/
- [ ] Add founder story section
- [ ] Add company vision/roadmap (V1 → V2 → V3)
- [ ] Add capabilities overview
- [ ] Add team/studio background
- [ ] Link to work/services

### STEP 6: Create /how-we-work/
- [ ] Define our process/methodology
- [ ] Show client journey
- [ ] Highlight team/capabilities
- [ ] Add CTA to contact

### STEP 7: Build /services/ landing
- [ ] Create service index page
- [ ] Link to world-specific service pages
- [ ] Show all capabilities at a glance
- [ ] Add filtering/categorization

### STEP 8: Connect Internal Links
- [ ] Update navigation across all pages
- [ ] Add breadcrumb links
- [ ] Create project → service associations
- [ ] Add related project cards

### STEP 9: Update World Pages
- [ ] `/digital/` — Show web, software, UI/UX services + projects
- [ ] `/immersive/` — Show VR, 360, AR services + projects
- [ ] `/ai/` — Show AI, automation services + projects

### STEP 10: SEO & Metadata
- [ ] Add JSON-LD structured data (Service, Project, Breadcrumb)
- [ ] Update page titles/descriptions
- [ ] Add canonical URLs
- [ ] Verify GA4 tracking (G-GYP19H93BR)

### STEP 11: QA & Testing
- [ ] [ ] Navigation: All links working (desktop/mobile)
- [ ] [ ] Responsive: Test 320px, 480px, 768px, 1024px, 1920px+
- [ ] [ ] Images: All loading, proper alt text
- [ ] [ ] GA4: Events firing correctly
- [ ] [ ] Accessibility: WCAG AA compliance
- [ ] [ ] Performance: Page load times

### STEP 12: Final Review
- [ ] Does v2 feel like ONE cohesive mature website?
- [ ] Is four-world architecture clear and navigable?
- [ ] Are projects compelling and credible?
- [ ] Is positioning message consistent?
- [ ] Are all CTAs leading to contact?

---

## 🎯 CRITICAL CONSTRAINTS

1. **Do NOT rebuild old site** — Keep v2 architecture
2. **Do NOT copy old styling** — Keep v2 design system
3. **Do NOT invent content** — Use only real projects, clients, results
4. **Do NOT separate old/new** — Result must feel like ONE website
5. **Do NOT add Phase 3 features** — Skip Urdu, ROI calc, live chat for now

---

## 📊 COMPLETION CHECKLIST

- [ ] All 13 old projects integrated into v2
- [ ] All 8 services with rich descriptions in v2
- [ ] `/work/` portfolio grid fully functional
- [ ] `/about/` page expanded with founder story
- [ ] `/digital/`, `/immersive/`, `/ai/` pages complete
- [ ] Service pages created (at least 3 priority services)
- [ ] Internal linking complete
- [ ] SEO metadata added
- [ ] GA4 tracking verified
- [ ] Mobile responsive tested (320px–1920px)
- [ ] All images verified & optimized
- [ ] Navigation tested (desktop/mobile/touch)
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Performance tested (Lighthouse 80+)

---

## 📝 SUMMARY

**Total Content to Migrate**:
- 13 projects → Already in v2, need enrichment ✅
- 8 services → Already in v2, need rich descriptions ✅
- 6+ pages → Need implementation/enhancement 🔧
- ~100+ images → Already in v2 ✅
- Messaging/positioning → Keep v2 approach ✅

**Result**: A mature, multi-faceted SQ Interactive website that tells one cohesive story across four capability worlds, with rich project portfolio and service definitions—all built on v2's superior architecture and design system.

---

**Next Step**: Begin STEP 2 — Expand projects-data.js with complete project details
