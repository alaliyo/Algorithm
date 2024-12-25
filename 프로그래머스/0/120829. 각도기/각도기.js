function solution(angle) {
    let arr = [0, 90, 91, 180];
    return arr.filter(e => e <= angle).length;
}