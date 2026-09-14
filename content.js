// All site copy lives here. Edit this file, not app.js.
export const routes = {
  '/': {
    nav: 'Home',
    title: 'Yarray — AI software solutions & services',
    blocks: [
      { type: 'hero',
        heading: 'AI that ships, not AI that demos.',
        sub: 'Yarray builds and integrates AI software for Australian businesses — from a first proof of concept to a system your team depends on every day.',
        cta: { label: 'Start a conversation', href: '#/contact' } },

      { type: 'cards', heading: 'What we do', items: [
        { h: 'AI strategy & discovery',
          p: 'Short, focused engagements that find where AI actually pays off in your business — and where it does not. You leave with a costed shortlist, not a slide deck.' },
        { h: 'Custom AI applications',
          p: 'Assistants, document processing, search over your own data, and agent workflows. Built on your systems, with evaluation and guardrails from day one.' },
        { h: 'AI in your existing product',
          p: 'We add AI features to software you already run, without a rewrite. Existing auth, data model, and deployment pipeline stay intact.' },
        { h: 'Data & ML engineering',
          p: 'The pipelines, retrieval, and infrastructure underneath the model. Most failed AI projects fail here, so we start here.' },
        { h: 'Evaluation & reliability',
          p: 'Test suites for non-deterministic systems: accuracy benchmarks, regression checks, cost and latency budgets, monitoring in production.' },
        { h: 'Ongoing support',
          p: 'Models change, prompts drift, costs move. We stay on to keep what we built working as the ground shifts under it.' },
      ]},

      { type: 'cards', heading: 'How we work', items: [
        { h: '1. Scope', p: 'A week or two. We map the workflow, the data, and the constraints, then define what "working" means in numbers.' },
        { h: '2. Prove', p: 'A narrow build against real data, measured against that definition. If the numbers do not hold, we say so and stop.' },
        { h: '3. Ship', p: 'Production build with monitoring, evaluation, and documentation. Your team can run it without us.' },
        { h: '4. Hand over', p: 'Code, tests, and runbooks are yours. Retain us for support or take it in-house — both are fine.' },
      ]},

      { type: 'prose', heading: 'Why teams call us',
        body: [
          'Most AI pilots stall between the demo and production. The model works in a notebook, then meets real data, real permissions, real users, and real cost ceilings.',
          'We are software engineers first. We care about the boring parts — data access, error handling, evaluation, cost per request — because those decide whether an AI feature survives contact with your business.',
        ] },
    ],
  },

  '/services': {
    nav: 'Services',
    title: 'Services — Yarray',
    blocks: [
      { type: 'prose', heading: 'Services',
        body: ['Engagements are scoped tightly and priced up front. Most start with a discovery sprint, so both sides know what they are committing to before anyone commits to a build.'] },

      { type: 'cards', heading: 'Strategy & discovery', items: [
        { h: 'Opportunity mapping', p: 'We interview the people doing the work, watch the actual process, and identify where an AI system would remove real hours — and where it would only add risk.' },
        { h: 'Feasibility assessment', p: 'Data readiness, integration surface, privacy and compliance constraints, and a realistic cost per transaction, before you spend on a build.' },
        { h: 'Costed roadmap', p: 'A sequenced plan with effort, dependencies, and expected return for each piece, ordered so the first thing delivered is the first thing that pays.' },
      ]},

      { type: 'cards', heading: 'Build', items: [
        { h: 'Retrieval over your own data', p: 'Question answering and search across documents, tickets, contracts, and knowledge bases, with citations and permission-aware access.' },
        { h: 'Document & form processing', p: 'Extraction, classification, and validation for invoices, applications, claims, and compliance paperwork, with human review where it matters.' },
        { h: 'Agent workflows', p: 'Multi-step automation that calls your APIs and tools, with bounded scope, audit trails, and explicit stopping points.' },
        { h: 'Customer-facing assistants', p: 'Support and sales assistants grounded in your content, with escalation paths and a tone your brand can live with.' },
        { h: 'Internal tooling', p: 'The unglamorous internal apps that save a team ten hours a week and never make it onto a roadmap.' },
        { h: 'Model integration', p: 'Provider-agnostic. We pick the model that fits your accuracy, latency, cost, and data-residency requirements, and keep you able to switch.' },
      ]},

      { type: 'cards', heading: 'Run', items: [
        { h: 'Evaluation harnesses', p: 'Automated scoring against labelled cases, so a prompt or model change cannot quietly degrade quality.' },
        { h: 'Monitoring & cost control', p: 'Dashboards for accuracy, latency, spend, and failure modes, with alerts before your users notice.' },
        { h: 'Support & iteration', p: 'Retainer or block-of-hours arrangements to keep improving the system after launch.' },
      ]},

      { type: 'prose', heading: 'Engagement shapes',
        body: [
          'Discovery sprint — one to two weeks, fixed price, ending in a written recommendation you own whether or not you continue.',
          'Proof of concept — two to six weeks against real data, with a pass or fail measured on criteria agreed before we start.',
          'Production build — scoped from the proof of concept, delivered in increments you can see and use.',
          'Retainer — ongoing capacity for support, evaluation, and new features.',
        ] },
    ],
  },

  '/approach': {
    nav: 'Approach',
    title: 'Approach — Yarray',
    blocks: [
      { type: 'prose', heading: 'Approach',
        body: ['AI systems fail differently from ordinary software. They do not throw an exception — they return a plausible wrong answer. That single fact shapes how we build.'] },

      { type: 'cards', heading: 'Principles', items: [
        { h: 'Define "working" in numbers first', p: 'Before any build, we agree on the accuracy, latency, and cost thresholds that make the system worth running. Without a number, "it seems good" becomes the acceptance test.' },
        { h: 'Smallest useful scope', p: 'One workflow done properly beats a platform that half-covers six. Narrow scope is also the only honest way to price work.' },
        { h: 'Your data stays yours', p: 'We work within your privacy, residency, and retention requirements, and we are explicit about what leaves your environment and where it goes.' },
        { h: 'No lock-in', p: 'Standard languages, your cloud account, your repository. Model providers are swappable by design. Nothing we build requires us to keep running it.' },
        { h: 'A human in the loop where it counts', p: 'For decisions with legal, financial, or safety weight, the system recommends and a person decides. We design that boundary deliberately, not as an afterthought.' },
        { h: 'We will tell you not to build it', p: 'If a rules engine, a better form, or a database query solves the problem, that is the recommendation. It costs us a project and saves you one.' },
      ]},

      { type: 'prose', heading: 'What we need from you',
        body: [
          'Access to someone who does the work today — not a project sponsor, but the person whose afternoon the system is meant to give back.',
          'Sample data, warts included. Clean data hides the failure modes we are hired to handle.',
          'A decision on what a wrong answer costs. It determines how much review, evaluation, and guardrail the build needs.',
        ] },
    ],
  },

  '/about': {
    nav: 'About',
    title: 'About — Yarray',
    blocks: [
      { type: 'prose', heading: 'About Yarray',
        body: [
          'Yarray is an Australian AI software consultancy. We build AI systems for organisations that need them to work in production — not to appear in a press release.',
          'We are a small senior team by choice. The people who scope your project are the people who write the code, so nothing is lost between the first conversation and the delivery.',
          'Our background is in software engineering, data platforms, and applied machine learning. We have seen enough AI projects fail for structural reasons to be direct about what will and will not succeed.',
          'We work with businesses across Australia, remotely and on site.',
        ] },

      { type: 'cards', heading: 'Working with us', items: [
        { h: 'Fixed scope, fixed price', p: 'Where the work can be specified, it is quoted. Surprises on an invoice are our problem, not yours.' },
        { h: 'Plain English', p: 'You will not be handed a deck of jargon. If we cannot explain a design decision to a non-technical stakeholder, it is not a good enough decision.' },
        { h: 'Built to be handed over', p: 'Documented, tested, and running in your accounts. You can replace us without a migration project.' },
      ]},
    ],
  },

  '/contact': {
    nav: 'Contact',
    title: 'Contact — Yarray',
    blocks: [
      { type: 'contact', heading: 'Let us talk',
        body: 'Tell us the workflow you are trying to improve and what it costs you today. A first call is thirty minutes and free, and you will get a straight answer on whether AI is the right tool for it.',
        email: 'hello@yarray.com.au' },

      { type: 'prose', heading: 'Useful things to include',
        body: [
          'The process or decision you want to improve, and who does it now.',
          'What the data looks like and where it lives.',
          'Any deadline, budget range, or compliance constraint we should know about up front.',
        ] },
    ],
  },
};
