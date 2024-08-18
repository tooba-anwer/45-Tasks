let magicians = ["Haris", "Hamdan", "David", "Irtiza", "John"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
    return magicians;
}
let magicians_name = ["Osama", "Zaid", "Faris"];
let copy_magicians_name = magicians_name.slice();
let copy_great_magicians = make_great(copy_magicians_name);
console.log(`\nOriginal Array\n`);
show_magicians(magicians_name);
console.log(`\nCoppied Array\n`);
show_magicians(copy_great_magicians);
export {};
