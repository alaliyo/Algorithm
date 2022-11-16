function solution(price) {
    if (100000 <= price && price < 300000) {
        price *= 0.95;
    }
    else if (300000 <= price && price < 500000) {
        price *= 0.90;
    }
    else if (price >= 500000){
        price *= 0.80;
    }
    let answer = Math.floor(price);
    return answer;
}