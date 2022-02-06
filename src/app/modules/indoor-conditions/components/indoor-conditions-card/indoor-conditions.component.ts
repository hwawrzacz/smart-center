import { Component } from '@angular/core'
import { IndoorConditions } from '../../models/indoor-conditions'
import { IndoorConditionsService } from '../../services/indoor-conditions.service'
import { tap } from 'rxjs/operators'
import { timer } from 'rxjs'
import { SupportedServicesService } from '../../../core/services/supported-services.service'

@Component({
  selector: 'app-weather-card',
  templateUrl: './indoor-conditions.component.html',
  styleUrls: ['./indoor-conditions.component.scss']
})
export class IndoorConditionsComponent {
  private readonly defaultRefreshInterval = 10 * 60 * 1000 // 10 minutes

  constructor(private supportedServices: SupportedServicesService, private weatherService: IndoorConditionsService) {
    const refreshInterval = supportedServices.indoorWeatherStationConfig?.refreshInterval
    timer(0, refreshInterval || this.defaultRefreshInterval).pipe(
      tap(() => this.loadIndoorConditions())
    ).subscribe()
  }

  indoorConditions?: IndoorConditions

  private loadIndoorConditions(): void {
    this.weatherService.getIndoorConditions().pipe(
      tap(conditions => this.indoorConditions = conditions)
    ).subscribe()
  }

  onRefresh(): void {
    this.loadIndoorConditions()
  }
}
