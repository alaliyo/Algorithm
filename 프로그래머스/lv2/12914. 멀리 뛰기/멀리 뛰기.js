function solution(n) {
    if (n <= 2) return n;
    let n1 = 1;
    let n2 = 2;
    let nValue = 0;

    for (let i = 2; i < n; i++) {
        nValue = (n1 + n2) % 1234567;
        n1 = n2;
        n2 = nValue;
    }

    return nValue;
}