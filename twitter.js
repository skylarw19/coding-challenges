// array of strings
// remove anagrams, leaving only the first instance
// return array of strings sorted

function funWithAnagrams(text) {
    let sortedText = [];
    text.forEach(word => {
        sortedText.push(word.split('').sort().join(''));
    })   
    
    for (let i=0; i<text.length; i++){
        let sortedWord = text[i].split('').sort().join('');
        for (let j=i+1; j<sortedText.length; j++){
            if (sortedText[j] === sortedWord){
                text.splice(j,1)
                sortedText.splice(j,1)
                j--;
            }
        }
    }
    return text.sort();
}

text = ['code', 'doce', 'ecod', 'framer', 'frame']
// console.log(funWithAnagrams(text))

// function countOptions(people, groups) {
//     let optionsArr = [];
//     let option = [];
//     for (let i=0; i<groups-1; i++){
//         option.push(1);
//     }
//     option.push(people-(groups-1))
//     console.log(option)
//     optionsArr.push(option)
//     console.log(optionsArr)

//     for (let i=0; i<optionsArr.length; i++){
//         let newOpt = optionsArr[i].slice();
//         while (newOpt[0] <= newOpt [1]){

//         }
//         console.log(optionsArr)
//         console.log(newOpt)
//     }

//     // let newOpt = option.slice();  //create copy of option
//     // console.log(newOpt)
//     // newOpt[newOpt.length-1]--;
//     // newOpt[newOpt.length-2]++;
//     // console.log(newOpt)
//     // optionsArr.push(newOpt)
//     // console.log(optionsArr)
// }

// let people = 9;
// let groups = 3;
// console.log(countOptions(people, groups))

// answer from internet
// https://www.geeksforgeeks.org/count-the-number-of-ways-to-divide-n-in-k-groups-incrementally/
// function calculate(pos, prev, left, k) {
//     if (pos === k) {
//         if (left === 0){
//             return 1
//         } else return 0
//     }
    
//     if (left === 0){
//         return 0;
//     }
    
//     let answer = 0;

//     for (let i=prev; i<left+1; i++) {
//         answer += calculate(pos+1, i, left-i, k)
//     }

//     return answer
// }

// function countOptions(n,k){
//     return calculate(0,1,n,k)
// }

// let people = 107;
// let groups = 37;
// console.log(countOptions(people, groups))


// function countOptions2(n,k){
//     if(n < k) {
//         return 0;
//     }
//     int[][] dp = new int[k+1][n+1];
//     for(let i = 1; i <= k; i++) {
//         for(let j = i; j <= n; j++) {
//             if(i==j) {
//                 dp[i][j] = 1;
//             } else {
//                 dp[i][j] = dp[i-1][j-1] + dp[i][j-i];
//             }
//         }
//     }
//     return dp[k][n];
// }

// let people = 8;
// let groups = 4;
// console.log(countOptions2(people, groups))

// let dp = new Array();
// dp[0] = new Array();
// dp[0][0] = new Array();

// dp[0][0][1] = -1
let dp = []

// console.log(dp)
function calculate(pos, prev, left, k) {
    // Base Case
    if (pos === k) 
    {
        if (left === 0)
            return 1;
        else
            return 0;
    }

    // if N is divides completely 
    // into less than k groups
    if (left === 0)
        return 0;

    // If the subproblem has been
    // solved, use the value
    if (dp[pos][prev][left] !== -1)
        return dp[pos][prev][left];

    let answer = 0;

    // put all possible values 
    // greater equal to prev
    for (let i = prev; i <= left; i++) 
    {
        answer += calculate(pos + 1, i, left - i, k);
    }

    return dp[pos][prev][left] = answer;
}

function countWaystoDivide(n, k)
{
    // Intialize DP Table as -1
        for (let i = 0; i < 500; i++) 
        {
            dp[i] = []
            for (let j = 0; j < 500; j++)
            {
                dp[i][j] = []
                for (let l = 0; l < 500; l++)
                    dp[i][j][l] = -1
            }
        }
  
    return calculate(0, 1, n, k);
}

let people = 107
let groups = 37
console.log(countWaystoDivide(people,groups))