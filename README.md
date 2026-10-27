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
| Colors and fonts | `src/styles/global.css` (top of file) |
| Hero video | drop `hero.webm` + `hero.mp4` into `public/` |

## Adding a project

1. Copy `src/content/projects/aluminum-wiring-prairie-village/` to a new folder named like `panel-upgrade-leawood`.
2. Put the photos (JPG/PNG, straight off the phone is fine) in that folder.
3. Edit `index.md`: title, date, `city` (slug from `src/data/areas.js`), `services` (slugs from `src/data/services.js`),
   a one-line summary, the `photos` list, and the write-up. Keep `draft: true` until it's ready.
4. The project appears on /projects, on each tagged service page, on the city page and on the home page.
   Photos are resized and compressed automatically.

Drafts show in `npm run dev` only. Production builds (`npm run build` without NODE_ENV=development) leave them out.

## Design

Style: Heritage (navy #001a45 + gold #f8cb07 from the logo), centered hero. Logo files are in `public/brand/`.

## Before launch

- Hero video
- City content, about-page story and photos
- Wire `leadEndpoint` to the estimating app's public lead route
