var isPalNum = function(x) {
    if (x < 0) return false;
    let revX = parseInt(x.toString().split('').reverse().join(''));
    if (x === revX) return true;
    else return false
};

console.log(isPalNum(10))