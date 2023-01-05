function solution(s) {
    let arr = [];
    let sArr = s.split('');
    
    for(let i = 0; i < sArr.length; i++) {
        const e = sArr[i];
         if (sArr.indexOf(e) !== i) {
            arr.push(i - sArr.indexOf(e));
            sArr[sArr.indexOf(e)] = ' ';
        } else {
            arr.push(-1);
        }
    }
    return arr;
}
