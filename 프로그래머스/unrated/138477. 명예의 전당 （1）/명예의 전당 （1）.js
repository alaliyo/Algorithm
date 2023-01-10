function solution(k, score) {
    let scoreArr = [];
    let scores = [];
    for(let i = 0; i < score.length; i++) {
        scoreArr.push(score[i]);
        if(scoreArr.length > k) {
            scoreArr.sort((a, b) => b - a);
            scoreArr.splice(k, 1);
        }
        scores.push(Math.min.apply(null, scoreArr));
    }
    return scores;
}