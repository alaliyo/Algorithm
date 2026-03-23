function solution(a, b) {
    const oddA = a % 2;
    const oddB = b % 2;
    
    if (oddA && oddB) {
        return a ** 2 + b ** 2;
    } else if (!oddA && !oddB) {
        return Math.abs(a - b);
    } else {
        return 2 * (a + b)
    }
}