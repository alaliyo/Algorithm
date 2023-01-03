function solution(food) {
    let arr = [];
    
    for(let i = 0; i < food.length; i++) {
        let e = Math.floor(food[i] / 2);
        if (e < 1) {
            continue;
        }
        for(let j = 0; j < e; j++) {
            arr.push(i);
        }
    }

    return arr.join('') + '0' + arr.reverse().join('');
}