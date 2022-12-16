SELECT artist_name AS artist, song_name, album_name AS album
    FROM artists FULL JOIN songs
    ON songs.artist = artists.artist_id;