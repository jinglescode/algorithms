/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let result = 0;
  
  let left = 0;
  let right = height.length - 1;
  
  while(right > left){
      let h = Math.min(height[left], height[right]);
      let area = (right-left) * h;
      
      if(area > result){
          result = area;
      }
      
      if(height[left] > height[right]){
          right--;
      }else{
          left++
      }
  }
  return result;
};