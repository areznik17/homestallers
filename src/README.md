# Build source

- `parts/` holds the page templates, styles, data and `build.py`, which prerenders every page into `public/`.
- `fn/netlify/` holds the Netlify Functions (Stripe checkout, payments, webhook emails).

To rebuild: copy `parts/` to `/home/claude/parts`, `fn/` to `/home/claude/fn`, run `python3 /home/claude/parts/build.py`. It writes to `/home/claude/site/`. Then copy `site/public`, `site/netlify` and `site/netlify.toml` into this repo and push.
Needs Python 3 with Playwright and the Archivo and Public Sans fonts installed locally, for the share images.
