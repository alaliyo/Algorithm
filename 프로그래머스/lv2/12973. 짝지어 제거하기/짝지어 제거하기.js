function solution(s){
    let sArr = [];
    
    for (let i = 0; i < s.length; i++) {
        sArr.push(s[i]);
        if (sArr[sArr.length-2] === sArr[sArr.length-1]) {
            for(let i = 0; i < 2; i++) {
                sArr.pop();
            }
        }
    }
    return sArr.length === 0 ? 1 : 0;
}