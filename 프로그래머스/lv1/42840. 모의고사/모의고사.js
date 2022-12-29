function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let aCount = answers.filter((e, i) => e === a[i % 5]).length;
    let bCount = answers.filter((e, i) => e === b[i % 8]).length;
    let cCount = answers.filter((e, i) => e === c[i % 10]).length;

    let arr = [];
    
    const max = Math.max(aCount, bCount, cCount);
    
    if (max === aCount) {arr.push(1)} 
    if (max === bCount) {arr.push(2)}
    if (max === cCount) {arr.push(3)} 
    
    return arr;
}