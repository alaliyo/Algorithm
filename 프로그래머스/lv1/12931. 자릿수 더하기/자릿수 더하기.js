function solution(N) {
    return N.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
}