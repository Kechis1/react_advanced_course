import {useCounter} from "../../hooks/useCounter";
import {act, renderHook} from "@testing-library/react";

describe('useCounter custom hook', () => {
    it('should initialize with the correct value', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    });

    it('should increment the count', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(11);
    });

    it('should set a random count', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.randomize();
        });

        // As this is random, we can't predict the exact value.
        // We'll just test that it's a number and different from the initial value.
        expect(typeof result.current.count).toBe('number');
        expect(result.current.count).not.toBe(10);
    });
});
