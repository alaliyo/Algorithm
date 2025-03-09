function solution(myString, pat) {
    const newStr = [...myString].map(e => e === "A" ? "B" : "A").join("");
    return newStr.includes(pat) ? 1 : 0;
}