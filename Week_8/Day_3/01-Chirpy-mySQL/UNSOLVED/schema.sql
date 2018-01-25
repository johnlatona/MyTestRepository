CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
  id INT(100) AUTO_INCREMENT NOT NULL,
  author VARCHAR(100) NOT NULL,
  chirp VARCHAR(150) NOT NULL,
  created TIMESTAMP,
  PRIMARY KEY(id)
);