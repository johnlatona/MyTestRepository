DROP DATABASE if exists pop_quiz_db;

CREATE DATABASE pop_quiz_db;

USE pop_quiz_db;

CREATE TABLE tableOne (
	id INT AUTO_INCREMENT NOT NULL,
	text_field1 VARCHAR(50) NOT NULL,
	text_field2 VARCHAR(50),
	PRIMARY KEY (id)
);

INSERT INTO tableOne (text_field1, text_field2)
VALUES ("Row One, Field 1", "Row One, Field Two");

INSERT INTO tableOne (text_field1, text_field2)
VALUES("Row Two, Field 1", "Row Two, Field Two");

INSERT INTO tableOne (text_field1, text_field2)
VALUES("Row Three, Field 1", "Row Three, Field Two");

