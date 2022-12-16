CREATE TABLE IF NOT EXISTS artists_concerts (
    artist_id INTEGER REFERENCES artists(artist_id) NOT NULL,
    concert_id INTEGER REFERENCES concerts(concert_id) NOT NULL,
    scheduled_start_at time,
    scheduled_end_at time,
    PRIMARY KEY (artist_id, concert_id)
);