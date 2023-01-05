function solution(s) {
    let arr = [];
    let sArr = s.split('');
    let a = sArr.map((e, i) => {
        if (sArr.indexOf(e) !== i) {
            arr.push(i - sArr.indexOf(e));
            delete sArr[sArr.indexOf(e)];
        } else {
            arr.push(-1);
        }
    });
    return arr;
}