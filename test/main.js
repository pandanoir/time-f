const assert = require('assert');
const time = require('../dist/time-f.js');
describe('time', () => {
    it('should parse "3days" and "3d" to 2.592e+8.', () => {
        assert.equal(time('3days'), 2.592e+8);
        assert.equal(time('3day'), 2.592e+8);
        assert.equal(time('3d'), 2.592e+8);
    });
    it('should sum the terms in string.', () => {
        assert.equal(time('3h 5m 10s'), 1.111e+7);
        assert.equal(time('10h 10m 10s'), 3.661e+7);
    });
});
