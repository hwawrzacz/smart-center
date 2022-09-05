import { Injectable } from '@angular/core'
import { SupportedServicesService } from '../../../../shared/supported-services/supported-services.service'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { OpenWeatherAirQualityConfig } from '../models/open-weather-air-quality-config'
import { ObjectHelper } from '../../../../modules/core/utils/object-helper'
import { AirQualityResponse } from '../models/air-quality-response'
import { AirQualityData } from '../models/air-quality-data'
import { map } from 'rxjs/operators'
import { AirQualityResponseMapper } from '../utils/air-quality-response-mapper'

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private readonly config!: OpenWeatherAirQualityConfig
  private readonly url!: string
  private readonly apiKey!: string
  private readonly latitude!: number
  private readonly longitude!: number

  constructor(private http: HttpClient, private supportedServices: SupportedServicesService) {
    if (!supportedServices.isOpenWeatherAirQualitySupported) {
      console.error('OpenWeather Air Quality service is not supported. Check your supported-service.json file.')
      throw Error('OpenWeather Air Quality service is not supported')
    }

    // TODO: Inspect 'forbidden non-null assertion'
    this.config = this.supportedServices.openWeatherAirQualityConfig!

    if (ObjectHelper.isEmpty(this.config)) {
      console.error('Config is empty. Make sure you filled config of right service.')
      throw Error('Service config is empty')
    }

    this.url = this.config.url
    this.apiKey = this.config.apiKey
    this.latitude = this.config.fixedLatitude || 50.304433
    this.longitude = this.config.fixedLongitude || 18.692823
  }

  public getAirQuality(latitude?: number, longitude?: number): Observable<AirQualityData> {
    const params = new HttpParams().appendAll({
      lat: latitude || this.latitude,
      lon: longitude || this.longitude,
      appid: this.apiKey
    })
    return this.http.get<AirQualityResponse>(this.url, {params: params}).pipe(
      map(res => AirQualityResponseMapper.mapAirQualityResponse(res)[0])
    )
  }
}
