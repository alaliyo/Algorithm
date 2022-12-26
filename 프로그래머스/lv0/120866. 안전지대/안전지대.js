function solution(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] % 2 !== 0) {
                if (i - 1 >= 0) {
                    if (j - 1 >= 0) {
                        board[i-1][j-1] % 2 !== 0 ? board[i-1][j-1] = 3 : board[i-1][j-1] = 2;
                    }
                    if (j + 1 < board[i].length) {
                        board[i-1][j+1] % 2 !== 0 ? board[i-1][j+1] = 3 : board[i-1][j+1] = 2;
                    }
                    board[i-1][j] % 2 !== 0 ? board[i-1][j] = 3 : board[i-1][j] = 2;
                }
                
                if (i + 1 < board.length) {
                    if (j - 1 >= 0) {
                        board[i+1][j-1] % 2 !== 0 ? board[i+1][j-1] = 3 : board[i+1][j-1] = 2;
                    }
                    if (j + 1 < board[i].length) {
                        board[i+1][j+1] % 2 !== 0 ? board[i+1][j+1] = 3 : board[i+1][j+1] = 2;
                    }
                    board[i+1][j] % 2 !== 0 ? board[i+1][j] = 3 : board[i+1][j] = 2;
                }
                
                if (j - 1 >= 0) {
                        board[i][j-1] % 2 !== 0 ? board[i][j-1] = 3 : board[i][j-1] = 2;
                    }
                if (j + 1 < board[i].length) {
                        board[i][j+1] % 2 !== 0 ? board[i][j+1] = 3 : board[i][j+1] = 2;
                    }
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        board[i].map(e => e === 0 ? count++ : e);
    }
    
    return count;
}