function solution(names) {
    const answer = [];
    for (let i in names) {
        if (i % 5 === 0) answer.push(names[i]);
    }
    return answer;
}