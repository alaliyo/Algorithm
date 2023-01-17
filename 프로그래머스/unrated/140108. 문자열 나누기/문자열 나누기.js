function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i) {
        let len = 0;
        
        for (let j = i; j < s.length; j++) {
            s[i] === s[j] ? len += 1 : len -= 1;
            
            if (len === 0) {
                i = j + 1;
                len = 0;
                count += 1;
                break;
            }
            
            if (j === s.length - 1) {
                count += 1;
                i = j + 1;
            }
        }
    }
    
    return count;
}