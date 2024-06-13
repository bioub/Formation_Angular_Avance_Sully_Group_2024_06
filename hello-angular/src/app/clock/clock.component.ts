import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription, interval, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  now$!: Observable<Date>;

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  ngOnInit(): void {
    // this.now$ = interval(1000).pipe(
    //   map(() => new Date()),
    // );
    // console.log(setInterval);

    // this._interval = setInterval(() => {
    //   this.now = new Date();
    // }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['delay'].currentValue !== changes['delay'].previousValue) {
      this.now$ = interval(this.delay).pipe(
        startWith(-1),
        map(() => new Date()),
      );
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    // this.subscription.unsubscribe();
    // clearInterval(this._interval);
  }

}
