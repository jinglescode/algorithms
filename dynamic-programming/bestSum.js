var bestSum = function (targetSum = 7, numbers = [2, 3, 5], memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  for (let n of numbers) {
    let resultarray = bestSum(targetSum - n, numbers, memo);
    if (resultarray) {
      resultarray = [...resultarray, n];
      if (
        memo[targetSum] == null ||
        resultarray.length < memo[targetSum].length
      ) {
        memo[targetSum] = resultarray;
      }
    }
  }

  return memo[targetSum];
};
