/**
 Question Link: https://leetcode.com/problems/two-sum/

// Solution 1:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    if(nums.length < 2) return [-1,-1];

    const sortedArr = [...nums].sort((a,b) => a - b);

    let firstPtr = 0;
    let lastPtr = sortedArr.length - 1;

    while(firstPtr < lastPtr){
        let sum = sortedArr[firstPtr] + sortedArr[lastPtr];

        if(sum === target){
            return [nums.indexOf(sortedArr[firstPtr]), nums.lastIndexOf(sortedArr[lastPtr])];
        }
        
        if(sum < target){
            firstPtr++;
        }else{
            lastPtr--;
        }

    }

    return[-1,-1];
}

 // Solution 2:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
    if(nums.length < 2) return [1,-1];

    const numsMap = new Map();

    for(let i = 0; i < nums.length; i++){
        
        if(!numsMap.has(nums[i])){
            numsMap.set(nums[i], i); // storing element with index
        }
        
        let diff = target - nums[i];
        if(numsMap.has(diff) && numsMap.get(diff) !== i){
            return [i, numsMap.get(diff)];
        } 
    }

    return [-1,-1];
};


// Solution: Not Recommended
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {

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
