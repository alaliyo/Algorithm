function solution(absolutes, signs) {
    return absolutes.reduce((a, e, i) => a + (e * (signs[i] ? 1 : -1)), 0)
}