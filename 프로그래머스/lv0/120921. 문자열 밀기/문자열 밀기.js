function solution(A, B) {
    let count = 0;
    let arr = [...B];
    if (A === B) {
        return count;
    }
    for (let i = 0; i < A.length; i++) {
        arr.push(arr[0]);
        arr.shift();
        count += 1;
        if (A === arr.join('')) {
            break;
        }
    }
    if (A !== arr.join('')) {
        count = -1;
    }
    return count;
}