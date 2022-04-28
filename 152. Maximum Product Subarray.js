/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let maxProduct = Math.max.apply(null, nums);
  let currentProductMin = 1;
  let currentProductMax = 1;
  
  for(let i=0;i<nums.length;i++){
      let n = nums[i];
      
      if(n==0){
          currentProductMin = 1;
          currentProductMax = 1;
      }else{
          let newMin = currentProductMin * n;
          let newMax = currentProductMax * n;
          currentProductMin = Math.min(newMin,newMax,n);
          currentProductMax = Math.max(newMin,newMax,n);
          
          maxProduct = Math.max(maxProduct,currentProductMin,currentProductMax)
      }
  }
  
  return maxProduct;
}