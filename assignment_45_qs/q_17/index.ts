
const guest4 = ["ali", "zain", "sahar", "zainab", "hoorab", "javaria"];

for (const guest of guest4)
  console.log(`hey ${guest} , u invited only two people`);

const guest5 = ["ali", "zain", "sahar", "zainab", "hoorab", "javaria"];
guest5.pop();

console.log(guest5);
console.log(`hey ${"javaria"} u are not invited`);

const guest6 = ["ali", "zain", "sahar", "zainab", "hoorab"];
guest6.pop();

console.log(guest6);
console.log(`hey ${"hoorab"} u are not invited`);
const guest7 = ["ali", "zain", "sahar", "zainab"];
guest7.pop();

console.log(guest7);
console.log(`hey ${"zainab"} u are not invited`);

const guest8 = ["ali", "zain", "sahar"];
guest8.pop();

console.log(guest8);
console.log(`hey ${"sahar"} u are not invited`);
const guest9 = ["ali", "zain"];
for (const guest of guest9) console.log(`hey ${guest} u are still invited`);

const guest10 = ["ali ", "zain"];

guest10.pop();
console.log(guest10);
const guest11 = ["ali "];

guest11.pop();
console.log(guest11);
