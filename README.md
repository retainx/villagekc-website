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

## Deploying

Push to `main` and the GitHub Action (`.github/workflows/deploy.yml`) builds the site and copies `dist/` to `/var/www/villagekc.com/html/` on the droplet (178.128.155.109). nginx serves the files; there is nothing to restart. The nginx config is in `deploy/nginx/villagekc.com.conf`.

### One-time setup

Run the server commands over SSH as `dopel`.

**1. Folder.**
```
sudo mkdir -p /var/www/villagekc.com/html
```

**2. Deploy key for GitHub, authorized for root.**
```
ssh-keygen -t ed25519 -f ~/website_deploy -N "" -C "github-actions villagekc-website"
sudo sh -c 'cat /home/dopel/website_deploy.pub >> /root/.ssh/authorized_keys'
cat ~/website_deploy
```
Copy the whole private key (including the BEGIN/END lines) into GitHub → the repo → Settings → Secrets and variables → Actions as `SSH_PRIVATE_KEY`. Also add `SSH_HOST` = `178.128.155.109` and `SSH_USER` = `root`. Then delete the server copies:
```
rm ~/website_deploy ~/website_deploy.pub
```

**3. First deploy.** GitHub → Actions → Deploy → Run workflow (or re-run the failed first run). Check it worked:
```
ls /var/www/villagekc.com/html
```
You should see `index.html`, `services`, `projects`, `_astro` and so on.

**4. nginx.** Copy `deploy/nginx/villagekc.com.conf` to `/etc/nginx/sites-available/villagekc.com`, then:
```
sudo ln -s /etc/nginx/sites-available/villagekc.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

**5. DNS at Squarespace (this is the switch-over: the new site goes live here).** Domains → villagekc.com → DNS. Delete the Squarespace preset records for the website (the four `@` A records and the `www` CNAME), then add:
- `A` `@` → `178.128.155.109`
- `CNAME` `www` → `villagekc.com`

Do not touch MX, SPF/DKIM/DMARC (`TXT`) or the `app` record; those run email and the estimating app. Check from PowerShell until both show the droplet's address: `nslookup villagekc.com` and `nslookup www.villagekc.com`.

**6. HTTPS.**
```
sudo certbot --nginx -d villagekc.com -d www.villagekc.com
```
Then check https://villagekc.com, https://www.villagekc.com (should land on villagekc.com), https://villagekc.com/home (should land on the home page) and that https://app.villagekc.com and https://retainwall.com still load.

**7. After launch.** In Google Search Console, add villagekc.com and submit `https://villagekc.com/sitemap-index.xml`. Update the website link on the Google Business Profile if it shows `www`. Cancel the Squarespace website plan, but keep the domain and DNS there.
