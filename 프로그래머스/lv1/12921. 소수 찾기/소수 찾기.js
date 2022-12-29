function solution(n) {
    let nums = [];
    let count = 1;
    for (let i = 2; i <= n; i++) {
        nums.push(i);
    }

    function isPrime(num) {
        for (let i = 3; i <= Math.ceil(Math.sqrt(num)); i += 2) {
            if(num % i === 0) return 0
        }
        return 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 !== 0) {
            count += isPrime(nums[i]);
            
        }
    }

    return count;
}