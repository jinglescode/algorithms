var howSum = function (targetSum = 7, numbers = [5, 3, 4], memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  for (let n of numbers) {
    if (n <= targetSum) {
      let resultarray = howSum(targetSum - n, numbers, memo);
      if (resultarray) {
        memo[targetSum] = [...resultarray, n];
        return memo[targetSum];
      }
    }
  }
  memo[targetSum] = null;
  return null;
};
