function solution(absolutes, signs) {
    signs.map((e, i) => e === true ? absolutes[i] = +absolutes[i] : absolutes[i] = -absolutes[i])
    return absolutes.reduce((a, b) => a +b );
}