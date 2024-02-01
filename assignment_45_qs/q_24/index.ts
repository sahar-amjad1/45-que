const string1: string = "sahar";
const string2: string = "fatima";
const string3: string = "hoorab";

console.log(string1.toLowerCase() === string2.toLowerCase());

console.log(string1 !== string3);
//
const num1: number = 19;
const num2: number = 30;

console.log(num1 === num2 / 2);
console.log(num2 > num1);
console.log(num1 <= num2);

console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num2 < num1);
//
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z);
console.log(x > y || y > z);

//

const fruits: string[] = ["apple", "banana", "orange"];

console.log(fruits.includes("banana"));

console.log(fruits.includes("grape"));
//

const colors: string[] = ["red", "blue", "green"];

console.log(!colors.includes("yellow"));

console.log(!colors.includes("blue"));