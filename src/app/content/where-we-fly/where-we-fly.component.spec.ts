import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWeFlyComponent } from './where-we-fly.component';

describe('WhereWeFlyComponent', () => {
  let component: WhereWeFlyComponent;
  let fixture: ComponentFixture<WhereWeFlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereWeFlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereWeFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
