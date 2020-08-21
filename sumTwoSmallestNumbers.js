function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => (a - b));
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));