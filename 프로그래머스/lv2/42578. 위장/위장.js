function solution(clothes) {
    let count = 1;
    const obj = {};

    clothes.forEach(e => (obj[e[1]] = (obj[e[1]] || 0) + 1));

    for (const key in obj) {
        count *= obj[key] + 1
    }
    
    return count - 1;
}
