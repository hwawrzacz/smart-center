import { SupportedServiceConfig } from '../../core/models/supported-services'

export interface OpenWeatherAirQualityConfig extends SupportedServiceConfig {
  fixedLatitude: number
  fixedLongitude: number
}
