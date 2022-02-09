import { SupportedServiceConfig } from '../../core/models/supported-services'

export interface OpenWeatherForecastConfig extends SupportedServiceConfig {
  fixedLatitude: number
  fixedLongitude: number
}
