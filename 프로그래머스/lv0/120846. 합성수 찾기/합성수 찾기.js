function solution(n) {
    let answer = 0;
    if (n >= 4) {
        answer += 1;
    }
    if (n >= 6) {
        answer += 1;
    }
    for (let i = 8; i <= n; i++) {
        (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) ? answer += 1 : null
    }
    return answer;
}