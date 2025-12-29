# site.robpins.me

A clean, minimal public hub for Rob Pins.

## Local development

```bash
npm install
npm run dev
```

## Netlify deployment

1. Push the repo to GitHub.
2. Create a new Netlify site from the repo.
3. Netlify will use the included `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20`

## Editing links and projects

All outbound links and projects live in `src/data/config.ts`.
Update the entries there to add, remove, or edit links and project items.
