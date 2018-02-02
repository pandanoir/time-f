const assert = require('assert');
const time = require('../dist/time-f.js');
describe('time', () => {
    it('should parse "3days" and "3d" to 2.592e+8.', () => {
        assert.equal(time('3days'), 2.592e+8);
        assert.equal(time('3day'), 2.592e+8);
        assert.equal(time('3d'), 2.592e+8);
    });
    it('should sum the terms in a string.', () => {
        assert.equal(time('3h 5m 10s'), 1.111e+7);
        assert.equal(time('10h 10m 10s'), 3.661e+7);
    });
    it('should trim a string.', () => {
        assert.equal(time('    3h     5m 10s   \t   '), 1.111e+7);
    });
    it('should parse a string regardless of uppercase aand lowercase.', () => {
        assert.equal(time('3HouR 5miN 10sEC'), 1.111e+7);
    });
    it('should take 1 to 3 arguments', () => {
        assert.equal(time(30), 30000);
        assert.equal(time(3, 30), 210000);
        assert.equal(time(1, 30, 50), ((1*60 + 30)*60 + 50) * 1000);
    });
    describe('.sec()', () => {
        it('should return the value in milliseconds', () => {
            assert.equal(time.sec(10), 10000);
        });
    });
    describe('.min()', () => {
        it('should return the value in milliseconds', () => {
            assert.equal(time.min(3), 1.8e+5);
        });
    });
    describe('.hour()', () => {
        it('should return the value in milliseconds', () => {
            assert.equal(time.hour(5), 1.8e+7);
        });
    });
});
