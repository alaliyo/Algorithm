function solution(num_list) {
    let num1 = "";
    let num2 = "";
    
    for (let e of num_list) {
        const strNum = e.toString();
        e % 2 === 0 ? num2 += strNum : num1 += strNum;
    }
    
    return Number(num1) + Number(num2);
}