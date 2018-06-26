import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWizardComponent } from './book-wizard.component';

describe('BookWizardComponent', () => {
  let component: BookWizardComponent;
  let fixture: ComponentFixture<BookWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
