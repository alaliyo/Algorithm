function solution(k, m, score) {
    let count = 0;
    let arr = [];
    score.sort((a, b) => b - a);
    for(let i = 0; i <= score.length / m - 1; i++) {
        arr.push(score.slice(i * m, i * m + m))
    }
    
    arr.map(e => count += e[m-1] * m);
    return count;
}