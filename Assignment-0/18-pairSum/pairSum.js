function pairSum(nums, target) {
  // Insert code here;
  var i,j;

  if(nums.length <= 1)
  throw new Error('Array length have to be greater than 1');
  
  
  
  for(i = 0; i < nums.length; i++)
  {
    for(j = i+1; j < nums.length; j++)
    {
        if(nums[i] + nums[j] == target)
        return true;
    }
  }

  return false;
  
}

// Do not edit this line;
module.exports = pairSum;