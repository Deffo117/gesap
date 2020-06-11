import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChargComponent } from './list-charg.component';

describe('ListChargComponent', () => {
  let component: ListChargComponent;
  let fixture: ComponentFixture<ListChargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
