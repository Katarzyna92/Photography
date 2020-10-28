import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportaz2Component } from './reportaz2.component';

describe('Reportaz2Component', () => {
  let component: Reportaz2Component;
  let fixture: ComponentFixture<Reportaz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportaz2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportaz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
