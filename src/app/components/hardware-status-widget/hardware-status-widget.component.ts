import { Component, Input } from '@angular/core'
import { HardwareMonitorService } from 'src/app/services/hardware-monitor.service'

@Component({
  selector: 'app-hardware-status-widget',
  templateUrl: './hardware-status-widget.component.html',
  styleUrls: ['./hardware-status-widget.component.scss']
})
export class HardwareStatusWidgetComponent {
  @Input() layout: 'row' | 'column'

  constructor(private hardwareMonitor: HardwareMonitorService) {
    this.layout = 'row'
  }

  get temperature(): number {
    return this.hardwareMonitor.data.cpuTemp
  }

  get cpuLoad(): number {
    return this.hardwareMonitor.data.cpuLoad
  }

  get ramTotal(): number {
    return this.hardwareMonitor.data.ramTotal
  }

  get ramUsed(): number {
    return this.hardwareMonitor.data.ramUsed
  }
}
