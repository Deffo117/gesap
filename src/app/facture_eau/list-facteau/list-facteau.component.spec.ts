import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacteauComponent } from './list-facteau.component';

describe('ListFacteauComponent', () => {
  let component: ListFacteauComponent;
  let fixture: ComponentFixture<ListFacteauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacteauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacteauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
