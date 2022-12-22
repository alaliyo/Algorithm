function solution(sizes) {
    let min = [];
    let max = [];
    
    for (let i = 0; i < sizes.length; i++) {
        min.push(Math.min.apply(null, sizes[i]));
        max.push(Math.max.apply(null, sizes[i]));
    }
    
    min.sort((a, b) => b - a);
    max.sort((a, b) => b - a);
    
    return min[0] * max[0];
}