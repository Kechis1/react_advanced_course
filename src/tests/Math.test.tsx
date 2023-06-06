import {divideWithRemainder} from "../services/math";

describe('MathService - divideWithRemainder()', () => {

    // Test the happy path
    test('returns correct result and remainder for non-zero inputs', () => {
        expect(divideWithRemainder(10, 3)).toEqual({result: 3, remainder: 1});
    });

    // Test edge case of zero remainder
    test('returns correct result and remainder for input with zero remainder', () => {
        expect(divideWithRemainder(9, 3)).toEqual({result: 3, remainder: 0});
    });

    // Test edge case of zero divisor
    test('throws error when trying to divide by zero', () => {
        expect(() => divideWithRemainder(10, 0)).toThrow('Cannot divide by zero.');
    });

    // Test edge case of zero dividend
    test('returns correct result and remainder for zero dividend', () => {
        expect(divideWithRemainder(0, 3)).toEqual({result: 0, remainder: 0});
    });

    // Test edge case of negative numbers
    test('returns correct result and remainder for negative inputs', () => {
        expect(divideWithRemainder(-10, 3)).toEqual({result: -3, remainder: -1});
        expect(divideWithRemainder(10, -3)).toEqual({result: -3, remainder: 1});
        expect(divideWithRemainder(-10, -3)).toEqual({result: 3, remainder: -1});
    });
})
