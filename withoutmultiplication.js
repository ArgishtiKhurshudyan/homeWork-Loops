"use strict"

let a = -14,
  b = 5,
  c = 0;
let a1 = -8,
  b1 = 9,
  c1 = -6;
let a2 = 4,
  b2 = 19,
  c2 = -2;
let i = 0;

if (a == 0 || b == 0 || c == 0) {
  console.log("unsigned");
} else if (a < 0) {
  i++;
} else if (b < 0) {
  i++;
} else if (c < 0) {
  i++;
};

if (a1 > 0 && b1 > 0 && c1 > 0) {
  alert("The sign is +");
} else if (a1 < 0 && b1 < 0 && c1 < 0) {
  console.log("The sign is -");
} else if (a1 > 0 && b1 < 0 && c1 < 0) {
  console.log("The sign is +");
} else if (a1 < 0 && b1 > 0 && c1 < 0) {
  console.log("The sign is +");
} else console.log("The sign is -");

if (a2 > 0 && b2 > 0 && c2 > 0) {
  alert("The sign is +");
} else if (a2 < 0 && b2 < 0 && c2 < 0) {
  console.log("The sign is -");
} else if (a2 > 0 && b2 < 0 && c2 < 0) {
  console.log("The sign is +");
} else if (a2 < 0 && b2 > 0 && c2 < 0) {
  console.log("The sign is +");
} else console.log("The sign is -");
