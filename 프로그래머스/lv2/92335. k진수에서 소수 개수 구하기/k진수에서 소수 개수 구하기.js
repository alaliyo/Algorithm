function solution(n, k) {
    let count = 0;
    const arr = n.toString(k).split('0');
    
    function isPrime(N) {
        N = Number(N);
        if (N === 1 || N === 0) return false;
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i === 0) return false;
        }

        return count++;
    }
    
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        isPrime(e);
    }

    return count;
}