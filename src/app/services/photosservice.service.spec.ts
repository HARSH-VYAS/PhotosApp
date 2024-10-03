import { TestBed } from '@angular/core/testing';

import { PhotosserviceService } from './photosservice.service';

describe('PhotosserviceService', () => {
  let service: PhotosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
