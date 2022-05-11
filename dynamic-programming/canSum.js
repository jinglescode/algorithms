/**
 * instead of just returning true or false, i have return the number of ways to sum
 * @param {*} targetSum
 * @param {*} numbers
 * @param {*} memo
 * @returns
 */
var waysToSum = function (targetSum = 7, numbers = [5, 3, 4, 7], memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  memo[targetSum] = 0;
  for (let n of numbers) {
    if (targetSum - n === 0) {
      memo[targetSum] += 1;
    } else if (n < targetSum && targetSum - n > 0) {
      memo[targetSum] += canSum(targetSum - n, numbers, memo);
    }
  }
  console.log(targetSum, memo[targetSum]);
  return memo[targetSum];
};

var canSum = function (targetSum = 7, numbers = [5, 3, 4, 7], memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let n of numbers) {
    memo[targetSum] = canSum(targetSum - n, numbers, memo);
    if (memo[targetSum]) {
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};
