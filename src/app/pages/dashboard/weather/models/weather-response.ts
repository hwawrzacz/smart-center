import { Weather } from './weather'

export interface WeatherResponse {
  current: Weather
  forecast: Weather[]
}
