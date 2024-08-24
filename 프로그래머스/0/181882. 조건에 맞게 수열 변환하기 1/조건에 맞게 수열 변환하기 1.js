function solution(arr) {
    var answer = [];
    for (const item of arr) {
        if (item >= 50 && item % 2 === 0) {
            answer.push(item / 2);
        } else if (item < 50 && item % 2 === 1) {
            answer.push(item * 2);
        } else {
            answer.push(item);
        }
    }
    return answer;
}