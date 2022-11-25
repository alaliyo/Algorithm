function solution(num, total) {
    let arr = [];
    let midNum = Math.floor(total / num);
    let Number = total % num === 0 ? Math.floor(num / 2) : num / 2 - 1;
    let start = midNum - Number;

    for (let i = 0; i < num; i++) {
        arr.push(start + i);
    }
    return arr;
}

