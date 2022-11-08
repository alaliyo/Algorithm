function solution(keyinput, board) {
    let answer = [0, 0];
    const arr = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "up") {
            if (Math.floor(board[1] / 2) === answer[1]) {continue}
            answer[1] += 1;
        } else if (keyinput[i] === "down") {
            if (-Math.floor(board[1] / 2) === answer[1]) {continue}
            answer[1] -= 1;
        } else if (keyinput[i] === "right") {
            if (Math.floor(board[0] / 2) === answer[0]) {continue}
            answer[0] += 1;
        } else {
            if (-Math.floor(board[0] / 2) === answer[0]) {continue}
            answer[0] -= 1;
        }
    }
    return answer
}