SELECT artist_name, song_name, album_name
    FROM artists LEFT JOIN songs
    ON songs.artist = artists.artist_id;