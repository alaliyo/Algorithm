function solution(lines) {
    let arr = []
    for (let i = 0; i < lines.length; i++) {
        let index = lines[i];
        index.sort((a, b) => a - b);
        while (index[0] < index[1]) {
            arr.push(index[0]);
            index[0]++;
        }
    }
    let arrFilter = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(arrFilter)].length;
}