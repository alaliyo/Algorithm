function solution(food) {
    let arr = [];
    
    for(let i = 1; i < food.length; i++) {
        const foodHalf = Math.floor(food[i] / 2);
        if (foodHalf < 1) {
            continue;
        }
        for(let j = 0; j < foodHalf; j++) {
            arr.push(i);
        }
    }

    return arr.join('') + '0' + arr.reverse().join('');
}