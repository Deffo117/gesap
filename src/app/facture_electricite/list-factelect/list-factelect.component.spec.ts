import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactelectComponent } from './list-factelect.component';

describe('ListFactelectComponent', () => {
  let component: ListFactelectComponent;
  let fixture: ComponentFixture<ListFactelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFactelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
