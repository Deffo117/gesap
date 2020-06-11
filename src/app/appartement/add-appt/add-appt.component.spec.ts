import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApptComponent } from './add-appt.component';

describe('AddApptComponent', () => {
  let component: AddApptComponent;
  let fixture: ComponentFixture<AddApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
