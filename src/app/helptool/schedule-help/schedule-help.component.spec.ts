import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHelpComponent } from './schedule-help.component';

describe('ScheduleHelpComponent', () => {
  let component: ScheduleHelpComponent;
  let fixture: ComponentFixture<ScheduleHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
