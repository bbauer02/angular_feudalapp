import { TestBed } from '@angular/core/testing';

import { GfService } from './gf.service';

describe('GfService', () => {
  let service: GfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
