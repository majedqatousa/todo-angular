import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTodoComponent } from './specific-todo.component';

describe('SpecificTodoComponent', () => {
  let component: SpecificTodoComponent;
  let fixture: ComponentFixture<SpecificTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
