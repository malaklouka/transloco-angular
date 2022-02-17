import { TestBed } from '@angular/core/testing';

import { TranslocoServiceService } from './transloco-service.service';

describe('TranslocoServiceService', () => {
  let service: TranslocoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslocoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
