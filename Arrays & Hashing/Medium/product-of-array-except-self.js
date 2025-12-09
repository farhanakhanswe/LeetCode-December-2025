/**
   Question Link: https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution is very unoptimized! Needs improvement.

var productExceptSelf = function(nums) {
    if(nums.length < 2) return [-1, -1];
    let answer = [];

    for(let i = 0; i < nums.length ; i++){
        let product = 1;
        for(let j = 0 ; j < nums.length; j++){
            if(i !== j){
                product *= nums[j];
            }
        }

        answer.push(product)
    }

    return answer;
};
