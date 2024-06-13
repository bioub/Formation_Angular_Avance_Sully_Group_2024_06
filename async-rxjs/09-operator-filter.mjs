import { filter, interval } from 'rxjs';

interval(1000).pipe(
  filter((val) => val % 2 === 1)
).subscribe((val) => {
  console.log(val);
})