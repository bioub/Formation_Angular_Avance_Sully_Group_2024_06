const fs = require('node:fs/promises');

async function copy() {
  try {
    const buffer = await fs.readFile('source.txt');
    await fs.writeFile('dest.txt', buffer);
  } catch (err) {
    console.log(err);
  }
}

copy();
