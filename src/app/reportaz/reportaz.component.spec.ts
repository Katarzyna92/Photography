import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportazComponent } from './reportaz.component';

describe('ReportazComponent', () => {
  let component: ReportazComponent;
  let fixture: ComponentFixture<ReportazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
