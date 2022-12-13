function solution(absolutes, signs) {
    
    signs.map((e, i) => e === true ? absolutes[i] : absolutes[i] *= -1)
    return absolutes.reduce((a, b) => a + b);
}