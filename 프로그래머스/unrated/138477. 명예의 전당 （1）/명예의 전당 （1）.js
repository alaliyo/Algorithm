function solution(k, score) {
    let dayScore = [];
    let minArr = [];
    for(let i = 0; i < score.length; i++) {
        dayScore.push(score[i]);
        if(dayScore.length > k) {
            dayScore.sort((a, b) => b - a);
            dayScore.pop();
        }
        minArr.push(Math.min.apply(null, dayScore));
    }
    return minArr;
}