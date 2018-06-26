import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPassengerExtrasComponent } from './book-passenger-extras.component';

describe('BookPassengerExtrasComponent', () => {
  let component: BookPassengerExtrasComponent;
  let fixture: ComponentFixture<BookPassengerExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPassengerExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPassengerExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
