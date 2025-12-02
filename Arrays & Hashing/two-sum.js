/**
 Question Link: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
    array of integers and there is a target 
    any two el need to add so sum equals target
    each input would have exactly one solution and you may not 
    use the same element twice

    return false if the arr length is not 2

    loop over parent array
    loop over child array
    each el of parent array can add with each element in child array
    if the parent arr el index === child arr el index then we would skip
    we need to return the indice and not the elemnts, inside an array
    */

    if(nums.length < 2){
        return [-1,-1];
    }

    let sum = 0;

    for(let i = 0 ; i < nums.length ; i++)
    {
        for(let j = i + 1; j < nums.length; j++)
        {
            if(i !== j)
            {
                let sum = nums[i] + nums[j];
                if(sum === target)
                {
                    return [i, j];
                }
            }
        }
    }

    return [-1,-1];
};
