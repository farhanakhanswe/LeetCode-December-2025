/**
   Question Link: https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */


/* 
   Leetcode accepted this soln but it does not meet the O(n) condition. Need to still make improvements.
   The time complexity is O(nlogn) rn because of sorting the array.
*/

var longestConsecutive = function(nums) {
    if(nums.length < 1) return 0;
    let sortedArr = [...new Set(nums)].sort((a, b) => a - b); 
    if(sortedArr.length === 1) return 1;

    let length = 1;
    let count = 1;

    for(let i = 1 ; i < sortedArr.length ; i++)
    {
        if(sortedArr[i - 1] + 1 === sortedArr[i]){
            count++;
        }else{
            count = 1;
        }
            
        length = count > length ? count : length;
    }

    return length;
    
 };
