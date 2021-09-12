const smartGarbage = function (trash, bins) {
  for (let key in bins) {
    if (trash === key) {
      bins[key] = bins[key] + 1;
    }
  }
  return bins;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("waste", { waste: 4, recycling: 2, compost: 5 }));

// returns object
// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }

// function working correctly but evaluator marked as wrong. What is the issue???
