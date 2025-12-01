/**
 Question Link: https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Need to optimize the solution
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const sArr = s.split('');
    const tArr = t.split('');
    const updatedS = sArr.sort().toString();
    const updatedT = tArr.sort().toString();

    if(updatedS === updatedT){
        return true;
    }

    return false;
};
