

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, model: string, ...args: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        model
    };

    
    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Example usage:
const car1= createCar('Toyota', 'Camry', ['color', 'red'], ['year', 2023]);
console.log(car);


