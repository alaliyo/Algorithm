function solution(dots) {
    let X = [...new Set(dots.map(a => a[0]))];
    let Y = [...new Set(dots.map(a => a[1]))];
    return (Math.abs(X[0] - X[1])) * (Math.abs(Y[0] - Y[1]));
}