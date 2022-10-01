import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesHelpComponent } from './challenges-help.component';

describe('ChallengesHelpComponent', () => {
  let component: ChallengesHelpComponent;
  let fixture: ComponentFixture<ChallengesHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengesHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
