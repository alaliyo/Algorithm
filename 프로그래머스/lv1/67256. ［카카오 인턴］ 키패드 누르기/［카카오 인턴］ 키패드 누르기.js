function solution(numbers, hand) {
    const numsPos = [
        [4, 2], [1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]
    ];
    let left = [4, 1];
    let right = [4, 3];
    let str = '';
    
    for (let i = 0; i < numbers.length; i++) {
        const e = numbers[i];
        const pos = numsPos[e];
        const LPos = Math.abs(left[0] - pos[0]) + Math.abs(left[1] - pos[1]);
        const RPos = Math.abs(right[0] - pos[0]) + Math.abs(right[1] - pos[1]);
        
        if (e === 1 || e === 4 || e === 7) {
            left = pos;
            str += 'L';
        } else if (e === 3 || e === 6 || e === 9) {
            right = pos;
            str += 'R';
        } else if (hand === 'left') {
            if (LPos <= RPos) {
                left = pos;
                str += 'L';
            } else {
                right = pos;
                str += 'R';
            }
        } else if (hand === 'right') {
            if (RPos <= LPos) {
                right = pos;
                str += 'R';
            } else {
                left = pos;
                str += 'L';
            }
        }
    }
    
    return str;
}