class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var left = 0;
    var right = nums.length-1;
    var midpoint;

    while(left <= right)
    {
      midpoint =  Math.floor((left + right) / 2);

      if( nums[midpoint] == target)
        return true;
     else{ 
        if( target < nums[midpoint] )
              right = midpoint -1;
            else
                left = midpoint +1;
     }
    }
    return false;

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;