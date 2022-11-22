function solution(polynomial) {
    let arr = polynomial.split(' + ');
    let x = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('x')) {
            arr[i][0] === 'x' ? x += 1 : x += Number(arr[i].replace('x', ''));
        }
        Number(arr[i]) > 0 ? num += Number(arr[i]) : null;
    }
    
    if (num === 0) {
        return x === 1 ? 'x' : `${x}x`;
    } else if (x === 0) {
        return `${num}`;
    }
    return x === 1 ? `x + ${num}` : `${x}x + ${num}`;
}