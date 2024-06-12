import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit, OnChanges {

  now = new Date();

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  _interval: any;

  ngOnInit(): void {
    console.log(setInterval);

    this._interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['delay'].currentValue !== changes['delay'].previousValue && !changes['delay'].firstChange) {
      clearInterval(this._interval);
      this._interval = setInterval(() => {
        this.now = new Date();
      }, this.delay);
    }
  }


}
