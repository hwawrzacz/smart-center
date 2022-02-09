import { WeatherRaw } from './weather-raw'

export interface WeatherResponseRaw {
  lat: number
  lon: number
  timezone: 'Europe/Warsaw'
  timezone_offset: Number
  current: WeatherRaw
  hourly: WeatherRaw[]
}
