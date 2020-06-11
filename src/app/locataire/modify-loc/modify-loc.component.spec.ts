import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLocComponent } from './modify-loc.component';

describe('ModifyLocComponent', () => {
  let component: ModifyLocComponent;
  let fixture: ComponentFixture<ModifyLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
