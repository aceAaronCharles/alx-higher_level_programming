#!/usr/bin/node

const dict = require('./101-data.js').dict;
const newDict = {};

for (let userId in dict) {
	const occurrence = dict[userId];
  if (newDict[occurrence] === undefined) {
    newDict[occurrence] = [userId];
  } else {
    newDict[occurrence].push(userId);
  }
}
console.log(newDict);
