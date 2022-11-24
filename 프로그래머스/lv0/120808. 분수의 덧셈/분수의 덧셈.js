function solution(denum1, num1, denum2, num2) {
    let answer = [];
    let gcd = 0;
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    const arr = [denum, num];
    
    for(let i = 1; i <= Math.min.apply(null, arr); i++) { 
        if ((Math.min.apply(null, arr)%i == 0) && (Math.max.apply(null, arr)%i == 0)) { 
        gcd = i } 
    }
    answer.push(denum / gcd, num / gcd);

    return answer;
}