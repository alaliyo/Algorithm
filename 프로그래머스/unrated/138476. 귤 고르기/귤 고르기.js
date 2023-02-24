function solution(k, tangerine) {
    let count = 0;
    let num = 0;
    const arr = []
    let max = Math.max(...tangerine);

    for (let i = 0; i < max; i++) {
        arr.push(0);
    }

    for (let i = 0; i < tangerine.length; i++) {
        const e = tangerine[i];
        arr[e-1]++;
    }

    arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
        count += 1;
        if (k <= num) {
            break;
        }
    }
    return count;
}