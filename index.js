function hasTargetSum(array, target) {
  const seen = new Set(); // Set to store the numbers we have seen

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(array[i]);
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
/* function hasTargetSum(array, target)
  seen = empty Set to store the numbers we have seen

  for i = 0 to array.length - 1
    complement = target - array[i]
    if seen contains complement
      return true
    add array[i] to seen

  return false

/*
  Add written explanation of your solution here
   The function iterates through each element in the array and checks if the complement (target minus current element) exists in the array. 
   If a complement is found, it means that a pair of numbers exists in the array that adds up to the target, and the function returns true. 
   If no such pair is found after checking all elements, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
