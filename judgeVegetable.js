// Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.
const judgeVegetable = function (vegetables, metric) {
  let rank = 0;
  let submitter;
  for (let i = 0; i < vegetables.length; i++) {
    let obj = vegetables[i];
    // console.log(vegetables[i][metric]);
    for (let key in obj) {
      if (metric === key) {
        if (obj[key] > rank) {
          rank = obj[key];
          submitter = obj.submitter;
        }
      }
    }
  }
  return submitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
