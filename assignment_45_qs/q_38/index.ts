

function describeCity(city : string, country : string = "unknown") : void{
console.log ( `${city} is in ${country}.`);
}

describeCity("Karachi" , "Pakistan");
describeCity("New York");
describeCity("Tokyo", "Japan");
