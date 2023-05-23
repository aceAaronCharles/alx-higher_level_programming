#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

if (!apiUrl) {
  console.log('https://swapi-api.alx-tools.com/api/films/');
  process.exit(1);
}

const url = `${apiUrl}${characterId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Failed to retrieve character with ID: ${characterId}`);
  } else {
    const characterData = JSON.parse(body);
    const movieCount = characterData.films.length;
    console.log(`${movieCount}`);
  }
});
