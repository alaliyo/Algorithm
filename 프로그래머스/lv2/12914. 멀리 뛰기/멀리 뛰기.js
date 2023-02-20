function solution(n) {
    if (n <= 2) return n;
    let num1 = 1;
    let num2 = 2;
    let num3 = 0;

    for (let i = 2; i < n; i++) {
        num3 = (num1 + num2) % 1234567;
        num1 = num2;
        num2 = num3;
    }

    return num3;
}