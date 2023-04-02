function solution(priorities, location) {
    let count = 0;
    const PRYIndex = [];
    let PRYSort = [...priorities].sort((a, b) => a - b);
    
    for (let i in priorities) {
        PRYIndex.push([Number(i), priorities[i]]);
    }
    
    while (PRYSort.length > 0) {
        for (let i = 0; i < PRYIndex.length; i++) {
            if (PRYSort[PRYSort.length-1] === PRYIndex[i][1]) {
                if (location === PRYIndex[i][0]) {
                    return count+1; 
                }
                PRYSort.pop();
                PRYIndex.splice(i, 1);
                count++;
                break;
            } else {
                PRYIndex.push(PRYIndex.shift());
                i--;
            }
        }
    }
}