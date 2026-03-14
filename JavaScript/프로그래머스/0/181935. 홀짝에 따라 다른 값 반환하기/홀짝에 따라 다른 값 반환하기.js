function solution(n) {
    let answer = 0;
    
    for (let i = n; i > 0; i -= 2) {
        answer += i % 2 === 0 ? i ** 2 : i;
    }
    
    return answer;
}