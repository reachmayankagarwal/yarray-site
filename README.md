# yarray.com.au

Static single-page site. No build step, no dependencies.

## Run

Any static server, e.g.:

    npx serve .

Or open `index.html` over a local server (ES modules need http://, not file://).

## Edit

- **Copy** — `content.js`. Every string on the site lives there. All content is
  currently `PLACEHOLDER:` text and must be replaced before launch.
- **Layout/markup** — `app.js` (`render` map: one function per block type).
- **Styling** — `styles.css`.

Routing is hash-based (`#/services`), so it deploys to any static host with no
server rewrite rules.

## Test

    node --test

## Before launch

- Replace all `PLACEHOLDER:` copy in `content.js`.
- Set a real contact email (currently `hello@yarray.com.au`).
- Add favicon, OG image, and a real `<meta name="description">` in `index.html`.
