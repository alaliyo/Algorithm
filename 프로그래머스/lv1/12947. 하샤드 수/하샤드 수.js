function solution(x) {
    let num = x.toString().split('').reduce((a, b) => Number(a) + Number(b));
    return x % num === 0;
}