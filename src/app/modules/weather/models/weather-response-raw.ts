import { WeatherRaw } from './weather-raw'

export interface WeatherResponseRaw {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: WeatherRaw
  hourly: WeatherRaw[]
}
