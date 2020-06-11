import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyChargComponent } from './modify-charg.component';

describe('ModifyChargComponent', () => {
  let component: ModifyChargComponent;
  let fixture: ComponentFixture<ModifyChargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyChargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyChargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
