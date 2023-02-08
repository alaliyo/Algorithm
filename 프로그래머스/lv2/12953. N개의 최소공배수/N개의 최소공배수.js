function solution(arr) {
    let finalLcm = arr[0];
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    for (let i = 1; i < arr.length; i++) {
        finalLcm = lcm(finalLcm, arr[i]);
    }
    
    return finalLcm;
}