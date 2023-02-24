function solution(k, tangerine) {
    let count = 0;
    const obj = {};
    
    tangerine.forEach((e) => (obj[e] = (obj[e] || 0) + 1));
    const arr = Object.values(obj).sort((a, b) => b - a);

    for (const e of arr) {
        count++;
        
        if (k > e) k -= e;
        else break;
    }

  return count;
}