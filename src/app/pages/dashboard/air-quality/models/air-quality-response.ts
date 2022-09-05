import { AirQualityIndex } from './air-quality-index'

export interface ComponentsRaw {
  co: number
  no: number
  no2: number
  o3: number
  so2: number
  pm2_5: number
  pm10: number
  nh3: number
}

export interface AirQualityResponse {
  coord: number[]
  list: [
    {
      dt: number
      main: {
        aqi: AirQualityIndex
      }
      components: ComponentsRaw
    }
  ]
}
