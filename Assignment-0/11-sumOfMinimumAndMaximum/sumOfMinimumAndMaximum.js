function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var lowest = nums[0];
  var highest = nums[0];
  var i;

  for(i = 0; i < nums.length; i++)
  {
    if(nums[i] <= lowest)
      lowest = nums[i];
    if(nums[i] >= highest)
      highest = nums[i];
  }
    return (highest+lowest);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;