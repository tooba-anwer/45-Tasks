let magicians: string[] = ["Haris", "Hamdan", "David", "Irtiza", "John"];

function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);

function make_great(magicians: string[]):string[]{
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
    }
    return magicians;
  }
  
let magicians_name = ["Osama","Zaid","Faris"];

let copy_magicians_name = magicians_name.slice();

let copy_great_magicians = make_great(copy_magicians_name);

console.log(`\nOriginal Array\n`);
show_magicians(magicians_name);

console.log(`\nCoppied Array\n`);
show_magicians(copy_great_magicians);


