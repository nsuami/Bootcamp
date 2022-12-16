SELECT fiscal_year, count(*), min(amount), max(amount)
    FROM grants
    GROUP BY fiscal_year
    ORDER BY fiscal_year DESC;