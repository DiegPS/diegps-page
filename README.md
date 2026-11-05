# DiegPS — portfolio & product pages

A Spanish portfolio for Diego Pahua Silvan with a shared visual system, native product previews and explicit release states. Built with React, TypeScript and Vinext; deployed to Cloudflare Workers.

## Local development

Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```sh
npm run format:check
npm run check
npm run test:routes
```

`test:routes` reuses an active preview belonging to this project or starts a temporary preview on port 3099. It checks all twelve pages, metadata, responsive assets, sitemap, robots and the 404 response, then stops only the server it started. `test:smoke` can check an already-running server; set `TEST_URL` to change its origin.

GitHub Actions runs formatting, TypeScript, build and route checks on pull requests and main. Deployment runs only after its type, build and route checks succeed.

## Content & release states

- `/`: portfolio, projects, experience and contact.
- `/onauto`: published workshop and fleet platform. Five real screenshots from the native Windows Demo 1.0.6 app show its dashboard, reports, audit, settings and orders with synthetic data. No AI promotional artwork, public download URL or privacy policy is used.
- `/workser`: job-filter browser extension; v0.2.0 release on GitHub, three repository screenshots from an earlier UI version, and copy verified against README, changelog and extension code. No browser-store listing or privacy policy is claimed.
- `/airdown`: published Windows application; links to Microsoft Store.
- `/airstream`, `/gachy`, `/godsense`: products in development; no public download is claimed.
- `/devscope`: finished terminal project explorer with its own case study.
- `/{product}/privacy`: four application privacy pages.
- `/sitemap.xml`, `/robots.txt`: generated from the canonical origin.

Shared project facts and status live in `app/lib/projects.ts`. Case studies and features live in `app/lib/product-details.ts`. Update these sources when a product is released. Employment dates and quantified business outcomes are intentionally omitted because they are not documented in the project.

## Images & fonts

Original screenshots are preserved in `public/assets`. The website uses pre-generated WebP variants at 640, 960, 1280 and 1920 pixels, accurate aspect ratios and lazy loading. Logos are capped at 192 pixels. Screenshots open in a native modal dialog with Escape support and restored focus.

```sh
npm run assets:optimize
npm run assets:social
npm run fonts:prepare
```

Image commands use Sharp; social cards are generated locally. Font preparation downloads the Latin subsets of Plus Jakarta Sans, Instrument Serif and JetBrains Mono from Google Fonts and saves their OFL licenses. Fonts and images are committed, so regular builds require no asset-generation network requests. Pages do not contact Google Fonts.

## Canonical URLs & deployment

Set `SITE_URL` to the public production origin if you want a fixed canonical domain. Without it, metadata, robots and sitemap use the incoming request host; no guessed domain is embedded. If configuring it for Cloudflare, add it to Wrangler `vars` or the deployed worker environment, not just GitHub build variables.

```sh
npm run build
npm run start
npm run deploy
```

`start` runs the compiled Cloudflare Worker with Wrangler. The existing deployment workflow needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets.

## Design & accessibility

See `DESIGN.md` for the visual direction. All routes share navigation and contact. Mobile navigation exposes every section. The site includes a skip link, focus styles, semantic headings, reduced motion, responsive privacy tables with field labels, and a custom 404.

The project uses Vinext 1.0.1. Keep the lockfile committed and validate framework updates before deployment; route tests are part of the required checks. The dependency audit still reports the upstream `braces` advisory through the Vinext/CommonJS build-tool chain. No patched braces release is currently available; do not use `npm audit fix --force` to downgrade the framework. See `DEPENDENCIES.md` for the recorded limitation.
