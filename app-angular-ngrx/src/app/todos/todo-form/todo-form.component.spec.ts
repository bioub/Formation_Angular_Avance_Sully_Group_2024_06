import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emit onAddTodo on submit', () => {
    const spy = jasmine.createSpy();
    component.onAddTodo.subscribe(spy);
    component.todo = 'ABC';

    (fixture.nativeElement as HTMLElement).querySelector('form').dispatchEvent(new SubmitEvent('submit'));

    expect(spy).toHaveBeenCalledOnceWith('ABC')
  })
});
