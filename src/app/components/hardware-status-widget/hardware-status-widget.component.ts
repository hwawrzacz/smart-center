import { Component, Input } from '@angular/core'
import { HardwareMonitorService } from 'src/app/services/hardware-monitor.service'

@Component({
  selector: 'app-hardware-status-widget',
  templateUrl: './hardware-status-widget.component.html',
  styleUrls: ['./hardware-status-widget.component.scss']
})
export class HardwareStatusWidgetComponent {
  private _layout: 'row' | 'column'

  @Input()
  set layout(value: 'row' | 'column') {
    this._layout = value
  }

  get layout(): 'row' | 'column' {
    return this._layout
  }

  get temperature(): number {
    return this._hardwareMonitor.data.cpuTemp
  }

  get cpuLoad(): number {
    return this._hardwareMonitor.data.cpuLoad
  }

  get ramTotal(): number {
    return this._hardwareMonitor.data.ramTotal
  }

  get ramUsed(): number {
    return this._hardwareMonitor.data.ramUsed
  }

  constructor(private _hardwareMonitor: HardwareMonitorService) {
    this._layout = 'row'
  }
}
