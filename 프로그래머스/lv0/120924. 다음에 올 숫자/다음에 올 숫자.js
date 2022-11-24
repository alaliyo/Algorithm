function solution(common) {
    const arrLast = common[common.length -1];
    const difference = (common[1] - common[0]);
    const distance = common[1] / common[0];
    return common[1] + difference === common[2] ? arrLast + difference : arrLast * distance;
    
}