DROP DATABASE IF EXISTS great_bayDB;

CREATE DATABASE great_bayDB;

USE great_bayDB;

CREATE TABLE products (
	id INTEGER AUTO_INCREMENT NOT NULL,
	item VARCHAR(50) NOT NULL,
	starting_bid DECIMAL(10,2) NOT NULL,
	current_bid DECIMAL(10,2),
	PRIMARY KEY (id)
);

INSERT INTO products (item, starting_bid)
VALUES ("Truck", 200);

INSERT INTO products (item, starting_bid)
VALUES("Cup", 5);

INSERT INTO products (item, starting_bid)
VALUES("Ball", 7);

SELECT * FROM products;