function solution(num_list) {
    let num1 = "";
    let num2 = "";
    
    for (let e of num_list) {
        e % 2 === 0 ? num2 += e : num1 += e;
    }
    
    return Number(num1) + Number(num2);
}