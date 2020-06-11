import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBatComponent } from './add-bat.component';

describe('AddBatComponent', () => {
  let component: AddBatComponent;
  let fixture: ComponentFixture<AddBatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
