function solution(arr) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

    return arr.reduce((a, b) => a * b / gcd(a, b));
}