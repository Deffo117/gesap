import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyApptComponent } from './modify-appt.component';

describe('ModifyApptComponent', () => {
  let component: ModifyApptComponent;
  let fixture: ComponentFixture<ModifyApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
