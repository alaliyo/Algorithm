function solution(chicken) {
    let coupon = 0;
    
    while (chicken >= 10) {
        const remainder = chicken % 10;
        chicken = Math.floor(chicken/10);
        coupon += chicken;
        chicken += remainder;
    }
    return coupon;
}