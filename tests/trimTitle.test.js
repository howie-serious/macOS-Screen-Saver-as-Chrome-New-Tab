const { test } = require('node:test');
const assert = require('node:assert');
const { trimTitle } = require('../src/js/popup');

test('trims ASCII strings longer than limit with ellipsis', () => {
  const result = trimTitle('abcdefghijklmnopqrstuvwxyz', 10);
  assert.strictEqual(result, 'abcdefghij...');
});

test('multibyte characters count as length 2 and are trimmed correctly', () => {
  const result = trimTitle('你好你好你好', 5);
  assert.strictEqual(result, '你好...');
});
