function solution(n) {
    let count = 0;
    let num = 1
    while (n > 0) {
        if (n % num === 0) {
            count += 1;
        }
        n -= num;
        num += 1;
    }
    return count;
}