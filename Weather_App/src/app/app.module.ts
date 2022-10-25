import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { WeatherDataService } from './services/weather-data.service';
import { RouterTestingModule } from "@angular/router/testing";

const routes: Routes = [
  {
    path: '',
    component: WeatherReportComponent
  },
  {
    path: ':locationName',
    component: WeatherReportComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    MatProgressBarModule,
    HttpClientModule,
    MatButtonModule,
    RouterTestingModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
