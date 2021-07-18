1- SELECT * FROM country
   WHERE country.country LIKE 'A%a';
   
2- SELECT * FROM country
   WHERE country.country LIKE '%n'
   AND LENGTH(country.country) >= 6;
   
3- SELECT * FROM film
   WHERE film.title LIKE 'C%'
   AND film.length > 90
   AND film.rental_rate IN (2.99);
