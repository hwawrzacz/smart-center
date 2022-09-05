import { SupportedServiceConfig } from '../../../../shared/supported-services/models/supported-services'

export interface OpenWeatherForecastConfig extends SupportedServiceConfig {
  fixedLatitude: number
  fixedLongitude: number
}
