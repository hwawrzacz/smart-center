import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { tap } from 'rxjs/operators'
import { Weather } from '../../models/weather'
import { PermissionsService } from '../../../core/permissions/permissions.service'
import { LocationBased } from '../../../shared/components/location-based'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent extends LocationBased implements OnInit {
  currentWeather?: Weather
  forecast?: Weather[]

  constructor(
    private weatherService: WeatherService,
    protected permissions: PermissionsService
  ) {
    super(permissions)
  }

  ngOnInit(): void {
    this.addUserLocationListener()
    this.onRefresh()
  }

  protected onLocationUpdated() {
    this.loadWeatherData()
  }

  onRefresh(): void {
    this.attemptLocationAccess()
    this.loadWeatherData()
  }

  private loadWeatherData(): void {
    this.weatherService.getWeatherData(this.latitude, this.longitude).pipe(tap(weatherData => {
      this.currentWeather = weatherData.current
      this.forecast = weatherData.forecast
    })).subscribe()
  }
}
