const sumLargestNumbers = function (data) {
  let highestNum = 0;
  let secondHighestNum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > highestNum) {
      secondHighestNum = highestNum;
      highestNum = data[i];
    } else if (data[i] > secondHighestNum) {
      secondHighestNum = data[i];
    } else {
      continue;
    }
  }
  return highestNum + secondHighestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
