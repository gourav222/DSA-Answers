//The time-complexity of these solution is O(n)

//The space complexity of these solution is O(n)

function getSingleDigitSum(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  while (sum > 9) {
    sum = getSingleDigitSum(sum);
  }

  return sum;
}

function findNumbersWithSum(targetSum) {
  let numbers = [];

  for (let num = 1; num <= 9999; num++) {
    if (getSingleDigitSum(num) === targetSum) {
      numbers.push(num);
    }
  }

  return numbers;
}

let targetSum = 9;
let numbersWithSum = findNumbersWithSum(targetSum);

console.log("Numbers with sum", targetSum + ":");
console.log(numbersWithSum);
