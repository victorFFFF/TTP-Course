function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;

  var count = 0;
  var i;

  for(i = 0; i < nums.length; i++)
  { 

    if(count == 0)
    {
      if(nums[i] == start)
        count++;
    }
    else{
        count++;
        if(nums[i] == end)
        break;
    }
  }

  return count;


}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;