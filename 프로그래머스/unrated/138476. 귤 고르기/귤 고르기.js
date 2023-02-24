function solution(k, tangerine) {
    let count = 0;
    let num = 0;
    const obj = {};
    
    tangerine.forEach((e) => (obj[e] = (obj[e] || 0) + 1));
    const arr = Object.values(obj).sort((a, b) => b - a);
    
    while (k > 0) {
        k -= arr[num];
        num++
        count++;
    }

  return count;
}