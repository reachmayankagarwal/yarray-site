import assert from 'node:assert/strict';
import { test } from 'node:test';

import { resolveRoute } from './app.js';

test('resolveRoute', () => {
  assert.equal(resolveRoute('#/services'), '/services');
  assert.equal(resolveRoute('#/services/'), '/services');
  assert.equal(resolveRoute('#/contact?utm=x'), '/contact');
  assert.equal(resolveRoute(''), '/');
  assert.equal(resolveRoute('#/nope'), '/');
});
