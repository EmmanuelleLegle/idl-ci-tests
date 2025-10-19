const { test, expect } = require('@jest/globals');
const sum = require('./sum');
test('addition de base', () => expect(sum(2, 3)).toBe(5));
