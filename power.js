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