const calculateRectangleArea = require("./utils/area/reactangle");
const calculateCirclePerimeter = require("./utils/perimeter/circle");
const area = calculateRectangleArea(20,80);
const perimeter = calculateCirclePerimeter(34);

console.log("Area ",area);
console.log("Perimeter",perimeter);