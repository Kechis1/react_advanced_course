export function doNTimes(fn: Function, n: number) {
    for(let i = 0 ; i < n; i++) {
        fn();
    }
}