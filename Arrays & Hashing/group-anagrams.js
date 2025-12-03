/**
  Question Link: https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */

// Solution 1
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(strs.length < 1) return [];

    let sortedStringsMap = new Map();
    let groupOfAnagrams = [];

    for(let i = 0; i < strs.length; i++)
    {
        let sortedString = strs[i].split('').sort().join('');
        if(sortedStringsMap.has(sortedString)){
            sortedStringsMap.get(sortedString).push(strs[i]);
        }else
        {
            sortedStringsMap.set(sortedString, [strs[i]]);
        }
    }

     for(let [key,val] of sortedStringsMap){
        groupOfAnagrams.push(val);
     }
    
    return groupOfAnagrams;
};






