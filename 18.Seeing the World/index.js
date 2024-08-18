"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let favourite_places = ["Kashmir", "Skardu", "Murree", "Islamabad", "Naran"];
// Print your array in its original order.
console.log("original order  " + favourite_places + "\n");
// Making copy of an array & Print your array in alphabetical order without modifying the actual list
console.log("alphabetical order  " + [...favourite_places].sort() + "\n");
// Show that your array is still in its original order by printing it.
console.log("original order  " + favourite_places + "\n");
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order  " + [...favourite_places].sort().reverse() + "\n");
// Show that your array is still in its original order by printing it again.
console.log("original order  " + favourite_places + "\n");
//  Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order of list  " + favourite_places.reverse() + "\n");
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order of list  " + favourite_places.reverse() + "\n");
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order  " + favourite_places.sort() + "\n");
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order  " + favourite_places.sort().reverse() + "\n");
// let copyOfArray2 = favourite_places.slice();
// let reverseOfArray2 = copyOfArray2.reverse();
// console.log(reverseOfArray2); 
// console.log(favourite_places);
// let reverseOfArray3 = favourite_places.reverse();
// console.log(reverseOfArray3);
// let reverseOfArray4 = reverseOfArray3.reverse();
// console.log(reverseOfArray4);
