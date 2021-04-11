import { Component, OnInit } from '@angular/core';
import { HardwareMonitorService } from 'src/app/services/hardware-monitor.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-hardware-status-widget',
  templateUrl: './hardware-status-widget.component.html',
  styleUrls: ['./hardware-status-widget.component.scss']
})
export class HardwareStatusWidgetComponent implements OnInit {
  get temperature(): number {
    return this._hardwareMonitor.temperature$.value;
  }

  constructor(private _hardwareMonitor: HardwareMonitorService) { }

  ngOnInit(): void { }
}
