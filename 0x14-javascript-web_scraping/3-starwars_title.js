#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.log('Please provide a movie ID as an argument.');
  process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Failed to retrieve movie with ID: ${movieId}`);
  } else {
    const movieData = JSON.parse(body);
    console.log(`The title of Episode ${movieId} is: ${movieData.title}`);
  }
});
