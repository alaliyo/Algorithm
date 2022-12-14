function solution(s) {
    let len = s.length;
    let lenHalf = len / 2
    return len % 2 === 0 ? s.slice(lenHalf - 1, lenHalf + 1) : s[Math.floor(lenHalf)];
}