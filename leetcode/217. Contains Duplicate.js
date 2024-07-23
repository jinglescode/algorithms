/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {}
  for(let n of nums){
      if(n in dict) return true;
      else dict[n] = true;
  }
  return false;
};
