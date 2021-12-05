"use strict";

let array = [21, 35, 13, 420, 24];

for (let i = 0; i <= array.length; i++) {
  if (array[i] % 3 === 0 && array[i] % 7 === 0) {
    console.log("21 is a multiple of 3 and 7");
  } else if (array[i] % 5 === 0 && array[i] % 7 === 0) {
    console.log("35 is a multiple of 5 and 7");
  } else if (array[i] % 5 !== 0 && array[i] % 7 !== 0 && array[i] % 3 !== 0) {
    console.log("“13 is not a multiple of 3, 5 or 7.”");
  } else if (array[i] % 5 === 0 && array[i] % 7 === 0 && array[i] % 3 === 0) {
    console.log("“420 is a multiple of 3, 5 and 7.”");
  } else if (array[i] % 5 !== 0 && array[i] % 7 !== 0 && array[i] % 3 === 0) {
    console.log("“24 is a multiple of 3.”");
  } else break;
}
