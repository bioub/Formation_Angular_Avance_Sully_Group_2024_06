const fs = require('node:fs');

fs.readFile('source.txt', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('dest.txt', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy done');
      }
    });
  }
});

