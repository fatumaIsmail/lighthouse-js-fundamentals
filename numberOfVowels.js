// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = function (data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data[i] === "o" ||
      data[i] === "e" ||
      data[i] === "a" ||
      data[i] === "i" ||
      data[i] === "u"
    ) {
      total += 1;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
