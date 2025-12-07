/**
   Question Link: https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    const set = new Set(nums);
    let length = 0;

    for(const num of set){

        if(!set.has(num -1)) // start counting if the number is the start of the sequence
        {
            let currNum = num;
            let count = 1;

            while(set.has(currNum + 1)){
                currNum++;
                count++;
            }

            length = count > length ? count : length;
        }
    }

    return length;
 };
