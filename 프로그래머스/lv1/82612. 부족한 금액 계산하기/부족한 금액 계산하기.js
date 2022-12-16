function solution(price, money, count) {
    const num = (price + price * count) / 2 * count - money

    return num > 0 ? num : 0;
}