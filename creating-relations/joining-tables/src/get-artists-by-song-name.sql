SELECT artist_name, song_name, album_name
    FROM artists
    JOIN songs
    ON artists.artist_id = songs.artist
    WHERE song_name LIKE 'The%'
    