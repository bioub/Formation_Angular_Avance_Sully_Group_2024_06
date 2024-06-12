import fs from 'node:fs/promises';

try {
  const buffer = await fs.readFile('source.txt');
  await fs.writeFile('dest.txt', buffer);
} catch (err) {
  console.log(err);
}