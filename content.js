// All site copy lives here. Edit this file, not app.js.
export const routes = {
  '/': {
    nav: 'Home',
    title: 'Yarray',
    blocks: [
      { type: 'hero', heading: 'PLACEHOLDER: one-line value proposition',
        sub: 'PLACEHOLDER: who you help and what changes for them.',
        cta: { label: 'Get in touch', href: '#/contact' } },
      { type: 'cards', heading: 'What we do', items: [
        { h: 'Service one', p: 'PLACEHOLDER: short description.' },
        { h: 'Service two', p: 'PLACEHOLDER: short description.' },
        { h: 'Service three', p: 'PLACEHOLDER: short description.' },
      ]},
    ],
  },
  '/services': {
    nav: 'Services',
    title: 'Services — Yarray',
    blocks: [
      { type: 'prose', heading: 'Services',
        body: ['PLACEHOLDER: what you offer, in plain words.',
               'PLACEHOLDER: how engagement works, pricing shape, turnaround.'] },
    ],
  },
  '/about': {
    nav: 'About',
    title: 'About — Yarray',
    blocks: [
      { type: 'prose', heading: 'About',
        body: ['PLACEHOLDER: who is behind Yarray and why.',
               'PLACEHOLDER: location, ABN, credentials.'] },
    ],
  },
  '/contact': {
    nav: 'Contact',
    title: 'Contact — Yarray',
    blocks: [
      { type: 'contact', heading: 'Contact',
        body: 'Email is fastest. Replace the form action with a real endpoint before launch.',
        email: 'hello@yarray.com.au' },
    ],
  },
};
