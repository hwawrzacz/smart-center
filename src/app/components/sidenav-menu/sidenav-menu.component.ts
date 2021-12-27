import { Component } from '@angular/core'
import { SupportedServicesService } from '../../modules/core/services/supported-services.service'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  constructor(private supportedServices: SupportedServicesService) { }

  public openPiHoleAdminPanel(): void {
    window.open(environment.piHoleAdminPanelUrl, '_blank')
  }

  public isHardwareInformationSupported(): boolean {
    return this.supportedServices.isHardwareInformationSupported
  }

  public isHardwareManagementSupported(): boolean {
    return this.supportedServices.isHardwareManagementSupported
  }

  public isPiHoleSupported(): boolean {
    return this.supportedServices.isPiHoleSupported
  }
}
