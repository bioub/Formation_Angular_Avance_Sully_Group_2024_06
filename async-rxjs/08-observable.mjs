import { Observable, interval } from 'rxjs';

// function interval(delay) {
//   return new Observable((subscriber) => {
//     setInterval(() => {
//       subscriber.next();
//     }, delay);
//   })
// }

interval(1000).subscribe({
  next() {
    console.log('1s');
  },
  error(err) {
    console.log(err);
  },
  complete() {
    console.log('Complete');
  }
});