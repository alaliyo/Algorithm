function solution(want, number, discount) {
    let answer = 0;
    let count = discount.length;
    const obj = {};
    const len = discount.length - want.length;
    
    for (let i in want) {
        obj[want[i]] = number[i]
    }
    
    for (let i = 0; i < len; i++) {
        const a = Object.assign({}, obj);
        let sum = 0;
        
        for (let j = i; j < discount.length; j++) {
            sum++;
            if (a.hasOwnProperty(discount[j])) {
                a[discount[j]]--;
                if (a[discount[j]] === 0) {
                    delete a[discount[j]];
                } 
            }
            
            if (Object.keys(a).length === 0) {
                if (sum <= 10) {
                    answer++;
                }
                break;
            }
        }
    }
    
    return answer;
}