function solution(k, m, score) {
    let count = 0;
    score.sort((a, b) => b - a);
    for(let i = 0; i <= score.length / m - 1; i++) {
        count += score.slice(i * m, i * m + m)[m-1] * m
    }

    return count;
}