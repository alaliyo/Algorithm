function solution(n) {
    let nums = [];
    for (let i = 2; i <= n; i++) {
        nums.push(i);
    }
    
    let arr = [2];
    
    const isPrime = (num) => {
        if(num % 2 === 0) { 
            return 0;
        }
        
        const sqrt = parseInt(Math.sqrt(num));

        for (let i = 3; i <= sqrt; i += 2) {
            if(num % i === 0) {return 0;}
        }
        return num;
    }
    
    for (let i = 0; i < nums.length; i++) {
        const e = isPrime(nums[i]);
        e !== 0 ? arr.push(e) : null;
    }
                
    return arr.length;
}