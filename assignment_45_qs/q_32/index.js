"use strict";
const currentUsers = ['john', 'alice', 'bob', 'eve', 'charlie'];
const newUsers = ['John', 'Jane', 'Bob', 'Mike', 'Sarah'];
for (const newUser of newUsers) {
    const isUsernameTaken = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());
    const message = isUsernameTaken
        ? `Sorry, the username '${newUser}' is not available. Please enter a new username.`
        : `Congratulations! The username '${newUser}' is available.`;
    console.log(message);
}
