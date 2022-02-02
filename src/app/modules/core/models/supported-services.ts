export interface SupportedServiceConfig {
  apiKey: string
  url: string
}

export interface SupportedService {
  name: string
  enabled: boolean
  config: SupportedServiceConfig
}
