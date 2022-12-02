function solution(N) {
    return arr = N.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
}