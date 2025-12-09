/**
 Question Link: https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sol 1: Not Recommended
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

// Sol 2: Improved Solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let sMap = createHashMap(s);
    let tMap = createHashMap(t);

   return isItValidAnagram(sMap, tMap);
};

var createHashMap = function(str){

    const map = new Map();

    for(let i = 0; i < str.length ; i++)
    {
        if(map.has(str[i]))
        {
            map.set(str[i], map.get(str[i]) + 1);
        }else
        {
          map.set(str[i], 1);  
        }
    } 

    return map;
}

var isItValidAnagram = function(map1, map2){

    for(let [key,val] of map1){
        if(!map2.has(key) || map2.get(key) !== val ){
            return false;
        }
   }

   return true;
}
