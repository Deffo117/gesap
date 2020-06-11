import { TestBed } from '@angular/core/testing';

import { ContratBailService } from './contrat-bail.service';

describe('ContratBailService', () => {
  let service: ContratBailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratBailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
