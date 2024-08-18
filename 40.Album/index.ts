function make_album(artist_name : string , album_title : string , tracks? : number ){
    let music_album :{
        artist : string,
        title : string,
        tracks? : number,
    } = {
       artist : artist_name,
       title : album_title, 
    };
     if(tracks !== undefined){
         music_album.tracks = tracks;
     }
  return music_album;
} 
console.log(make_album("Haris","Destination"));
console.log(make_album("Hashim","World", 9 ));
console.log(make_album("Aryan","Sunset"));