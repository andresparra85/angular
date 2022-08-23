import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcultoComponent } from './oculto.component';

describe('OcultoComponent', () => {
  let component: OcultoComponent;
  let fixture: ComponentFixture<OcultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcultoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
