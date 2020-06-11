import { TestBed } from '@angular/core/testing';

import { FactureEauService } from './facture-eau.service';

describe('FactureEauService', () => {
  let service: FactureEauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureEauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
