import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RevealWebinarService } from './reveal-webinar.service';

describe('RevealWebinarService', () => {
  let service: RevealWebinarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RevealWebinarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
