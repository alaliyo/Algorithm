function solution(a, b, n) {
    let count = 0;
    
    while (n >= a) {
        const getNum = (Math.floor(n / a) * b);
        count += getNum;
        n = n % a + getNum;
    }
    
    return count;
}