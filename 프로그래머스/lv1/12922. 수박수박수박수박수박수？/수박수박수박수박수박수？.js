function solution(n) {
    let arr = ['수', '박'];
    let str = '';
    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? str += arr[0] : str += arr[1]
    }
    
    return str;
}