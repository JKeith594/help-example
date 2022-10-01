import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidHelpComponent } from './invalid-help.component';

describe('InvalidHelpComponent', () => {
  let component: InvalidHelpComponent;
  let fixture: ComponentFixture<InvalidHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
