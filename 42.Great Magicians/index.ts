let magicians: string[] = ["Haris", "Hamdan", "David", "Irtiza", "John"];

// Function to print the name of each magician in the array
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);

// Modifies the array of magicians

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
    }
  }
  
  make_great(magicians); 
  show_magicians(magicians);
