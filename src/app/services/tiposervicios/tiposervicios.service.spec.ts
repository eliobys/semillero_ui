import { TestBed } from '@angular/core/testing';

import { TiposervicioService } from './tiposervicios.service';

describe('TiposervicioService', () => {
  let service: TiposervicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposervicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});