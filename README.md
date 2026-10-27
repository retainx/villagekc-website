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

## Design

Style: Heritage (navy #001a45 + gold #f8cb07 from the logo), centered hero. Logo files are in `public/brand/`.



## Before launch

- Hero video
- City content, about-page story and photos
- Wire `leadEndpoint` to the estimating app's public lead route
