import { TestBed, inject } from '@angular/core/testing';

import { ServeceService } from './servece.service';

describe('ServeceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServeceService]
    });
  });

  it('should be created', inject([ServeceService], (service: ServeceService) => {
    expect(service).toBeTruthy();
  }));
});
