var isValidSudoku = function(board) {
    for (let x = 0; x < 9; x++) {
      let row = new Set();
      let col = new Set();
      let square = new Set();
      for (let y = 0; y < 9; y++) {
        let tempRow = board[x][y];
        let tempCol = board[y][x];
        let tempSquare = board[3*Math.floor(x/3)+Math.floor(y/3)][3*(x%3)+(y%3)]
        if (tempRow != '.') {
          if (row.has(tempRow)) return false;
          row.add(tempRow);
        }
        if (tempCol != '.') {
          if (col.has(tempCol)) return false;
          col.add(tempCol);
        }
        if (tempSquare != '.') {
          if (square.has(tempSquare)) return false;
          square.add(tempSquare);
        } 
      }
    }
    return true;
  };