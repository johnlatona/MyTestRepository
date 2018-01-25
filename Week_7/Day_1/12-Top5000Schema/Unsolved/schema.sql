DROP DATABASE if exists top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
	rank INTEGER(10),
	artist_name VARCHAR(100),
	song_name VARCHAR(150),
	year INTEGER(10),
	global DECIMAL(10,3),
	USA DECIMAL(10,3),
	UK DECIMAL(10,3),
	europe DECIMAL(10,3),
	rest_of_world DECIMAL(10,3)
);