function solution(n, control) {
    const numobj = { w: 1, s: -1, d: 10, a: -10 };
    const arr = control.split("").map(e => numobj[e]);
    return n + arr.reduce((a, b) => a + b);
}