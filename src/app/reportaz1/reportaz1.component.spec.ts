import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportaz1Component } from './reportaz1.component';

describe('Reportaz1Component', () => {
  let component: Reportaz1Component;
  let fixture: ComponentFixture<Reportaz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportaz1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportaz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
