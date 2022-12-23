function solution(n, arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toString(2).padStart(n, '0');
        arr2[i] = arr2[i].toString(2).padStart(n, '0');;
    }
    arr1.map((e, i) => arr.push(e.split('').map((a, j) => a === '1' || arr2[i][j] === '1' ? a = '1' : a = 0).join('').replace(/1|0/g, b => b === '1' ? '#' : ' ')));
    return arr;
}