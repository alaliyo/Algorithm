function solution(nums) {
    let arr = [];
    const len = nums.length;
    let count = 0;
    
    for(let i = 0; i < len - 2; i++) {
        for(let j = i+1; j < len - 1; j++) {
            for(let k = j+1; k < len; k++) {
                arr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    const isPrime = (num) => {
        const sqrt = Math.ceil(Math.sqrt(num));
        for (let i = 3; i <= sqrt; i += 2) {
            if(num % i === 0) return 0;
        }
        return 1;
    }
    
    for (let i = 0; i < arr.length; i++) {        
        if(arr[i] % 2 !== 0) {
            count += isPrime(arr[i]);
        }
    }
    
    return count;
}