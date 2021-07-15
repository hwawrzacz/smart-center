import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherData$: BehaviorSubject<WeatherData>;

  constructor() {
    const initialWeatherData = {} as WeatherData;
    this.weatherData$ = new BehaviorSubject(initialWeatherData);
  }
}
