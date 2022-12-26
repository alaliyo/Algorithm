function solution(board) {
    let rows = board.length,
        cols = board[0].length;

    let chk = Array(rows);
    for (let i = 0; i < cols; i++) chk[i] = Array(cols).fill(true);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === 1) {
                for (let i = Math.max(0, row-1); i < Math.min(row+2, rows); i++) {
                    for (let j = Math.max(0, col-1); j < Math.min(col+2, cols); j++) {
                        chk[i][j] = false;
                    }
                }
            }
        }
    }

    return chk.flat().filter(v=>v).length;

}