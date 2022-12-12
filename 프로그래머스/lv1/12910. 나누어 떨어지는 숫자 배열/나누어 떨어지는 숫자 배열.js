function solution(arr, divisor) {
    let arr1 = arr.filter(e => e % divisor === 0).sort((a, b) => a - b);

    return arr1.length !== 0 ? arr1 : [-1];
}