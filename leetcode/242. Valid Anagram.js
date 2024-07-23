/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if(s.length != t.length) return false;
  
  const hash = {}

  for(const i of s){
      if(hash[i]) hash[i]++;
      else hash[i] = 1;
  }

  for(const j of t){
      if(hash[j] == undefined) return false
      hash[j] --
      if(hash[j] < 0) return false
  }

  return true;
};