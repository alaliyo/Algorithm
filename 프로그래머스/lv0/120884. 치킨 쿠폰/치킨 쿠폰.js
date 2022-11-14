function solution(chicken) {
    let serviceChicken = 0;
    while (chicken >= 10) {
        const remainder = chicken % 10;
        chicken = Math.floor(chicken/10);
        serviceChicken += chicken;
        chicken += remainder;
    }
    return serviceChicken;
}