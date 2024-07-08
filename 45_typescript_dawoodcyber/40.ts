
function make_album(artist_name:string, album_title:string, tracks?:number)
{
    let music_album =
    {
        artist:artist_name,
        title: album_title,
        track:tracks!=undefined?tracks:null,     
    };
    
    return music_album;
}

console.log(make_album("Dawood", "Coding World", 1))
console.log(make_album("D.S", "Programming and AI", 21))
console.log(make_album("Dawood Shaikh", "Peak of"))
