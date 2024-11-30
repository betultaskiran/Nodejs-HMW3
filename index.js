// index.js

const { circleArea, circleCircumference } = require("./circle");

const radius = 5;

console.log(
  `Area of the circle with radius ${radius}: ${circleArea(radius).toFixed(2)}`
);
console.log(
  `Circumference of the circle with radius ${radius}: ${circleCircumference(
    radius
  ).toFixed(2)}`
);
