"use strict";
let usernames1 = []; // Empty array to simulate no users
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}