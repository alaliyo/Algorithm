function solution(brown, yellow) {
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            const a = yellow / i;
            if (i * 2 + a * 2 + 4 === brown) {
                return [a+2, i+2];
            } 
        }
    }
}