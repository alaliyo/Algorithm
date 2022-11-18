function solution(n) {
    let xNum = 0;
    for (let i = 1; i <= n; i++) {
        xNum++;
        if (i % 3 === 0 || `${i}`.includes('3')) {
            n++;
        }
    } 
    return xNum;
}