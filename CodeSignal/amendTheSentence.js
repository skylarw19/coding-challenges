function amendTheSentence(s) {
    s = s.split('');
    for(let i=0; i<s.length; i++){
        if (s[i].match(/[A-Z]/)){
            s[i] = s[i].toLowerCase();
            s.splice(i, 0, " ")
        }
    }
    if (!s[0].match(/[a-z]/)){
        s.shift();
    }
    return s.join('')
}

//with replace and regex
function amendTheSentence(s) {
    return s.replace(/([A-Z])/g, " $1").toLowerCase().trim()
}

let s = "CodesignalIsAwesome";
console.log(amendTheSentence(s))