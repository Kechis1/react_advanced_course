export function divideWithRemainder(a: number, b: number) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }

    let result = a / b;
    if (result < 0) {
        result = Math.ceil(result);
    } else {
        result = Math.floor(result);
    }
    const remainder = a % b;

    return {
        result,
        remainder
    };
}
