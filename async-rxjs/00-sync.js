const fs = require('node:fs');

try {
  const buffer = fs.readFileSync('source.txt');
  fs.writeFileSync('dest.txt', buffer);
} catch (err) {
  console.log(err);
}
