import { Component } from '@angular/core'
import { servicesTranslations } from '../../../../assets/constants'
import { SupportedServicesService } from '../../../shared/supported-services/supported-services.service'
import { Observable } from 'rxjs'
import { SupportedService } from '../../../shared/supported-services/models/supported-services'
import { ServiceName } from '../../../shared/supported-services/models/services-names.enum'

@Component({
  selector: 'app-supported-services',
  templateUrl: './supported-services.component.html',
  styleUrls: ['./supported-services.component.scss']
})
export class SupportedServicesComponent {
  public readonly translations = servicesTranslations

  constructor(private supportedServices: SupportedServicesService) { }

  get allServices$(): Observable<SupportedService[]> {
    return this.supportedServices.services$
  }

  public isServiceSupported(serviceName: ServiceName): boolean {
    return this.supportedServices.isServiceSupported(serviceName)
  }
}
