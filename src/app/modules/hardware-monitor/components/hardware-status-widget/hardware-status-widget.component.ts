import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { HardwareMonitorService } from '../../services/hardware-monitor.service'
import { HardwareStatus } from '../../../../models/hardware-status'
import { takeUntil, tap } from 'rxjs/operators'
import { SupportedServicesService } from '../../../core/services/supported-services.service'
import { Subject, timer } from 'rxjs'

@Component({
  selector: 'app-hardware-status-widget',
  templateUrl: './hardware-status-widget.component.html',
  styleUrls: ['./hardware-status-widget.component.scss']
})
export class HardwareStatusWidgetComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>()
  private readonly defaultRefreshInterval = 60 * 1000 // 1 minute
  @Input() layout: 'row' | 'column'
  private hardwareStatus: HardwareStatus = {} as HardwareStatus

  constructor(private supportedServices: SupportedServicesService, private hardwareMonitor: HardwareMonitorService) {
    this.layout = 'row'
  }

  //region Getters
  get temperature(): number {
    return this.hardwareStatus.cpuTemp
  }

  get cpuLoad(): number {
    return this.hardwareStatus.cpuLoad
  }

  get ramTotal(): number {
    return this.hardwareStatus.ramTotal
  }

  get ramUsed(): number {
    return this.hardwareStatus.ramUsed
  }

  //endregion

  public ngOnInit() {
    const refreshInterval = this.supportedServices.hardwareMonitorConfig?.refreshInterval
    timer(0, refreshInterval || this.defaultRefreshInterval).pipe(
      tap(() => this.loadHardwareStatus())
    ).subscribe()
  }

  loadHardwareStatus(): void {
    this.hardwareMonitor.getHardwareStatus().pipe(
      takeUntil(this.destroyed$),
      tap(status => this.hardwareStatus = status)
    ).subscribe()
  }

  public ngOnDestroy() {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
