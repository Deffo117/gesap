import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacteauComponent } from './add-facteau.component';

describe('AddFacteauComponent', () => {
  let component: AddFacteauComponent;
  let fixture: ComponentFixture<AddFacteauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacteauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacteauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
