// Array of magician's names
let magicians: string[] = ["Haris", "Hamdan", "David", "Irtiza", "John"];

// Function to print the name of each magician in the array
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Call the function with the array of magicians
show_magicians(magicians);
