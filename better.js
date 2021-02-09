//FUNCTION DAYS OF WK
//function receives a string S, and you wanna find the day it is K days later
function daysOfWk (S,K) {
    let startDay;
    switch (S) {
        case "Mon": startDay = 1; break;
        case "Tue": startDay = 2; break;
        case "Wed": startDay = 3; break;
        case "Thu": startDay = 4; break;
        case "Fri": startDay = 5; break;
        case "Sat": startDay = 6; break;
        case "Sun": startDay = 7; break;
    }
    
    let endDay = (startDay+K)%7;
    switch (endDay) {
        case 1: return "Mon";
        case 2: return "Tue";
        case 3: return "Wed"
        case 4: return "Thu"
        case 5: return "Fri"
        case 6: return "Sat"
        case 0: return "Sun"
    }
    
}

// console.log(daysOfWk("Mon", 13))


// FUNCTION INSERT 5
// receives an int N (-8000...8000), must return the maximum value with a digit "5" inserted
function insert5 (N){
    stringN = N.toString(); //convert num to str
    if (N < 0){ //if negative number
        let str = stringN.slice(1)

        let i=0;  
        while (str[i] < 5){ // less than 5 for neg nums
            i++;
        }
    
        let arr = str.split('')
        arr.splice(i,0,"5")  //insert 5
        arr.splice(0,0,"-")
        let joinedArr = arr.join("")
        let parsed = parseInt(joinedArr)  //convert string to num
    
        return parsed;

    } else { // if positive number
        let str = stringN;

        // find index
        let i=0;
        while (str[i] > 5){ 
            i++;
        }

        //insert 5
        let arr = str.split('')
        arr.splice(i,0,"5")  
        let joinedArr = arr.join("")
        let parsed = parseInt(joinedArr)  //convert string to num
    
        return parsed;
    }
}

// console.log(insert5(268)) // -->5268
// console.log(insert5(670)) // -->6750
// console.log(insert5(0))   // -->50
// console.log(insert5(-999)) // -->-5999


//FUNCTION BALANCED
//receives a str S. must return the min length of balanced, else return -1
//considered balanced if all upper and lower case letters appear (but actual count doesn't matter)
//CATatc --> balanced 6, //CCCCCAca --> balanced 8
//didn't finish
function balanced(S){
    let upperSet = {}
    let lowerSet = {}
    let count = 0;
    let minlength = 0;
    let arr = S.split("")
    let balance = false;

    arr.forEach((el) => {
        if (el === el.toUpperCase()){
            if (!upperSet[el]){
                upperSet[el] = 1;
                if (lowerSet[el.toLowerCase()]){
                    balance = true;
                }
            } 
        } else {
            lowerSet[el] = 1;
            if (upperSet[el.toUpperCase()]){
                balance = true
            }
        }
        count++;
        console.log(`letter: ${el}`)
        console.log(upperSet)
        console.log(lowerSet)
        console.log(`count: ${count}`)
        console.log(`balance: ${balance}`)
        
        if (balance) {
            console.log("balance")
        } else {console.log("no")}
    })
   
}

// console.log(balanced("CATatc"))
