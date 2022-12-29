function solution(n) {
    let nums = [...Array(n+1).keys()];
    let arr = [2];

    const isPrime = (num) => {
        if(num === 1) { 
            return 0;
        }
        
        if(num % 2 === 0) { 
            return 0;
        }

        const sqrt = parseInt(Math.sqrt(num));

        for (let i = 3; i <= sqrt; i += 2) {
            if(num % i === 0) return 0;
        }
        return num;
    }

    for (let i = 0; i < nums.length; i++) {
        const e = isPrime(nums[i]);
        e !== 0 ? arr.push(e) : null;
    }

    return arr.length;
}