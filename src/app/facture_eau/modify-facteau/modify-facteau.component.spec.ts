import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFacteauComponent } from './modify-facteau.component';

describe('ModifyFacteauComponent', () => {
  let component: ModifyFacteauComponent;
  let fixture: ComponentFixture<ModifyFacteauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFacteauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFacteauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
