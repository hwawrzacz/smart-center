import { Component } from '@angular/core'
import { SupportedServicesService } from '../../core/services/supported-services.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private supportedServices: SupportedServicesService) { }

  isWeatherServiceSupported(): boolean {
    return this.supportedServices.isIndoorWeatherStationSupported
  }

  isAirQualitySupported(): boolean {
    return this.supportedServices.isOpenWeatherAirQualitySupported
  }
}
