function solution(myString) {
    let answer = '';
    const arr = myString.split("");
    for (let e of arr) {
        answer += e > "l" ? e : "l";  
    }
    return answer;
}