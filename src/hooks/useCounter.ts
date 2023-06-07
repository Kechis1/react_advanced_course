import {useState} from "react";

export function useCounter(initialValue: number) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const randomize = () => setCount(Math.random());

    return { count, increment, randomize };
}
