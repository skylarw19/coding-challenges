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

// let testA = isSudokuValid([
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])
// console.log(testA)
// let testB = isSudokuValid([
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])
// console.log(testB)

var isPowerOfFour = function(num) {
    if(num === 4) return true;
    else {
        let fourthRoot = Math.pow(num, 1/4);
        console.log(fourthRoot)
        if (Number.isInteger(fourthRoot) && fourthRoot !== 0) return true;
        else return false;
    }
};


// console.log(isPowerOfFour(64));

var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return true;
    s = s.toUpperCase().replace(/[^0-9a-zA-Z]/g,"");
    for (let i=0; i<s.length; i++){
        if (s[i] !== s[s.length-1-i]) return false;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))

////power function. ex power(2,3) returns 8
var power = function(n,e) {
    let result = n;
    for(let i=1; i<e; i++){
        result = result * n;
    } return result;
}

var recursivePow = function(n,e){
    if (e === 0 ) return 1;
    else return n * recursivePow(n,e-1)
}

// console.log(recursivePow(2,3))

//LEETCODE REVERSE INTEGER
//Given a 32-bit signed integer, reverse digits of an integer
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer 
// range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
var reverse1 = function(x) {
    let str = x.toString().split('');
    let revNum;
    if (x > 0 || x===0 ) {
        revNum = parseInt(str.reverse().join(''));  
    }
    else {
        str.shift()
        revNum = parseInt(str.reverse().join(''))*-1; 
    }  
    if (revNum < -1*Math.pow(2,31) || revNum > Math.pow(2,31)-1) return 0;
    else return revNum;
};

// console.log(reverse1(-123))

// Given a non-empty string check if it can be constructed by taking a substring of it and 
//appending multiple copies of the substring together. You may assume the given string consists of 
//lowercase English letters only and its length will not exceed 10000.
// Example 1:
// Input: "abab"
// Output: True
// Example 2:
// Input: "aba"
// Output: False
// Example 3:
// Input: "abcabcabcabc"
// Output: True

// var repeatedSubstringPattern = function(s) {
//     s = s.split('');  //convert str to an array 
//     let substr = [s.shift()]; //make first letter a substr and remove from s
//     substr.push(s.shift()); //add second letter to substr and remove from s
//     console.log(s)
//     console.group(substr)
//     let match = true;
//     // while (match === true) {

//     // }
//     for (let i=0; i<s.length; i++){
//         for(let j=0; j<substr.length; j++){
//             if (substr[j] !== s[i]) {
//                 substr.push(s.shift())
//             } 
//         }
//     } 
// };

// repeatedSubstringPattern('hehehe')

var isPalNum = function(x) {
    if (x < 0) return false;
    let revX = parseInt(x.toString().split('').reverse().join(''));
    console.log(revX)
    if (x === revX) return true;
    else return false
};

console.log(isPalNum(10))
