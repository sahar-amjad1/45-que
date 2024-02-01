"use strict";
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let magicianNames5 = ["Armaan", "Ahmad", "Hamzah", "Mustafa"];
let greatMagicians5 = makeGreat([...magicianNames]); // Making a copy using the spread operator
showMagicians(magicianNames); // Original array remains unchanged
console.log("Great Magicians:");
showMagicians(greatMagicians); // Modified array with "the Great" added to each magician's name
