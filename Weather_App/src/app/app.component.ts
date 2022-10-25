import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather_App';

  /* cities information are kept as hardcoded values since requirement is not mentioned on that*/
  cities = ["Amsterdam","London", "Paris", "Auckland", "Moscow", "New York", "Colombo", "Sydney"];

  cityControl!: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    //valueChanges Observable make emit once user change city dropdown, it will allow app to route accordingly
    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);
      });
  }

  ngOnDestroy() {
    
  }
}
