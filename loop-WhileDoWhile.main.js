"use strict";
//loop while  do while
let i = 0;
let arr = [1, 2, 3, 4, 5, 6];

while (i < arr.length) {
  i++;
  console.log(" while = ", i, arr[i]);
}

let j = 0;
let arr_1 = [1, 2, 3, 4, 5, 6];

do {
  j++;
  console.log(" while = ", j, arr_1[j]);
} while (j < arr_1.length);
