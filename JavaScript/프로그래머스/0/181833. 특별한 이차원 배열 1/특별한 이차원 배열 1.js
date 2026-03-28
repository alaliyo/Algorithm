function solution(n) {
    return Array.from({ length: n }, (_, i) => {
        const row = Array(n).fill(0);
        row[i] = 1;
        return row;
    });
}