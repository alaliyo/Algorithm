function solution(arr, intervals) {
    const answer = [];
    
    const a = (b) => {
        for (let i = b[0]; i <= b[1]; i++) {
            answer.push(arr[i]);
        }
    }
    
    for (let e of intervals) {
        a(e);
    }
    
    return answer;
}