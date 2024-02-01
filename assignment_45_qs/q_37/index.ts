
function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Size: ${size}, Message: "${message}"`);
}


makeShirt();


makeShirt('Medium');

makeShirt('Small', 'Custom message here!');
