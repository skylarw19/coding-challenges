var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    let sCount = {};
    
    [...s].forEach(letter => {
        if (sCount[letter]) sCount[letter]++;
        else sCount[letter] = 1;
    })
    
    
    for (let letter of t){
        if (!sCount[letter]) return false;
        else sCount[letter]--;
        if (sCount[letter] < 0) return false;
    }
    
    return true;
};