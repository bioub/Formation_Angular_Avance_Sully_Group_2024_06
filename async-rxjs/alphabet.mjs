import { interval, map, take } from 'rxjs';

export function alphabet() {
  return interval(1000).pipe(
    map((count) => String.fromCharCode(count + 65)),
    take(1),
  );
}
