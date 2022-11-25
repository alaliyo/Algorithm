function solution(num, total) {
    let arr = [];
    let middleNumber = Math.floor(total / num);
    let subtracNumber = total % num === 0 ? Math.floor(num / 2) : num / 2 - 1;
    let startNumber = middleNumber - subtracNumber;

    for (let i = 0; i < num; i++) {
        arr.push(startNumber + i);
    }
    return arr;
}

