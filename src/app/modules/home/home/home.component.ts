import { Component } from '@angular/core'
import { SupportedServicesService } from '../../core/services/supported-services.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private supportedServices: SupportedServicesService) { }

  isWeatherServiceSupported(): boolean {
    return this.supportedServices.isIndoorWeatherStationSupported
  }

  isAirQualitySupported(): boolean {
    return this.supportedServices.isOpenWeatherAirQualitySupported
  }
}
