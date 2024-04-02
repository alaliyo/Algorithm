function solution(a, b, c, d) {
    const array = [a, b, c, d];
    const getElCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
    const reduceValObj = getElCount(array);
    const reduceValArr = Object.entries(reduceValObj).sort((a, b) => b[1] - a[1]);
    const reduceValArrLen = reduceValArr.length;
    
    if (reduceValArrLen === 1) {
        return 1111 * a;
    } else if (reduceValArrLen === 2) {
        const i0key = Number(reduceValArr[0][0]);
        const i0val = reduceValArr[0][1];
        const i1key = Number(reduceValArr[1][0]);
        const i1val = reduceValArr[1][1];
        return i0val === 3 ? (10 * i0key + i1key) ** 2 : (i0key + i1key) * Math.abs(i0key - i1key);
    } else if (reduceValArrLen === 3) {
        return Number(reduceValArr[1][0]) * Number(reduceValArr[2][0]);
    } else {
        return Number(reduceValArr[0][0]);
    }
}