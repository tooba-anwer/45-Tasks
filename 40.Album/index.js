function make_album(artist_name, album_title, tracks) {
    let music_album = {
        artist: artist_name,
        title: album_title,
    };
    // if(tracks !== undefined){
    //     music_album.tracks = tracks;
    // }
    return music_album;
}
console.log(make_album("Haris", "Destination"));
console.log(make_album("Hashim", "World", 9));
console.log(make_album("Aryan", "Sunset"));
export {};
