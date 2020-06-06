function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var i;
  var count = 0;
  
  for(i = 0; i < nums.length; i++)
  {
    if(target > nums[i])
      count++;
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;