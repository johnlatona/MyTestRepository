CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
	id INT(10) AUTO_INCREMENT NOT NULL,
	name VARCHAR(100) NOT NULL,
	coolness_points INT(10) NOT NULL,
	attitude VARCHAR(100) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Kramer", 9000, "Insane");

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Jerry Seinfeld", 4100, "Asshole");

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("George Castanza", 135, "Negative Doofus");

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Elaine", 1200, "Bitch");

