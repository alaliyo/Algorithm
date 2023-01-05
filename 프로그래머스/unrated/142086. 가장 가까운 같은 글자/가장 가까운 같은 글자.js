function solution(s) {
    let arr = [];
    let sArr = [...s];
    
    for(let i = 0; i < sArr.length; i++) {
        const e = sArr[i];
        const index = sArr.indexOf(e);
         if(index !== i) {
            arr.push(i - index);
            sArr.splice(index, 1, 0);
        } else {
            arr.push(-1);
        }
    }
    return arr;
}
