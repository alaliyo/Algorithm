function solution(N, stages) {
    let arr = [];
    let len = stages.length;
    
    for(let i = 1; i <= N; i++) {
        arr.push([i, 0]);
    }
    
    for(let i = 0; i < stages.length; i++) {
        N >= stages[i] ? arr[stages[i] - 1][1]++ : null;
    }

    for(let i = 0; i < N; i++) {
        len -= arr[i][1];
        arr[i][1] = (arr[i][1] / (len + arr[i][1])) * 100;
    }
    
    arr.sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i][0]);
    }
    
    return arr;
}