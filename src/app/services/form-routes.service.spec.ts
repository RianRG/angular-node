import { TestBed } from '@angular/core/testing';

import { FormRoutesService } from './form-routes.service';

describe('FormRoutesService', () => {
  let service: FormRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
