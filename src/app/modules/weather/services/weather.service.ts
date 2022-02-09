import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { SupportedServicesService } from '../../core/services/supported-services.service'
import { ObjectHelper } from '../../core/utils/object-helper'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { WeatherResponseMapper } from '../utils/weather-response-mapper'
import { WeatherResponseRaw } from '../models/weather-response-raw'
import { WeatherResponse } from '../models/weather-response'
import { OpenWeatherForecastConfig } from '../models/open-weather-forecast-config'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly config!: OpenWeatherForecastConfig
  private readonly url!: string
  private readonly apiKey!: string
  private readonly latitude!: number
  private readonly longitude!: number

  constructor(private http: HttpClient, private supportedServices: SupportedServicesService) {
    if (!supportedServices.isOpenWeatherForecastSupported) {
      console.error('OpenWeather Forecast service is not supported. Check your supported-service.json file.')
      throw Error('OpenWeather Forecast service is not supported')
    }

    this.config = this.supportedServices.openWeatherForecastConfig!

    if (ObjectHelper.objectIsEmpty(this.config)) {
      console.error('Config is empty. Make sure you filled config of right service.')
      throw Error('Service config is empty')
    }

    this.url = this.config.url
    this.apiKey = this.config.apiKey
    this.latitude = this.config.fixedLatitude || 50.304433
    this.longitude = this.config.fixedLongitude || 18.692823
  }

  public getWeatherData(latitude?: number, longitude?: number): Observable<WeatherResponse> {
    const params = new HttpParams().appendAll({
      lat: latitude || this.latitude,
      lon: longitude || this.longitude,
      exclude: 'minutely',
      units: 'metric',
      appid: this.apiKey
    })
    return this.http.get<WeatherResponseRaw>(this.url, {params: params}).pipe(
      map(res => WeatherResponseMapper.mapWeatherResponse(res))
    )
  }
}
