"use strict";
function describeCity(city, country = "unknown") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("Tokyo", "Japan");
