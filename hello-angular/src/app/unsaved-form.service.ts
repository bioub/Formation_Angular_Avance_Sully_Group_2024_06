import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsavedFormService {

  subject$ = new BehaviorSubject<boolean>(false);

  constructor() { }


}
