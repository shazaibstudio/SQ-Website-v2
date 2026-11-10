# SQ Interactive — Website v2

A static HTML, CSS, and JavaScript build of the SQ Interactive studio website. It covers the studio's Digital, AI, Immersive, and Lab areas, plus services, work, and company pages.

The current production site is [sqinteractive.com](https://sqinteractive.com).

## Stack

- Semantic HTML
- CSS, with design tokens in `css/tokens.css`
- Vanilla JavaScript
- No package-manager dependencies

## Structure

- `index.html` — homepage
- `digital/`, `ai/`, `immersive/`, `lab/` — service areas
- `work/`, `services/`, `about/`, `contact/`, `how-we-work/`
- `_navbar.html` — shared navbar markup, applied with `inject-navbar-batch.js`
- `css/`, `js/`, `images/`, `videos/`

The site has 39 HTML pages.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. Opening `index.html` directly in a browser also works, though some paths are easier with a local server.

To apply navbar changes after editing `_navbar.html`:

```bash
node inject-navbar-batch.js
```

## Credits

Built by [SQ Interactive](https://sqinteractive.com), Lahore.

Contact: [admin@sqinteractive.com](mailto:admin@sqinteractive.com)
