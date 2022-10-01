import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHelpComponent } from './store-help.component';

describe('StoreHelpComponent', () => {
  let component: StoreHelpComponent;
  let fixture: ComponentFixture<StoreHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
