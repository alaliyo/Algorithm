function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let aCount = answers.filter((e, i) => e === a[i % a.length]).length;
    let bCount = answers.filter((e, i) => e === b[i % b.length]).length;
    let cCount = answers.filter((e, i) => e === c[i % c.length]).length;

    let arr = [];
    
    const max = Math.max(aCount, bCount, cCount);
    
    if (max === aCount) {arr.push(1)} 
    if (max === bCount) {arr.push(2)}
    if (max === cCount) {arr.push(3)} 
    
    return arr;
}