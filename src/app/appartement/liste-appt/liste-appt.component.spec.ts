import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeApptComponent } from './liste-appt.component';

describe('ListeApptComponent', () => {
  let component: ListeApptComponent;
  let fixture: ComponentFixture<ListeApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
