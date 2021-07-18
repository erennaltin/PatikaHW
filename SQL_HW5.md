1- SELECT * FROM film
   WHERE film.title LIKE '%n'
   ORDER BY film.length DESC
   LIMIT 5;
   
2- SELECT * FROM film
   WHERE film.title LIKE '%n'
   ORDER BY film.length ASC
   OFFSET 5
   LIMIT 5;
   
3- SELECT * FROM customer
   WHERE customer.store_id = 1
   ORDER BY customer.last_name DESC
   LIMIT 4;
