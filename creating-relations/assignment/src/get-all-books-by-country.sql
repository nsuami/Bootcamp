SELECT *
    FROM books JOIN authors
    ON books.author_id = authors.author_id
    WHERE (authors.nationality = 'China')
    OR (authors.nationality = 'Turkey');