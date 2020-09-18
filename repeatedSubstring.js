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