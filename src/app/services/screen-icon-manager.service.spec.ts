import { TestBed } from '@angular/core/testing';

import { ScreenIconManagerService } from './screen-icon-manager.service';

describe('ScreenIconManagerService', () => {
  let service: ScreenIconManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenIconManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
