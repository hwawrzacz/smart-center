export interface SupportedServiceConfig {
  apiKey: string
  token: string
  ipAddress: string
}

export interface SupportedService {
  name: string
  enabled: boolean
  config: SupportedServiceConfig
}
