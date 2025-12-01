/**

  Question Link: https://leetcode.com/problems/contains-duplicate/
  
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    if(nums.length < 2){
        return false;
    }

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 1; i++)
    {
        if(nums[i] === nums[i+1]){
            return true;
        }
    }

    return false;
};
