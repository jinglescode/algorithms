/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = {};
  for (let i in nums) {
    let n = nums[i];
    if (n in hash) {
      return true;
    } else {
      hash[n] = true;
    }
  }
  return false;
};
