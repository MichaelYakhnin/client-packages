/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FetchClientDataService } from './fetch-client-data.service';

describe('Service: FetchClientData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchClientDataService]
    });
  });

  it('should ...', inject([FetchClientDataService], (service: FetchClientDataService) => {
    expect(service).toBeTruthy();
  }));
});
