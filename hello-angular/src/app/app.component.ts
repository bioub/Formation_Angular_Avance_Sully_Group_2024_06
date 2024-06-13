import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClockComponent, CountdownComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-angular';

  format = 'HH:mm:ss';

  delay = 1000;

  showClock = true;
}
