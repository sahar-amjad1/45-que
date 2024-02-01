"use strict";
const moreguest = ["ali", "zain", "sahar"];
moreguest.unshift("zainab", "hoorab", "javaria");
console.log(moreguest);
//
const morepeople = ["ali", "zain", "sahar", "zainab", "hoorab", "javaria"];
for (const more of morepeople)
    console.log(`hi ${more} ,i have a big table u all r invited `);
//
const morepeople1 = ["ali", "zain", "sahar", "zainab", "hoorab", "javaria"];
morepeople1.unshift("hassan");
console.log(morepeople1);
//
const morepeople2 = ["ali", "zain", "sahar", "zainab", "hoorab", "javaria"];
morepeople2.splice(3, 0, "zamin");
console.log(morepeople2);
//
const morepeople3 = ["ali", "zain", "sahar", "zainab", "hoorab", "javaria"];
morepeople3.push("zirwa");
console.log(morepeople3);
console.log(`hi ${morepeople3} ,i have a big table u all r invited `);
