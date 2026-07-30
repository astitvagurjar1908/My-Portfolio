# Deployment Guide

The site is a static single-page app after `npm run build` — the output in `dist/` can be hosted
anywhere that serves static files. Below are the three most common options.

## Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. Confirm these settings if asked:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. Vercel gives you a live URL immediately and redeploys on every push to `main`.

Because this is a single-page app using client-side routing, add a `vercel.json` if you add more
routes later, so deep links don't 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Netlify

1. Push this project to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add a `public/_redirects` file with the following line so client-side routes don't 404:

   ```
   /*    /index.html   200
   ```

5. Deploy.

## GitHub Pages

GitHub Pages serves from a repo or a `gh-pages` branch, and needs the base path set correctly if
the repo isn't served from the domain root.

1. Install the deploy helper:

   ```bash
   npm install --save-dev gh-pages
   ```

2. In `vite.config.ts`, set `base` to your repo name (skip this if using a custom domain or a
   `username.github.io` root repo):

   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...rest of config
   });
   ```

3. Add to `package.json` scripts:

   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. Run:

   ```bash
   npm run deploy
   ```

5. In the repository settings, set **Pages → Source** to the `gh-pages` branch.

## Custom domain

All three platforms support custom domains from their dashboard (Vercel: Project → Settings →
Domains; Netlify: Site settings → Domain management; GitHub Pages: repo Settings → Pages → Custom
domain). Point a `CNAME` record at the platform's provided target, then update
`profile.resumeFile`'s absolute references and the `og:url` / canonical tags in `index.html` to
match the final domain.
