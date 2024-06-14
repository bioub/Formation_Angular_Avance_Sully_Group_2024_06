import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SelectComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    SelectComponent,

  ]
})
export class SharedModule { }
