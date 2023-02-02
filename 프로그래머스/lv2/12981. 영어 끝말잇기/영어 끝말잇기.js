function solution(n, words) {
    const arr = [];
    
    for (let i = 1; i < words.length; i++) {
        const befor = words[i-1];
        const now = words[i];
        
        if (befor[befor.length-1] !== now[0] || words.indexOf(now) !== i) {
            let num = i + 1;
            arr.push(num % n === 0 ? n : num % n);
            arr.push(Math.ceil(num / n));
            break;
        }
    }
    return arr.length === 0 ? [0, 0] : arr;
}