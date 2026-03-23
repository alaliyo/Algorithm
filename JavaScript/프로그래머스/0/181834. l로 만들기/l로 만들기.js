function solution(myString) {
    const answer = myString.split("").map(e => e > "l" ? e : "l");
    return answer.join("");
}