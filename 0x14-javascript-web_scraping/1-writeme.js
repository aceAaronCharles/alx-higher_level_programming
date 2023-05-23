#!/usr/bin/node
// Writes a string to a file.
conts fs = require('fs');
fs.writeFile(process,argv[2], process.argv[3], err => {
  if (err) console.log(err);
});

