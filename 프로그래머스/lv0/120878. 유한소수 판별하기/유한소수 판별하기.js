function solution(a, b) {
    let aArr = []
    
    while (a % 2 === 0) {
        aArr.push(2);
        a = a/2;
    }
    
    for (let i = 3; i * i <= a; i = i + 2) {
        while (a % i === 0) {
            aArr.push(i);
            a /= i;
        }
    }
    
    if (a > 2) {
        aArr.push(a);
    }
    
    for (let i = 0; i <= aArr.length; i++) {
        if (b % aArr[i] === 0) {
            b /= aArr[i];
        }
    }
    
    while (b % 2 === 0) {
        b /= 2;
    }
    
    while (b % 5 === 0) {
        b /= 5;
    }
    
    return b === 1 ? 1 : 2;
}

    