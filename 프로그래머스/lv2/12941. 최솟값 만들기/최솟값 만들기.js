function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    const total = A.map((e, i) => e * B[i]);

    return total.reduce((a, b) => a + b);
}