import { Component, OnInit } from '@angular/core';
import { HardwareMonitorService } from 'src/app/services/hardware-monitor.service';

@Component({
  selector: 'app-hardware-status-widget',
  templateUrl: './hardware-status-widget.component.html',
  styleUrls: ['./hardware-status-widget.component.scss']
})
export class HardwareStatusWidgetComponent implements OnInit {
  get temperature(): number {
    return this._hardwareMonitor.hardwareStatus.cpuTemp;
  }

  get cpuLoad(): number {
    return this._hardwareMonitor.hardwareStatus.cpuLoad;
  }

  get ramTotal(): number {
    return this._hardwareMonitor.hardwareStatus.ramTotal;
  }

  get ramUsed(): number {
    return this._hardwareMonitor.hardwareStatus.ramUsed;
  }

  constructor(private _hardwareMonitor: HardwareMonitorService) { }

  ngOnInit(): void { }
}
