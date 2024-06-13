import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, forkJoin, interval, map, startWith, take } from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnDestroy  {

  count = 10;

  // ----{0}----{1}----{2}----{3}----{4}----
  // map((val) => 9 - val)
  // ----{9}----{8}----{7}----{6}----{5}----
  // take(2)
  // ----{9}----{8}|

  countdown$ = interval(1000).pipe(
    startWith(-1),
    map((val) => 9 - val),
    take(11),
  );

  subscription!: Subscription;

  start() {
    this.subscription?.unsubscribe();
    this.subscription = this.countdown$.subscribe((val) => {
      this.count = val;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
