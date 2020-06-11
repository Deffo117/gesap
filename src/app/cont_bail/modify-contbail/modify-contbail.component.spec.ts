import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContbailComponent } from './modify-contbail.component';

describe('ModifyContbailComponent', () => {
  let component: ModifyContbailComponent;
  let fixture: ComponentFixture<ModifyContbailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyContbailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyContbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
