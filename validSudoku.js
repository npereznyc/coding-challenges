function validSudoku(board){
    for (let i =0; i<9; i++){
        let row = new Set() //row Set
        let col = new Set() //column Set
        
        for(let j=0; j<9; j++){
            let _row = board[i][j] //iterating row by row
            let _col = board[j][i] //iterating column by column

            if (item != '.'){
                if(row.has(item)) return false;
                row.add(item)
            }
            // let _box= board[]
        }
    }
}

validSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])

module.exports = validSudoku;