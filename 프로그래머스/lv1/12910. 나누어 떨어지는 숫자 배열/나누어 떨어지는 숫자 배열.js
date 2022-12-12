function solution(arr, divisor) {
    let arr1 = arr.filter(e => e % divisor === 0).sort((a, b) => a - b);
    if (arr1.length === 0) {
        return [-1]
    }
    return arr1;
}