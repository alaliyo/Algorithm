function solution(arr) {
    const numArr = arr.filter(e => e !== Math.min.apply(Math, arr))
    if (numArr.length === 0) {
        return [-1];
    }
    return numArr;
}