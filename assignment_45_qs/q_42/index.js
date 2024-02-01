"use strict";
function showMagicians2(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function makeGreat4(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let magicianNames = ["Armaan", "Ahmad", "Hamzah", "Mustafa"];
let greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
