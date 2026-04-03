function solution(number) {
    return number.split("").reduce((a, b) => Number(a) + Number(b), 0) % 9;
}