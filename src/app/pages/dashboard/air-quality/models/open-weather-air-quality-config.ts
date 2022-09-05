import { SupportedServiceConfig } from '../../../../shared/supported-services/models/supported-services'

export interface OpenWeatherAirQualityConfig extends SupportedServiceConfig {
  fixedLatitude: number
  fixedLongitude: number
}
