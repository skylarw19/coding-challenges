function firstNotRepeatingCharacter(s) {
    let obj = {}
    for (let i=0; i< s.length; i++){
        if (!obj[s.charAt(i)]){
            obj[s.charAt(i)] = 1;
        } else {
            obj[s.charAt(i)]++
        }
    }
    for (const letter in obj){
        if (obj[letter] === 1) {
            return letter
        }
    }
    return "_"
}

let s = "abacabad";
console.log(firstNotRepeatingCharacter(s))