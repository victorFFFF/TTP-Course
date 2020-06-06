function frequencyCounter(word) {
  var obj = {};
  for (var i=0; i < word.length; i++) {
    if (word[i] in obj) {
      obj[word[i]] += 1;
    } else {
      obj[word[i]] = 1;
    }
  }
  return obj;
}
// Do not edit this line;
module.exports = frequencyCounter;