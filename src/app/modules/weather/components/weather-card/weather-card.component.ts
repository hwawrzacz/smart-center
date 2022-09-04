import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { tap } from 'rxjs/operators'
import { Weather } from '../../models/weather'
import { PermissionsService } from '../../../core/permissions/permissions.service'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  currentWeather?: Weather
  forecast?: Weather[]
  private latitude?: number
  private longitude?: number

  constructor(
    private weatherService: WeatherService,
    private permissions: PermissionsService
  ) { }

  ngOnInit(): void {
    console.log()
    this.onRefresh()
  }

  private attemptLocationAccess() {
    this.permissions.requestLocationPermission()
  }

  private loadWeatherData(): void {
    this.weatherService.getWeatherData(this.latitude, this.longitude).pipe(tap(weatherData => {
      this.currentWeather = weatherData.current
      this.forecast = weatherData.forecast
    })).subscribe()
  }

  onRefresh(): void {
    this.attemptLocationAccess()
    this.loadWeatherData()
  }
}
