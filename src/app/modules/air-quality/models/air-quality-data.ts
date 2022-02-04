import { AirQualityIndex } from './air-quality-index'

export interface AirComponents {
  co: number
  no: number
  no2: number
  o3: number
  so2: number
  pm25: number
  pm10: number
  nh3: number
}

export interface AirQualityData {
  date: number
  latitude: number
  longitude: number
  airQualityIndex: AirQualityIndex
  components: AirComponents
}

