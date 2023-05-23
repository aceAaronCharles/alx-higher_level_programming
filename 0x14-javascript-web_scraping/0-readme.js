#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

try {
  const content = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(content);
  console.log(jsonData);
} catch (error) {
  console.log(`Error occurred while reading the file: ${error}`);
}

