const finalPosition = function (moves) {
  let startingPosition = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      startingPosition[1] += 1;
    }
    if (moves[i] === "south") {
      startingPosition[1] -= 1;
    }
    if (moves[i] === "east") {
      startingPosition[0] += 1;
    }
    if (moves[i] === "west") {
      startingPosition[0] -= 1;
    }
  }
  return startingPosition;
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];

console.log(finalPosition(moves));
