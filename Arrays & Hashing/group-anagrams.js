/**
  Question Link: https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */

// Solution 1: Needs Improvement
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {

    if(strs.length < 1) return [];

    let sortedStringsMap = createSortedStringsHashMap(strs);
    let groupOfAnagrams = [];

    for(let i = 0; i < strs.length; i++)
    {
        let sortedString = strs[i].split('').sort().join('');
        if(sortedStringsMap.has(sortedString)){
            sortedStringsMap.get(sortedString).push(strs[i]);
        }
    }

     for(let [key,val] of sortedStringsMap){
        groupOfAnagrams.push(val);
     }
    
    return groupOfAnagrams;
};

var createSortedStringsHashMap = function(str){

    // key -> sorted string and value -> array containing anagrams
    const map = new Map(); 

    for(let i = 0; i < str.length; i++)
    {
        let sortedString = str[i].split('').sort().join('');
        if(!map.has(sortedString)) {
            map.set(sortedString, [] );
        }
    }

    return map;
}


