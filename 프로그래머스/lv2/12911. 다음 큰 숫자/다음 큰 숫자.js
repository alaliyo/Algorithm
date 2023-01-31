function solution(n) {
    let value = n + 1
    const n2 = n.toString(2);
    while (n2.replaceAll('0', '') !== value.toString(2).replaceAll('0', '')) {
        value += 1;
    }
    return value;
}