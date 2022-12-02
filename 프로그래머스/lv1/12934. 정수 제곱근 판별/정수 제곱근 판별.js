function solution(n) {
    const nSqrt = Math.sqrt(n);
    return Number.isInteger(nSqrt) === true ? (nSqrt + 1) ** 2 : -1;
}