/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestSum = nums[0];
    let currentSum = 0;
    
    for(let i in nums){
        let n = nums[i];
        
        if(currentSum<0){
            currentSum=0;
        }
        
        currentSum += n;
        
        if(largestSum<currentSum){
            largestSum = currentSum;
        }
    }
    
    return largestSum
};