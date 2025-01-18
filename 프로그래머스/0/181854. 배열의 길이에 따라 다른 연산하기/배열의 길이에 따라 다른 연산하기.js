function solution(arr, n) {
    const newArr = [];
    const len = arr.length;
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        if (len % 2 === 0) {
            newArr.push(i % 2 === 0 ? item : item + n);
        } else {
            newArr.push(i % 2 === 0 ? item + n : item);
        }
    }
    
    return newArr;
}