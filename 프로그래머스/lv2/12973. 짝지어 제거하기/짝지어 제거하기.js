function solution(s){
    let sArr = [];
    
    for (let i of s) {
        sArr.push(i);
        if (sArr[sArr.length-2] === sArr[sArr.length-1]) {
            for(let j = 0; j < 2; j++) {
                sArr.pop();
            }
        }
    }
    return sArr.length === 0 ? 1 : 0;
}