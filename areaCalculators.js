const calculateRectangleArea = function (length, width) {
  if (length >= 1 && width >= 1) {
    return length * width;
  } else {
    return undefined;
  }
};
const calculateTriangleArea = function (base, height) {
  if (base >= 1 && height >= 1) {
    return (base * height) / 2;
  } else {
    return undefined;
  }
};
const calculateCircleArea = function (radius) {
  if (radius >= 1) {
    return Math.PI * (radius * radius);
  } else {
    return undefined;
  }
};

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
