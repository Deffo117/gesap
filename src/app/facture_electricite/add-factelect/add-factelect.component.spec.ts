import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactelectComponent } from './add-factelect.component';

describe('AddFactelectComponent', () => {
  let component: AddFactelectComponent;
  let fixture: ComponentFixture<AddFactelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
