import { Component, Input } from '@angular/core'
import { HardwareMonitorService } from '../../../../services/hardware-monitor.service'
import { HardwareStatus } from '../../../../models/hardware-status'
import { tap } from 'rxjs/operators'
import { SupportedServicesService } from '../../../core/services/supported-services.service'
import { timer } from 'rxjs'

@Component({
  selector: 'app-hardware-status-widget',
  templateUrl: './hardware-status-widget.component.html',
  styleUrls: ['./hardware-status-widget.component.scss']
})
export class HardwareStatusWidgetComponent {
  private readonly defaultRefreshInterval = 60 * 1000 // 1 minute
  @Input() layout: 'row' | 'column'
  private hardwareStatus: HardwareStatus = {} as HardwareStatus

  constructor(private supportedServices: SupportedServicesService, private hardwareMonitor: HardwareMonitorService) {
    this.layout = 'row'
    const refreshInterval = supportedServices.hardwareMonitorConfig?.refreshInterval
    timer(0, refreshInterval || this.defaultRefreshInterval).pipe(
      tap(() => this.loadHardwareStatus())
    ).subscribe()
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

  loadHardwareStatus(): void {
    this.hardwareMonitor.getHardwareStatus().pipe(
      tap(status => this.hardwareStatus = status)
    ).subscribe()
  }
}
