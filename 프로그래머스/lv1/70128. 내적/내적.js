function solution(a, b) {
    return a.reduce((c, d, i) => c + (d * b[i]), 0);
}