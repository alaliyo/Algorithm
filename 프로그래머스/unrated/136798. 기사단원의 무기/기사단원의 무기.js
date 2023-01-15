function solution(number, limit, power) {
    let Fe = 1;
    
    for (let i = 2; i <= number; i++) {
        let count = 1;
        
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                count++;
                if(i / j != j) count++;
            }
        }
        
        count++;
        
        if (count <= limit) {
            Fe += count;
        } else {
            Fe += power;
        }
    }
    
    return Fe;
}