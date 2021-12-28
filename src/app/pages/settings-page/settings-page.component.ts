import { Component } from '@angular/core'
import { servicesTranslations } from '../../../assets/constants'
import { SupportedServicesService } from '../../modules/core/services/supported-services.service'
import { SupportedService } from '../../modules/core/models/supported-services'
import { ServiceName } from '../../modules/core/models/services-names.enum'
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
