"use strict";
let guests = ["Hania", "Erum", "Azka"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for dinner?`);
});
let unableToAttend = "Erum";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Sehrish";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
