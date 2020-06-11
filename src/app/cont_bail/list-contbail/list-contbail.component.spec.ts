import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContbailComponent } from './list-contbail.component';

describe('ListContbailComponent', () => {
  let component: ListContbailComponent;
  let fixture: ComponentFixture<ListContbailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContbailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
