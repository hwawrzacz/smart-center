import { Component } from '@angular/core'
import { SupportedServicesService } from '../../modules/core/supported-services/supported-services.service'
import { environment } from '../../../environments/environment'
import { HardwareManagementService } from '../../modules/hardware-management/services/hardware-management.service'
import { ConfirmationDialogData } from '../../modules/shared/models/confirmation-dialog-data'
import { ConfirmationDialogService } from '../../modules/shared/services/confirmation-dialog.service'

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  constructor(
    private supportedServices: SupportedServicesService,
    private hardwareManagementService: HardwareManagementService,
    private confirmationDialogService: ConfirmationDialogService,
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
    const confirmationData = {
      title: 'Confirm reboot',
      message: 'This action will reboot the server. Are you sure you want to proceed?'
    } as ConfirmationDialogData
    const action = () => this.hardwareManagementService.reboot()

    this.confirmationDialogService.confirmAction(action, confirmationData)
  }

  public shutdown(): void {
    const confirmationData = {
      title: 'Confirm shutdown',
      message: 'This action will turn the server off. Are you sure you want to proceed?'
    } as ConfirmationDialogData
    const action = () => this.hardwareManagementService.shutdown()

    this.confirmationDialogService.confirmAction(action, confirmationData)
  }
}
