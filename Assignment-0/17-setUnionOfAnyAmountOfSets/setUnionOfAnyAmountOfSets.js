function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
 
  const mySet = new Set();

  for (const sets of args) {
    for (const num of sets) {
      mySet.add(num);
    }
  }

  return mySet;

  }

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;