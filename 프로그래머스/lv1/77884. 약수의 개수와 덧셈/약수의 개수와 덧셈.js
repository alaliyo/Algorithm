function solution(left, right) {
    let num = 0;
    while (left <= right) {
        Number.isInteger(Math.sqrt(left)) ? num -= left : num += left;
        left++;
    }
    return num;
}