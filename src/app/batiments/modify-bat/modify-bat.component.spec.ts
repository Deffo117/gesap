import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBatComponent } from './modify-bat.component';

describe('ModifyBatComponent', () => {
  let component: ModifyBatComponent;
  let fixture: ComponentFixture<ModifyBatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyBatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
