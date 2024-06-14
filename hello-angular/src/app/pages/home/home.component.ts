import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from '../../clock/clock.component';
import { CountdownComponent } from '../../countdown/countdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClockComponent, CountdownComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'hello-angular';

  format = 'HH:mm:ss';

  delay = 1000;

  showClock = true;
}
