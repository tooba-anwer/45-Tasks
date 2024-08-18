"use strict";
let guests = ["Hania", "Erum", "Azka"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Sehrish");
guests.splice(guests.length / 2, 0, "Hamna");
guests.push("Arisha");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
