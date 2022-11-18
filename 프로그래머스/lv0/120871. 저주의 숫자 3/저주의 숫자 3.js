function solution(n) {
    let xNum = 0;
    let conut = n;
    for (let i = 1; i <= conut; i++) {
        xNum++;
        if (i % 3 === 0 || `${i}`.includes('3')) {
            conut++;
        }
    } 
    return xNum;
}