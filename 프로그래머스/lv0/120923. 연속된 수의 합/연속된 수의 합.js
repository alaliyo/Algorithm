function solution(num, total) {
    let arr = [];
    let midNum = Math.floor(total / num);
    let sub = num % 2 === 0 ? num / 2 - 1 : Math.floor(num / 2);
    let start = midNum - sub;

    for (let i = 0; i < num; i++) {
        arr.push(start + i);
    }
    return arr;
}

