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

// Sol 2: 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let sMap = new Map();
    let tMap = new Map();

    for(let i = 0; i < s.length ; i++)
    {
        if(sMap.has(s[i]))
        {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        }else
        {
          sMap.set(s[i], 0);  
        }
    } 

    for(let j = 0; j < t.length ; j++)
    {
        if(tMap.has(t[j]))
        {
            tMap.set(t[j], tMap.get(t[j]) + 1);
        }else
        {
            tMap.set(t[j], 0);
        }
    }
   
   if(sMap.size !== tMap.size)
   {
        return false;
   }
   
   for(let [key,val] of sMap){
        if(!tMap.has(key) || tMap.get(key) !== val ){
            return false;
        }
   }

   return true;
};
