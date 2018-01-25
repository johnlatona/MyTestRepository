-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

USE favorite_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (

  food VARCHAR(50) NOT NULL,
  score INTEGER(10)
  -- Make a string column called "food" which cannot contain null --
  -- Make an numeric column called "score" --
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(70) NOT NULL,
  -- Make a string column called "song" which cannot contain null --
  -- Make a string column called "artist" --
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  movie VARCHAR(50) NOT NULL,
  five_times BOOLEAN NOT NULL default 0,
  score INTEGER(10),
  PRIMARY KEY (id)
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  -- Create a string column called "movie" which cannot be null --
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  -- Make an integer column called "score" --
  -- Set the primary key of the table to id --
);

INSERT INTO favorite_foods (food, score)
VALUES ("pizza", 8);

INSERT INTO favorite_foods (food, score)
VALUES ("filet mignon", 9);

INSERT INTO favorite_foods (food, score)
VALUES ("mac and cheese", 10);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Schism", "Tool", 7);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Master of Puppets", "Metallica", 6);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Smells Like Teen Spirit", "Nirvana", 5);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Black Sheep", TRUE, 8);

INSERT INTO favorite_movies (movie)
VALUES ("Liar Liar");

UPDATE favorite_movies
SET five_times = TRUE, score = 9
WHERE movie = "Liar Liar";

