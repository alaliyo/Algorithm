function solution(n, lost, reserve) {
    
    let lost2 = lost.filter(e => !reserve.some(f => f === e)).sort((a, b) => a - b);
    let reserve2 = reserve.filter(e => !lost.some(f => f === e)).sort((a, b) => a - b);;
    
    n -= lost2.length;
    for(let i = 0; i < lost2.length; i++) {
        for(let j = 0; j < reserve2.length; j++) {
            if(lost2[i] === reserve2[j] - 1) {
                n++;
                reserve2.splice(j, 1);
                break;
            }
            
            if(lost2[i] === reserve2[j] + 1) {
                n++;
                reserve2.splice(j, 1);
                break;
            }
        }
    }
    return n;
}