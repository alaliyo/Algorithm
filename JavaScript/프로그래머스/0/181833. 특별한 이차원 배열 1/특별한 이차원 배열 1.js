const forFc = (num) => new Array(num).fill(0);

function solution(n) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        answer.push(forFc(n));
        answer[i][i] = 1
    }
    
    return answer;
}