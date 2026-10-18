# Sumnora

Source for [sumnora.com](https://sumnora.com), the website of Sumnora, a small software development studio that builds production web, mobile, and AI products.

The site is a statically prerendered Next.js app. It has no database, no authentication, and no form backend, and it collects no customer data. The only third-party script is Google Analytics, and it loads only after a visitor accepts analytics cookies.

![Sumnora — Built for the work](public/brand/engineering-og.jpg)

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.3 (App Router), React 19.2, TypeScript |
| Styling | Tailwind CSS 4 foundation plus a bespoke CSS design system in `src/app/globals.css` |
| Motion | Framer Motion |
| Diagrams | React Flow (`@xyflow/react`) for the studio workflow visual |
| Icons | Phosphor |
| Type | Self-hosted Manrope and Newsreader variable fonts (Fontsource) |
| Consent | `vanilla-cookieconsent`, gating `@next/third-parties` Google Analytics |

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build. Every route prerenders as static content |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js config) |

Run `npm run lint` and `npm run build` before you open a pull request.

## Project structure

```text
src/
  app/            Routes, metadata, sitemap, robots, manifest, OG/Twitter images
  components/     Shared layout primitives and visuals
  lib/
    site-data.ts  All repeated copy: services, capabilities, audiences, nav, IDs
    seo.ts        Site constants and createPageMetadata()
public/
  brand/          Logo, mark, icons, hero and team illustrations
  media/          Per-service illustrations
scripts/
  generate-brand-icons.ps1   Regenerates mark, favicon, Apple and PWA icons
BRAND.md          Positioning, voice, color, typography, usage rules
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/services` | Overview of the five service lines |
| `/services/[slug]` | `product-engineering`, `ai-engineering`, `automation`, `platform`, `advisory` |
| `/approach` | Delivery practice and principles |
| `/solutions` | Client shapes the studio works with |
| `/security` | Security posture and disclosure |
| `/company` | About the studio |
| `/engagements` | How engagements are structured |
| `/contact` | Contact details |
| `/legal/privacy`, `/legal/terms` | Legal pages |

Legacy routes from an earlier version of the site (`/platform`, `/partners`, `/products/*`) permanently redirect to their current pages. The redirects live in `next.config.ts`.

## Content model

Copy that appears on more than one route lives in `src/lib/site-data.ts`:

- `services`: the five service offerings, with their capabilities, outcomes, and workflow stages
- `practiceCapabilities`: the eight parts of the delivery practice, used by `/approach`
- `audiences`: the four client shapes, used by `/solutions`
- `principles`: how the studio works, used by `/approach`
- `nav`: primary navigation
- `CONTACT_EMAIL`: the single public address, `hello@sumnora.com`
- `GA_MEASUREMENT_ID`, `FACEBOOK_DOMAIN_VERIFICATION`: public identifiers that ship in page source by design. They are not secrets.

Pages are assembled from the primitives in `src/components/`: `PageHero`, `SectionHeading`, `CtaSection`, `CheckList`, `IconCardGrid`, `FactRail`, `WorkflowRail`, and `ButtonLink`. Use these primitives rather than hand-written section markup, so that a copy change only has to be made in one place.

## Privacy, security, and SEO

- **Consent-gated analytics.** The Google Analytics tag is not rendered at all until the visitor accepts the analytics category. Withdrawing consent unmounts the tag, clears the `_ga*` cookies, and sets `ga-disable-<id>` so that a tag already in memory stops sending immediately. Analytics only runs in production builds. See `src/components/analytics.tsx`.
- **Security headers.** HSTS (preload), `nosniff`, `X-Frame-Options: DENY`, a strict referrer policy, and a restrictive `Permissions-Policy` are set for every path in `next.config.ts`. The `X-Powered-By` header is turned off.
- **SEO.** Each page gets canonical URLs, Open Graph and Twitter cards, and JSON-LD from `createPageMetadata()`. The site also generates a sitemap, robots rules, and a web app manifest.

## Brand assets

- `public/brand/sumnora-logo.png`: logo source, trimmed to its opaque bounds
- `public/brand/sumnora-mark.png`: UI mark used in the header, footer, 404 page, and OG image
- `public/brand/engineering-sculpture.webp`: optimized hero sculpture
- `public/brand/sumnora-team.webp`: optimized editorial team illustration
- `scripts/generate-brand-icons.ps1`: regenerates the mark, favicon, Apple, and PWA icons from the logo source

`BRAND.md` covers positioning, voice, color, typography, and usage rules.

## Claims discipline

All copy follows two rules, and any edit must keep to them:

1. **The team image is an illustration.** It is AI-generated, it depicts no real person, and it is labelled as an illustration everywhere it appears. It must never be presented as a photograph of actual Sumnora staff.
2. **No invented proof.** The site shows no client names, logos, case studies, testimonials, or performance metrics unless they are real and their use is permitted.

## License

The source code is released under the [MIT License](LICENSE).

The MIT License covers the code, not the brand. The Sumnora name, logo, mark, and brand illustrations identify Sumnora. Do not use them to represent your own product or to imply an endorsement. If you fork this project, replace them with your own.
