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