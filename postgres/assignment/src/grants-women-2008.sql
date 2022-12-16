SELECT sum(amount)
    FROM grants
    WHERE applicant_name LIKE '%Women%' 
    AND fiscal_year between '01/01/2008' and '12/31/2008';