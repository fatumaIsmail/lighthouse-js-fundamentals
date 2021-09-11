// In this challenge, we will write a function that determines how many hundreds can be made from a number.

const howManyHundreds = function (number) {
  if (number % 100 === 0) {
    return number / 100;
  } else if (number < 100) {
    return 0;
  } else {
    return Math.floor(number / 100);
  }
};
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
