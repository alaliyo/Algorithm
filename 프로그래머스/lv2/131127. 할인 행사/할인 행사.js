function solution(want, number, discount) {
    let answer = 0;
    const obj = {};
    const len = discount.length - want.length;
    
    for (let i in want) {
        obj[want[i]] = number[i]
    }
    
    for (let i = 0; i < len; i++) {
        const copyObj = Object.assign({}, obj);
        let sum = 0;
        
        for (let j = i; j < discount.length; j++) {
            sum++;
            
            if (copyObj.hasOwnProperty(discount[j])) {
                copyObj[discount[j]]--;
                
                if (copyObj[discount[j]] === 0) {
                    delete copyObj[discount[j]];
                } 
            }
            
            if (Object.keys(copyObj).length === 0) {
                if (sum <= 10) {
                    answer++;
                }
                
                break;
            }
        }
    }
    
    return answer;
}