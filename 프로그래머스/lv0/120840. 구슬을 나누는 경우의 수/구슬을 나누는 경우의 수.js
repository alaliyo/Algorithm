function solution(balls, share) {

    const factorial = (num) => {
        let value = BigInt(1);
        for (let i = 2; i <= num; i++) {
            value *= BigInt(i);
        }
        return value;
    }

    return factorial(balls) / (factorial(balls - share) * factorial(share))
}