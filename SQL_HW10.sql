-- First Question

SELECT city, country FROM city
LEFT JOIN country ON city.country_id = country.country_id;

-- Second Question

SELECT payment_id, first_name, last_name FROM payment
RIGHT JOIN customer ON payment.customer_id = customer.customer_id;

-- Third Question

SELECT rental_id, first_name, last_name FROM payment
FULL JOIN customer ON payment.customer_id = customer.customer_id;
