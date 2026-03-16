function solution(a, b, c) {
    const num1 = a + b + c;
    
    if (a !== b && b !== c && c !== a) return num1;
        
    const num2 = a ** 2 + b ** 2 + c ** 2;
    
    if (a === b && b === c) {
        return num1 * num2 * (a ** 3 + b ** 3 + c ** 3); 
    } else {
        return num1 * num2;
    }
}