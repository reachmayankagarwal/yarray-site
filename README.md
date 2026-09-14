# yarray.com.au

Static single-page site. No build step, no dependencies.

## Run

Any static server, e.g.:

    npx serve .

Or open `index.html` over a local server (ES modules need http://, not file://).

## Edit

- **Copy** — `content.js`. Every string on the site lives there.
- **Layout/markup** — `app.js` (`render` map: one function per block type).
- **Styling** — `styles.css`.

Routing is hash-based (`#/services`), so it deploys to any static host with no
server rewrite rules.

## Test

    node --test

## Before launch

- Set a real contact email (currently `hello@yarray.com.au`).
- Add a favicon and an OG image in `index.html`.
- Point the `yarray.com.au` domain at the Vercel project.
