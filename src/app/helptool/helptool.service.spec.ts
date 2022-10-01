import { TestBed } from '@angular/core/testing';

import { HelptoolService } from './helptool.service';

describe('HelptoolService', () => {
  let service: HelptoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelptoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
