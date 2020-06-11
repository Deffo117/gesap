import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContbailComponent } from './add-contbail.component';

describe('AddContbailComponent', () => {
  let component: AddContbailComponent;
  let fixture: ComponentFixture<AddContbailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContbailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
