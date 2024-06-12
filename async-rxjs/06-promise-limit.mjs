// import { setTimeout } from 'node:timers/promises';

// setTimeout(1000).then(() => {
//   console.log('1s');
// });

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  })
}

timeout(1000).then(() => {
  console.log('1s');
});

// function interval(delay) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//     }, delay);
//   })
// }

// interval(1000).then(() => {
//   console.log('1s');
// });