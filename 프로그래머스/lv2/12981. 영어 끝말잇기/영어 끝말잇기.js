function solution(n, words) {
    const arr = [];
    for (let i = 1; i < words.length; i++) {        
        if (words[i-1][words[i-1].length-1] !== words[i][0] || words.indexOf(words[i]) !== i) {
            arr.push((i + 1) % n === 0 ? n : (i + 1) % n);
            arr.push(Math.ceil((i + 1) / n));
            break;
        }
    }
    return arr.length === 0 ? [0, 0] : arr;
}