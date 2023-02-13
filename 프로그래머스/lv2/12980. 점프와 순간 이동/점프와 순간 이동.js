function solution(n) {
    let count = 1; 
    while (n !== 1) {
        while (n % 2 === 0) {
            n /= 2;
        }
        if (n !== 1) {
            n -= 1;
        }
        
        if (n === 1) return count;
        count++;
    }
    
    return count;
}