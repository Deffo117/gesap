import { TestBed } from '@angular/core/testing';

import { FactureElectriciteService } from './facture-electricite.service';

describe('FactureElectriciteService', () => {
  let service: FactureElectriciteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureElectriciteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
