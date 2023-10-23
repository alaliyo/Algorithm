function solution(num_list) {
    const plus = num_list.reduce((a, b) => a + b) ** 2;
    const multiply = num_list.reduce((a, b) => a * b);
    return plus >= multiply ? 1 : 0;
}