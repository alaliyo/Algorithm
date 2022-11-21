function solution(array) {
    const set = new Set(array);
    const arrSet = [...set];
    if (arrSet.length === 1) {
        return arrSet[0];
    }
    
    let countArr = new Array(arrSet.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        countArr[arrSet.indexOf(array[i])]++;
    }

    return countArr.filter(e => Math.max(...countArr) === e).length > 1 ? -1 : arrSet[countArr.indexOf(Math.max(...countArr))]
}