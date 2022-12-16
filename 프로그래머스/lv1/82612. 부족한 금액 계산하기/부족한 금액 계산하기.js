function solution(price, money, count) {
    const num = (price + price * count) / 2 * count

    return money - num > 0 ? 0 : Math.abs(money - num);
}