var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return true;
    s = s.toUpperCase().replace(/[^0-9a-zA-Z]/g,"");
    for (let i=0; i<s.length; i++){
        if (s[i] !== s[s.length-1-i]) return false;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))