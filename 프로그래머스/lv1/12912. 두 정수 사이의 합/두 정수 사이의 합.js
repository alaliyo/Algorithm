function solution(a, b) {
    let num = 0;
    let arr = [a, b].sort((num1, num2) => num1 - num2);
    for (let i = arr[0]; arr[0] <= arr[1]; arr[0]++) {
        num += arr[0];
    }
    return num;
}