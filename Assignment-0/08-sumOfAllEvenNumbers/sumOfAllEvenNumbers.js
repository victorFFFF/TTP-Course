function sumOfAllEvenNumbers(nums) {
  // Insert code here;

  var i;
  var count = 0;

  for(i = 0; i < nums.length; i++)
  {
    if(nums[i] % 2 == 0)
      count++;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;