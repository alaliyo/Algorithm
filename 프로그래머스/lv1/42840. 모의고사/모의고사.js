function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    
    for (let i = 1; i <= answers.length; i++) {
        const anum = i % 5 === 0 ? 5 : i % 5;
        const bnum = i % 8 === 0 ? 8 : i % 8;
        const cnum = i % 10 === 0 ? 10 : i % 10;
        answers[i-1] === a[anum-1] ? aCount++ : null;
        answers[i-1] === b[bnum-1] ? bCount++ : null;
        answers[i-1] === c[cnum-1] ? cCount++ : null;
    }
    
    if (aCount > bCount && aCount > cCount) {return([1])}
    else if (bCount > aCount && bCount > cCount) {return([2])}
    else if (cCount > aCount && cCount > bCount) {return([3])}
    else if (bCount > aCount && bCount > cCount) {return([2])}
    else if (aCount === bCount && aCount > cCount) {return([1, 2])}
    else if (aCount === cCount && aCount > bCount) {return([1, 3])}
    else if (bCount === cCount && bCount > aCount) {return([2, 3])}
    else {return[1, 2, 3]}
}