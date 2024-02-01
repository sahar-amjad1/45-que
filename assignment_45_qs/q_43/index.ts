function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magicianNames5: string[] = ["Armaan", "Ahmad", "Hamzah", "Mustafa"];

let greatMagicians5: string[] = makeGreat([...magicianNames]); // Making a copy using the spread operator
showMagicians(magicianNames); // Original array remains unchanged
console.log("Great Magicians:");
showMagicians(greatMagicians); // Modified array with "the Great" added to each magician's name
