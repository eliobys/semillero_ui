import { TestBed } from '@angular/core/testing';

import {Serviciosservice } from './servicios.service';

describe('ServiciosService', () => {
  let service: Serviciosservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviciosservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});