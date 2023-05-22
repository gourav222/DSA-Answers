//The time-complexity of these solution is O(n)

//The space complexity of these solution is O(n)

function findMissingNumbers(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let missingNumbers = [];

  for (let i = min + 1; i < max; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

let arr = [4, 5, 7, 1, 9, 2, 3];
let missingNumbers = findMissingNumbers(arr);

console.log("Missing Numbers:", missingNumbers);
