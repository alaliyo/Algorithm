function solution(s) {
    const answerArr = [];
    const arr = s.replaceAll('{', '').replaceAll('}', '').split(',');
    let obj = {};

    arr.forEach((e) => {
        obj[e] = (obj[e] || 0) + 1;
    });

    let objSort = [];

    for (let e in obj) {
        objSort.push([e, obj[e]]);
    }
    objSort.sort((a, b) => b[1] - a[1]);

    for (let e of objSort) {
        answerArr.push(Number(e[0]));
    }

    return answerArr;
}