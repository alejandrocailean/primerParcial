import { TestBed } from '@angular/core/testing';

import { DatosPaisesService } from './datos-paises.service';

describe('DatosPaisesService', () => {
  let service: DatosPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
