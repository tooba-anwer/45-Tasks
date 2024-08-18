let current_users = ["Ali", "ahmed", "Haris", "Ayan", "hunain"];
let new_users = ["Osama", "Ahmed", "Hunain", "Aryan", "Musa"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
export {};
