-- SELECT *
--     FROM artists
--     JOIN songs 
--     ON songs.artist = artists.artist_id;    WORKS

-- SELECT *
--     FROM songs
--     JOIN artists 
--     ON artists.artist_id = songs.artist;     WORKS

SELECT *
    FROM artists 
    JOIN songs 
    ON artists.artist_id = songs.artist;  -- WORKS