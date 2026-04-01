function solution(my_string, m, c) {
    let answer = "";
    const len4 = Math.floor(my_string.length / m);
    
    for (let i = 0; i < len4; i++) {
        answer += my_string[c + m * i - 1];
    };
    
    return answer;
}