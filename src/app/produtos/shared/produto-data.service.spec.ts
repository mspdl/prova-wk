import { TestBed } from '@angular/core/testing';

import { ProdutoDataService } from './produto-data.service';

describe('ProdutoDataService', () => {
  let service: ProdutoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
