import { Component } from '@angular/core'
import { servicesTranslations } from '../../../../assets/constants'
import { SupportedServicesService } from '../../../shared/supported-services/supported-services.service'
import { SupportedService } from '../../../shared/supported-services/models/supported-services'
import { ServiceName } from '../../../shared/supported-services/models/services-names.enum'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  public readonly translations = servicesTranslations

  constructor(private supportedServices: SupportedServicesService) { }

  get allServices$(): Observable<SupportedService[]> {
    return this.supportedServices.services$
  }

  public isServiceSupported(serviceName: ServiceName): boolean {
    return this.supportedServices.isServiceSupported(serviceName)
  }
}
