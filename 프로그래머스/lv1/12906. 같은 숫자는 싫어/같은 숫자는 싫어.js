function solution(arr) {
    let numArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            numArr.push(arr[i]);
        }
    }
    return numArr;
}