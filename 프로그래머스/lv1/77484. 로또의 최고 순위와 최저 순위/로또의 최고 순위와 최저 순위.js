function solution(lottos, win_nums) {
    let countArr = [7];
    for(let i = 0; i < lottos.length; i++) {
        lottos.map(e => e === win_nums[i] ? countArr[0]-- : e);
    }
    countArr.push(countArr[0]);
    
    lottos.map(e => e === 0 ? countArr[0]-- : e);
    
    return countArr.map((e, i) => e === 7 ? 6 : e);
}