"use strict";

//1 even and odd;

let arr_num = [20, 35, 125];

for (let i = 0; i <= arr_num.length; i++) {
  if (arr_num[i] % 2 === 0) {
    console.log("even", arr_num[i]);
  } else console.log("odd", arr_num[i]);
}
