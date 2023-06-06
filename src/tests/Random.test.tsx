import { doNTimes } from "../services/random";

describe('Test mock of RandomService - doNTimes()', () => {
    test('calls the callback n times', () => {
        const mockCallback = jest.fn(() => 42);
        doNTimes(mockCallback, 5);
        expect(mockCallback).toHaveBeenCalledTimes(5);
    });
    test('The callback has not been called', () => {
        const mockCallback = jest.fn(() => 42);
        doNTimes(mockCallback, 0);
        expect(mockCallback).not.toHaveBeenCalled();
    });
});
