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