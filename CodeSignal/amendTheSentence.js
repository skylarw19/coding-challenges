function amendTheSentence(s) {
    s = s.split('');
    for(let i=0; i<s.length; i++){
        if (s[i].match(/[A-Z]/)){
            s[i] = s[i].toLowerCase();
            s.splice(i, 0, " ")
        }
    }
    s.shift();
    return s.join('')
}

let s = "CodesignalIsAwesome";
console.log(amendTheSentence(s))