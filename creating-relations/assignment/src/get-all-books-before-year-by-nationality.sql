SELECT *
    FROM books JOIN authors
    ON books.author_id = authors.author_id
    WHERE (authors.nationality != 'United States of America')
    AND (books.publication_year < 2005);