/**
   Question Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */

// Incorrect Solution 1:

var longestConsecutive = function(nums) {

    if(nums.length === 0) return 0;
    
    let sortedArr = [...new Set(nums)].sort((a, b) => a - b);

    if(sortedArr.length === 1) return 1;
    
    let consecutiveNumberArr = [];

    for(let i = 0; i < sortedArr.length ; i++){
        if(sortedArr[i + 1] === sortedArr[i] + 1){
            if(!consecutiveNumberArr.includes(sortedArr[i])){
                consecutiveNumberArr.push(sortedArr[i])
            }

            if(!consecutiveNumberArr.includes(sortedArr[i+1])){
                consecutiveNumberArr.push(sortedArr[i+1])
            }    
        }
    }

    let tempArr = [];
    let length = 0;

    for (let i = 0 ; i < consecutiveNumberArr.length ; i++){
        if(consecutiveNumberArr[i + 1] === consecutiveNumberArr[i] + 1){
            if(!tempArr.includes(consecutiveNumberArr[i])){
                tempArr.push(consecutiveNumberArr[i])
            }

            if(!tempArr.includes(consecutiveNumberArr[i+1])){
                tempArr.push(consecutiveNumberArr[i+1])
            }    
        }else{
            if(tempArr.length > length){
                length = tempArr.length;
                tempArr = []
            }
        }
    }

    return length === 0 ? 1 : length;
};

// Incorrect Solution 2:

var longestConsecutive = function(nums) {

    if(nums.length < 1) return 0;
    let sortedArr = [...new Set(nums)].sort((a, b) => a - b); 
    if(sortedArr.length === 1) return 1;

    let length = 1;
    let count = 0;

    for(let i = 0 ; i < sortedArr.length ; i++)
    {
        if(sortedArr[i] + 1 === sortedArr[i+1]){
            count++;
        }

        if((sortedArr[i] + 1 !== sortedArr[i+1] || sortedArr[i+1] === undefined)){
            if(sortedArr[i - 1] !== undefined && sortedArr[i - 1] + 1 === sortedArr[i])
            {
                count++;
                if(count > length){
                    length = count;
                    count = 0;
                }
            }
        }

        if(count > length){
            length = count;
        }
    }

    return length;

};
