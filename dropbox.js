// Dropbox Ignite SWE Apprenticeship HackerRank Challenge
// Passed 8/10 cases, ran out of time for rest, so below is not most optimal solution
// how to make more optimal?

function numKeypadSolutions(wordlist, keypads){
    let result = []
    for (let a = 0; a<keypads.length; a++){  //set result array to 0
        result.push(0)
    }
    for (let i=0; i<keypads.length; i++){  //go thru keypad list
        let keypad = keypads[i] // keypad string
        let key = keypad[0]; // first letter of keypad string
        for (let j=0; j<wordlist.length; j++){
            let word = wordlist[j];  //word in wordlist
            if (word.includes(key)){  //if word includes key, keep going, else skip word
                let found = true; //create bool var to check if letter is found in keypad
                for (let k=0; k<word.length; k++){  //check if every letter in the word is found in the keypad
                    let letter = word[k]
                    if (!keypad.includes(letter)){  //if keypad doesn't include letter, set found to false
                        found = false;
                        break;
                    }
                }
                if (found === true){  //if foudn was never set to false, then keypad includes every letter of the word
                    result[i] += 1
                }
            }
        }
    }
    return result;
}

let wordlist = ['APPLE', 'PLEAS', 'PLEASE']
let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']

console.log(numKeypadSolutions(wordlist, keypads))


//expected output = [0,1,3,2,0]
//first keypad doesn't have any words, 2nd keypad has 1 word, 3rd keypad has 3 words, etc.


// same function, but with console logs for debugging
// function numKeypadSolutions(wordlist, keypads){
//     let result = []
//     for (let a = 0; a<keypads.length; a++){  //set result array to 0
//         result.push(0)
//     }
//     for (let i=0; i<keypads.length; i++){  //go thru keypad list
//         let keypad = keypads[i] // keypad string
//         let key = keypad[0]; // first letter of keypad string
//         console.log(`keypad word: ${keypad}`)
//         console.log(`key: ${key}`)
//         for (let j=0; j<wordlist.length; j++){
//             let word = wordlist[j];  //word in wordlist
//             console.log(`word: ${word}`)
//             if (word.includes(key)){  //if word includes key, keep going, else skip word
//                 console.log(`word ${word} includes key ${key}`)
//                 let found = true; //create bool var to check if letter is found in keypad
//                 for (let k=0; k<word.length; k++){  //check if every letter in the word is found in the keypad
//                     let letter = word[k]
//                     if (!keypad.includes(letter)){  //if keypad doesn't include letter, set found to false
//                         found = false;
//                         console.log(`letter ${letter} from word ${word} NOT found in keypad ${keypad}`)
//                         break;
//                     }
//                 }
//                 console.log(`found is ${found}`)
//                 if (found === true){  //if foudn was never set to false, then keypad includes every letter of the word
//                     result[i] += 1
//                 }
//             }
//         }
//     }
//     return result;
// }