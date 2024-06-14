import { TestBed } from '@angular/core/testing';

import { UnsavedFormService } from './unsaved-form.service';

describe('UnsavedFormService', () => {
  let service: UnsavedFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsavedFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
