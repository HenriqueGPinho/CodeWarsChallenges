function sumTwoSmallestNumbers(numbers) {  
  numbers.sort();
  const a = numbers[0], b = numbers[1];
  return a + b;
}

console.log(sumTwoSmallestNumbers([5, 4, 9, 2, 7]));