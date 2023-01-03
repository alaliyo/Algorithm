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
    
    arr.push(0);
    
    for(let i = food.length; i > 0; i--) {
        let e = Math.floor(food[i] / 2);
        if (e < 1) {
            continue;
        }
        for(let j = 0; j < e; j++) {
            arr.push(i);
        }
    }
    
    return arr.join('');
}