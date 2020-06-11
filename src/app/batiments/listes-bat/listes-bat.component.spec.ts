import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesBatComponent } from './listes-bat.component';

describe('ListesBatComponent', () => {
  let component: ListesBatComponent;
  let fixture: ComponentFixture<ListesBatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesBatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
