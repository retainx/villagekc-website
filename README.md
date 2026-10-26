# Village Electric website (villagekc.com)

Static Astro site: home, about, contact, a page per service and a page per service-area city.

## Run locally

```sh
npm install
npm run dev        # http://localhost:4321  (set NODE_ENV=development in this shell if it's globally "production")
npm run build      # outputs dist/
```

## Where things live

| What | File |
| --- | --- |
| Phone, email, license, warranty, Google link, lead endpoint | `src/data/site.js` |
| Services (copy, bullets, FAQs) | `src/data/services.js` |
| Service-area cities (local copy goes in `content`) | `src/data/areas.js` |
| Colors / fonts / the three design options | `src/styles/global.css` (top of file) |
| Hero video | drop `hero.webm` + `hero.mp4` into `public/` |

## Design review

A "Design options" button (bottom-left) switches between styles A/B/C and hero layouts 1/2/3.
You can also link a combo directly: `/?theme=modern&hero=split`.
Turn it off before launch with `showDesignSwitcher: false` in `src/data/site.js`, then trim the unused fonts in `src/layouts/Base.astro`.

## Before launch

- Real phone/text numbers, Google Business link, logo, OG image (`public/og-image.jpg`)
- City content, about-page story and photos
- Wire `leadEndpoint` to the estimating app's public lead route
