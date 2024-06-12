import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClockComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-angular';

  format = 'HH:mm:ss';

  delay = 1000;
}
