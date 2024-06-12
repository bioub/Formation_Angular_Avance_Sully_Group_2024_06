const fs = require('node:fs/promises');

// fs.readFile('source.txt', (err, buffer) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('dest.txt', buffer, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Copy done');
//       }
//     });
//   }
// });

// toujours un callback hell
// fs.readFile('source.txt')
//   .then((buffer) => {
//     fs.writeFile('dest.txt', buffer)
//       .then(() => {
//         console.log('Copy done');
//       })
//       .catch(() => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });


fs.readFile('source.txt')
  .then((buffer) => {
    return fs.writeFile('dest.txt', buffer);
  })
  .then(() => {
    console.log('Copy done');
  })
  .catch((err) => {
    console.log(err);
  });