1- SELECT ROUND(AVG(rental_rate), 3) FROM film;

2- SELECT COUNT(*) FROM film
   WHERE film.title LIKE 'C%';
   
3- SELECT MAX(length) FROM film
   WHERE film.rental_rate = 0.99;
   
4- SELECT COUNT(DISTINCT replacement_cost) FROM film
   WHERE film.length > 150;
