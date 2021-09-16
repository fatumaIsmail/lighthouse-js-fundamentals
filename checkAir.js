const checkAir = function (samples, threshold) {
  let dirty = 0;
  let cln = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "clean") {
      cln += 1;
    } else {
      dirty += 1;
    }
  }
  let measure = dirty / (dirty + cln);
  if (threshold < measure) {
    return "polluted";
  } else {
    return "clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);
console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
