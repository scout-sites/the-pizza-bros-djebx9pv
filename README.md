# Scout template: generic-landing

Cloned per business by Scout's generator. All copy, palette, sections, and
contact details live in `content/site.json` — the rest of the template reads
from there.

## Local dev

```bash
pnpm install
pnpm dev
```

## Edit content

Update `content/site.json` and the home page updates. The palette is wired into
CSS variables at the root, so changing palette values restyles the site
without touching components.
