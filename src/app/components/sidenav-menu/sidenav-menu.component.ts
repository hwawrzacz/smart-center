import { Component } from '@angular/core'
import { SupportedServicesService } from '../../modules/core/services/supported-services.service'
import { environment } from '../../../environments/environment'
import { HardwareManagementService } from '../../modules/hardware-management/services/hardware-management.service'

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  constructor(
    private supportedServices: SupportedServicesService,
    private hardwareManagementService: HardwareManagementService,
  ) { }

  public openPiHoleAdminPanel(): void {
    window.open(environment.piHoleAdminPanelUrl, '_blank')
  }

  public isHardwareMonitorSupported(): boolean {
    return this.supportedServices.isHardwareMonitorSupported
  }

  public isHardwareManagementSupported(): boolean {
    return this.supportedServices.isHardwareManagementSupported
  }

  public isPiHoleSupported(): boolean {
    return this.supportedServices.isPiHoleSupported
  }

  public reboot(): void {
    this.hardwareManagementService.reboot()
  }

  public shutdown(): void {
    this.hardwareManagementService.shutdown()
  }
}
