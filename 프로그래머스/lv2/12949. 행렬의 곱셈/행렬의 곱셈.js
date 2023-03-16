function solution(arr1, arr2) {
    const arr = [];
    
    for (let z = 0; z < arr1.length; z++) {
        const countArr = [];
        
        for (let i = 0; i < arr2[0].length; i++) {
            let count = 0; 
            
            for (let j = 0; j < arr1[0].length; j++) {
                count += (arr1[z][j] * arr2[j][i]);
            }
            countArr.push(count);
        }
        arr.push(countArr);
    }   
    return arr;
}