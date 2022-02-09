export interface Weather {
  date: Date
  latitude: number
  longitude: number
  temperature: number
  feelsLike: number
  pressure: number
  humidity: number
  dewPoint: number
  uvIndex: number
  clouds: number
  visibility: number
  windSpeed: number
  windDeg: number
  windGust: number
  weather: WeatherDescription

  precipitationChance?: number
  sunrise?: Date
  sunset?: Date
}

export interface WeatherDescription {
  id: number
  main: string
  description: string
  icon: string
}
