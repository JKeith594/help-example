import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplessComponent } from './helpless.component';

describe('HelplessComponent', () => {
  let component: HelplessComponent;
  let fixture: ComponentFixture<HelplessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelplessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelplessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
