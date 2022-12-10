function solution(a, b) {
    const dif = Math.abs(a - b);
    if (dif % 2 === 0) {
        return (a + b) / 2 * (dif+1)
    } else {
        return (a + b) * ((dif + 1) / 2)
    }
}