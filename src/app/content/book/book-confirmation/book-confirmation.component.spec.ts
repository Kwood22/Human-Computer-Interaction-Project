import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConfirmationComponent } from './book-confirmation.component';

describe('BookConfirmationComponent', () => {
  let component: BookConfirmationComponent;
  let fixture: ComponentFixture<BookConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
