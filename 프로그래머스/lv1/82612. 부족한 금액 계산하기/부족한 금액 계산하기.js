function solution(price, money, count) {
    const num = (price + price * count) * (count / 2) - money;
    return num > 0 ? num : 0;
}