function isPalindrome(word) {
  // Insert code here;

  var i;
  var end = word.length-1;

  for(i = 0; i < word.length/2; i++)
  {
      if( word[i] != word[end-i] )
        return false;

  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;