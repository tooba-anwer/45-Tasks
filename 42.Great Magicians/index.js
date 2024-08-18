// Array of magician's names
let magicians = ["Haris", "Hamdan", "David", "Irtiza", "John"];
// Function to print the name of each magician in the array
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
// 
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
export {};
