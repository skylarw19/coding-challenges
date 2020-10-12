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

//leetcode 88 merge sorted array
var merge = function(nums1, m, nums2, n) {
    nums1.splice(n,n);
    let newNums = [...nums1, ...nums2];
    return newNums.sort((a,b) => a-b)

};

nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
