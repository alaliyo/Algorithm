function solution(my_string) {
    const answer = [my_string];
    const len = my_string.length;
    
    for (let i = 1; i < len; i++) {
        answer.push(my_string.slice(i, len));
    }
    
    return answer.sort();
}