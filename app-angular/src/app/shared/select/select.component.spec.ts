import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { $ } from 'protractor';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display inputs', () => {
    component.items = ['Jean', 'Pierre', 'Paul'];
    component.selected = 'Toto';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Toto');

    fixture.nativeElement.querySelector('.selected').dispatchEvent(new MouseEvent('click'));

    expect(fixture.nativeElement.textContent).toContain('Jean');
    expect(fixture.nativeElement.textContent).toContain('Pierre');
    expect(fixture.nativeElement.textContent).toContain('Paul');
  });

  it('should emit ouputs', () => {
    component.items = ['Jean', 'Pierre', 'Paul'];
    component.selected = 'Toto';
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.selected').dispatchEvent(new MouseEvent('click'));

    const spy = jasmine.createSpy();
    component.selectedChange.subscribe(spy)

    fixture.nativeElement.querySelector('.item:last-child').dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledOnceWith('Paul');
  });
});
