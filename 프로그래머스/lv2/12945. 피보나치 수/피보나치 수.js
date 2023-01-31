function solution(n) {
    let F1 = 0;
    let F2 = 1;
    let F3 = 1;
    
    for (let i = 3; i <= n; i++) {
        F1 = F2;
        F2 = F3;
        F3 = (F1 + F2) % 1234567;
    }
    
    return F3;
}