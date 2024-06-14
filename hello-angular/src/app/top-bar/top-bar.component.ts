import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnsavedFormService } from '../unsaved-form.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  disableButton$!: Observable<boolean>;

  constructor(private unsavedFormService: UnsavedFormService) {}

  ngOnInit(): void {
    this.disableButton$ = this.unsavedFormService.subject$
      .asObservable()
      .pipe(map((val) => !val));
  }
}
