"use strict";

//2 angels triangles;

let firstAngles = [45, 90];
let secondTriangles = [30, 30];
let thirdAngles = [75, 25];
let x = 0,
  y = 0,
  z = 0;
let sum = 180;

for (let i = 0; i < firstAngles.length; i++) {
  x += firstAngles[i];
}
console.log("firstAngles =  ", sum - x);

for (let j = 0; j < secondTriangles.length; j++) {
  y += secondTriangles[j];
}
console.log("secondTriangles = ", sum - y);

for (let k = 0; k < thirdAngles.length; k++) {
  z += thirdAngles[k];
}
console.log("thirdAngles = ", sum - z);

// MAster eselA

let n = 180;
function thirdAngless(fangles, sectriangles) {
  return n - (fangles + sectriangles);
}
alert(thirdAngless(45, 90));
alert(thirdAngless(30, 30));
alert(thirdAngless(75, 25));
