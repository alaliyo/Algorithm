function solution(numbers, hand) {
    const nmuLocation = [
        [4, 2], [1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]
    ];
    let left = [4, 1];
    let right = [4, 3];
    let str = '';
    
    for (let i = 0; i < numbers.length; i++) {
        const e = numbers[i];
        const location = nmuLocation[e];
        const LC = Math.abs(left[0] - location[0]) + Math.abs(left[1] - location[1]);
        const RC = Math.abs(right[0] - location[0]) + Math.abs(right[1] - location[1]);
        
        if (e === 1 || e === 4 || e === 7) {
            left = location;
            str += 'L';
        } else if (e === 3 || e === 6 || e === 9) {
            right = location;
            str += 'R';
        } else if (hand === 'left') {
            if (LC <= RC) {
                left = location;
                str += 'L';
            } else {
                right = location;
                str += 'R';
            }
        } else if (hand === 'right') {
            if (RC <= LC) {
                right = location;
                str += 'R';
            } else {
                left = location;
                str += 'L';
            }
        }
    }
    
    return str;
}