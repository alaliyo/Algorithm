function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    
    let arr = [];
    
    for (let i = 1; i <= answers.length; i++) {
        const anum = i % 5 === 0 ? 5 : i % 5;
        const bnum = i % 8 === 0 ? 8 : i % 8;
        const cnum = i % 10 === 0 ? 10 : i % 10;
        answers[i-1] === a[anum-1] ? aCount++ : null;
        answers[i-1] === b[bnum-1] ? bCount++ : null;
        answers[i-1] === c[cnum-1] ? cCount++ : null;
    }
    
    const max = Math.max(aCount, bCount, cCount);
    
    if (max === aCount) {arr.push(1)} 
    if (max === bCount) {arr.push(2)}
    if (max === cCount) {arr.push(3)} 
    
    return arr;
}