function solution(arr) {
    const min = arr.indexOf(Math.min(...arr))
    arr.splice(min, 1);
    return arr.length !== 0 ? arr : [-1];
}