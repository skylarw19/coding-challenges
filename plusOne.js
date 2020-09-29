// Leetcode 66. PlusOne
// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 
var plusOne = function(digits) {
    let lastDig = digits.length-1;
    if (digits[lastDig] < 9){  
        digits[lastDig]++;
        return digits;
    } else {                   
        digits[lastDig]++;     
        for( let i=lastDig; i>-1; i--){   
            if (digits[i] <=9){
                break;
            } else {
                digits[i] = 0;      
                if(i===0 && digits[0] === 0){  
                    digits.unshift(1);    
                } else {
                    digits[i-1]++;  
                }
            }
        }
    }
    return digits;
};

var intersection = function(nums1, nums2) {
    let set1 = new Set([...nums1])
    let set2 = new Set([...nums2])
    return [...set1].filter(num => set2.has(num));
    // return intersection;
};

nums1 = [1,2,2,1], nums2 = [2,2]

console.log(intersection(nums1,nums2))