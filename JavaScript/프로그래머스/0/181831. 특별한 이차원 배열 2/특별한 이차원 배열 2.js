function solution(arr) {
    let answer = 1;
    const len = arr.length;
    
    for (let i = 0; i < len; i++) {
        if (!answer) break;
        
        for (let j = 0; j < len; j++) {
            if (!answer) break;
            
            const num1 = arr[i][j];
            const num2 = arr[j][i];
            
            if (num1 !== num2) answer = 0;
        }
    }
    
    return answer;
}