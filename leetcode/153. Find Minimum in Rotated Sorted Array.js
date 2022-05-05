/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  if(nums.length==1) return nums[0];
  
  let leftIndex = 0;
  let rightIndex = nums.length-1;
  
  while(leftIndex <= rightIndex){
      if(nums[leftIndex] < nums[rightIndex]){
          return nums[leftIndex]; 
      }
      
      let midIndex = leftIndex + Math.floor((rightIndex-leftIndex)/2);
      
      if(nums[midIndex] < nums[midIndex-1]){
          return nums[midIndex]; 
      }
      
      if(nums[midIndex]>=nums[leftIndex]){
          leftIndex = midIndex+1;
      }else{
          rightIndex = midIndex-1;
      }
  }
  return nums[leftIndex];
};