function solution(arr) {
    const min = Math.min.apply(Math, arr)
    const numArr = arr.filter(e => e !== min)
    return numArr.length !== 0 ? numArr : [-1];
}