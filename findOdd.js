/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

function findOdd(numbersList) {
  const countArray = [];

  for (let i = 0; i < numbersList.length; i++) {
    let count = 0;

    for (let n = 0; n < numbersList.length; n++) {
      if (numbersList[i] == numbersList[n]) {
        count++;
      } 
    }
    countArray.push(count);

  }

  let oddItem;
  for (let index = 0; index < numbersList.length; index++) {
    if ((countArray[index]+2)%2 == 1) oddItem = numbersList[index];
  }

  return oddItem;
}

console.log(findOdd([9,3,4,5,6,7,8,8,7,6,5,4,3]));