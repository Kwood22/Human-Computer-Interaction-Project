import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPassengerDetailsComponent } from './book-passenger-details.component';

describe('BookPassengerDetailsComponent', () => {
  let component: BookPassengerDetailsComponent;
  let fixture: ComponentFixture<BookPassengerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPassengerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPassengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
