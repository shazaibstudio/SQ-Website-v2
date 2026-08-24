# Bugfix Requirements: Digital Page + Services Page Visual Rendering Issues

## Introduction

Two critical rendering bugs affecting the digital page and services page. The digital page has styling issues where section headings are not displaying correctly (gold color not applying), and the services page is missing service card images that exist in the old website. Both pages are partially visible but not fully styled or complete.

## Bug Analysis

### Current Behavior (Defect)

**Digital Page Styling Issue:**

1.1 WHEN viewing the digital page hero section THEN the main heading text color is not displaying the gold accent color on the em tag (appears as default color instead of var(--sq-gold))

1.2 WHEN viewing section headings like "What We Build", "Real Work", "Pricing" THEN the h2 element text color and styling is not matching the design standard (appears muted instead of --sq-text-strong)

1.3 WHEN viewing the pricing section THEN the card styling is not fully visible or the cards appear with improper spacing/padding

**Services Page Structure Issue:**

1.4 WHEN viewing the services page THEN the service cards are missing images (currently text-only cards without image containers)

1.5 WHEN viewing service cards THEN each card lacks the image + title + description + features structure that exists in the old website

### Expected Behavior (Correct)

**Digital Page Styling Fix:**

2.1 WHEN viewing the digital page hero section THEN the main heading em tag text SHALL display in var(--sq-gold) color (#D4AF37) as per design tokens

2.2 WHEN viewing section headings like "What We Build", "Real Work", "Pricing" THEN the h2 elements SHALL display in var(--sq-text-strong) color with proper line-height and sizing

2.3 WHEN viewing the pricing section THEN the pricing cards SHALL display with correct spacing, padding, and border styling matching other cards on the site

**Services Page Structure Fix:**

2.4 WHEN viewing the services page THEN each service card SHALL include an image container with appropriate aspect ratio and styling

2.5 WHEN viewing service cards THEN each card SHALL follow the structure: image (top) + title + description + features list + link (bottom), matching the design of old website service cards

### Unchanged Behavior (Regression Prevention)

3.1 WHEN viewing other pages (homepage, about, contact) THEN the styling and layout SHALL CONTINUE TO render correctly without visual changes

3.2 WHEN viewing the digital page on mobile (320px-480px) THEN the hero section and responsive layout SHALL CONTINUE TO adapt properly with media queries

3.3 WHEN viewing the services page navigation and footer THEN the page navigation and footer SHALL CONTINUE TO function and display correctly

3.4 WHEN scrolling and interacting with animations THEN the reveal animations and scroll progress bar SHALL CONTINUE TO work as currently implemented

