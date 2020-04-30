// leetcode 4/30/2020 - Sudoku

function isSudokuValid(board){
    let temp = 0;
    for(x = 0; x < 9; x ++){
        for(y = 0; y < 9; y++){
            if(0 <= board[x][y] < 9){
                temp = x+1;
                while(temp < 9){
                    if((board[x][y] == board[temp][y]) && !isNaN(board[x][y])){
                        console.log(board[x][y])   
                        return false;
                    }
                     temp ++;
                }
                temp = y+1;
                while(temp < 9){
                    if((board[x][y] == board[x][temp]) && !isNaN(board[x][y])){
                        console.log(board[x][y])
                        return false;
                    }
                    temp ++;
                }
            }
        }
    }
    for(i = 1; i < 8; i+= 3){
        for(j = 1; j < 8; j+= 3){
             let tempSet = new Set();
            for(x = i-1; x < i+2; x++){
                for(y = j-1; y< j+2; y++){
                    if(tempSet.has(board[x][y])){
                        console.log(board[x][y])
                        return false;
                    }else{
                        tempSet.add(board[x][y])
                        if(board[x][y] ==="."){
                            tempSet.delete(".")
                        }
                    }
                }
            }
        }
    }
    return true;
}

let testA = isSudokuValid([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ])
console.log(testA)
let testB = isSudokuValid([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ])
console.log(testB)