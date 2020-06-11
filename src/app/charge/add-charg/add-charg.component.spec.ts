import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargComponent } from './add-charg.component';

describe('AddChargComponent', () => {
  let component: AddChargComponent;
  let fixture: ComponentFixture<AddChargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
