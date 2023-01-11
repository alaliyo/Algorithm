function solution(X, Y) {   
    const obj = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
    
    const xObj = obj([...X]);
    const yObj = obj([...Y]);
    let NewObj = {};
    let arr = [];

    for (let i in xObj) {
        for (let j in yObj) {
            if (i === j) {
                NewObj[i] = Math.min(xObj[i], yObj[j]);
            }
        }
    }

    for (let i in NewObj) {
        for (let j = 0; j < NewObj[i]; j++) {
            arr.push(i);
        }
    }

    arr.reverse();
    if (arr.length === 0) return "-1";
    if (arr[0] === '0') return '0';
    return arr.join('');
}