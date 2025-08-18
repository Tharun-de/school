# Little Otters Website (Next.js)

A child enrichment and physical development center website built with Next.js 13 (App Router), React 18, and Tailwind CSS. The site is configured for static export and can be deployed on any static host (including Vercel) using the `out/` directory.

## Tech stack
- Next.js 13 App Router
- React 18
- Tailwind CSS (+ small utility components)
- Static export via `next.config.js` with `output: 'export'`

## Quick start
```bash
# install
npm install

# run locally
npm run dev
# open http://localhost:3000

# build (generates .next) and export static site (writes to out/)
npm run build
```

## Project structure
```
app/                # routes and pages (App Router)
  page.tsx         # Home (hero, features, CTA)
  about/page.tsx   # About (intro + mission hero, stats, vision w/ founder photo, sections)
  programs/page.tsx# Programs (sidebar index, program cards, CTA)
  location/page.tsx# Location (contact info + hours + horizontally scrollable maps)
  contact/page.tsx # Contact (Google Form embed or local form)
  icon.svg         # Favicon used by Next.js
components/        # UI components (Navbar, Footer, Reveal, ProgramCard, etc.)
public/            # Static assets served at "/" (e.g., /logo.svg)
data/content.js    # Central content (site name, logo path, images, text)
tailwind.config.ts # Tailwind configuration
app/globals.css    # Theme colors and CSS variables
next.config.js     # output: 'export', images config
```

## Change the logo
The Navbar reads the logo from `siteContent.site.logo`.

- Replace the file at `public/logo.svg` with your own file (keep the same name). The site uses `/logo.svg` by default.
- Or update the path in `data/content.js`:
```js
// data/content.js
site: {
  name: "Your School Name",
  logo: "/your-logo.png", // place the file in public/your-logo.png
}
```
Also update the favicon at `app/icon.svg` by replacing that file with your icon (SVG recommended).

## Change images (hero, about, programs, etc.)
All images are controlled in `data/content.js`:
- Home hero background: `siteContent.home.hero.backgroundImage`
- About page: `siteContent.about.image` (hero image) and `siteContent.about.philosophy.image` (supporting image)
- Programs cards: `siteContent.programs.programs[i].image`

Use either:
- Remote URLs (e.g., Unsplash). Remote hosts `images.unsplash.com` and `plus.unsplash.com` are already allowed in `next.config.js`.
- Local images: add to `public/` (e.g., `public/images/hero.jpg`) and reference with `/images/hero.jpg`.

## Change text, navigation, contact info
Edit `data/content.js`:
- Site name, tagline, description: `siteContent.site.*`
- Navbar links: `siteContent.navigation`
- Footer links and copyright: `siteContent.footer.*`
- Contact section and optional Google Form embed: `siteContent.contact.*`
- Address and map embed: `siteContent.location.*`

Changes take effect immediately in dev. For production, rebuild and redeploy.

## Colors and theme
Theme colors live in CSS variables inside `app/globals.css` under `@layer base`:
- `--primary`, `--secondary`, `--accent`, etc. (light and dark variants)

Tailwind reads these via `tailwind.config.ts`. Adjust variables to recolor the site, then rebuild.

Header tab colors are unified to the Home accent (currently `#dc6755`). You can tweak in `components/Navbar.js`.

The Programs page background uses `#f7f8f7`.

## Deploy
Static export deployment:

- Vercel settings:
  - Framework Preset: "Other"
  - Install Command: `npm install`
  - Build Command: `npm run build`
  - Output Directory: `out`

- Any static host: run `npm run build` and deploy the contents of `out/`.

## Troubleshooting
If Vercel shows an error about `routes-manifest.json`, ensure the project is imported as a static site (Framework Preset: "Other") and that Output Directory is `out/`.

If images fail to load for program cards, a client-side fallback swaps to `/homeace.jpeg` (see `components/ProgramCard.tsx`).

If the promotional popup is too frequent, set `siteContent.marketingModal.showOncePer` to `"session"` or disable via `enabled: false` in `data/content.js`.

## License
MIT (or your preferred license)

