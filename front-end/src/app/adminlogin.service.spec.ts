import { TestBed } from '@angular/core/testing';

import { AdminloginService } from './services/adminlogin.service';

describe('AdminloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminloginService = TestBed.get(AdminloginService);
    expect(service).toBeTruthy();
  });
});
