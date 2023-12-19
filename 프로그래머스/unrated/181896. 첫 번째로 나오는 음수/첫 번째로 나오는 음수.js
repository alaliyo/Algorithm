function solution(num_list) {
    let num = -1;
    for (let i in num_list) {
        if (num_list[i] < 0) return num = Number(i);
    }
    return num;
}