function solution(dartResult) {
    let arr = dartResult.split('');
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '1' && arr[i+1] === '0') {
            arr.splice(i, 2, 10);
        }
    }
    
    for(let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if(e === 'S' || e === 'D' || e === 'T') {
            e === 'S' ? arr[i-1] = Number(arr[i-1]) : e === 'D' ? arr[i-1] **= 2 : arr[i-1] **= 3;
        } 
        if (e === '#') {
            arr[i-2] *= -1;
        }
    }
    
    let arr2 = arr.filter(e => (/[0-9]/).test(e) || e === '*');

    for(let i = 0; i < arr2.length; i++) {
        if(arr2[1] === '*' && i === 1) {
            arr2[0] *= 2;
            arr2.splice(1, 1);
        } 
        if(arr2[i] === '*' && i > 1) {
            arr2[i-2] *= 2;
            arr2[i-1] *= 2;
            arr2.splice(i, 1);
        }
    }

    return arr2.reduce((a, b) => a + b);
}