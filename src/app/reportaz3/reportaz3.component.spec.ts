import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportaz3Component } from './reportaz3.component';

describe('Reportaz3Component', () => {
  let component: Reportaz3Component;
  let fixture: ComponentFixture<Reportaz3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportaz3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportaz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
