SELECT *
    FROM books JOIN authors
    ON books.author_id = authors.author_id
    WHERE in_stock = false;