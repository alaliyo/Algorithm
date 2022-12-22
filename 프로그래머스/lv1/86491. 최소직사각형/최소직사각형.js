function solution(sizes) {
    let min = [];
    let max = [];
    
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b)
        min.push(sizes[i][0]);
        max.push(sizes[i][1]);
    }
    
    return Math.max.apply(null, min) * Math.max.apply(null, max);
}