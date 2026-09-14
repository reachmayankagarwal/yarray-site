import { routes } from './content.js';

export const resolveRoute = (hash) => {
  const path = (hash || '').replace(/^#/, '').split('?')[0] || '/';
  const clean = path !== '/' ? path.replace(/\/+$/, '') : '/';
  return routes[clean] ? clean : '/';
};

const el = (tag, attrs = {}, kids = []) => {
  const n = Object.assign(document.createElement(tag), attrs);
  for (const k of [].concat(kids)) n.append(k);
  return n;
};

const render = {
  hero: (b) => el('section', { className: 'hero' }, [
    el('h1', { textContent: b.heading }),
    el('p', { className: 'sub', textContent: b.sub }),
    el('a', { className: 'cta', href: b.cta.href, textContent: b.cta.label }),
  ]),
  cards: (b) => el('section', {}, [
    el('h2', { textContent: b.heading }),
    el('div', { className: 'cards' },
      b.items.map((i) => el('article', { className: 'card' }, [
        el('h3', { textContent: i.h }), el('p', { textContent: i.p }),
      ]))),
  ]),
  prose: (b) => el('section', { className: 'prose' },
    [el('h1', { textContent: b.heading }), ...b.body.map((t) => el('p', { textContent: t }))]),
  contact: (b) => el('section', { className: 'prose' }, [
    el('h1', { textContent: b.heading }),
    el('p', { textContent: b.body }),
    el('a', { className: 'cta', href: `mailto:${b.email}`, textContent: b.email }),
  ]),
};

const draw = () => {
  const key = resolveRoute(location.hash);
  const page = routes[key];
  document.title = page.title;
  const app = document.getElementById('app');
  app.replaceChildren(...page.blocks.map((b) => render[b.type](b)));
  document.querySelectorAll('#nav a').forEach((a) => {
    a.setAttribute('aria-current', a.dataset.route === key ? 'page' : 'false');
  });
  window.scrollTo(0, 0);
};

if (typeof document !== 'undefined') {
  document.getElementById('nav').replaceChildren(
    ...Object.entries(routes).map(([key, page]) => {
      const a = el('a', { href: `#${key}`, textContent: page.nav });
      a.dataset.route = key;
      return a;
    }),
  );
  document.getElementById('year').textContent = new Date().getFullYear();
  addEventListener('hashchange', draw);
  draw();
}
