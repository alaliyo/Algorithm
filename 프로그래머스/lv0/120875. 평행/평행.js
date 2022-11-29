function solution(dots) {
    let arr = [];
    for (let i = 0; i < dots.length; i++) {
        let j = 3;
        while (j <= 3 && i < j) {
            let y = dots[i][1] >= dots[j][1] ? dots[i][1] - dots[j][1] : dots[j][1] - dots[i][1];
            let x = dots[i][0] >= dots[j][0] ? dots[i][0] - dots[j][0] : dots[j][0] - dots[i][0];
            arr.push( (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]) );
            j--
        }
    }
    let arrFilter = arr.filter((e, i) => arr.indexOf(e) !== i);
    return arrFilter.length > 0 ? 1 : 0;

}