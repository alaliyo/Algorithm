function solution(n) {
    let F0 = 0;
    let F1 = 1;
    let F2 = 1;
    
    for (let i = 3; i <= n; i++) {
        F0 = F1;
        F1 = F2;
        F2 = (F0 + F1) % 1234567;
    }
    
    return F2;
}