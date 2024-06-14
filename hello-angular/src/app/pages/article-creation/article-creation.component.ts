import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UnsavedFormService } from '../../unsaved-form.service';


@Component({
  selector: 'app-article-creation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-creation.component.html',
  styleUrl: './article-creation.component.scss'
})
export class ArticleCreationComponent implements OnInit, OnDestroy {
  articleForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    body: new FormControl(''),
  });

  constructor(private unsavedFormService: UnsavedFormService) { }


  ngOnInit(): void {
    this.articleForm.valueChanges.subscribe((value) => {
      this.unsavedFormService.subject$.next(true);
    });

    // this.articleForm.valueChanges.pipe(
    //   map(() => true)
    // ).subscribe(this.unsavedFormService.subject$)
  }

  handleSubmit() {
    console.log(this.articleForm.value);


    if (this.articleForm.valid) {
      console.log('VALID');
    } else {
      console.log('INVALID');
    }

  }

  ngOnDestroy(): void {
    this.unsavedFormService.subject$.next(false);
  }
}
