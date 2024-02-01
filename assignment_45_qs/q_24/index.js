"use strict";
const string1 = "sahar";
const string2 = "fatima";
const string3 = "hoorab";
console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string1 !== string3);
//
const num1 = 19;
const num2 = 30;
console.log(num1 === num2 / 2);
console.log(num2 > num1);
console.log(num1 <= num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num2 < num1);
//
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z);
console.log(x > y || y > z);
//
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));
console.log(fruits.includes("grape"));
//
const colors = ["red", "blue", "green"];
console.log(!colors.includes("yellow"));
console.log(!colors.includes("blue"));
