/*
  Had to use NeetCode instead of LeetCode as this problem is only available for LeetCode premium users.
  NeetCode Question Link: https://neetcode.io/problems/string-encode-and-decode/question
*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return "";

        let encodedStr = '';

        for(let i = 0 ; i < strs.length; i++){
            let length = strs[i].length;
            let newStr = length + '#' + strs[i];
            encodedStr += newStr; 
        }
        
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let originalList = [];
        let i = 0;

        while ( i < str.length){
            let j = i;

            while(str[j] !== "#"){ 
                j++;
            }

            let length = parseInt(str.slice(i,j)); 

            let actualStr = str.slice(j + 1, j + 1 + length);

            originalList.push(actualStr);

            i = j + 1 + length;
        }

        return originalList;
    }
}
