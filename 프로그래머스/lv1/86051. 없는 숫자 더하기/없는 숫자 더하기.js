function solution(numbers) {
    let num = 45;
    numbers.map(e => num -= e)
    return num
}