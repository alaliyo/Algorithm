function solution(arr) {
    const answer = [];
    arr.forEach(e => answer.push(...Array(e).fill(e)));
    return answer;
}