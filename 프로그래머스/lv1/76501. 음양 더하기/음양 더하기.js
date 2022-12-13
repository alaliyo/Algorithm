function solution(absolutes, signs) {
    return absolutes.reduce((n, e, i) => n + (e * (signs[i] ? 1 : -1)), 0)
}