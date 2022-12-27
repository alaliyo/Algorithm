function solution(s) {
    const nums = {
        zero : 0, one : 1, two : 2, three : 3, four : 4,
        five : 5, six : 6, seven : 7, eight : 8, nine : 9,
    }
    let answer = new RegExp(Object.keys(nums).join('|'), 'g');
    
    return Number(s.replace(answer, key => nums[key]));
}