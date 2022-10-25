import { TestBed } from '@angular/core/testing';
import { WeatherDataService } from './weather-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('works', () => {
  });
});

describe('WeatherDataService', () => {
  let service: WeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService],
    });
    service = TestBed.inject(WeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
