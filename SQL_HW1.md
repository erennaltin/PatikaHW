1 - SELECT title, description FROM film;

2- SELECT * FROM film
   WHERE film.length > 60 AND film.length < 75;
   
3- SELECT * FROM film
   WHERE film.rental_rate = 0.99
   AND (film.replacement_cost = 12.99 OR film.replacement_cost = 28.99);

4- SELECT last_name from customer
   WHERE customer.first_name = 'Mary';
   
5- SELECT * FROM film
   WHERE film.length < 50
   AND NOT (film.rental_rate = 2.99 OR film.rental_rate = 4.99);
