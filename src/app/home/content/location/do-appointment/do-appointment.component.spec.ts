import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoAppointmentComponent } from './do-appointment.component';

describe('DoAppointmentComponent', () => {
  let component: DoAppointmentComponent;
  let fixture: ComponentFixture<DoAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
