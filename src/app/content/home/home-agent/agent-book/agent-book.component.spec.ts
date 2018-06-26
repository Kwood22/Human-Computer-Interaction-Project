import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentBookComponent } from './agent-book.component';

describe('AgentBookComponent', () => {
  let component: AgentBookComponent;
  let fixture: ComponentFixture<AgentBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
