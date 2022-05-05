/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let valueToIndex = {};
  for (let index in nums) {
    let current = nums[index];
    if (target - current in valueToIndex) {
      return [valueToIndex[target - current], index];
    } else {
      valueToIndex[current] = index;
    }
  }
};
