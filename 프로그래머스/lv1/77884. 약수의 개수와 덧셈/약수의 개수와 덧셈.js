function solution(left, right) {
    let arr = [];
    while (left <= right) {
        arr.push(left);
        left++
    }

    for (let i = 0; i < arr.length; i++) {
        let arrNum = [];
        for (let j = 0; j <= arr[i]; j++) {
            arr[i] % j === 0 ? arrNum.push(j) : null
        }
        arrNum.length % 2 !== 0 ? arr[i] *= -1 : null
    }

    return arr.reduce((f, e) => f + e , 0);
}