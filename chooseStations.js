const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    for (let j = 0; j < stations[i].length; j++) {
      if (
        (stations[i][2] === "school" ||
          stations[i][2] === "community centre") &&
        stations[i][j] >= 20
      ) {
        goodStations.push(stations[i][0]);
      }
    }
  }
  return goodStations;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

console.log(chooseStations(stations));
