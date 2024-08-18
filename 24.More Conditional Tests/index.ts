let car = "Corolla";
let name = "Haris";
let city = "Karachi";
let age = 30;
let languages = ["JavaScript", "Python", "TypeScript"];

// Tests for equality and inequality with strings
console.log(`Is car == "Corolla"? I predict True.`);
console.log(car == "Corolla"); 

console.log(`Is name == "Ahmed"? I predict False.`);
console.log(name == "Ahmed"); 

// Tests using the lower case function
console.log(`Is city.toLowerCase() == "karachi"? I predict True.`);
console.log(city.toLowerCase() == "karachi"); 

console.log(`Is car.toLowerCase() == "honda"? I predict False.`);
console.log(car.toLowerCase() == "honda"); 

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(`Is age == 30? I predict True.`);
console.log(age == 30); 

console.log(`Is age != 30? I predict False.`);
console.log(age != 30); 

console.log(`Is age > 25? I predict True.`);
console.log(age > 25); 

console.log(`Is age < 25? I predict False.`);
console.log(age < 25); 

console.log(`Is age >= 30? I predict True.`);
console.log(age >= 30);

console.log(`Is age <= 25? I predict False.`);
console.log(age <= 25); 

// Tests using "and" and "or" operators
console.log(`Is car == "Corolla" and name == "Haris"? I predict True.`);
console.log(car == "Corolla" && name == "Haris"); 

console.log(`Is car == "Corolla" and name == "Ahmed"? I predict False.`);
console.log(car == "Corolla" && name == "Ahmed"); 

console.log(`Is car == "Corolla" or name == "Ahmed"? I predict True.`);
console.log(car == "Corolla" || name == "Ahmed"); 

console.log(`Is car == "Honda" or name == "Ahmed"? I predict False.`);
console.log(car == "Honda" || name == "Ahmed"); 

// Test whether an item is in an array
console.log(`Is "JavaScript" in languages? I predict True.`);
console.log(languages.includes("JavaScript"));

console.log(`Is "Ruby" in languages? I predict False.`);
console.log(languages.includes("Ruby")); 

// Test whether an item is not in an array
console.log(`Is "Ruby" not in languages? I predict True.`);
console.log(!languages.includes("Ruby")); 

console.log(`Is "Python" not in languages? I predict False.`);
console.log(!languages.includes("Python")); 
