import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPaymentComponent } from './book-payment.component';

describe('BookPaymentComponent', () => {
  let component: BookPaymentComponent;
  let fixture: ComponentFixture<BookPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
