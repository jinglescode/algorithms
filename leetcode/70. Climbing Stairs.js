/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let oneStep = 1;
  let twoStep = 1;
  let currentStep = 1;
  while (n > 1) {
    currentStep = oneStep + twoStep;
    twoStep = oneStep;
    oneStep = currentStep;
    n--;
  }
  return currentStep;
};
