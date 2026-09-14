import { routes } from './content.js';

export const resolveRoute = (hash) => {
  const path = (hash || '').replace(/^#/, '').split('?')[0] || '/';
  const clean = path !== '/' ? path.replace(/\/+$/, '') : '/';
  return routes[clean] ? clean : '/';
};

const el = (tag, props = {}, kids = []) => {
  const node = Object.assign(document.createElement(tag), props);
  for (const kid of [].concat(kids)) node.append(kid);
  return node;
};

const eyebrow = (text) => (text ? [el('span', { className: 'eyebrow', textContent: text })] : []);

const render = {
  hero: (b) => el('section', { className: 'hero' }, [
    ...eyebrow(b.eyebrow),
    el('h1', { textContent: b.heading }),
    el('p', { className: 'sub', textContent: b.sub }),
    el('a', { className: 'btn', href: b.cta.href, textContent: b.cta.label }),
  ]),

  cards: (b) => el('section', {}, [
    ...eyebrow(b.eyebrow),
    el('h2', { textContent: b.heading }),
    el('div', { className: 'cards' }, b.items.map((i) => el('article', { className: 'card' }, [
      el('h3', { textContent: i.h }),
      el('p', { textContent: i.p }),
    ]))),
  ]),

  steps: (b) => el('section', {}, [
    ...eyebrow(b.eyebrow),
    el('h2', { textContent: b.heading }),
    el('ol', { className: 'steps' }, b.items.map((i) => el('li', {}, [
      el('div', {}, [el('h3', { textContent: i.h }), el('p', { textContent: i.p })]),
    ]))),
  ]),

  prose: (b) => el('section', { className: 'prose' }, [
    ...eyebrow(b.eyebrow),
    el(b.lead ? 'h1' : 'h2', { textContent: b.heading }),
    ...b.body.map((t) => el('p', { textContent: t })),
  ]),

  faq: (b) => el('section', { className: 'faq' }, [
    ...eyebrow(b.eyebrow),
    el('h2', { textContent: b.heading }),
    ...b.items.map((i) => el('details', {}, [
      el('summary', { textContent: i.q }),
      el('p', { textContent: i.a }),
    ])),
  ]),

  band: (b) => el('section', { className: 'band' }, [
    el('h2', { textContent: b.heading }),
    el('p', { textContent: b.body }),
    el('a', { className: 'btn', href: b.cta.href, textContent: b.cta.label }),
  ]),

  contact: (b) => el('section', { className: 'contact' }, [
    ...eyebrow(b.eyebrow),
    el('h1', { textContent: b.heading }),
    el('p', { className: 'lead', textContent: b.body }),
    el('a', { className: 'email', href: `mailto:${b.email}`, textContent: b.email }),
  ]),
};

const draw = () => {
  const key = resolveRoute(location.hash);
  const page = routes[key];
  document.title = page.title;
  document.getElementById('app').replaceChildren(...page.blocks.map((b) => render[b.type](b)));
  document.querySelectorAll('nav a').forEach((a) => {
    if (a.dataset.route === key) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
};

if (typeof document !== 'undefined') {
  const links = () => Object.entries(routes).map(([key, page]) => {
    const a = el('a', { href: `#${key}`, textContent: page.nav });
    a.dataset.route = key;
    return a;
  });

  document.getElementById('nav').replaceChildren(...links());
  document.getElementById('foot-nav').replaceChildren(...links());
  document.getElementById('year').textContent = new Date().getFullYear();
  addEventListener('hashchange', draw);
  draw();
}
