function solution(s) {
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').map((e, j) => j % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('');
    }

    return arr.join(' ');
}