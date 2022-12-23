function solution(array, commands) {
    let numArr = [];
    for (let i = 0; i < commands.length; i++) {
        let e = array.slice(commands[i][0] -1, commands[i][1]).sort((a, b) => a - b);
        numArr.push(e[commands[i][2] -1]);
    }

    return numArr;
}