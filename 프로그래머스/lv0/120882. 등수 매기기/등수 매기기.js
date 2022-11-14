function solution(score) {
    let  avgArr= score.map(([a, b]) => a+b)
    const avgArrSort = [...avgArr].sort((a, b) => b-a);
    return avgArr.map((e, i) => avgArr[i] = avgArrSort.indexOf(e) + 1 );
}