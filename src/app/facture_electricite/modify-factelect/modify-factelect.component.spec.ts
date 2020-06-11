import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFactelectComponent } from './modify-factelect.component';

describe('ModifyFactelectComponent', () => {
  let component: ModifyFactelectComponent;
  let fixture: ComponentFixture<ModifyFactelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFactelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFactelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
