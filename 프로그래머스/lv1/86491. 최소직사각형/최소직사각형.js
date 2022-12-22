function solution(sizes) {
    let min = [];
    let max = [];
    
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b)
        min.push(sizes[i][0]);
        max.push(sizes[i][1]);
    }
    
    min.sort((a, b) => b - a);
    max.sort((a, b) => b - a);
    
    return min[0] * max[0];
}