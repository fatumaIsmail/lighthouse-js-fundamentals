// The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

// The function returns one of the following strings, based on the value of age:

// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.

const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age <= 18 && age >= 13) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
};
