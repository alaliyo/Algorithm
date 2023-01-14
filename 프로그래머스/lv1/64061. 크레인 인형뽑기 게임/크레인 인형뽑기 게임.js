function solution(board, moves) {
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < moves.length; i++) {
        let e = moves[i];
        for (let j = 0; j < board.length; j++) {
            let doll = board[j][e - 1];
            if (doll !== 0) {
                if (doll === arr[arr.length - 1]) {
                    arr.pop();
                    board[j][e - 1] = 0;
                    count += 2;
                } else {
                    arr.push(doll);
                    board[j][e - 1] = 0;
                }
                break;
            }
        }
    }
    return count;
}