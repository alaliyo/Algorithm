function solution(s) {
    let sArr = s.split(' ');
    while (sArr.indexOf('Z') !== -1) {
        sArr.splice(sArr.indexOf('Z') - 1, 2);
    }
    return sArr.reduce((a, b) => Number(a) + Number(b), 0);
}