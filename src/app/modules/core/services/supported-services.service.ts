import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServicesNames } from '../../../models/services-names.enum';

@Injectable({
  providedIn: 'root'
})
export class SupportedServicesService {
  private configuration$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    this.loadSupportedServicesConfiguration();
  }

  //region Getters and Setters
  get isHardwareManagementSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.HARDWARE_MANAGEMENT].enabled;
  }

  get isIndoorWeatherStationSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.INDOOR_WEATHER_STATION].enabled;
  }

  get isOutdoorWeatherStationSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.OUTDOOR_WEATHER_STATION].enabled;
  }

  get isPrintServerSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.PRINT_SERVER].enabled;
  }

  get isMotionSensorsSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.MOTION_SENSORS].enabled;
  }

  get isParkingCamerasSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.PARKING_CAMERAS].enabled;
  }

  get isDecorativeLightsControlSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.DECORATIVE_LIGHTS_CONTROL].enabled;
  }

  get isMainLightsControlSupported(): boolean {
    return this.configuration$.value && this.configuration$.value[ServicesNames.MAIN_LIGHTS_CONTROL].enabled;
  }

  get config$(): Observable<any> {
    return this.configuration$.asObservable();
  }
  //endregion

  private loadSupportedServicesConfiguration(): void {
    this.http.get('/assets/supported-services.json').pipe(
      tap(config => this.configuration$.next(config)),
    ).subscribe();
  }
}
