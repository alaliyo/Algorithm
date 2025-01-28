function solution(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    
    if (arr1Len === arr2Len) {
        const arr1Total = arr1.reduce((a, b) => a + b);
        const arr2Total = arr2.reduce((a, b) => a + b);
        
        return Math.sign(arr1Total - arr2Total);
    } else {
        return Math.sign(arr1Len - arr2Len);    
    } 
}