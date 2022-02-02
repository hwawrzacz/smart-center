import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs'
import { ServiceName } from '../models/services-names.enum'
import { SupportedService, SupportedServiceConfig } from '../models/supported-services'
import { OpenWeatherAirQualityConfig } from '../../air-quality/models/open-weather-air-quality-config'

@Injectable({
  providedIn: 'root'
})
export class SupportedServicesService {
  private _services$ = new BehaviorSubject<SupportedService[]>([])

  constructor(private http: HttpClient) {
    this.loadSupportedServicesConfiguration()
  }

  //region Getters and Setters
  get isAnyServiceSupported(): boolean {
    return this._services$.value.length > 0
  }

  get isHardwareInformationSupported(): boolean {
    return this.isServiceSupported(ServiceName.HARDWARE_INFORMATION)
  }

  get isHardwareManagementSupported(): boolean {
    return this.isServiceSupported(ServiceName.HARDWARE_MANAGEMENT)
  }

  get isPiHoleSupported(): boolean {
    return this.isServiceSupported(ServiceName.PI_HOLE)
  }

  get isIndoorWeatherStationSupported(): boolean {
    return this.isServiceSupported(ServiceName.INDOOR_WEATHER_STATION)
  }

  get isOutdoorWeatherStationSupported(): boolean {
    return this.isServiceSupported(ServiceName.OUTDOOR_WEATHER_STATION)
  }

  get isOpenWeatherAirQualitySupported(): boolean {
    return this.isServiceSupported(ServiceName.OPEN_WEATHER_AIR_QUALITY)
  }

  get isPrintServerSupported(): boolean {
    return this.isServiceSupported(ServiceName.PRINT_SERVER)
  }

  get isMotionSensorsSupported(): boolean {
    return this.isServiceSupported(ServiceName.MOTION_SENSORS)
  }

  get isParkingCamerasSupported(): boolean {
    return this.isServiceSupported(ServiceName.PARKING_CAMERAS)
  }

  get isDecorativeLightsControlSupported(): boolean {
    return this.isServiceSupported(ServiceName.DECORATIVE_LIGHTS_CONTROL)
  }

  get isMainLightsControlSupported(): boolean {
    return this.isServiceSupported(ServiceName.MAIN_LIGHTS_CONTROL)
  }

  get services$(): Observable<SupportedService[]> {
    return this._services$.asObservable()
  }

  get services(): SupportedService[] {
    return this._services$.value
  }

  get openWeatherAirQualityConfig(): OpenWeatherAirQualityConfig | undefined {
    return this.getServiceConfig(ServiceName.OPEN_WEATHER_AIR_QUALITY) as OpenWeatherAirQualityConfig
  }

  //endregion

  public isServiceSupported(serviceName: ServiceName): boolean {
    return this.isAnyServiceSupported && !!this._services$.value.find(service => service.name === serviceName)?.enabled
  }

  private loadSupportedServicesConfiguration(): void {
    this.http.get<SupportedService[]>('/assets/supported-services.json').pipe(
      tap(config => this._services$.next(config)),
    ).subscribe()
  }

  private getServiceConfig(serviceName: ServiceName): SupportedServiceConfig {
    return this._services$.value.find(service => service.name === serviceName)?.config as SupportedServiceConfig
  }
}
