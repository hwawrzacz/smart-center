import { Component, OnDestroy, OnInit } from '@angular/core'
import { IndoorConditions } from '../../models/indoor-conditions'
import { IndoorConditionsService } from '../../services/indoor-conditions.service'
import { takeUntil, tap } from 'rxjs/operators'
import { Subject, timer } from 'rxjs'
import { SupportedServicesService } from '../../../core/services/supported-services.service'

@Component({
  selector: 'app-indoor-conditions-card',
  templateUrl: './indoor-conditions.component.html',
  styleUrls: ['./indoor-conditions.component.scss']
})
export class IndoorConditionsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>()
  private readonly defaultRefreshInterval = 10 * 60 * 1000 // 10 minutes

  constructor(private supportedServices: SupportedServicesService, private weatherService: IndoorConditionsService) {}

  indoorConditions?: IndoorConditions

  public ngOnInit() {
    const refreshInterval = this.supportedServices.indoorWeatherStationConfig?.refreshInterval
    timer(0, refreshInterval || this.defaultRefreshInterval).pipe(
      takeUntil(this.destroyed$),
      tap(() => this.loadIndoorConditions())
    ).subscribe()
  }

  private loadIndoorConditions(): void {
    this.weatherService.getIndoorConditions().pipe(
      tap(conditions => this.indoorConditions = conditions)
    ).subscribe()
  }

  onRefresh(): void {
    this.loadIndoorConditions()
  }

  public ngOnDestroy() {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
