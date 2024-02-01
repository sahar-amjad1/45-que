const Guestlist: string[] = ["ali", "zain", "fatima"];

Guestlist.pop();
console.log(Guestlist);
const newlist = ["ali", "zain"];

newlist.push("sahar");
console.log(newlist);

for (const guest of Guestlist) {
  console.log(`hi ${guest} u r invited at home`);
}

//

const guestlist1 = ["ali", "zain"];
for (const guest of guestlist1) {
  console.log(`hi ${guest}, fatima is not comming at home`);
}
//

const newname1 = ["ali", "zain", "sahar"];

for (const name of newname1) console.log(`hi ${name} u r invited at home`);