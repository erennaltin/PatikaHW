-- First Question

SELECT COUNT(*) FROM film
WHERE film.length > ANY (SELECT AVG(length) FROM film);


-- Second Question

SELECT COUNT(*) FROM film
WHERE film.rental_rate = ANY (SELECT MAX(rental_rate) FROM film);


-- Third Question

SELECT * FROM film
WHERE film.rental_rate = ANY (SELECT MIN(rental_rate) FROM film) AND film.replacement_cost = ANY (SELECT MIN(replacement_cost) FROM film);


-- Fourth Question

SELECT customer.first_name, customer.last_name, customer.customer_id, COUNT(*) FROM payment
INNER JOIN customer ON customer.customer_id = payment.customer_id
GROUP BY customer.first_name, payment.customer_id, customer.customer_id
ORDER BY COUNT(*) DESC;

