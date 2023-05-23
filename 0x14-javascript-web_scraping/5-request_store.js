#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log('Please provide both the URL and file path as arguments.');
  process.exit(1);
}

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to retrieve the webpage.');
  } else {
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Webpage content saved to file: ${filePath}`);
      }
    });
  }
});
