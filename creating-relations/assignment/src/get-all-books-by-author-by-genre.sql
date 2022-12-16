SELECT *
    FROM books 
    JOIN authors
    ON authors.author_id = books.author_id
    JOIN books_genres
    ON books.book_id = books_genres.book_id
    JOIN genres
    ON genres.genre_id = books_genres.genre_id
    WHERE (authors.author_name = 'Leo Tolstoy')
    AND ((genres.genre_name = 'autobiography') OR (genres.genre_name = 'history'));