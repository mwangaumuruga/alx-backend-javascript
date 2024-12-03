// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return 4 for inputs 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should round 3.7 to 4 and return 5 for inputs 1 and 3.7', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should round 1.2 to 1 and 3.7 to 4 and return 5', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should round 1.5 to 2 and 3.7 to 4 and return 6', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });

    it('should return correct value for large numbers', () => {
        assert.strictEqual(calculateNumber(1000.5, 2000.6), 3002);
    });
});

