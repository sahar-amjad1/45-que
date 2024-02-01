// Define the makeAlbum function
function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = { artist, title };

    if (tracks !== undefined) {
        album.tracks = tracks; 
    }

    return album;
}


const album1 = makeAlbum('Artist1', 'Album1', 10);
const album2 = makeAlbum('Artist2', 'Album2' , 8);
const album3 = makeAlbum('Artist3', 'Album3', 15);


console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);


const customAlbum = makeAlbum('CustomArtist', 'CustomAlbum', 12);
console.log("Custom Album:", customAlbum);

