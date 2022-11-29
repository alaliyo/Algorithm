function solution(dots) {
    let arr = [];
    for (let i = 0; i < dots.length; i++) {
        let j = 3;
        while (j <= 3 && i < j) {
            arr.push( (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]) );
            j--;
        }
    }
    return arr.filter((e, i) => arr.indexOf(e) !== i).length > 0 ? 1 : 0;
}