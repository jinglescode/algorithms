/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  let solutions = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      let sum = nums[left] + nums[right] + n;
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        solutions.push([nums[left], nums[right], n]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return solutions;
};
