import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs'
import { ServicesNames } from '../models/services-names.enum'
import { SupportedService } from '../models/supported-services'

@Injectable({
  providedIn: 'root'
})
export class SupportedServicesService {
  private configuration$ = new BehaviorSubject<SupportedService[]>([])

  constructor(private http: HttpClient) {
    this.loadSupportedServicesConfiguration()
  }

  //region Getters and Setters
  get isAnyServiceSupported(): boolean {
    return this.configuration$.value.length > 0
  }

  get isHardwareInformationSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.HARDWARE_INFORMATION)
  }

  get isHardwareManagementSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.HARDWARE_MANAGEMENT)
  }

  get isPiHoleSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.PI_HOLE)
  }

  get isIndoorWeatherStationSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.INDOOR_WEATHER_STATION)
  }

  get isOutdoorWeatherStationSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.OUTDOOR_WEATHER_STATION)
  }

  get isOpenWeatherAirQualitySupported(): boolean {
    return this.isServiceEnabled(ServicesNames.OPEN_WEATHER_AIR_QUALITY)
  }

  get isPrintServerSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.PRINT_SERVER)
  }

  get isMotionSensorsSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.MOTION_SENSORS)
  }

  get isParkingCamerasSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.PARKING_CAMERAS)
  }

  get isDecorativeLightsControlSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.DECORATIVE_LIGHTS_CONTROL)
  }

  get isMainLightsControlSupported(): boolean {
    return this.isServiceEnabled(ServicesNames.MAIN_LIGHTS_CONTROL)
  }

  get config$(): Observable<any> {
    return this.configuration$.asObservable()
  }

  //endregion

  private isServiceEnabled(serviceName: string): boolean {
    return this.isAnyServiceSupported && !!this.configuration$.value.find(service => service.name === serviceName)?.enabled
  }

  private loadSupportedServicesConfiguration(): void {
    this.http.get<SupportedService[]>('/assets/supported-services.json').pipe(
      tap(config => this.configuration$.next(config)),
    ).subscribe()
  }
}
