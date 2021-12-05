"use strict"

let num = 456123;
function revers(){
    parseInt(toString(num).split("").reverse().join(""),10);
}
console.log(revers(num))