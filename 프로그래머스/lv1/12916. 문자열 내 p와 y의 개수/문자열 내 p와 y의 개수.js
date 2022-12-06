function solution(s){
    let count = 0;
    const sLower = s.toLowerCase().match(/p|y/g);
    if (sLower == null) {
        return true;
    }
    sLower.map(e => e === 'p' ? count++ : count--);
    return count === 0 ? true : false;
}