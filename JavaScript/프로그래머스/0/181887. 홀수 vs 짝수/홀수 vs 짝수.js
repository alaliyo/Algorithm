function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    
    for (let i in num_list) {
        const e = num_list[i];
        i % 2 ? num2 += e : num1 += e;
    }
    
    return num1 > num2 ? num1 : num2;
}