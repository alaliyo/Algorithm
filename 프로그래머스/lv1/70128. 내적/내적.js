function solution(a, b) {
    return a.reduce((begin, e, i) => begin + (e * b[i]), 0);
}