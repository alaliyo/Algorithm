function solution(a, b) {
    let num = 0;
    let min = Math.min(a, b);
    const max = Math.max(a, b);
    for (let i = min; min <= max; min++) {
        num += min;
    }
    return num;
}