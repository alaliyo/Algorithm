function solution(babbling) {
    let count = 0;
    for (let i = 0; i < babbling.length; i++) {
        let e = babbling[i];
        if (e.replace(/ayaaya|yeye|woowoo|mama/, '1').replace((/[^1]/g), '') === '1') {
            continue;
        }
        e = e.replace(/aya|ye|woo|ma/g, '');
        if (e.length === 0) {
            count++
        }
    }
    return count;
}