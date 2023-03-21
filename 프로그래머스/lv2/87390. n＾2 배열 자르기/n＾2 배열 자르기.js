function solution(n, left, right) {
    const answer = [];
    
    for (let i = left; i <= right; i++) {
        const num1 = Math.ceil((i+1) / n);
        const num2 = i % n + 1;
        answer.push(num1 >= num2 ? num1 : num2);
    }
    
    return answer;
}