function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var i;
  var count = 0;

  for(i = 0; i < arr.length; i++)
  {
     if(typeof arr[i] === "boolean" || typeof arr[i] === "string") 
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;