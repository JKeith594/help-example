import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelptoolComponent } from './helptool.component';

describe('HelptoolComponent', () => {
  let component: HelptoolComponent;
  let fixture: ComponentFixture<HelptoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelptoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelptoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
