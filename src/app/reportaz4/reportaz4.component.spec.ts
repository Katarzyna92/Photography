import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportaz4Component } from './reportaz4.component';

describe('Reportaz4Component', () => {
  let component: Reportaz4Component;
  let fixture: ComponentFixture<Reportaz4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportaz4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportaz4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
