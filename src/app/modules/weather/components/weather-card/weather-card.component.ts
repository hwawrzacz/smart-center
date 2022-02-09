import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { tap } from 'rxjs/operators'
import { Weather } from '../../models/weather'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  currentWeather?: Weather
  forecast?: Weather[]

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.loadWeatherData()
  }

  private loadWeatherData(): void {
    this.weatherService.getWeatherData().pipe(tap(weatherData => {
      this.currentWeather = weatherData.current
      this.forecast = weatherData.forecast
    })).subscribe()
  }

  onRefresh(): void {
    this.loadWeatherData()
  }
}
