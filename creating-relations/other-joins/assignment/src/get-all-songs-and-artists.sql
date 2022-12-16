SELECT song_name, artist_name, album_name
    FROM artists RIGHT JOIN songs
    ON songs.artist = artists.artist_id;