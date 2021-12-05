"use strict";
//763
let x = 367;
let a = x % 10;
a = a * 100;
x = (x - x % 10) / 10;

let b = x % 10;
a = a + b * 10;
x = (x - x % 10) / 10;
let c = x;
a = a + c;
console.log(a);
// 2100
let y = 1002;
let z = y % 10;
z = z * 1000;
y = (y - y % 10) / 1000;
z = z + y * 100;
console.log(z);
