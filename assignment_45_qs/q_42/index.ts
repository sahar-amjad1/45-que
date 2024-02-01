function showMagicians2(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat4(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magicianNames: string[] = ["Armaan", "Ahmad", "Hamzah", "Mustafa"];
let greatMagicians: string[] = makeGreat(magicianNames);
showMagicians(greatMagicians);
