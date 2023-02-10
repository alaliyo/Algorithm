function solution(n,a,b){
    let count = 0;
    while (a !== b) {
        n /= 2;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        count += 1;
    }
    return count;
}