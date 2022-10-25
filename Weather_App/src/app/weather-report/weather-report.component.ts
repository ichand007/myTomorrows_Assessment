import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, concatMap, tap } from 'rxjs/operators';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  data$: Observable<any> | undefined;

  today: Date = new Date();

  loading = false;

  constructor(
    private weatherService: WeatherDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  /* once the active route get changed this.route.params Observable emit the value and
    "locationName" enable us to get the city name from active route url which we selected from the select city dropdown */
    this.data$ = this.route.params.pipe(
      map(params => params['locationName']),
      filter(name => !!name),
      tap(() => {
        this.loading = true;
      }),
      //pass the city name to openweathermap api to fetch the weather data
      concatMap(name => this.weatherService.getWeatherForCity(name)),
      tap(() => {
        this.loading = false;
      })
    );
  }

}
