/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let output = [];
  let currentMultiple = 1;

  // forward
  for (let i = 0; i < nums.length; i++) {
    output[i] = currentMultiple;
    currentMultiple = currentMultiple * nums[i];
  }

  // backward
  currentMultiple = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * currentMultiple;
    currentMultiple = currentMultiple * nums[i];
  }

  return output;
};
