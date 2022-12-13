function solution(absolutes, signs) {
    signs.map((e, i) => e === false ? absolutes[i] *= -1 : null);
    return absolutes.reduce((a, b) => a + b);
}