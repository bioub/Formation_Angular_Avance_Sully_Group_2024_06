import fs from 'node:fs/promises';

try {
  const buffers = await Promise.all([
    fs.readFile('source.txt'),
    fs.readFile('source2.txt'),
  ]);
  
  for (const buffer of buffers) {
    console.log(buffer.toString('utf-8'));
  }
} catch (err) {
  console.log(err);
}